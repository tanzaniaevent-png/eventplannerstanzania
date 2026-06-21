"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/images/services/office.png", alt: "Event Planners Tanzania office — Twiga House, Dar es Salaam" },
  { src: "/images/services/CLIENTS & PARTNERS.png", alt: "Event Planners Tanzania clients and partners" },
];

export default function AboutImageRotator() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((i) => (i + 1) % images.length);
        setFading(false);
      }, 400);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="aspect-[4/3] bg-ept-navy rounded-sm overflow-hidden relative group">
      <Image
        src={images[current].src}
        alt={images[current].alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover transition-opacity duration-400"
        style={{ opacity: fading ? 0 : 1 }}
        priority
      />
      {/* Left arrow */}
      <button
        onClick={() => { setFading(true); setTimeout(() => { setCurrent((i) => (i - 1 + images.length) % images.length); setFading(false); }, 400); }}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
      >
        <ChevronLeft size={20} />
      </button>
      {/* Right arrow */}
      <button
        onClick={() => { setFading(true); setTimeout(() => { setCurrent((i) => (i + 1) % images.length); setFading(false); }, 400); }}
        aria-label="Next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
      >
        <ChevronRight size={20} />
      </button>
      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => { setFading(true); setTimeout(() => { setCurrent(i); setFading(false); }, 400); }}
            aria-label={`Image ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-white w-5" : "bg-white/50 w-1.5 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
