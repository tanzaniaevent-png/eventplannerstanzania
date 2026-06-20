import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import PageTransition from "@/components/layout/PageTransition";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EventPlanner"],
  name: "Event Planners Tanzania",
  description:
    "Tanzania's premier event management company based in Dar es Salaam, offering corporate events, sound systems, staging, lighting, LED screens, catering, and more.",
  url: "https://www.eventplannerstanzania.co.tz",
  telephone: "+255655600000",
  email: "info@eventplannerstanzania.co.tz",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Twiga House, 7th Floor",
    addressLocality: "Dar es Salaam",
    postalCode: "2530",
    addressCountry: "TZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.8154,
    longitude: 39.2848,
  },
  areaServed: { "@type": "Country", name: "Tanzania" },
  sameAs: [
    "https://instagram.com/eventplannerstanzania",
    "https://facebook.com/eventplannerstanzania",
    "https://tiktok.com/@eventplannerstanzania",
  ],
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eventplannerstanzania.co.tz"),
  title: {
    default: "Event Planners Tanzania — Turning Moments into Memories",
    template: "%s | Event Planners Tanzania",
  },
  description:
    "Tanzania's premier event management company based in Dar es Salaam. Corporate events, sound systems, staging, lighting, LED screens, catering, and more.",
  keywords: [
    "event planners Tanzania",
    "event management Dar es Salaam",
    "corporate events Tanzania",
    "event production Tanzania",
  ],
  robots: { index: true, follow: true },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_TZ",
    url: "https://www.eventplannerstanzania.co.tz",
    siteName: "Event Planners Tanzania",
    title: "Event Planners Tanzania — Turning Moments into Memories",
    description:
      "Tanzania's premier event management company. Corporate events, conferences, sound, staging, lighting, catering & more from Dar es Salaam.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Event Planners Tanzania — Turning Moments into Memories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Planners Tanzania",
    description: "Tanzania's premier event management company — Dar es Salaam.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1"><PageTransition>{children}</PageTransition></main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
