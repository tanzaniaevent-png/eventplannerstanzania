import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-24">
      <p className="text-ept-green text-xs font-semibold uppercase tracking-[0.2em] mb-4">404</p>
      <h1 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-5 leading-tight">
        Page Not Found
      </h1>
      <p className="text-gray-500 text-lg mb-10 max-w-md leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/" className="btn-primary">Go Home</Link>
        <Link href="/contact" className="btn-outline">Contact Us</Link>
      </div>
    </section>
  );
}
