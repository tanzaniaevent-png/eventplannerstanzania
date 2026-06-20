"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "ICB", logo: "/images/clients/ICB-Logo-2.png" },
  { name: "Azania Bank", logo: "/images/clients/Azania-Bank-Logo-Landscape.png" },
  { name: "TDB", logo: "/images/clients/tdb-logowhite.png" },
  { name: "US Embassy", logo: "/images/clients/usa embassy.png" },
  { name: "NMB Bank", logo: "/images/clients/nmb-white-logo.png" },
  { name: "Tanzania Breweries", logo: "/images/clients/TZlogo.png" },
  { name: "Vodacom", logo: "/images/clients/vodacom.png" },
  { name: "UNDP", logo: "/images/clients/UNDP.png" },
  { name: "DP World", logo: "/images/clients/Dp world.png" },
  { name: "TMRC", logo: "/images/clients/TMRC.png" },
  { name: "CRDB Bank", logo: "/images/clients/CRDB.png" },
  { name: "Action Medeor", logo: "/images/clients/action medeor.png" },
  { name: "Africom", logo: "/images/clients/logo (1).png" },
  { name: "UTT AMIS", logo: "/images/clients/uttamislogof.png" },
];

export default function TrustStrip() {
  return (
    <section className="py-10 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container-max mb-6 text-center">
        <p className="text-gray-500 text-xs uppercase tracking-widest font-medium">
          Trusted by leading organisations across Tanzania
        </p>
      </div>

      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <motion.div
          className="flex items-center gap-10 shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="shrink-0 px-6 py-3 flex items-center justify-center h-14 w-36"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={client.logo}
                alt={client.name}
                width={140}
                height={40}
                className="max-h-10 w-auto max-w-full object-contain opacity-50 hover:opacity-90 transition-opacity"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
