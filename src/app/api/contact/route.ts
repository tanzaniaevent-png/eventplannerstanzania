import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, eventType, location, budget, message, _trap } = body;

    if (_trap) return NextResponse.json({ success: true });

    if (!name?.trim() || !email?.trim() || !phone?.trim() || !eventType || !message?.trim()) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const toEmail = process.env.CONTACT_EMAIL || "tanzaniaevent@gmail.com";
    const refId = `EPT-${Date.now().toString(36).toUpperCase().slice(-6)}`;

    await resend.emails.send({
      from: "EPT Website <info@eventplannerstanzania.co.tz>",
      to: toEmail,
      replyTo: email,
      subject: `[${refId}] New enquiry from ${name}${eventType ? ` — ${eventType}` : ""}`,
      html: buildEmailHTML({ refId, name, email, phone, eventType, location, budget, message }),
    });

    // WhatsApp notification via CallMeBot — activate at callmebot.com, then add env vars
    if (process.env.CALLMEBOT_API_KEY && process.env.WHATSAPP_PHONE) {
      try {
        const text = encodeURIComponent(
          `New EPT Enquiry [${refId}]\nFrom: ${name}\nPhone: ${phone}\nEvent: ${eventType}${location ? `\nLocation: ${location}` : ""}${budget ? `\nBudget: ${budget}` : ""}\n\n"${message.slice(0, 120)}${message.length > 120 ? "..." : ""}"`
        );
        await fetch(
          `https://api.callmebot.com/whatsapp.php?phone=${process.env.WHATSAPP_PHONE}&text=${text}&apikey=${process.env.CALLMEBOT_API_KEY}`
        );
      } catch {
        // WhatsApp failure must not block the submission
      }
    }

    return NextResponse.json({ success: true, refId });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or call us directly." },
      { status: 500 }
    );
  }
}

function buildEmailHTML({
  refId, name, email, phone, eventType, location, budget, message,
}: {
  refId: string;
  name: string;
  email: string;
  phone: string;
  eventType: string;
  location?: string;
  budget?: string;
  message: string;
}) {
  const row = (label: string, value: string, link?: string) => `
    <tr>
      <td style="padding:9px 0;border-bottom:1px solid #f3f4f6;width:32%;vertical-align:top;color:#6b7280;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;">${label}</td>
      <td style="padding:9px 0;border-bottom:1px solid #f3f4f6;vertical-align:top;color:#111827;font-size:14px;font-weight:600;">${link ? `<a href="${link}" style="color:#283593;text-decoration:none;">${value}</a>` : value}</td>
    </tr>`;

  const eventRows = [
    eventType ? row("Event Type", eventType) : "",
    location ? row("Location", location) : "",
    budget ? row("Budget", budget) : "",
  ].filter(Boolean).join("");

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f3f4f6;padding:32px 16px;">
  <tr><td align="center">
  <table role="presentation" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

    <!-- HEADER -->
    <tr><td style="background:linear-gradient(135deg,#1a237e 0%,#283593 100%);border-radius:8px 8px 0 0;padding:30px 40px;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td>
            <p style="color:#74be43;font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;margin:0 0 6px;">Event Planners Tanzania</p>
            <h1 style="color:#ffffff;font-size:22px;font-weight:700;margin:0;letter-spacing:-0.3px;">New Client Enquiry</h1>
          </td>
          <td align="right" valign="top">
            <table cellpadding="0" cellspacing="0"><tr><td style="background:rgba(255,255,255,0.12);border-radius:6px;padding:10px 16px;text-align:right;">
              <p style="color:rgba(255,255,255,0.5);font-size:9px;letter-spacing:2px;text-transform:uppercase;margin:0 0 4px;">Reference</p>
              <p style="color:#74be43;font-size:14px;font-weight:700;letter-spacing:1.5px;margin:0;">${refId}</p>
            </td></tr></table>
          </td>
        </tr>
      </table>
      <div style="margin-top:20px;height:2px;background:linear-gradient(90deg,#74be43 0%,rgba(116,190,67,0.15) 100%);border-radius:1px;"></div>
    </td></tr>

    <!-- BODY -->
    <tr><td style="background:#ffffff;padding:36px 40px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">

      <!-- Contact Details -->
      <p style="font-size:10px;font-weight:700;color:#74be43;text-transform:uppercase;letter-spacing:2.5px;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #f3f4f6;">Contact Details</p>
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
        ${row("Name", name)}
        ${row("Email", email, `mailto:${email}`)}
        ${row("Phone", phone, `tel:${phone}`)}
      </table>

      <!-- Event Details -->
      ${eventRows ? `
      <div style="background:#f9fafb;border-radius:8px;padding:20px 24px;margin-bottom:28px;">
        <p style="font-size:10px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:2.5px;margin:0 0 14px;">Event Details</p>
        <table width="100%" cellpadding="0" cellspacing="0">${eventRows}</table>
      </div>` : ""}

      <!-- Message -->
      <div style="border-left:3px solid #74be43;padding:4px 0 4px 18px;margin-bottom:28px;">
        <p style="font-size:10px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:2.5px;margin:0 0 10px;">Message</p>
        <p style="color:#374151;font-size:14px;line-height:1.8;margin:0;white-space:pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
      </div>

      <!-- Reply prompt -->
      <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:14px 20px;">
        <p style="color:#166534;font-size:13px;margin:0;">
          <strong>Hit Reply</strong> to respond directly to <strong>${email}</strong>
        </p>
      </div>

    </td></tr>

    <!-- FOOTER -->
    <tr><td style="padding:22px 40px 8px;text-align:center;">
      <p style="color:#9ca3af;font-size:11px;margin:0 0 4px;">Event Planners Tanzania &nbsp;|&nbsp; Twiga House 7th Floor, Dar es Salaam</p>
      <p style="color:#9ca3af;font-size:11px;margin:0;">+255 655 600 000 &nbsp;|&nbsp; info@eventplannerstanzania.co.tz</p>
    </td></tr>

  </table>
  </td></tr>
</table>
</body>
</html>`;
}
