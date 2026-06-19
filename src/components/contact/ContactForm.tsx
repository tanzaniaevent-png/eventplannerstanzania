"use client";

import { useState } from "react";
import { CheckCircle, AlertCircle, Loader } from "lucide-react";

const EVENT_TYPES = [
  "Corporate Conference",
  "Product Launch",
  "Award Ceremony",
  "Business Networking Event",
  "Company Celebration",
  "Press Conference",
  "Gala Dinner",
  "Wedding",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
    _trap: "", // honeypot
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", eventType: "", message: "", _trap: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-ept-green/10 border border-ept-green/30 rounded-sm p-10 text-center">
        <CheckCircle size={48} className="text-ept-green mx-auto mb-4" />
        <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-outline mt-6"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  const inputClass = (field: string) =>
    `w-full border rounded-sm px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors ${
      errors[field]
        ? "border-red-400 bg-red-50 focus:border-red-500"
        : "border-gray-200 bg-white focus:border-ept-green"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot — hidden from humans, bots fill it */}
      <input
        name="_trap"
        value={form._trap}
        onChange={handleChange}
        tabIndex={-1}
        aria-hidden="true"
        style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0 }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
            Full Name <span className="text-ept-green">*</span>
          </label>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClass("name")}
            autoComplete="name"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
            Email Address <span className="text-ept-green">*</span>
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className={inputClass("email")}
            autoComplete="email"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
            Phone Number
          </label>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+255 xxx xxx xxx"
            className={inputClass("phone")}
            autoComplete="tel"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
            Event Type
          </label>
          <select
            name="eventType"
            value={form.eventType}
            onChange={handleChange}
            className={`${inputClass("eventType")} appearance-none cursor-pointer`}
          >
            <option value="">Select event type...</option>
            {EVENT_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
          Message <span className="text-ept-green">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your event — date, location, number of guests, services needed..."
          rows={6}
          className={inputClass("message")}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-sm px-4 py-3 text-sm text-red-700">
          <AlertCircle size={16} className="shrink-0" />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center"
        style={{ padding: "1rem" }}
      >
        {status === "loading" ? (
          <>
            <Loader size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>

      <p className="text-gray-400 text-xs text-center">
        We typically respond within 24 hours. For urgent enquiries, call{" "}
        <a href="tel:+255655600000" className="text-ept-green hover:underline">
          +255 655 600 000
        </a>
      </p>
    </form>
  );
}
