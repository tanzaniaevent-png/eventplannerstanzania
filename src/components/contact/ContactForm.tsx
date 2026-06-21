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

const BUDGET_RANGES = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $20,000",
  "$20,000 – $100,000",
  "$100,000+",
  "Prefer not to say",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    location: "",
    budget: "",
    message: "",
    _trap: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [refId, setRefId] = useState("");

  const validate = () => {
    const e: Record<string, string> = {};

    const nameParts = form.name.trim().split(/\s+/);
    if (!form.name.trim()) e.name = "Full name is required.";
    else if (nameParts.length < 2) e.name = "Please enter both first and last name.";

    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";

    if (!form.phone.trim()) e.phone = "Phone number is required.";
    else {
      const digits = form.phone.replace(/\D/g, "");
      if (digits.length < 9 || digits.length > 15) e.phone = "Enter a valid phone number (e.g. +255 700 000 000).";
    }

    if (!form.eventType) e.eventType = "Please select an event type.";
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
      setRefId(data.refId || "");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", eventType: "", location: "", budget: "", message: "", _trap: "" });
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
        {refId && (
          <p className="text-xs font-semibold text-ept-green uppercase tracking-widest mb-3">
            Reference: {refId}
          </p>
        )}
        <p className="text-gray-600">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button onClick={() => setStatus("idle")} className="btn-outline mt-6">
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
      <input
        name="_trap"
        value={form._trap}
        onChange={handleChange}
        tabIndex={-1}
        aria-hidden="true"
        style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0 }}
      />

      {/* Name + Email */}
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
            placeholder="First and last name"
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

      {/* Phone + Event Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
            Phone Number <span className="text-ept-green">*</span>
          </label>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+255 700 000 000"
            className={inputClass("phone")}
            autoComplete="tel"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
            Event Type <span className="text-ept-green">*</span>
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
          {errors.eventType && <p className="text-red-500 text-xs mt-1">{errors.eventType}</p>}
        </div>
      </div>

      {/* Location + Budget (optional) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
            Event Location{" "}
            <span className="text-gray-400 normal-case font-normal tracking-normal">(optional)</span>
          </label>
          <input
            name="location"
            type="text"
            value={form.location}
            onChange={handleChange}
            placeholder="e.g. Dar es Salaam, Arusha..."
            className={inputClass("location")}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
            Budget Scope{" "}
            <span className="text-gray-400 normal-case font-normal tracking-normal">(optional)</span>
          </label>
          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className={`${inputClass("budget")} appearance-none cursor-pointer`}
          >
            <option value="">Select budget range...</option>
            {BUDGET_RANGES.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
          Message <span className="text-ept-green">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your event — date, number of guests, services needed, any special requirements..."
          rows={5}
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
