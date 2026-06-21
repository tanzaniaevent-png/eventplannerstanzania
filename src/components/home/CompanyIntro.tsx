"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const rotatingImages = [
  { src: "/images/services/office.png", alt: "Event Planners Tanzania office — Twiga House, Dar es Salaam" },
  { src: "/images/services/corporate-events.png", alt: "Corporate event setup by Event Planners Tanzania" },
];

const highlights = [
  "Corporate conferences & award ceremonies",
  "Professional sound, lighting & stage systems",
  "Destination management across East Africa",
  "Full-service catering & event coordination",
];

export default function CompanyIntro() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => { setCurrent((i) => (i + 1) % rotatingImages.length); setFading(false); }, 400);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-pad bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-ept-green text-xs font-semibold uppercase tracking-[0.2em] mb-4">About Us</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Professional Events,<br />Flawlessly Executed
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Event Planners Tanzania is a professional event management company based in Dar es Salaam, offering comprehensive solutions for corporate and social events. We specialize in delivering high-quality event experiences by combining advanced technology, skilled expertise, and exceptional customer service.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              From intimate business meetings to large-scale productions, our commitment is to ensure every event is executed flawlessly and exceeds client expectations.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle size={17} className="text-ept-green shrink-0 mt-0.5" />
                  {h}
                </li>
              ))}
            </ul>

            <Link href="/about" className="btn-secondary">
              Learn About Us
            </Link>
          </motion.div>

          {/* Auto-rotating image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-ept-navy rounded-sm overflow-hidden relative">
              <Image
                src={rotatingImages[current].src}
                alt={rotatingImages[current].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-opacity duration-400"
                style={{ opacity: fading ? 0 : 1 }}
                priority
              />
              {/* Dot indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {rotatingImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setFading(true); setTimeout(() => { setCurrent(i); setFading(false); }, 400); }}
                    aria-label={`Image ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-white w-5" : "bg-white/50 w-1.5 hover:bg-white/80"}`}
                  />
                ))}
              </div>
            </div>
            {/* Accent blocks */}
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-ept-green/10 rounded-sm -z-10" />
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-ept-navy/10 rounded-sm -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
