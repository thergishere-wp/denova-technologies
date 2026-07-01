"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const offices = [
  {
    country: "Bangladesh",
    phone: "+880 1817-079822",
  },
  {
    country: "Sri Lanka",
    phone: "+94 777 395884",
  },
  {
    country: "New Zealand",
    phone: "+64 27 5555880",
  },
];

const countries = [
  "Bangladesh", "Sri Lanka", "New Zealand", "Kenya", "India",
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
    <section id="contact" className="py-32 bg-[#142250]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-[#29B8E8] text-xs font-mono uppercase tracking-[0.25em] mb-3">
            08 — Get In Touch
          </div>
          <h2 className="text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Ready to Upgrade Your Manufacturing?
          </h2>
          <div className="w-20 h-0.5 bg-[#29B8E8]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-[#94A3B8] text-base leading-relaxed mb-10 max-w-md">
              Our team of experts is ready to help you identify the right
              machinery and software solutions for your factory. Reach out and
              let&apos;s get started.
            </p>

            {/* Offices */}
            <div className="flex flex-col gap-6 mb-10">
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
