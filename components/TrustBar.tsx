"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M18 3L4 9v9c0 8.25 6 15.99 14 18 8-2.01 14-9.75 14-18V9L18 3z" stroke="#29B8E8" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 18l4 4 8-8" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    heading: "AUTHORIZED DISTRIBUTOR",
    sub: "Official channel partner — not gray market",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <circle cx="18" cy="14" r="6" stroke="#29B8E8" strokeWidth="1.5" />
        <path d="M6 30c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M26 20l3 3-3 3" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    heading: "AFTER-SALES SUPPORT",
    sub: "Local engineers, rapid response",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M18 4l2.47 7.6H28l-6.24 4.53 2.38 7.34L18 19.1l-6.14 4.37 2.38-7.34L8 11.6h7.53L18 4z" stroke="#29B8E8" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="18" y1="26" x2="18" y2="32" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="32" x2="24" y2="32" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    heading: "25+ YEARS EXPERTISE",
    sub: "Backed by global brand experience",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M6 28l8-8 6 6 10-14" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="30" cy="10" r="3" stroke="#29B8E8" strokeWidth="1.5" />
      </svg>
    ),
    heading: "LOW OWNERSHIP COSTS",
    sub: "Maximize ROI from day one",
  },
];

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#1E6CC8] border-y border-white/10 py-4 sm:py-10" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {items.map((item, i) => (
            <motion.div
              key={item.heading}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`flex items-center gap-2 sm:gap-4 py-3 px-3 sm:py-6 sm:px-6 ${
                i < items.length - 1 ? "border-r border-white/20" : ""
              }`}
            >
              <div className="shrink-0 scale-75 sm:scale-100">{item.icon}</div>
              <div>
                <div className="text-white font-bold text-[11px] sm:text-sm uppercase tracking-wide leading-tight">
                  {item.heading}
                </div>
                <div className="text-white/60 text-[10px] sm:text-xs mt-0.5 sm:mt-1 hidden sm:block">{item.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
