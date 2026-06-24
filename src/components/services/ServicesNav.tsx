"use client";

import { useState, useEffect } from "react";

export const SERVICE_NAV_ITEMS = [
  { id: "corporate-events", label: "Corporate Events" },
  { id: "sound-systems", label: "Sound Systems" },
  { id: "stage-truss", label: "Stage & Truss" },
  { id: "lighting", label: "Lighting Systems" },
  { id: "led-screens", label: "LED Screens" },
  { id: "furniture", label: "Furniture & Setup" },
  { id: "branding", label: "Branding & Design" },
  { id: "event-management", label: "Event Management" },
  { id: "catering", label: "Catering" },
  { id: "logistics", label: "Logistics" },
  { id: "destination", label: "Destination Mgmt" },
  { id: "interpretation", label: "Interpretation" },
  { id: "photography", label: "Photography & Video" },
  { id: "wedding-planning", label: "Wedding Planning" },
  { id: "exhibitions", label: "Exhibitions" },
  { id: "hotel-booking", label: "Hotel Booking" },
  { id: "business-mission", label: "Business Mission" },
  { id: "meet-and-assist", label: "Meet & Assist" },
];

function useActiveSection() {
  const [active, setActive] = useState("corporate-events");
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SERVICE_NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);
  return active;
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function ServicesNavDesktop() {
  const active = useActiveSection();
  return (
    <nav className="sticky top-24 self-start w-52 shrink-0">
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 px-3">Services</p>
      <ul className="space-y-1">
        {SERVICE_NAV_ITEMS.map(({ id, label }) => (
          <li key={id}>
            <button
              onClick={() => scrollTo(id)}
              className={`w-full text-left px-3 py-2 text-sm rounded-sm transition-colors ${
                active === id
                  ? "bg-ept-green/10 text-ept-green font-semibold border-l-2 border-ept-green"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function ServicesNavMobile() {
  const active = useActiveSection();
  return (
    <div className="overflow-x-auto flex gap-2 pb-3 [scrollbar-width:none] [-webkit-overflow-scrolling:touch]">
      {SERVICE_NAV_ITEMS.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className={`shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-colors border ${
            active === id
              ? "bg-ept-green text-white border-ept-green"
              : "border-gray-200 text-gray-600 hover:border-ept-green hover:text-ept-green bg-white"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
