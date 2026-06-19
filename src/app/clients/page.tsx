import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clients & Partners",
  description:
    "Event Planners Tanzania has been trusted by leading organisations including Vodacom, UNDP, CRDB Bank, the US Embassy, and many more across Tanzania.",
};

const clients = [
  { name: "ICB", full: "International Commercial Bank" },
  { name: "Azania Bank", full: "Azania Bank" },
  { name: "Government of Tanzania", full: "Government of Tanzania" },
  { name: "TDB", full: "Trade & Development Bank" },
  { name: "US Embassy", full: "Embassy of the United States" },
  { name: "NMB Bank", full: "NMB Bank — Close to You" },
  { name: "Tanzania Breweries", full: "Tanzania Breweries Ltd" },
  { name: "Vodacom", full: "Vodacom Tanzania" },
  { name: "UNDP", full: "United Nations Development Programme" },
  { name: "DP World", full: "DP World Tanzania" },
  { name: "TMRC", full: "Tanzania Mortgage Refinance Company Ltd" },
  { name: "Africom", full: "Africom Energies & Engineering Group" },
  { name: "UTT AMIS", full: "UTT AMIS" },
  { name: "CRDB Bank", full: "CRDB Bank — The Bank That Listens" },
  { name: "Action Medeor", full: "Action Medeor — International Healthcare" },
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

          {/* Logo grid — text-based until real logos are added */}
          {/* TODO: replace each card with <Image src="/images/clients/[name].png" alt="..." /> once logos are in /public/images/clients/ */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {clients.map((client) => (
              <div
                key={client.name}
                className="group border border-gray-100 rounded-sm p-6 flex flex-col items-center justify-center text-center hover:border-ept-green hover:shadow-md transition-all cursor-default aspect-[4/3]"
              >
                {/* Logo placeholder */}
                <div className="w-10 h-10 bg-gray-100 rounded-sm flex items-center justify-center mb-3 group-hover:bg-ept-green/10 transition-colors">
                  <span className="text-xs font-bold text-gray-400 group-hover:text-ept-green transition-colors">
                    {client.name.slice(0, 3).toUpperCase()}
                  </span>
                </div>
                <p className="text-gray-700 font-semibold text-xs leading-snug">{client.name}</p>
                <p className="text-gray-400 text-[10px] mt-1 leading-snug">{client.full}</p>
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
