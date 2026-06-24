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

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo/logo.png"
                alt="Event Planners Tanzania"
                width={44}
                height={44}
                style={{ display: "block", filter: "drop-shadow(0 0 6px rgba(0,0,0,0.55))" }}
              />
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
              <a
                href="https://youtube.com/@eventplannerstanzania9924"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-ept-green hover:text-ept-green transition-colors text-white/60"
              >
                <YouTubeIcon size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/event-planners-tanzania-40825a215/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-ept-green hover:text-ept-green transition-colors text-white/60"
              >
                <LinkedInIcon size={16} />
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
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} Event Planners Tanzania. All rights reserved.
          </p>
          <p className="text-white/50 text-xs">
            Developed by{" "}
            <a
              href="https://matowodev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ept-green transition-colors"
            >
              Matowo Dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
