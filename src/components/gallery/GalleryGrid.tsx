"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

const CATEGORIES = ["All", "Galas & Dinners", "Stage & Production", "Sound & AV", "Corporate Events"];

const GALLERY_IMAGES: GalleryImage[] = [
  // Galas & Dinners
  { src: "/images/gallery/_event setup.png", alt: "Rustic barn dinner with fairy lights and round tables", category: "Galas & Dinners" },
  { src: "/images/gallery/_event setup (1).png", alt: "Elegant navy dinner table with candelabras", category: "Galas & Dinners" },
  { src: "/images/gallery/_event setup (2).png", alt: "Outdoor tropical table setting with orange florals", category: "Galas & Dinners" },
  { src: "/images/gallery/_event setup (11).png", alt: "Outdoor ceremony chairs with pink floral accents", category: "Galas & Dinners" },
  { src: "/images/gallery/_event setup (12).png", alt: "Gold Chiavari chairs at outdoor ceremony", category: "Galas & Dinners" },
  { src: "/images/gallery/_event setup (14).png", alt: "Elegant ballroom with pink chandeliers and floral centrepieces", category: "Galas & Dinners" },
  { src: "/images/gallery/_event setup (15).png", alt: "Outdoor wedding ceremony with floral arch", category: "Galas & Dinners" },
  { src: "/images/gallery/_event setup (16).png", alt: "Long dining table with green and gold accents", category: "Galas & Dinners" },
  { src: "/images/gallery/_event setup (18).png", alt: "Dark and elegant dinner table with white florals", category: "Galas & Dinners" },
  { src: "/images/gallery/_event setup (22).png", alt: "Long banquet table with flower centrepieces", category: "Galas & Dinners" },
  { src: "/images/gallery/_event setup (23).png", alt: "Outdoor table setting with white flower centrepiece", category: "Galas & Dinners" },
  { src: "/images/gallery/_event setup (25).png", alt: "Dark mirror dining table in chandelier room", category: "Galas & Dinners" },
  { src: "/images/gallery/_event setup (26).png", alt: "Outdoor dinner at sunset with fairy lights", category: "Galas & Dinners" },
  { src: "/images/gallery/_event setup (27).png", alt: "Rustic outdoor banquet with wildflower centrepieces", category: "Galas & Dinners" },
  { src: "/images/gallery/_event setup (28).png", alt: "Outdoor long table with blue velvet chairs", category: "Galas & Dinners" },
  { src: "/images/gallery/_event setup (30).png", alt: "Boho outdoor long table with pampas grass", category: "Galas & Dinners" },
  // Stage & Production
  { src: "/images/gallery/_event setup (5).png", alt: "White pagoda marquee exterior", category: "Stage & Production" },
  { src: "/images/gallery/_event setup (6).png", alt: "Stage with dramatic red and white beam lighting", category: "Stage & Production" },
  { src: "/images/gallery/_event setup (8).png", alt: "Truss lighting rig with LED fixtures", category: "Stage & Production" },
  { src: "/images/gallery/_event setup (9).png", alt: "Outdoor truss stage rig", category: "Stage & Production" },
  { src: "/images/gallery/_event setup (17).png", alt: "Decorative chandeliers with floral arrangements", category: "Stage & Production" },
  { src: "/images/gallery/_event setup (19).png", alt: "VIP gold sofa with red rose wall backdrop", category: "Stage & Production" },
  { src: "/images/gallery/_event setup (20).png", alt: "Grand chandelier entrance with crystal installations", category: "Stage & Production" },
  { src: "/images/gallery/_event setup (21).png", alt: "White floral wall backdrop with fairy lights", category: "Stage & Production" },
  // Stage & Production — performing stage additions
  { src: "/images/gallery/performing stage of Aluminium truss systems (1).jpg", alt: "Performing stage with aluminium truss systems", category: "Stage & Production" },
  { src: "/images/gallery/performing stage of Aluminium truss systems (3).jpg", alt: "Stage truss structure setup", category: "Stage & Production" },
  { src: "/images/gallery/performing stage of Aluminium truss systems day time.jpg", alt: "Daytime performing stage setup", category: "Stage & Production" },
  { src: "/images/gallery/performing stage of Aluminium truss systems day time (2).jpg", alt: "Daytime aluminium truss stage", category: "Stage & Production" },
  // Sound & AV
  { src: "/images/gallery/_event setup (4).png", alt: "Professional mixing console with microphone", category: "Sound & AV" },
  { src: "/images/gallery/_event setup (7).png", alt: "Outdoor AV equipment setup at sunset", category: "Sound & AV" },
  { src: "/images/gallery/_event setup (13).png", alt: "Headphones on mixing board", category: "Sound & AV" },
  // Corporate Events
  { src: "/images/gallery/_event setup (3).png", alt: "Large banquet hall with colourful chair sashes", category: "Corporate Events" },
  { src: "/images/gallery/_event setup (10).png", alt: "Modern boardroom conference table", category: "Corporate Events" },
  { src: "/images/gallery/_event setup (24).png", alt: "White ballroom with round tables and chair covers", category: "Corporate Events" },
  { src: "/images/gallery/_event setup (29).png", alt: "Elegant indoor venue with tufted chairs", category: "Corporate Events" },
  { src: "/images/gallery/_event setup (31).png", alt: "Event setup", category: "Galas & Dinners" },
  { src: "/images/gallery/c1.jpg", alt: "Corporate event setup", category: "Corporate Events" },
  { src: "/images/gallery/c3.jpg", alt: "Corporate conference setup", category: "Corporate Events" },
  { src: "/images/gallery/c4.jpg", alt: "Corporate venue arrangement", category: "Corporate Events" },
  { src: "/images/gallery/c5.jpg", alt: "Corporate event decoration", category: "Corporate Events" },
  { src: "/images/gallery/c7.jpg", alt: "Corporate gathering setup", category: "Corporate Events" },
  { src: "/images/gallery/c8.jpg", alt: "Corporate event hall", category: "Corporate Events" },
  { src: "/images/gallery/c13.jpg", alt: "Corporate meeting venue", category: "Corporate Events" },
  { src: "/images/gallery/c14.jpg", alt: "Corporate event arrangement", category: "Corporate Events" },
  { src: "/images/gallery/c15.jpg", alt: "Corporate conference hall", category: "Corporate Events" },
  { src: "/images/gallery/c20.jpg", alt: "Corporate event production", category: "Corporate Events" },
  { src: "/images/gallery/c24.jpg", alt: "Corporate dinner setup", category: "Corporate Events" },
  { src: "/images/gallery/c25.jpg", alt: "Corporate gala venue", category: "Corporate Events" },
  { src: "/images/gallery/c26.jpg", alt: "Corporate event space", category: "Corporate Events" },
  { src: "/images/gallery/c29.jpg", alt: "Corporate function setup", category: "Corporate Events" },
  { src: "/images/gallery/C33.jpg", alt: "Corporate event staging", category: "Corporate Events" },
  { src: "/images/gallery/C49.jpg", alt: "Corporate event decor", category: "Corporate Events" },
  { src: "/images/gallery/c79.jpg", alt: "Corporate event venue", category: "Corporate Events" },
  { src: "/images/gallery/c92.jpg", alt: "Corporate conference venue", category: "Corporate Events" },
  { src: "/images/gallery/c93.jpg", alt: "Corporate event hall setup", category: "Corporate Events" },
  { src: "/images/gallery/c98.jpg", alt: "Corporate gathering venue", category: "Corporate Events" },
  { src: "/images/gallery/c101.jpg", alt: "Corporate event setup", category: "Corporate Events" },
];

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const img = images[index];

  if (typeof window !== "undefined") {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.onkeydown = handler;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[200] bg-black/96 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors z-10"
        aria-label="Close"
      >
        <X size={30} />
      </button>

      <p className="absolute top-6 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest uppercase">
        {index + 1} / {images.length}
      </p>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-10"
        aria-label="Previous image"
      >
        <ChevronLeft size={44} />
      </button>

      <div
        className="relative w-full max-w-5xl mx-16 md:mx-24"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={img.src}
          alt={img.alt}
          width={1200}
          height={800}
          className="object-contain max-h-[80vh] w-auto mx-auto"
          priority
        />
        <p className="text-white/40 text-sm text-center mt-4">{img.alt}</p>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-10"
        aria-label="Next image"
      >
        <ChevronRight size={44} />
      </button>
    </motion.div>
  );
}

export default function GalleryGrid({ images = GALLERY_IMAGES }: { images?: GalleryImage[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All" ? images : images.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => {
    setLightboxIndex(null);
    if (typeof window !== "undefined") window.onkeydown = null;
  };
  const prevImage = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  const nextImage = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));

  return (
    <>
      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-sm text-sm font-medium transition-all border ${
              activeCategory === cat
                ? "bg-ept-green text-white border-ept-green"
                : "border-gray-200 text-gray-600 hover:border-ept-green hover:text-ept-green bg-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((img, i) => (
            <motion.div
              key={`${img.src}`}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative aspect-square overflow-hidden rounded-sm cursor-pointer group"
              onClick={() => openLightbox(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-ept-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ZoomIn size={28} className="text-white" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={filtered}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </>
  );
}
