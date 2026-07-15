"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const WHATSAPP_LINK = "https://wa.me/94777395884";

function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 4C9.373 4 4 9.373 4 16c0 2.362.687 4.564 1.875 6.418L4 28l5.79-1.831A11.94 11.94 0 0016 28c6.627 0 12-5.373 12-12S22.627 4 16 4z"
        fill="#25D366"
      />
      <path
        d="M22.3 18.5c-.3-.15-1.8-.9-2.1-1-.3-.1-.5-.15-.7.15-.2.3-.8 1-.95 1.2-.15.2-.35.2-.65.05-.3-.15-1.25-.45-2.4-1.45-.9-.8-1.5-1.8-1.65-2.1-.15-.3 0-.45.15-.6.15-.15.3-.35.45-.55.15-.15.2-.3.3-.5.1-.2.05-.35 0-.5-.05-.15-.7-1.7-.95-2.3-.25-.6-.5-.5-.7-.5h-.6c-.2 0-.5.05-.75.35-.25.3-1 1-1 2.4s1.05 2.85 1.2 3.05c.15.2 2.05 3.15 5 4.4.7.3 1.25.5 1.7.6.7.2 1.35.15 1.85.1.55-.1 1.8-.75 2.05-1.45.25-.7.25-1.3.15-1.45-.1-.15-.3-.2-.6-.35z"
        fill="white"
      />
    </svg>
  );
}

const offices = [
  {
    country: "Sri Lanka",
    phone: "+94 777 395884",
  },
  {
    country: "Bangladesh",
    phone: "+880 1817-079822",
  },
  {
    country: "New Zealand",
    phone: "+64 27 5555880",
  },
];

