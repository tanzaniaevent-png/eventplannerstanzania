import type { Metadata } from "next";
import { Lightbulb, HeartHandshake, Shield, Award, Users, Zap, Target } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Event Planners Tanzania — our mission, vision, and core values that drive us to deliver unforgettable events across Tanzania and East Africa.",
};

const coreValues = [
  {
    icon: Award,
    name: "Professionalism",
    desc: "We maintain the highest standards of conduct and expertise in every engagement.",
  },
  {
    icon: Lightbulb,
    name: "Creativity & Innovation",
    desc: "We bring fresh ideas and cutting-edge technology to every event we produce.",
  },
  {
    icon: HeartHandshake,
    name: "Customer Satisfaction",
    desc: "Your success is our success. We go beyond expectations to deliver results.",
  },
  {
    icon: Shield,
    name: "Reliability",
    desc: "When we commit, we deliver — on time, within budget, without compromise.",
  },
  {
    icon: Zap,
    name: "Quality Excellence",
    desc: "Every element — from sound to staging — is executed to the highest quality.",
  },
  {
    icon: Users,
    name: "Teamwork",
    desc: "Our strength is our people: a skilled, collaborative team working in unison.",
  },
  {
    icon: Target,
    name: "Integrity",
    desc: "We operate with transparency, honesty, and accountability in all we do.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-ept-navy pt-32 pb-20 px-6">
        <div className="container-max">
          <p className="text-ept-green text-xs font-semibold uppercase tracking-[0.2em] mb-4">About Us</p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-2xl">
            We Turn Events into Extraordinary Experiences
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed">
            Based in Dar es Salaam — delivering flawless events across Tanzania and East Africa.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-ept-green text-xs font-semibold uppercase tracking-[0.2em] mb-4">Who We Are</p>
              <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Tanzania&apos;s Premier Event Production Company
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Event Planners Tanzania is a professional event management company based in Dar es Salaam, Tanzania, offering comprehensive solutions for corporate and social events. We specialize in delivering high-quality event experiences through a wide range of services including corporate event planning, sound systems, stage and truss setups, lighting systems, LED screens, event furniture, branding, and full event management.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                With strong local knowledge, reliable partnerships, and a passionate team, we handle every aspect from planning to execution — ensuring your event is flawlessly delivered and exceeds every expectation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services" className="btn-primary">Our Services</Link>
                <Link href="/contact" className="btn-outline">Get in Touch</Link>
              </div>
            </div>

            {/* Office photo placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] bg-ept-navy rounded-sm overflow-hidden flex items-center justify-center">
                {/* TODO: replace with <Image src="/images/team/office.jpg" alt="EPT office Twiga House" fill className="object-cover" /> */}
                <div className="text-center px-8">
                  <div className="w-14 h-14 bg-ept-green/20 rounded-sm flex items-center justify-center mx-auto mb-4">
                    <div className="w-7 h-7 bg-ept-green rounded-sm" />
                  </div>
                  <p className="text-white/40 text-sm">Office / Team Photo</p>
                  <p className="text-white/25 text-xs mt-1">/public/images/team/</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-ept-green text-white p-5 rounded-sm">
                <p className="font-heading font-bold text-2xl">15+</p>
                <p className="text-white/80 text-xs uppercase tracking-wide">Major Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-ept-navy rounded-sm p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-ept-green/5 rounded-full translate-x-1/2 -translate-y-1/2" />
              <p className="text-ept-green text-xs font-semibold uppercase tracking-[0.2em] mb-4">Our Mission</p>
              <h2 className="font-heading text-2xl font-bold text-white mb-5 leading-snug">
                Delivering Excellence, Every Time
              </h2>
              <p className="text-white/65 leading-relaxed">
                To provide professional, creative, and reliable event solutions by combining advanced technology, skilled expertise, and exceptional customer service, ensuring every event is executed flawlessly and exceeds client expectations.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white border border-gray-100 rounded-sm p-10 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-ept-green/5 rounded-full -translate-x-1/2 translate-y-1/2" />
              <p className="text-ept-green text-xs font-semibold uppercase tracking-[0.2em] mb-4">Our Vision</p>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-5 leading-snug">
                Leading Events Across Africa
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To become a leading event management company in Tanzania and across Africa, recognized for delivering innovative, high-quality, and unforgettable event experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="text-center mb-14">
            <p className="text-ept-green text-xs font-semibold uppercase tracking-[0.2em] mb-3">What Drives Us</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, i) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.name}
                  className="text-center p-8 border border-gray-100 rounded-sm hover:border-ept-green hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-ept-green/10 rounded-sm flex items-center justify-center mx-auto mb-5 group-hover:bg-ept-green transition-colors">
                    <Icon size={22} className="text-ept-green group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-gray-900 mb-3">{val.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-ept-navy py-20 px-6 text-center">
        <p className="text-ept-green text-xs font-semibold uppercase tracking-[0.2em] mb-4">Work With Us</p>
        <h2 className="font-heading text-4xl font-bold text-white mb-5">Ready to Work Together?</h2>
        <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">
          Reach out to our team and let&apos;s start planning your next event.
        </p>
        <Link href="/contact" className="btn-primary" style={{ padding: "1rem 2.5rem" }}>
          Get a Quote
        </Link>
      </section>
    </>
  );
}
