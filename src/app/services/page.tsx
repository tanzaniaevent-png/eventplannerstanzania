import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ServicesNavDesktop, ServicesNavMobile } from "@/components/services/ServicesNav";
import ServiceImageSwitcher from "@/components/services/ServiceImageSwitcher";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore all 13 services offered by Event Planners Tanzania — from corporate events and sound systems to catering, interpretation, and photography.",
};

const services = [
  {
    id: "corporate-events",
    name: "Corporate Event Services",
    description:
      "We provide full solutions for corporate events, brand activations, and company gatherings. Our team handles every detail so you can focus on your guests and objectives.",
    items: ["Corporate conferences", "Product launches", "Award ceremonies", "Business networking events", "Company celebrations", "Press conferences"],
    images: [
      "/images/services/corporate-events.png",
      "/images/services/corporate-events2.png",
    ],
  },
  {
    id: "sound-systems",
    name: "Sound Systems",
    description:
      "Professional audio equipment for presentations, conferences, and events of any scale. Every hire includes a professional sound engineer and full setup & dismantling service.",
    items: ["Line array speaker systems", "Wireless microphones", "Conference microphones", "Digital mixing consoles", "DJ sound systems", "Stage monitor speakers"],
    images: [
      "/images/services/sound-systems.png",
      "/images/services/Professional sound engineer.png",
      "/images/services/Wireless microphones.png",
      "/images/services/Digital mixing consoles.png",
    ],
  },
  {
    id: "stage-truss",
    name: "Stage & Truss Structure",
    description:
      "Professional staging systems designed for corporate and entertainment events. From intimate breakout sessions to main-stage productions.",
    items: ["Modular stage platforms", "Aluminium truss systems", "Stage backdrops", "Branded stage designs", "Stage lighting rigs"],
    images: [
      "/images/services/struss daytime stage.png",
      "/images/services/Aluminium truss systems.jpg",
      "/images/services/performing stage of Aluminium truss systems.jpg",
      "/images/services/performing stage of Aluminium truss systems (1).jpg",
      "/images/services/performing stage of Aluminium truss systems (2).jpg",
      "/images/services/performing stage of Aluminium truss systems (3).jpg",
      "/images/services/performing stage of Aluminium truss systems day time.jpg",
      "/images/services/performing stage of Aluminium truss systems day time (2).jpg",
    ],
  },
  {
    id: "lighting",
    name: "Lighting Systems",
    description:
      "Create the perfect ambiance for any event — from intimate dinners to large-scale conferences. Our lighting team designs and operates every rig to match your vision.",
    items: ["LED stage lighting", "Moving head lights", "Spotlight systems", "Ambient event lighting", "LED uplighting"],
    images: [
      "/images/services/light stage night.png",
      "/images/services/Moving head lights.png",
      "/images/services/LED stage lighting.png",
      "/images/services/Stage lighting rigs.png",
    ],
  },
  {
    id: "led-screens",
    name: "LED Screens & Visual Systems",
    description:
      "Modern visual technology for presentations and branding. High-resolution displays that ensure your content reaches every corner of the room.",
    items: ["LED display screens", "HD projectors", "Projection screens", "Presentation TVs", "Video switching systems"],
    images: [
      "/images/services/led-screens.png",
      "/images/services/LED display screens.png",
      "/images/services/HD projectors.png",
      "/images/services/Projection screens.png",
    ],
  },
  {
    id: "furniture",
    name: "Event Furniture & Setup",
    description:
      "Comfortable and professional setups for any event format — from boardroom meetings to outdoor galas. We supply, deliver, and arrange everything.",
    items: ["VIP chairs", "Conference chairs", "Round tables", "Cocktail tables", "Exhibition booths", "Tents & marquees"],
    images: [
      "/images/services/furniture.png",
      "/images/services/VIP chairs.png",
      "/images/services/Round tables.png",
      "/images/services/Tents & marquees.png",
    ],
  },
  {
    id: "branding",
    name: "Branding & Visual Design",
    description:
      "Increase your event's visibility and brand recognition with our full-service branding solutions. From print to installation, we bring your brand to life.",
    items: ["Backdrop printing", "Roll-up banners", "Red carpet setup", "Step & repeat media walls", "Exhibition branding"],
    images: [
      "/images/services/Backdrop printing.jpg",
      "/images/services/Step & repeat media walls.jpg",
      "/images/services/Red carpet setup.png",
      "/images/services/Roll-up banners.jpg",
    ],
  },
  {
    id: "event-management",
    name: "Event Management",
    description:
      "We handle every aspect of your event from planning to execution — so you experience the event, not the logistics.",
    items: ["Event planning", "Technical setup", "Event coordination", "Guest management", "Stage management"],
    images: [
      "/images/services/Event planning.png",
      "/images/services/Event coordination and Guest management.png",
      "/images/services/Stage management.jpeg",
      "/images/services/Technical setup.png",
    ],
  },
  {
    id: "catering",
    name: "Catering Services",
    description:
      "We offer professional catering services for corporate, social, and private events, including meetings, weddings, and parties. Local and international dishes using fresh, high-quality ingredients.",
    items: ["Buffet service", "Plated meals", "Menu planning", "Serving staff", "Catering equipment", "Local & international cuisine"],
    images: ["/images/services/catering services.png"],
  },
  {
    id: "logistics",
    name: "Logistics & Scheduling",
    description:
      "We provide efficient logistics and scheduling services to ensure smooth planning and execution. Our team coordinates transportation, equipment delivery, and setup while managing timelines.",
    items: ["Transportation coordination", "Equipment delivery", "Timeline management", "On-site scheduling", "Setup & dismantling"],
    images: [
      "/images/services/logistics and scheduling .png",
      "/images/services/Setup & dismantling.png",
    ],
  },
  {
    id: "destination",
    name: "Destination Management",
    description:
      "Comprehensive destination management for events held in various locations. With strong local knowledge and reliable partnerships, we customize each experience from arrival to departure.",
    items: ["Venue sourcing", "Accommodation arrangements", "Transportation logistics", "On-site support", "Local coordination"],
    images: ["/images/services/Destination Management.png"],
  },
  {
    id: "interpretation",
    name: "Interpretation Services",
    description:
      "Professional interpretation services for effective communication across different languages. Both simultaneous and consecutive interpretation, tailored to the nature of each event.",
    items: ["Simultaneous interpretation", "Consecutive interpretation", "Conference support", "Real-time accuracy", "Full confidentiality"],
    images: ["/images/services/Interpretation Services.png"],
  },
  {
    id: "photography",
    name: "Photography & Video",
    description:
      "Professional photography and videography services capturing every important moment with creativity and precision — from corporate events and conferences to weddings and private functions.",
    items: ["Event photography", "Videography & filming", "Corporate coverage", "Conference documentation", "Post-production editing"],
    images: ["/images/services/Photography & Video.png"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-ept-navy pt-32 pb-20 px-6">
        <div className="container-max">
          <p className="text-ept-green text-xs font-semibold uppercase tracking-[0.2em] mb-4">What We Offer</p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-2xl">
            13 Services. One Partner.
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed">
            From sound and staging to catering and interpretation — everything your event needs, delivered by one trusted team.
          </p>
        </div>
      </section>

      {/* Services content */}
      <section className="section-pad bg-white">
        <div className="container-max">

          {/* Mobile pill nav */}
          <div className="lg:hidden mb-10">
            <ServicesNavMobile />
          </div>

          {/* Desktop: sidebar + content */}
          <div className="flex gap-14">
            <div className="hidden lg:block">
              <ServicesNavDesktop />
            </div>

            <div className="flex-1 space-y-24 min-w-0">
              {services.map((service, i) => (
                <div key={service.id} id={service.id} className="scroll-mt-28">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text */}
                    <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                      <span className="text-ept-green text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                        {service.name}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-7">{service.description}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                        {service.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 bg-ept-green rounded-full shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Image */}
                    <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                      {service.images.length === 1 ? (
                        <div className="aspect-[4/3] rounded-sm overflow-hidden relative bg-gray-100">
                          <Image
                            src={service.images[0]}
                            alt={service.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority={i === 0}
                          />
                        </div>
                      ) : (
                        <ServiceImageSwitcher images={service.images} alt={service.name} priority={i === 0} />
                      )}
                    </div>
                  </div>

                  {i < services.length - 1 && (
                    <div className="mt-16 border-b border-gray-100" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16 px-6 text-center border-t border-gray-100">
        <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">Need Multiple Services?</h2>
        <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
          We package our services to match your event requirements. Let&apos;s build a custom solution together.
        </p>
        <Link href="/contact" className="btn-primary">Get a Custom Quote</Link>
      </section>
    </>
  );
}
