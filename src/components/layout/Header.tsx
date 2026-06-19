"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ept-navy shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-max flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* TODO: swap to <Image src="/logo/logo.png" alt="..." width={44} height={44} /> once logo file is in public/logo/ */}
          <div className="w-10 h-10 bg-ept-green rounded-sm flex items-center justify-center shrink-0">
            <span className="text-white font-heading font-bold text-sm">EPT</span>
          </div>
          <div className="leading-tight">
            <div className="text-ept-green font-heading font-bold text-base">Event Planners</div>
            <div className="text-white font-heading font-bold text-base">Tanzania</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/85 hover:text-ept-green text-sm font-medium tracking-wide transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
            Get a Quote
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white p-2 rounded"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-ept-navy border-t border-white/10 mt-2">
          <div className="container-max py-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/85 hover:text-ept-green font-medium text-sm transition-colors py-3 border-b border-white/10 last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary text-center mt-4"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
