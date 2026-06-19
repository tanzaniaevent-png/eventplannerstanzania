import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import CompanyIntro from "@/components/home/CompanyIntro";
import ServicesGrid from "@/components/home/ServicesGrid";
import GalleryTeaser from "@/components/home/GalleryTeaser";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <CompanyIntro />
      <ServicesGrid />
      <GalleryTeaser />
      <CTABanner />
    </>
  );
}
