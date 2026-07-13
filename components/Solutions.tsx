"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { solutions, brands } from "@/lib/brands";

const brandLogoMap: Record<string, string> = {
  docad: "/brands/docad-logo.jpg",
  "ozer-makina": "/brands/ozer-logo.png",
  jingwei: "/brands/jwei-logo.svg",
  ctex: "/brands/ctex-logo.png",
  "mu-bigdata": "/brands/mu-logo.jpg",
};

const icons: Record<string, React.ReactNode> = {
  // CAD & Pattern Making — blueprint sheet with garment outline + registration marks
  cad: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="5" y="5" width="30" height="30" stroke="#29B8E8" strokeWidth="1.5" />
      <path
        d="M16.5 11c0 2.2 7 2.2 7 0l4.5 2-2 4.5-2.5-1V29h-7V16.5l-2.5 1-2-4.5 4.5-2z"
        stroke="#29B8E8"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9 31h3M10.5 29.5v3" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M28 9h3M29.5 7.5v3" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  // Spreading & Cutting — fabric roll feeding a lay, rotary blade cutting through
  cut: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="9" cy="27" r="5" stroke="#29B8E8" strokeWidth="1.5" />
      <circle cx="9" cy="27" r="1.5" stroke="#29B8E8" strokeWidth="1.5" />
      <path d="M9 22h27M9 32h27" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="26" cy="17" r="6" stroke="#29B8E8" strokeWidth="1.5" />
      <circle cx="26" cy="17" r="1" fill="#29B8E8" />
      <path
        d="M26 24v8"
        stroke="#29B8E8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2.5 3"
      />
    </svg>
  ),
  // Industrial Engineering — analytics panel with bars + gear
  engineering: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="22" height="18" stroke="#29B8E8" strokeWidth="1.5" />
      <path d="M9 20v-5M15 20v-9M21 20v-3" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="30" cy="30" r="5" stroke="#29B8E8" strokeWidth="1.5" />
      <circle cx="30" cy="30" r="1.5" fill="#29B8E8" />
      <path
        d="M30 21v2.5M30 36.5V39M21 30h2.5M36.5 30H39M23.6 23.6l1.8 1.8M34.6 34.6l1.8 1.8M36.4 23.6l-1.8 1.8M25.4 34.6l-1.8 1.8"
        stroke="#29B8E8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  // Smart Factory — factory building linked to network nodes
  factory: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M5 35V23l7-6v6l7-6v6h16v12H5z" stroke="#29B8E8" strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="13" y="29" width="5" height="6" stroke="#29B8E8" strokeWidth="1.5" />
      <circle cx="12" cy="8" r="2.5" stroke="#29B8E8" strokeWidth="1.5" />
      <circle cx="24" cy="5" r="2.5" stroke="#29B8E8" strokeWidth="1.5" />
      <circle cx="33" cy="11" r="2.5" stroke="#29B8E8" strokeWidth="1.5" />
      <path
        d="M12 10.5v4M24 7.5V20M33 13.5v6M14.4 7.4l7.2-1.8M26.3 6.2l4.6 3.2"
        stroke="#29B8E8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
};

