"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";
import BD from "country-flag-icons/react/3x2/BD";
import LK from "country-flag-icons/react/3x2/LK";
import NZ from "country-flag-icons/react/3x2/NZ";
import KE from "country-flag-icons/react/3x2/KE";

const WorldMap = dynamic(() => import("@/components/WorldMap"), { ssr: false });

const FlagMap: Record<string, React.ComponentType<{ title?: string; className?: string }>> = {
  Bangladesh: BD,
  "Sri Lanka": LK,
  "New Zealand": NZ,
  Kenya: KE,
};

const countries = [
  {
    name: "Bangladesh",
    market: "Primary apparel manufacturing hub — one of the world's largest RMG export sectors.",
    phone: "+880 1817-079822",
  },
  {
    name: "Sri Lanka",
    market: "High-value apparel production with focus on quality, compliance, and innovation.",
    phone: "+94 777 395884",
  },
  {
    name: "New Zealand",
    market: "HQ for global operations, strategy, and brand partnerships.",
    phone: "+64 27 5555880",
  },
  {
    name: "Kenya",
    market: "Emerging African apparel market with growing EPZ manufacturing sector.",
    phone: "",
  },
];

export default function Countries() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-14 sm:py-20 lg:py-32 bg-[#0d1a3d]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="text-[#29B8E8] text-xs font-mono uppercase tracking-[0.25em] mb-3">
            09 — Global Presence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Countries We Are In
          </h2>
          <div className="w-20 h-0.5 bg-[#29B8E8]" />
        </motion.div>

        {/* Interactive SVG World Map */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <WorldMap />
        </motion.div>

        {/* Country cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {countries.map((country, i) => {
            const FlagComponent = FlagMap[country.name];
            return (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                className="bg-[#1B2F68] p-4 sm:p-6"
              >
                <div className="mb-3">
                  {FlagComponent && (
                    <FlagComponent
                      title={country.name}
                      className="w-10 h-auto"
                    />
                  )}
                </div>
                <h3 className="text-white font-bold uppercase tracking-wide mb-2">
                  {country.name}
                </h3>
                <p className="text-[#94A3B8] text-xs leading-relaxed mb-3">
                  {country.market}
                </p>
                {country.phone && (
                  <div className="flex items-center gap-2 text-[#29B8E8] text-xs font-mono">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 2h2l1 3-1.5 1.5C4.5 8.5 6.5 9.5 8 9.5L9.5 8l3 1v2c0 0-2 1-4.5-1.5S1 3.5 2 2z" stroke="#29B8E8" strokeWidth="1" strokeLinejoin="round" />
                    </svg>
                    {country.phone}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
