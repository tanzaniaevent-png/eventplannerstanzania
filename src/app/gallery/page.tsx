import type { Metadata } from "next";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse Event Planners Tanzania's portfolio — corporate conferences, galas, stage productions, sound setups, and branding across Dar es Salaam and East Africa.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-ept-navy pt-32 pb-20 px-6">
        <div className="container-max">
          <p className="text-ept-green text-xs font-semibold uppercase tracking-[0.2em] mb-4">Our Portfolio</p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-2xl">
            Events That Speak for Themselves
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed">
            A selection of events we&apos;ve produced — corporate conferences, award galas, stage productions, and more.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
