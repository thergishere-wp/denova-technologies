"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    title: "OUR MISSION",
    body: "To empower apparel and non-apparel manufacturers with world-class machinery, advanced software, and smart factory solutions that drive efficiency, reduce waste, and accelerate production.",
    borderColor: "#29B8E8",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="10" stroke="#29B8E8" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="4" stroke="#29B8E8" strokeWidth="1.5" />
        <line x1="14" y1="4" x2="14" y2="7" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="14" y1="21" x2="14" y2="24" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="4" y1="14" x2="7" y2="14" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="21" y1="14" x2="24" y2="14" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "OUR VISION",
    body: "To be a leading technology partner for the global apparel industry, driving innovation through advanced machinery, intelligent software, and smart factory solutions that redefine speed, efficiency, quality, and sustainability.",
    borderColor: "#1E6CC8",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <ellipse cx="14" cy="14" rx="11" ry="6" stroke="#29B8E8" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="3" stroke="#29B8E8" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function WhatWeDo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-[#F0F4FF]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="text-[#1E6CC8] text-xs font-mono uppercase tracking-[0.25em] mb-4">
              01 — Who We Are
            </div>
            <div className="text-[120px] font-bold text-[#1E6CC8]/10 leading-none select-none -mt-4 mb-2">
              01
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#142250] leading-tight mb-6 border-l-4 border-[#29B8E8] pl-6">
              A Technology Partner for Modern Manufacturing
            </h2>
            <p className="text-[#475569] text-base leading-relaxed mb-4">
              DeNova Technologies Ltd is a forward-focused technology solutions
              provider serving both apparel and non-apparel industrial
              manufacturers across Sri Lanka and Bangladesh. We specialize in
              delivering advanced machinery and intelligent software systems
              designed to enhance manufacturing efficiency, speed, and product
              quality while minimizing human intervention.
            </p>
            <p className="text-[#475569] text-base leading-relaxed">
              Backed by a team with over 25 years of industry experience, we bring
              deep expertise gained from working with leading brands across the
              USA, Europe, and China — positioning ourselves as a trusted partner
              in driving industrial innovation and operational excellence.
            </p>
          </motion.div>

          {/* Right: mission/vision cards */}
          <div className="flex flex-col gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 60 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#1B2F68] p-8 border-l-4 hover:border-l-[#29B8E8] transition-all duration-150 cursor-default group"
                style={{ borderLeftColor: card.borderColor }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {card.icon}
                  <h3 className="text-[#29B8E8] text-sm font-bold uppercase tracking-widest">
                    {card.title}
                  </h3>
                </div>
                <p className="text-white/80 text-base leading-relaxed">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