const countries = [
  "Sri Lanka", "Bangladesh", "Kenya", "New Zealand", "India",
  "Pakistan", "Vietnam", "Cambodia", "Indonesia", "Other",
];

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("loading");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      country: (form.elements.namedItem("country") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-32 bg-[#142250]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="text-[#29B8E8] text-xs font-mono uppercase tracking-[0.25em] mb-3">
            10 — Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Ready to Upgrade Your Manufacturing?
          </h2>
          <div className="w-20 h-0.5 bg-[#29B8E8]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-[#94A3B8] text-base leading-relaxed mb-6 sm:mb-10 max-w-md">
              Our team of experts is ready to help you identify the right
              machinery and software solutions for your factory. Reach out and
              let&apos;s get started.
            </p>

            {/* WhatsApp — fastest channel: QR to scan on desktop, direct button on mobile */}
            <div className="mb-6 sm:mb-10 bg-[#1B2F68] border border-white/10 border-t-2 border-t-[#25D366] p-5 sm:p-6 flex items-center gap-6">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2.5 mb-2">
                  <WhatsAppIcon size={24} />
                  <span className="text-white font-bold uppercase tracking-wide text-sm sm:text-base">
                    Chat on WhatsApp
                  </span>
                </div>
                <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed">
                  Get instant answers from our team — no forms, no waiting.
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:hidden mt-4 inline-flex items-center justify-center gap-2 w-full bg-[#25D366] text-[#0d1a3d] font-bold uppercase tracking-widest text-xs px-6 py-3.5 hover:bg-[#20BD5A] transition-colors duration-150 cursor-pointer"
                >
                  <WhatsAppIcon size={18} />
                  Message Us Now
                </a>
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex flex-col items-center gap-2 shrink-0 group"
                aria-label="Open WhatsApp chat with DeNova Technologies"
              >
                <div className="bg-white p-2 transition-transform duration-150 group-hover:scale-105">
                  <Image
                    src="/whatsapp-qr.png"
                    alt="QR code to chat with DeNova Technologies on WhatsApp"
                    width={128}
                    height={128}
                  />
                </div>
                <span className="text-[#94A3B8] text-[10px] font-mono uppercase tracking-widest group-hover:text-[#25D366] transition-colors">
                  Scan to Chat
                </span>
              </a>
            </div>

            {/* Offices */}
            <div className="flex flex-col gap-4 sm:gap-6 mb-6 sm:mb-10">
              {offices.map((office) => (
                <div key={office.country} className="flex items-center gap-4 border-b border-white/10 pb-6">
                  <div className="w-10 h-10 bg-[#1B2F68] flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path d="M3 3h3l1.5 4.5-2 1.5c1 2 3 4 5 5l1.5-2L16 13.5V16.5c0 .5-.5 1-1 1C5 17 1 9 1 4c0-.5.5-1 1-1z" stroke="#29B8E8" strokeWidth="1.2" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[#94A3B8] text-[10px] font-mono uppercase tracking-widest mb-0.5">
                      {office.country}
                    </div>
                    <div className="text-white font-bold tracking-wide">{office.phone}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Email + web */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#1B2F68] flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <rect x="1" y="3" width="16" height="12" rx="0" stroke="#29B8E8" strokeWidth="1.2" />
                    <path d="M1 4l8 7 8-7" stroke="#29B8E8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-[#94A3B8] text-[10px] font-mono uppercase tracking-widest mb-0.5">
                    Global Email
                  </div>
                  <a
                    href="mailto:sales@denovatec.com"
                    className="text-white font-bold hover:text-[#29B8E8] transition-colors"
                  >
                    sales@denovatec.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#1B2F68] flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <circle cx="9" cy="9" r="8" stroke="#29B8E8" strokeWidth="1.2" />
                    <path d="M1 9h16M9 1c-2 2.5-3 5-3 8s1 5.5 3 8M9 1c2 2.5 3 5 3 8s-1 5.5-3 8" stroke="#29B8E8" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-[#94A3B8] text-[10px] font-mono uppercase tracking-widest mb-0.5">
                    Website
                  </div>
                  <span className="text-white font-bold">www.denovatec.com</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="text-[10px] font-mono uppercase tracking-widest text-[#94A3B8] block mb-1.5">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full bg-[#1B2F68] border border-white/10 text-white px-4 py-3 text-sm placeholder-white/30 focus:border-[#29B8E8] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="company" className="text-[10px] font-mono uppercase tracking-widest text-[#94A3B8] block mb-1.5">
                  Company Name *
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  className="w-full bg-[#1B2F68] border border-white/10 text-white px-4 py-3 text-sm placeholder-white/30 focus:border-[#29B8E8] focus:outline-none transition-colors"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label htmlFor="country" className="text-[10px] font-mono uppercase tracking-widest text-[#94A3B8] block mb-1.5">
                  Country *
                </label>
                <select
                  id="country"
                  name="country"
                  required
                  className="w-full bg-[#1B2F68] border border-white/10 text-white px-4 py-3 text-sm focus:border-[#29B8E8] focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="">Select your country</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="text-[10px] font-mono uppercase tracking-widest text-[#94A3B8] block mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-[#1B2F68] border border-white/10 text-white px-4 py-3 text-sm placeholder-white/30 focus:border-[#29B8E8] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={formState === "loading" || formState === "success"}
                className={`w-full py-4 text-sm font-bold uppercase tracking-widest transition-colors duration-150 cursor-pointer flex items-center justify-center gap-2 ${
                  formState === "success"
                    ? "bg-green-700 text-white"
                    : formState === "error"
                    ? "bg-red-700 text-white hover:bg-red-600"
                    : "bg-[#1E6CC8] text-white hover:bg-[#29B8E8]"
                } disabled:opacity-60 disabled:cursor-not-allowed`}
              >
                {formState === "loading" && (
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                )}
                {formState === "idle" && "Send Enquiry"}
                {formState === "loading" && "Sending..."}
                {formState === "success" && "Enquiry Sent — We'll Be In Touch"}
                {formState === "error" && "Error — Try Again"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
