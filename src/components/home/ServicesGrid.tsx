"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building2,
  Volume2,
  Layers,
  Lightbulb,
  Monitor,
  Armchair,
  Palette,
  ClipboardList,
  Utensils,
  CalendarDays,
  Globe,
  Languages,
  Camera,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    name: "Corporate Event Services",
    desc: "Full solutions for conferences, product launches, award ceremonies, and business networking events.",
    href: "/services#corporate-events",
  },
  {
    icon: Volume2,
    name: "Sound Systems",
    desc: "Professional line array speakers, wireless microphones, digital mixing consoles, and sound engineers.",
    href: "/services#sound-systems",
  },
  {
    icon: Layers,
    name: "Stage & Truss Structure",
    desc: "Modular stage platforms, aluminium truss systems, branded stage designs, and lighting rigs.",
    href: "/services#stage-truss",
  },
  {
    icon: Lightbulb,
    name: "Lighting Systems",
    desc: "LED stage lighting, moving head lights, spotlights, and ambient uplighting for perfect ambiance.",
    href: "/services#lighting",
  },
  {
    icon: Monitor,
    name: "LED Screens & Visual Systems",
    desc: "LED display screens, HD projectors, presentation TVs, and video switching systems.",
    href: "/services#led-screens",
  },
  {
    icon: Armchair,
    name: "Event Furniture & Setup",
    desc: "VIP chairs, conference furniture, round tables, cocktail tables, exhibition booths, and marquees.",
    href: "/services#furniture",
  },
  {
    icon: Palette,
    name: "Branding & Visual Design",
    desc: "Backdrop printing, roll-up banners, red carpet setup, step & repeat media walls.",
    href: "/services#branding",
  },
  {
    icon: ClipboardList,
    name: "Event Management",
    desc: "End-to-end planning and execution — from event coordination and stage management to guest handling.",
    href: "/services#event-management",
  },
  {
    icon: Utensils,
    name: "Catering Services",
    desc: "Local and international menus, buffet and plated meals, menu planning, and full serving staff.",
    href: "/services#catering",
  },
  {
    icon: CalendarDays,
    name: "Logistics & Scheduling",
    desc: "Transport coordination, equipment delivery, timeline management, and stress-free operations.",
    href: "/services#logistics",
  },
  {
    icon: Globe,
    name: "Destination Management",
    desc: "Venue sourcing, accommodation, transport, and on-site support for events across locations.",
    href: "/services#destination",
  },
  {
    icon: Languages,
    name: "Interpretation Services",
    desc: "Simultaneous and consecutive interpretation for meetings, conferences, and multilingual events.",
    href: "/services#interpretation",
  },
  {
    icon: Camera,
    name: "Photography & Video",
    desc: "Professional photography and videography for corporate events, conferences, weddings, and functions.",
    href: "/services#photography",
  },
];

export default function ServicesGrid() {
  return (
    <section className="section-pad bg-gray-50">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-ept-green text-xs font-semibold uppercase tracking-[0.2em] mb-3">What We Do</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our 13 Services</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Everything you need to deliver an extraordinary event — under one roof.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
              >
                <Link
                  href={service.href}
                  className="group block bg-white border border-gray-100 rounded-sm p-6 h-full hover:border-ept-green hover:shadow-md transition-all duration-200"
                >
                  <div className="w-11 h-11 bg-ept-green/10 rounded-sm flex items-center justify-center mb-5 group-hover:bg-ept-green transition-colors duration-200">
                    <Icon
                      size={20}
                      className="text-ept-green group-hover:text-white transition-colors duration-200"
                    />
                  </div>
                  <h3 className="font-heading font-semibold text-gray-900 mb-2 text-[0.95rem] leading-snug group-hover:text-ept-navy transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-outline">
            View All Services in Detail
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
