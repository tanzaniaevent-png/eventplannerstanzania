import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, eventType, message, _trap } = body;

    // Honeypot — bots fill this, humans don't
    if (_trap) {
      return NextResponse.json({ success: true });
    }

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const toEmail = process.env.CONTACT_EMAIL || "info@eventplannerstanzania.co.tz";

    await resend.emails.send({
      from: "EPT Website <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject: `New enquiry from ${name}${eventType ? ` — ${eventType}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #283593; padding: 24px; border-radius: 4px 4px 0 0;">
            <h1 style="color: #74be43; margin: 0; font-size: 18px;">New Contact Form Submission</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 14px;">
              Event Planners Tanzania Website
            </p>
          </div>
          <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-radius: 0 0 4px 4px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px; width: 120px; vertical-align: top;">Name</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 600; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Email</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px;">${email}</td>
              </tr>
              ${phone ? `<tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Phone</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px;">${phone}</td>
              </tr>` : ""}
              ${eventType ? `<tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Event Type</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px;">${eventType}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Message</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
