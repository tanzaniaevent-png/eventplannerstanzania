import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-ept-navy flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-xl">
        {/* Big 404 */}
        <p
          className="font-heading font-bold text-[clamp(8rem,20vw,14rem)] leading-none select-none"
          style={{
            color: "transparent",
            WebkitTextStroke: "2px rgba(116,190,67,0.4)",
          }}
        >
          404
        </p>

        <p className="text-ept-green text-xs font-semibold uppercase tracking-[0.2em] mb-4 -mt-4">
          Page Not Found
        </p>

        <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
          This page doesn&apos;t exist.
        </h1>

        <p className="text-white/55 text-base leading-relaxed mb-10">
          The page you&apos;re looking for may have been moved, renamed, or never
          existed. Let us guide you back.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary" style={{ padding: "0.875rem 2rem" }}>
            Back to Home
          </Link>
          <Link href="/contact" className="btn-ghost" style={{ padding: "0.875rem 2rem" }}>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
