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
  cad: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="24" height="28" rx="0" stroke="#29B8E8" strokeWidth="1.5" />
      <line x1="10" y1="16" x2="22" y2="16" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="21" x2="22" y2="21" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="26" x2="16" y2="26" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M28 8l8 8h-8V8z" stroke="#29B8E8" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M32 20l4 4-4 4" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  cut: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="#29B8E8" strokeWidth="1.5" />
      <circle cx="12" cy="28" r="4" stroke="#29B8E8" strokeWidth="1.5" />
      <line x1="15" y1="15" x2="34" y2="34" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="15" y1="25" x2="34" y2="6" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  engineering: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="6" y="26" width="28" height="8" stroke="#29B8E8" strokeWidth="1.5" />
      <rect x="12" y="18" width="16" height="8" stroke="#29B8E8" strokeWidth="1.5" />
      <rect x="16" y="10" width="8" height="8" stroke="#29B8E8" strokeWidth="1.5" />
      <line x1="20" y1="6" x2="20" y2="10" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  factory: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M4 34V20l8-8v8l8-8v8l8-8v22H4z" stroke="#29B8E8" strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="14" y="26" width="6" height="8" stroke="#29B8E8" strokeWidth="1.5" />
      <line x1="28" y1="8" x2="28" y2="20" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="32" y1="6" x2="32" y2="20" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="36" y1="8" x2="36" y2="20" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" />
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
    <section id="solutions" className="py-32 bg-[#142250]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-[#29B8E8] text-xs font-mono uppercase tracking-[0.25em] mb-3">
            02 — What We Offer
          </div>
          <h2 className="text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Our Solutions
          </h2>
          <div className="w-20 h-0.5 bg-[#29B8E8]" />
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
          {solutions.map((sol, i) => {
            const isActive = activeId === sol.id;
            return (
              <motion.button
                key={sol.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                onClick={() => setActiveId(isActive ? null : sol.id)}
                className={`group flex flex-col items-center justify-center gap-5 p-12 text-center transition-all duration-150 cursor-pointer min-h-[220px] ${
                  isActive
                    ? "bg-[#1E6CC8] border-t-2 border-t-[#29B8E8]"
                    : "bg-[#1B2F68] hover:bg-[#1E3A8A] border-t-2 border-t-transparent hover:border-t-[#29B8E8]"
                }`}
                aria-expanded={isActive}
              >
                <div className={`transition-transform duration-150 ${isActive ? "scale-110" : "group-hover:scale-110"}`}>
                  {icons[sol.icon]}
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wide text-sm leading-snug mb-2">
                    {sol.title}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed">{sol.description}</p>
                </div>
                <div className="flex items-center gap-1 text-[#29B8E8] text-xs font-mono uppercase tracking-wider">
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
              <div className="bg-[#0d1a3d] border border-white/10 border-t-2 border-t-[#29B8E8] p-8 mt-px">
                <div className="text-[#29B8E8] text-xs font-mono uppercase tracking-widest mb-6">
                  {activeSolution?.title} — Product Brands
                </div>
                <div className={`grid gap-6 ${activeBrands.length === 1 ? "grid-cols-1 max-w-md" : "grid-cols-1 sm:grid-cols-2"}`}>
                  {activeBrands.map((brand) => (
                    <div
                      key={brand.id}
                      className="bg-[#1B2F68] border border-white/10 p-6 hover:border-[#29B8E8]/50 transition-colors"
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
