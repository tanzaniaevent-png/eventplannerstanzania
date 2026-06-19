"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-24">
      {/* Background — swap div for next/image once hero photo is in /public/images/hero/ */}
      <div className="absolute inset-0 bg-ept-navy" />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950/90 to-ept-navy/80" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(116,190,67,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(116,190,67,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container-max text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-ept-green text-xs font-semibold uppercase tracking-[0.25em] mb-6"
        >
          Tanzania&apos;s Premier Event Production Company — Dar es Salaam
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="font-heading font-bold text-white leading-[1.08] mb-7"
          style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
        >
          Turning Moments<br />into Memories
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="text-white/65 text-lg md:text-xl mb-10 max-w-lg mx-auto leading-relaxed"
        >
          From intimate corporate meetings to large-scale productions — we handle every detail, flawlessly executed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.52 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link href="/contact" className="btn-primary" style={{ padding: "1rem 2.25rem", fontSize: "0.9375rem" }}>
            Get a Quote
          </Link>
          <Link href="/services" className="btn-ghost" style={{ padding: "1rem 2.25rem", fontSize: "0.9375rem" }}>
            Our Services
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-wrap justify-center gap-10 mt-16 pt-10 border-t border-white/10"
        >
          {[
            { value: "13+", label: "Service Areas" },
            { value: "15+", label: "Major Clients" },
            { value: "100%", label: "Commitment" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-heading text-3xl font-bold text-ept-green mb-1">{s.value}</div>
              <div className="text-white/50 text-xs uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="animate-bounce" size={20} />
      </motion.div>
    </section>
  );
}
