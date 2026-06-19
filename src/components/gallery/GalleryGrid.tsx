"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export type GalleryImage = {
  src: string | null;
  alt: string;
  category: string;
};

const CATEGORIES = ["All", "Corporate Events", "Conferences", "Galas & Dinners", "Stage Production", "Sound & AV", "Branding"];

// Placeholder gallery items — replace src with real paths once images are in /public/images/gallery/
const PLACEHOLDER_IMAGES: GalleryImage[] = [
  { src: null, alt: "Corporate conference setup — Vodacom", category: "Corporate Events" },
  { src: null, alt: "National conference hall setup", category: "Conferences" },
  { src: null, alt: "Gala dinner table settings", category: "Galas & Dinners" },
  { src: null, alt: "Main stage truss structure", category: "Stage Production" },
  { src: null, alt: "Line array sound system", category: "Sound & AV" },
  { src: null, alt: "Step and repeat media wall", category: "Branding" },
  { src: null, alt: "CRDB Bank conference room", category: "Corporate Events" },
  { src: null, alt: "UNDP workshop setup", category: "Conferences" },
  { src: null, alt: "Award ceremony stage", category: "Galas & Dinners" },
  { src: null, alt: "LED screen installation", category: "Stage Production" },
  { src: null, alt: "DJ sound system setup", category: "Sound & AV" },
  { src: null, alt: "Exhibition booth branding", category: "Branding" },
  { src: null, alt: "Business networking event", category: "Corporate Events" },
  { src: null, alt: "International conference", category: "Conferences" },
  { src: null, alt: "Product launch ceremony", category: "Galas & Dinners" },
  { src: null, alt: "Outdoor stage production", category: "Stage Production" },
  { src: null, alt: "Concert sound rig", category: "Sound & AV" },
  { src: null, alt: "Red carpet setup", category: "Branding" },
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

  // Close on Escape, navigate with arrow keys
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
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors z-10"
        aria-label="Close"
      >
        <X size={30} />
      </button>

      {/* Counter */}
      <p className="absolute top-6 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest uppercase">
        {index + 1} / {images.length}
      </p>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-10"
        aria-label="Previous image"
      >
        <ChevronLeft size={44} />
      </button>

      {/* Image */}
      <div
        className="relative w-full max-w-5xl mx-16 md:mx-24"
        onClick={(e) => e.stopPropagation()}
      >
        {img.src ? (
          <Image
            src={img.src}
            alt={img.alt}
            width={1200}
            height={800}
            className="object-contain max-h-[80vh] w-auto mx-auto"
            priority
          />
        ) : (
          <div className="aspect-video bg-ept-navy/80 rounded-sm flex items-center justify-center mx-auto max-w-2xl">
            <div className="text-center">
              <div className="w-14 h-14 border-2 border-ept-green/30 rounded-sm flex items-center justify-center mx-auto mb-4">
                <ZoomIn size={24} className="text-ept-green/50" />
              </div>
              <p className="text-white/50 text-sm">{img.alt}</p>
              <p className="text-white/25 text-xs mt-1">Add photo to /public/images/gallery/</p>
            </div>
          </div>
        )}
        <p className="text-white/40 text-sm text-center mt-4">{img.alt}</p>
      </div>

      {/* Next */}
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

export default function GalleryGrid({ images = PLACEHOLDER_IMAGES }: { images?: GalleryImage[] }) {
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
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((img, i) => (
            <motion.div
              key={`${img.alt}-${img.category}`}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative aspect-square overflow-hidden rounded-sm cursor-pointer group"
              onClick={() => openLightbox(i)}
            >
              {img.src ? (
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="absolute inset-0 bg-ept-navy/80 flex flex-col items-center justify-center">
                  <ZoomIn size={20} className="text-ept-green/50 mb-2" />
                  <p className="text-white/40 text-xs text-center px-3 leading-snug">{img.alt}</p>
                </div>
              )}
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
