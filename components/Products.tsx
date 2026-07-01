"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { brands } from "@/lib/brands";

const brandLogoMap: Record<string, string> = {
  docad: "/brands/docad-logo.jpg",
  "ozer-makina": "/brands/ozer-logo.png",
  jingwei: "/brands/jwei-logo.svg",
  ctex: "/brands/ctex-logo.png",
  "mu-bigdata": "/brands/mu-logo.jpg",
};

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8l4 4 6-6" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Products() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-32 bg-[#0d1a3d]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-[#29B8E8] text-xs font-mono uppercase tracking-[0.25em] mb-3">
            03 — Our Brands
          </div>
          <h2 className="text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Our Products
          </h2>
          <div className="w-20 h-0.5 bg-[#29B8E8]" />
          <p className="text-[#94A3B8] text-base mt-6 max-w-2xl">
            We represent five world-class brands across CAD software, cutting
            systems, inspection machines, and smart factory software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#1B2F68] border border-white/10 border-t-2 hover:border-t-[#29B8E8] hover:-translate-y-1 transition-all duration-150 cursor-default group flex flex-col"
              style={{ borderTopColor: brand.accentColor }}
            >
              <div className="p-8 flex-1">
                {/* Logo + badges */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                        {brand.number}
                      </span>
                      {brand.country && (
                        <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 border border-[#29B8E8]/40 text-[#29B8E8]">
                          {brand.country}
                        </span>
                      )}
                      <span className="text-[10px] font-mono text-white/30">
                        Est. {brand.founded}
                      </span>
                    </div>
                    {/* Brand logo */}
                    <div className="h-10 mb-3 flex items-center">
                      <Image
                        src={brandLogoMap[brand.id]}
                        alt={`${brand.name} logo`}
                        width={100}
                        height={40}
                        className="object-contain object-left"
                        style={{ filter: "brightness(0) invert(1)", maxHeight: "36px", width: "auto" }}
                      />
                    </div>
                    <h3 className="text-white font-bold text-xl uppercase tracking-tight">
                      {brand.name}
                    </h3>
                    <p className="text-[#29B8E8] text-[10px] font-mono uppercase tracking-widest mt-1">
                      {brand.category}
                    </p>
                  </div>
                  <div className="text-6xl font-bold text-white/5 font-mono leading-none select-none shrink-0">
                    {brand.number}
                  </div>
                </div>

                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {brand.description}
                </p>

                {/* Products */}
                {brand.softwareProducts.length > 0 && (
                  <div className="mb-4">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#94A3B8] mb-2">
                      Software Solutions
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {brand.softwareProducts.map((p, pi) => (
                        <div key={p} className="flex items-center gap-2">
                          <span className="text-[#29B8E8] text-[10px] font-mono w-4 text-right">
                            {String(pi + 1).padStart(2, "0")}
                          </span>
                          <span className="text-white/70 text-sm">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {brand.hardwareProducts.length > 0 && (
                  <div className="mb-6">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#94A3B8] mb-2">
                      Hardware Solutions
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {brand.hardwareProducts.map((p, pi) => (
                        <div key={p} className="flex items-center gap-2">
                          <span className="text-[#29B8E8] text-[10px] font-mono w-4 text-right">
                            {String(pi + 1).padStart(2, "0")}
                          </span>
                          <span className="text-white/70 text-sm">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Benefits */}
                <div className="border-t border-white/10 pt-4 flex flex-col gap-2">
                  {brand.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-2">
                      <CheckIcon />
                      <span className="text-white/60 text-xs leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="px-8 pb-8">
                <Link
                  href={`/products/${brand.id}`}
                  className="flex items-center justify-between bg-[#142250] hover:bg-[#1E6CC8] text-white px-4 py-3 transition-colors duration-150 text-xs font-bold uppercase tracking-widest group/btn"
                >
                  View Full Details
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
