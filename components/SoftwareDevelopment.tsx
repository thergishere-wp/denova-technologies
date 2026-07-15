"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const capabilities = [
  {
    number: "01",
    title: "Production Planning & Cut Plan Systems",
    items: [
      "Fabric & cut planning management",
      "Production scheduling & capacity planning",
      "Marker & fabric utilization analysis",
      "Real-time production monitoring",
    ],
  },
  {
    number: "02",
    title: "Enterprise Resource Planning (ERP)",
    items: [
      "Inventory & warehouse management",
      "Procurement & purchasing",
      "Production management",
      "Sales & finance integration",
      "Management dashboards & reporting",
    ],
  },
  {
    number: "03",
    title: "Product Lifecycle Management (PLM)",
    items: [
      "Style & product development management",
      "Bill of Materials (BOM) management",
      "Sample tracking & approvals",
      "Collaboration between departments & customers",
    ],
  },
  {
    number: "04",
    title: "Industrial Engineering (IE) Solutions",
    items: [
      "SMV management",
      "Production target setting",
      "Efficiency monitoring & KPI dashboards",
      "Work-study & line balancing tools",
    ],
  },
];

const customAreas = [
  "Merchandising",
  "Planning",
  "Production",
  "Quality Assurance",
  "Maintenance",
  "Human Resources",
  "Stores and Inventory",
  "Compliance and Sustainability",
  "Finance and Administration",
  "Management Information Systems (MIS)",
];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5" aria-hidden="true">
      <path d="M3 8l3.5 3.5L13 4.5" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SoftwareDevelopment() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-14 sm:py-20 lg:py-32 bg-[#0d1a3d]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            <div>
              <div className="text-[#29B8E8] text-xs font-mono uppercase tracking-[0.25em] mb-3">
                07 — Software Development
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-4">
                Software Development Solutions
              </h2>
              <div className="w-20 h-0.5 bg-[#29B8E8] mb-6" />
            </div>
            {/* Partner: SynthiaSync */}
            <div className="shrink-0 sm:text-right">
              <div className="text-white/70 text-xs sm:text-sm font-mono uppercase tracking-wider mb-2.5">
                In Partnership With
              </div>
              <span className="bg-white px-4 py-3 inline-flex items-center">
                <Image
                  src="/brands/synthiasync-logo.png"
                  alt="SynthiaSync — Your Pathway to Profitability logo"
                  width={160}
                  height={37}
                  className="object-contain"
                  style={{ maxHeight: "34px", width: "auto" }}
                />
              </span>
            </div>
          </div>
          <p className="text-[#29B8E8] font-semibold text-lg mb-3">
            Tailor-Made Software Solutions for the Apparel Industry
          </p>
          <p className="text-[#94A3B8] text-base leading-relaxed max-w-3xl mb-3">
            DeNova Technologies Ltd offers specialized software development services designed
            exclusively for apparel manufacturers. Backed by our strong and experienced software
            development team in Sri Lanka, we develop and customize software solutions to meet the
            unique requirements of every department within an apparel manufacturing organization.
          </p>
          <p className="text-[#94A3B8] text-base leading-relaxed max-w-3xl">
            Our objective is to help manufacturers improve efficiency, increase visibility,
            streamline operations, and make data-driven decisions through innovative technology
            solutions.
          </p>
        </motion.div>

        {/* 2×2 capability cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 mb-6"
        >
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              className="bg-[#1B2F68] border-t-2 border-t-[#29B8E8] p-5 sm:p-7"
            >
              <div className="flex items-start gap-3 mb-5">
                <span className="text-[#29B8E8] text-sm font-mono font-bold shrink-0">
                  {cap.number}
                </span>
                <h3 className="text-white font-bold text-lg leading-snug">{cap.title}</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {cap.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-[#94A3B8] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom software development strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-[#142250] border border-[#29B8E8]/30 p-5 sm:p-8"
        >
          <div className="flex items-start gap-3 mb-4 sm:mb-6">
            <span className="text-[#29B8E8] text-sm font-mono font-bold shrink-0">05</span>
            <h3 className="text-white font-bold text-lg leading-snug">
              Custom Software Development
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-x-4 sm:gap-x-10 gap-y-3">
            {customAreas.map((area) => (
              <div key={area} className="flex items-center gap-3">
                <CheckIcon />
                <span className="text-white text-sm font-medium">{area}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
