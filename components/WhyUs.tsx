"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const differentiators = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="11" stroke="#1E6CC8" strokeWidth="1.5" />
        <path d="M8 14c0-3.314 2.686-6 6-6s6 2.686 6 6-2.686 6-6 6" stroke="#1E6CC8" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 11v3l2 2" stroke="#1E6CC8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    heading: "Global Brands, Local Expertise",
    body: "World-leading machinery backed by engineers who understand Sri Lanka and Bangladesh's manufacturing realities.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3L4 7v7c0 6.188 4.5 11.993 10 13.5 5.5-1.507 10-7.312 10-13.5V7L14 3z" stroke="#1E6CC8" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 14l3 3 6-6" stroke="#1E6CC8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    heading: "Authorized Distributor",
    body: "Direct official partnership — genuine parts, warranty coverage, and factory-trained support. Not gray market.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="12" cy="10" r="4" stroke="#1E6CC8" strokeWidth="1.5" />
        <path d="M4 24c0-4.418 3.582-8 8-8" stroke="#1E6CC8" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="18" r="5" stroke="#1E6CC8" strokeWidth="1.5" />
        <path d="M18 18l1.5 1.5L22 16" stroke="#1E6CC8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    heading: "Full After-Sales Support",
    body: "Local engineers on the ground for installation, training, maintenance, and spare parts — fast response guaranteed.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4l2.47 7.6H24l-6.24 4.53 2.38 7.34L14 19.1l-6.14 4.37 2.38-7.34L4 11.6h7.53L14 4z" stroke="#1E6CC8" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    heading: "25+ Year Team Experience",
    body: "Leadership with hands-on expertise from working with major apparel brands in the USA, Europe, and China.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M6 22l6-8 4 4 4-10 4 4" stroke="#1E6CC8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="4" y1="22" x2="24" y2="22" stroke="#1E6CC8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    heading: "Low Total Ownership Cost",
    body: "Energy-efficient machines, reduced material waste, and local support minimize total cost of ownership from day one.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="4" stroke="#1E6CC8" strokeWidth="1.5" />
        <path d="M14 3v3M14 22v3M3 14h3M22 14h3" stroke="#1E6CC8" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.22 6.22l2.12 2.12M19.66 19.66l2.12 2.12M19.66 6.22l-2.12 2.12M6.22 19.66l2.12-2.12" stroke="#1E6CC8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    heading: "Present in 4 Countries",
    body: "Active offices in Sri Lanka, Bangladesh, Kenya, and New Zealand — a growing global footprint.",
  },
];

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-14 sm:py-20 lg:py-32 bg-[#F0F4FF]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 lg:mb-16 text-center"
        >
          <div className="flex justify-center mb-4">
            <span className="bg-white border border-[#142250]/10 px-3 py-1.5 inline-flex items-center">
              <Image
                src="/denova-logo.png"
                alt="DeNova Technologies Ltd"
                width={100}
                height={32}
                className="object-contain"
                style={{ maxHeight: "24px", width: "auto" }}
              />
            </span>
          </div>
          <div className="text-[#1E6CC8] text-xs font-mono uppercase tracking-[0.25em] mb-3">
            05 — Our Edge
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#142250] mb-4">
            Why Partner With Us
          </h2>
          <div className="w-20 h-0.5 bg-[#29B8E8] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-[#142250]/10">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.heading}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-white p-5 sm:p-8 hover:bg-[#F0F4FF] transition-colors duration-150 group cursor-default"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-150 w-fit">
                {d.icon}
              </div>
              <h3 className="text-[#142250] font-bold text-base uppercase tracking-wide mb-3">
                {d.heading}
              </h3>
              <p className="text-[#475569] text-sm leading-relaxed">{d.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