export default function Solutions() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const activeSolution = solutions.find((s) => s.id === activeId);
  const activeBrands = activeSolution
    ? brands.filter((b) => activeSolution.brandIds.includes(b.id))
    : [];

  return (
    <section id="solutions" className="py-14 sm:py-20 lg:py-32 bg-[#142250]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="text-[#29B8E8] text-xs font-mono uppercase tracking-[0.25em] mb-3">
            03 — What We Offer
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Our Solutions
          </h2>
          <div className="w-20 h-0.5 bg-[#29B8E8]" />
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-2 gap-px bg-white/10">
          {solutions.map((sol, i) => {
            const isActive = activeId === sol.id;
            return (
              <motion.button
                key={sol.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                onClick={() => setActiveId(isActive ? null : sol.id)}
                className={`group flex flex-col items-center justify-center gap-2 sm:gap-5 p-4 sm:p-12 text-center transition-all duration-150 cursor-pointer min-h-[150px] sm:min-h-[220px] ${
                  isActive
                    ? "bg-[#1E6CC8] border-t-2 border-t-[#29B8E8]"
                    : "bg-[#1B2F68] hover:bg-[#1E3A8A] border-t-2 border-t-transparent hover:border-t-[#29B8E8]"
                }`}
                aria-expanded={isActive}
              >
                <div className={`scale-75 sm:scale-100 transition-transform duration-150 ${isActive ? "sm:scale-110" : "group-hover:scale-110"}`}>
                  {icons[sol.icon]}
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wide text-xs sm:text-sm leading-snug mb-1 sm:mb-2">
                    {sol.title}
                  </h3>
                  <p className="hidden sm:block text-white/50 text-xs leading-relaxed">{sol.description}</p>
                </div>
                <div className="flex items-center gap-1 text-[#29B8E8] text-[10px] sm:text-xs font-mono uppercase tracking-wider">
                  View Products
                  <motion.svg
                    width="14" height="14" viewBox="0 0 14 14" fill="none"
                    animate={{ rotate: isActive ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    aria-hidden="true"
                  >
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.svg>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Expanded panel */}
        <AnimatePresence mode="wait">
          {activeId && activeBrands.length > 0 && (
            <motion.div
              key={activeId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="bg-[#0d1a3d] border border-white/10 border-t-2 border-t-[#29B8E8] p-4 sm:p-8 mt-px">
                <div className="text-[#29B8E8] text-xs font-mono uppercase tracking-widest mb-4 sm:mb-6">
                  {activeSolution?.title} — Product Brands
                </div>
                <div className={`grid gap-4 sm:gap-6 ${activeBrands.length === 1 ? "grid-cols-1 max-w-md" : "grid-cols-1 sm:grid-cols-2"}`}>
                  {activeBrands.map((brand) => (
                    <div
                      key={brand.id}
                      className="bg-[#1B2F68] border border-white/10 p-4 sm:p-6 hover:border-[#29B8E8]/50 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          {(brand.country || brand.founded) && (
                            <div className="text-[#29B8E8] text-xs font-mono uppercase tracking-widest mb-2">
                              {brand.country ? `${brand.country}${brand.founded ? " · " : ""}` : ""}
                              {brand.founded ? `Est. ${brand.founded}` : ""}
                            </div>
                          )}
                          {/* Brand logo */}
                          <div className="h-8 mb-2 flex items-center">
                            <span className="bg-white px-2 py-1 inline-flex items-center">
                              <Image
                                src={brandLogoMap[brand.id]}
                                alt={`${brand.name} logo`}
                                width={80}
                                height={28}
                                className="object-contain"
                                style={{ maxHeight: "24px", width: "auto" }}
                              />
                            </span>
                          </div>
                          <h4 className="text-white font-bold text-lg uppercase tracking-wide">
                            {brand.name}
                          </h4>
                        </div>
                        <div className="text-5xl font-bold text-white/5 font-mono leading-none shrink-0">
                          {brand.number}
                        </div>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed mb-4">
                        {brand.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {[...brand.softwareProducts, ...brand.hardwareProducts]
                          .slice(0, 4)
                          .map((p) => (
                            <span
                              key={p}
                              className="text-[10px] font-mono uppercase tracking-wider bg-[#142250] text-[#29B8E8] px-2 py-1"
                            >
                              {p}
                            </span>
                          ))}
                      </div>
                      <Link
                        href={`/products/${brand.id}`}
                        className="inline-flex items-center gap-2 text-[#29B8E8] text-xs font-bold uppercase tracking-wider hover:gap-3 transition-all duration-150"
                      >
                        See Full Details
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <path d="M3 7h8M7 3l4 4-4 4" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
