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

const icons: Record<string, string> = {
  cad: "/icons/solutions/cad-pattern.svg",
  cut: "/icons/solutions/spreading-cutting.svg",
  engineering: "/icons/solutions/industrial-engineering.svg",
  factory: "/icons/solutions/smart-factory.svg",
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
                <div className={`relative w-16 h-16 sm:w-24 sm:h-24 transition-transform duration-150 ${isActive ? "sm:scale-110" : "group-hover:scale-110"}`}>
                  <Image src={icons[sol.icon]} alt="" fill unoptimized className="object-contain" aria-hidden="true" />
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
