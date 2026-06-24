import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Event Planners Tanzania. Request a quote for your corporate event, conference, or social occasion in Dar es Salaam.",
};

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.56V6.82a4.85 4.85 0 01-1.07-.13z" />
    </svg>
  );
}

function YouTubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-ept-navy pt-32 pb-20 px-6">
        <div className="container-max">
          <p className="text-ept-green text-xs font-semibold uppercase tracking-[0.2em] mb-4">Get In Touch</p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-2xl">
            Let&apos;s Plan Your Next Event
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed">
            Tell us about your event and we&apos;ll put together a custom proposal for you — typically within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">

            {/* Form — takes more space */}
            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-8">

              {/* Contact details */}
              <div>
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-5">Contact Details</h3>
                <ul className="space-y-5">
                  <li>
                    <a
                      href="tel:+255655600000"
                      className="flex gap-4 group"
                    >
                      <div className="w-10 h-10 bg-ept-green/10 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-ept-green transition-colors">
                        <Phone size={16} className="text-ept-green group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">Phone</p>
                        <p className="text-gray-900 font-medium text-sm group-hover:text-ept-green transition-colors">+255 655 600 000</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@eventplannerstanzania.co.tz"
                      className="flex gap-4 group"
                    >
                      <div className="w-10 h-10 bg-ept-green/10 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-ept-green transition-colors">
                        <Mail size={16} className="text-ept-green group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">Email</p>
                        <p className="text-gray-900 font-medium text-sm group-hover:text-ept-green transition-colors break-all">info@eventplannerstanzania.co.tz</p>
                      </div>
                    </a>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 bg-ept-green/10 rounded-sm flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-ept-green" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">Address</p>
                      <p className="text-gray-900 font-medium text-sm leading-relaxed">
                        P.O. Box 2530, Twiga House,<br />
                        7th Floor, Dar es Salaam,<br />
                        Tanzania
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-heading text-sm font-bold text-gray-900 mb-4 uppercase tracking-widest">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { href: "https://instagram.com/eventplannerstanzania", icon: <InstagramIcon size={17} />, label: "Instagram" },
                    { href: "https://facebook.com/eventplannerstanzania", icon: <FacebookIcon size={17} />, label: "Facebook" },
                    { href: "https://tiktok.com/@eventplannerstanzania", icon: <TikTokIcon size={17} />, label: "TikTok" },
                    { href: "https://youtube.com/@eventplannerstanzania9924", icon: <YouTubeIcon size={17} />, label: "YouTube" },
                    { href: "https://linkedin.com/company/eventplannerstanzania", icon: <LinkedInIcon size={17} />, label: "LinkedIn" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 rounded-sm border border-gray-200 flex items-center justify-center text-gray-500 hover:border-ept-green hover:text-ept-green transition-colors"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Google Map */}
              <div>
                <h3 className="font-heading text-sm font-bold text-gray-900 mb-4 uppercase tracking-widest">Our Location</h3>
                <div className="rounded-sm overflow-hidden border border-gray-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.018898965427!2d39.28476927504087!3d-6.815432893184158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4b0d84b96249%3A0x5d5b3b4c01b9a6f8!2sTwiga%20House%2C%20Dar%20es%20Salaam!5e0!3m2!1sen!2stz!4v1700000000000!5m2!1sen!2stz"
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Event Planners Tanzania — Twiga House, Dar es Salaam"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
