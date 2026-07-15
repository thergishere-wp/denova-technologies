"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const consultancyAreas = [
  "Warehouse and Raw Material Management",
  "Fabric Inspection and Inventory Control",
  "Cutting Department Optimization",
  "Sewing Production Planning and Line Balancing",
  "Industrial Engineering (IE) Solutions",
  "Production Monitoring and Efficiency Improvement",
  "Quality Assurance and Quality Control (QA/QC)",
  "Finishing and Packing Operations",
  "Maintenance and Engineering Support",
  "Lean Manufacturing and Continuous Improvement",
  "Supply Chain and Process Optimization",
  "Training and Skill Development for Factory Teams",
];

const objectives = [
  "Higher productivity and efficiency",
  "Reduced operational costs",
  "Improved product quality",
  "Better resource utilization",
  "Sustainable and profitable growth",
];

export default function Consultancy() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-14 sm:py-20 lg:py-32 bg-[#0d1a3d]" ref={ref}>
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
                05 — Services
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-4">
                Apparel Factory Consultancy
              </h2>
              <div className="w-20 h-0.5 bg-[#29B8E8] mb-6" />
            </div>
            {/* Partner: BuildTeck Asia */}
            <div className="shrink-0 sm:text-right">
              <div className="text-white/40 text-[10px] font-mono uppercase tracking-widest mb-2">
                In Partnership With
              </div>
              <span className="bg-white px-4 py-3 inline-flex items-center">
                <Image
                  src="/brands/buildteck-logo.png"
                  alt="BuildTeck Asia logo"
                  width={100}
                  height={73}
                  className="object-contain"
                  style={{ maxHeight: "64px", width: "auto" }}
                />
              </span>
            </div>
          </div>
          <p className="text-[#29B8E8] font-semibold text-lg mb-3">
            End-to-End Consultancy for Apparel Manufacturing
          </p>
          <p className="text-[#94A3B8] text-base leading-relaxed max-w-3xl mb-3">
            At DeNova Technologies Ltd, we provide comprehensive consultancy services to apparel
            manufacturers, covering the entire production process — from the warehouse to finished
            goods.
          </p>
          <p className="text-[#94A3B8] text-base leading-relaxed max-w-3xl">
            Our experienced team works closely with factories to improve productivity, efficiency,
            quality, and profitability across every department.
          </p>
        </motion.div>

        {/* Grid of 12 areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-10 mb-8 sm:mb-14"
        >
          {consultancyAreas.map((area, i) => (
            <div
              key={area}
              className="flex items-start gap-2 sm:gap-4 bg-[#142250] border border-white/10 p-3 sm:p-5 hover:border-[#29B8E8]/40 transition-colors"
            >
              <span className="text-[#29B8E8] text-xs sm:text-sm font-mono font-bold shrink-0 mt-0.5 w-5 sm:w-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-white font-semibold text-xs sm:text-sm leading-snug">{area}</span>
            </div>
          ))}
        </motion.div>

        {/* Objectives strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-[#142250] border border-[#29B8E8]/30 p-5 sm:p-8"
        >
          <p className="text-[#29B8E8] text-xs font-mono uppercase tracking-widest mb-2">
            Our Objectives
          </p>
          <p className="text-white/60 text-sm mb-4 sm:mb-5">
            To help apparel manufacturers achieve:
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {objectives.map((obj) => (
              <div key={obj} className="flex items-center gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden="true"
                  className="shrink-0"
                >
                  <circle cx="9" cy="9" r="8" stroke="#29B8E8" strokeWidth="1.5" />
                  <path
                    d="M5.5 9l2.5 2.5 4.5-4.5"
                    stroke="#29B8E8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-white text-sm font-medium">{obj}</span>
              </div>
            ))}
          </div>
          <p className="text-[#94A3B8] text-sm leading-relaxed mt-6 pt-5 border-t border-white/10 max-w-3xl">
            DeNova Technologies Ltd serves as a strategic partner for apparel factories, delivering
            practical solutions and expert guidance in every department — from warehouse operations
            to finished goods dispatch.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
