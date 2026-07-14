"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const sparePartsCategories = [
  "Automatic Fabric Spreaders",
  "Automatic Cutting Machines",
  "Plotters & Pattern Cutters",
  "Fabric Inspection Machines",
  "Fabric Relaxing Machines",
];

const serviceCards = [
  {
    title: "Machinery Installation & Commissioning",
    bullets: [
      "Installation of new machinery & equipment",
      "Machine setup & calibration",
      "Production start-up support",
    ],
  },
  {
    title: "Preventive Maintenance Services",
    bullets: [
      "Scheduled maintenance programs",
      "Machine health inspections",
      "Performance optimization & fine-tuning",
    ],
  },
  {
    title: "Breakdown & Emergency Support",
    bullets: [
      "On-site troubleshooting & repairs",
      "Emergency technical support",
      "Rapid response to minimize production downtime",
    ],
  },
  {
    title: "Annual Maintenance Contracts (AMC)",
    bullets: [
      "Comprehensive maintenance agreements",
      "Periodic inspections & servicing",
      "Technical support & spare parts",
    ],
  },
];

export default function MachineryServices() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-14 sm:py-20 lg:py-32 bg-[#142250]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="text-[#29B8E8] text-xs font-mono uppercase tracking-[0.25em] mb-3">
            06 — Machinery Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Machinery Services &amp; Spare Parts
          </h2>
          <div className="w-20 h-0.5 bg-[#29B8E8] mb-6" />
          <p className="text-[#29B8E8] font-semibold text-lg mb-3">
            Professional Service, Maintenance &amp; Genuine Spare Parts Supply
          </p>
          <p className="text-[#94A3B8] text-base leading-relaxed max-w-3xl">
            DeNova Technologies Ltd provides comprehensive technical support services, preventive
            maintenance solutions, and authenticated spare parts for most of the world&apos;s leading
            cutting room machinery brands.
          </p>
        </motion.div>

        {/* 2×2 service cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 mb-10"
        >
          {serviceCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              className="bg-[#1B2F68] border-t-2 border-t-[#29B8E8] p-5 sm:p-7"
            >
              <h3 className="text-white font-bold text-lg mb-5 leading-snug">{card.title}</h3>
              <ul className="flex flex-col gap-3">
                {card.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8l3.5 3.5L13 4.5"
                        stroke="#29B8E8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-[#94A3B8] text-sm leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Spare parts callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-[#0d1a3d] border border-[#29B8E8]/30 p-5 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6"
        >
          <div>
            <p className="text-[#29B8E8] text-xs font-mono uppercase tracking-widest mb-3">
              Spare Parts Supply
            </p>
            <p className="text-white/80 text-sm leading-relaxed max-w-2xl">
              We supply genuine and authenticated spare parts for most leading cutting room machinery
              brands — ensuring maximum machine uptime and extended equipment life.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {sparePartsCategories.map((category) => (
                <span
                  key={category}
                  className="text-[10px] font-mono uppercase tracking-wider bg-[#1B2F68] border border-[#29B8E8]/30 text-[#29B8E8] px-3 py-1.5"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
          <a
            href="#contact"
            className="bg-[#1E6CC8] text-white text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-[#29B8E8] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Contact Us for Spare Parts
          </a>
        </motion.div>
      </div>
    </section>
  );
}
