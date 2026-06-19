import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Corporate Event Services",
  "Sound Systems",
  "Stage & Truss Structure",
  "Lighting Systems",
  "LED Screens & Visual Systems",
  "Event Management",
];

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

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.56V6.82a4.85 4.85 0 01-1.07-.13z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 bg-ept-green rounded-sm flex items-center justify-center shrink-0">
                <span className="text-white font-heading font-bold text-sm">EPT</span>
              </div>
              <div className="leading-tight">
                <div className="text-ept-green font-heading font-bold text-base">Event Planners</div>
                <div className="text-white font-heading font-bold text-base">Tanzania</div>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              &quot;Turning Moments into Memories&quot; — Tanzania&apos;s premier event production company, delivering high-quality corporate and social events across East Africa.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/eventplannerstanzania"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-ept-green hover:text-ept-green transition-colors text-white/60"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://facebook.com/eventplannerstanzania"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-ept-green hover:text-ept-green transition-colors text-white/60"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href="https://tiktok.com/@eventplannerstanzania"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-ept-green hover:text-ept-green transition-colors text-white/60"
              >
                <TikTokIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-ept-green text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Our Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-white/50 hover:text-ept-green text-sm transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-ept-green text-sm hover:underline">
                  + 7 more services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-white/50">
                <MapPin size={15} className="text-ept-green mt-0.5 shrink-0" />
                <span>P.O. Box 2530, Twiga House, 7th Floor, Dar es Salaam, Tanzania</span>
              </li>
              <li>
                <a
                  href="tel:+255655600000"
                  className="flex gap-3 text-sm text-white/50 hover:text-ept-green transition-colors"
                >
                  <Phone size={15} className="text-ept-green shrink-0" />
                  +255 655 600 000
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@eventplannerstanzania.co.tz"
                  className="flex gap-3 text-sm text-white/50 hover:text-ept-green transition-colors"
                >
                  <Mail size={15} className="text-ept-green shrink-0" />
                  info@eventplannerstanzania.co.tz
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
                Get a Quote
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-max py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Event Planners Tanzania. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            www.eventplannerstanzania.co.tz
          </p>
        </div>
      </div>
    </footer>
  );
}
