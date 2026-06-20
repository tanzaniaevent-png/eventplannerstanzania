"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const galleryImages = [
  { src: "/images/gallery/_event setup (20).png", alt: "Grand chandelier gala entrance", label: "Stage Production" },
  { src: "/images/gallery/_event setup (6).png", alt: "Stage with dramatic beam lighting", label: "Stage & Lighting" },
  { src: "/images/gallery/_event setup (14).png", alt: "Elegant pink ballroom with chandeliers", label: "Galas & Dinners" },
  { src: "/images/gallery/_event setup (26).png", alt: "Outdoor sunset dinner setup", label: "Outdoor Events" },
  { src: "/images/gallery/_event setup (19).png", alt: "VIP gold sofa with red rose backdrop", label: "Decor & Styling" },
  { src: "/images/gallery/_event setup (4).png", alt: "Professional sound mixing console", label: "Sound & AV" },
];

export default function GalleryTeaser() {
  return (
    <section className="section-pad bg-white">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10"
        >
          <div>
            <p className="text-ept-green text-xs font-semibold uppercase tracking-[0.2em] mb-3">Our Work</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Events That<br />Leave an Impression
            </h2>
          </div>
          <Link href="/gallery" className="btn-outline shrink-0 self-start sm:self-auto">
            View Full Gallery
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`relative overflow-hidden rounded-sm group cursor-pointer ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`w-full ${
                  i === 0 ? "aspect-[4/3] md:aspect-auto md:h-full min-h-[220px]" : "aspect-[4/3]"
                } relative`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                />
                <div className="absolute inset-0 bg-ept-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-heading font-semibold text-sm">{img.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
