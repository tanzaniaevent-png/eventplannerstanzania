"use client";

import { motion } from "framer-motion";

const clients = [
  "ICB International Bank",
  "Azania Bank",
  "TDB",
  "US Embassy",
  "NMB Bank",
  "Tanzania Breweries",
  "Vodacom",
  "UNDP",
  "DP World",
  "TMRC",
  "CRDB Bank",
  "Action Medeor",
  "Africom Energies",
  "UTT AMIS",
];

export default function TrustStrip() {
  return (
    <section className="py-10 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container-max mb-6 text-center">
        <p className="text-gray-400 text-xs uppercase tracking-widest font-medium">
          Trusted by leading organisations across Tanzania
        </p>
      </div>

      {/* Scrolling marquee */}
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <motion.div
          className="flex gap-10 shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...clients, ...clients].map((name, i) => (
            <div
              key={i}
              className="shrink-0 px-6 py-3 border border-gray-200 rounded-sm text-gray-400 text-sm font-medium tracking-wide hover:text-ept-navy hover:border-ept-navy transition-colors whitespace-nowrap cursor-default"
            >
              {name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
