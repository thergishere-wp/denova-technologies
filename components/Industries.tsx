"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const industries = [
  {
    name: "APPAREL",
    description:
      "End-to-end solutions for garment manufacturers — from pattern design to automated cutting and smart factory integration.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop",
    alt: "Garment factory production floor",
  },
  {
    name: "HOME TEXTILES",
    description:
      "Precision spreading, cutting, and quality inspection systems engineered for bed linen, curtain, and upholstery manufacturers.",
    image:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=1200&auto=format&fit=crop",
    alt: "Textile fabric rolls in a warehouse",
  },
  {
    name: "TECHNICAL & INDUSTRIAL",
    description:
      "Advanced cutting and inspection systems for technical textiles, composites, leather, and other non-apparel flexible materials.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop",
    alt: "Technical industrial manufacturing equipment",
  },
];

export default function Industries() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="py-32 bg-[#142250]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-[#29B8E8] text-xs font-mono uppercase tracking-[0.25em] mb-3">
            04 — Markets
          </div>
          <h2 className="text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Industries We Serve
          </h2>
          <div className="w-20 h-0.5 bg-[#29B8E8]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="relative group overflow-hidden cursor-default min-h-[400px] flex flex-col justify-end"
            >
              <Image
                src={industry.image}
                alt={industry.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#142250] via-[#142250]/60 to-transparent" />
              <div className="relative z-10 p-8">
                <div className="w-8 h-0.5 bg-[#29B8E8] mb-4" />
                <h3 className="text-white font-bold text-2xl uppercase tracking-tight mb-3">
                  {industry.name}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
