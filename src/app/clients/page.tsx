import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clients & Partners",
  description:
    "Event Planners Tanzania has been trusted by leading organisations including Vodacom, UNDP, CRDB Bank, the US Embassy, and many more across Tanzania.",
};

const clients = [
  { name: "ICB", full: "International Commercial Bank", logo: "/images/clients/ICB-Logo-2.png" },
  { name: "Azania Bank", full: "Azania Bank", logo: "/images/clients/Azania-Bank-Logo-Landscape.png" },
  { name: "Government of Tanzania", full: "Government of Tanzania", logo: "/images/clients/coat-arms-tanzania.png" },
  { name: "TDB", full: "Trade & Development Bank", logo: "/images/clients/tdb-logowhite.png" },
  { name: "US Embassy", full: "Embassy of the United States", logo: "/images/clients/usa embassy.png" },
  { name: "NMB Bank", full: "NMB Bank — Close to You", logo: "/images/clients/nmb-white-logo.png" },
  { name: "Tanzania Breweries", full: "Tanzania Breweries Ltd", logo: "/images/clients/TZlogo.png" },
  { name: "Vodacom", full: "Vodacom Tanzania", logo: "/images/clients/vodacom.png" },
  { name: "UNDP", full: "United Nations Development Programme", logo: "/images/clients/UNDP.png" },
  { name: "DP World", full: "DP World Tanzania", logo: "/images/clients/Dp world.png" },
  { name: "TMRC", full: "Tanzania Mortgage Refinance Company Ltd", logo: "/images/clients/TMRC.png" },
  { name: "Africom", full: "Africom Energies & Engineering Group", logo: "/images/clients/logo (1).png" },
  { name: "UTT AMIS", full: "UTT AMIS", logo: "/images/clients/uttamislogof.png" },
  { name: "CRDB Bank", full: "CRDB Bank — The Bank That Listens", logo: "/images/clients/CRDB.png" },
  { name: "Action Medeor", full: "Action Medeor — International Healthcare", logo: "/images/clients/action medeor.png" },
];

const industries = [
  "Banking & Finance",
  "Government & Diplomatic",
  "Telecommunications",
  "International Development",
  "Logistics & Trade",
  "Healthcare",
  "Energy & Engineering",
  "Investments & Asset Management",
];

export default function ClientsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-ept-navy pt-32 pb-20 px-6">
        <div className="container-max">
          <p className="text-ept-green text-xs font-semibold uppercase tracking-[0.2em] mb-4">Who We&apos;ve Served</p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-2xl">
            Trusted by Tanzania&apos;s Leading Organisations
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed">
            We are proud to have worked with a diverse range of clients across various industries. Our commitment to quality and excellence has earned us the trust of these valued partners.
          </p>
        </div>
      </section>

      {/* Client logo wall */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="text-center mb-14">
            <p className="text-ept-green text-xs font-semibold uppercase tracking-[0.2em] mb-3">Our Clients</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900">
              {clients.length}+ Valued Partners
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {clients.map((client) => (
              <div
                key={client.name}
                className="group border border-gray-100 rounded-sm p-6 flex flex-col items-center justify-center text-center hover:border-ept-green hover:shadow-md transition-all cursor-default aspect-[4/3]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={56}
                  className="w-full h-14 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <p className="text-gray-400 text-[10px] mt-3 uppercase tracking-widest group-hover:text-ept-green transition-colors leading-snug">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries served */}
      <section className="section-pad bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-ept-green text-xs font-semibold uppercase tracking-[0.2em] mb-4">Track Record</p>
              <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Serving Tanzania&apos;s Most Important Events
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                From international diplomatic functions at the US Embassy to large-scale corporate activations for Vodacom and UNDP — our portfolio spans government, banking, telecommunications, healthcare, and international development.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Each event represents our commitment to delivering flawless execution, whether it&apos;s a press conference for 50 or a national conference for 500.
              </p>
              <Link href="/contact" className="btn-primary">Work With Us</Link>
            </div>

            {/* Industries grid */}
            <div>
              <p className="text-gray-500 text-sm font-medium mb-5 uppercase tracking-wider">Industries We Serve</p>
              <div className="grid grid-cols-2 gap-3">
                {industries.map((industry) => (
                  <div
                    key={industry}
                    className="bg-white border border-gray-100 rounded-sm px-4 py-3 text-sm text-gray-700 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-ept-green rounded-full shrink-0" />
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ept-navy py-20 px-6 text-center">
        <p className="text-ept-green text-xs font-semibold uppercase tracking-[0.2em] mb-4">Join Our Clients</p>
        <h2 className="font-heading text-4xl font-bold text-white mb-5 leading-tight">
          Ready to Work With Tanzania&apos;s Best?
        </h2>
        <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">
          Let us bring the same quality and professionalism to your next event.
        </p>
        <Link href="/contact" className="btn-primary" style={{ padding: "1rem 2.5rem" }}>
          Get a Quote
        </Link>
      </section>
    </>
  );
}
