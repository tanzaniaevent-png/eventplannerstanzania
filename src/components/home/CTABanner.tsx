"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-ept-navy py-20 px-6 relative overflow-hidden">
      {/* Accent shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-ept-green/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-ept-green/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="container-max text-center relative z-10"
      >
        <p className="text-ept-green text-xs font-semibold uppercase tracking-[0.2em] mb-4">
          Let&apos;s Work Together
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Ready to Plan Your<br />Next Event?
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-md mx-auto">
          Contact us today and let us turn your vision into an unforgettable experience.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact" className="btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "0.9375rem" }}>
            Get a Quote
          </Link>
          <Link href="tel:+255655600000" className="btn-ghost" style={{ padding: "1rem 2.5rem", fontSize: "0.9375rem" }}>
            +255 655 600 000
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
