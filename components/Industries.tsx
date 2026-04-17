"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection, { fadeUp } from "./AnimatedSection";

const industries = [
  {
    num: "01",
    name: "Apparel & Garments",
    desc: "Mass production garment factories across Sri Lanka and Bangladesh. Full workflow from design room to cutting floor.",
    image: "/images/hero/hero-factory-floor.png",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0f62fe" strokeWidth="2" strokeLinecap="round">
        <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.57a2 2 0 00-1.34-2.23z" />
      </svg>
    ),
  },
  {
    num: "02",
    name: "Denim & Sportswear",
    desc: "High-tension fabric handling and spreading for denim, technical sportswear and stretch fabric manufacturing.",
    image: "/images/hero/hero-cutting-room.png",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0f62fe" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
  {
    num: "03",
    name: "Home Textiles",
    desc: "Curtains, bedding and upholstery — multi-ply cutting and industrial sewing for wide-format materials.",
    image: "/images/products/product-spreader.jpg",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0f62fe" strokeWidth="2" strokeLinecap="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    num: "04",
    name: "Technical & Industrial",
    desc: "Safety gear, automotive interiors and technical textiles requiring precision cutting and contamination-free processing.",
    image: "/images/products/product-cnc-cutter.jpg",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0f62fe" strokeWidth="2" strokeLinecap="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

export default function Industries() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="industries"
      style={{ background: "var(--navy)", padding: "6rem 0" }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 3rem" }} className="industries-container">
        {/* Header */}
        <AnimatedSection style={{ marginBottom: 48 }}>
          <motion.div variants={fadeUp}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 20, height: 2, background: "var(--blue)" }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: "var(--blue-mid)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Markets
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-ibm-plex-condensed), var(--font-ibm-plex-sans), sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 3vw, 2.75rem)",
                color: "#fff",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                marginBottom: 12,
              }}
            >
              Industries We{" "}
              <span style={{ color: "var(--blue-mid)" }}>Serve</span>
            </h2>
            <p style={{ fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.55)", maxWidth: 560 }}>
              From mass-production garment factories to specialist technical textile manufacturers — we supply
              and support the full range of industrial fabric processing operations.
            </p>
          </motion.div>
        </AnimatedSection>

        {/* Grid */}
        <AnimatedSection
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 2,
            background: "rgba(255,255,255,0.05)",
          }}
          className="industries-grid"
        >
          {industries.map((ind, i) => (
            <motion.div
              key={ind.num}
              variants={fadeUp}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                background: "var(--navy2)",
                overflow: "hidden",
                borderLeft: hoveredIdx === i ? "3px solid var(--blue)" : "3px solid transparent",
                transition: "border-color 0.15s",
                cursor: "default",
              }}
            >
              {/* Image */}
              <div style={{ height: 180, position: "relative", overflow: "hidden" }}>
                <Image
                  src={ind.image}
                  alt={ind.name}
                  fill
                  style={{ objectFit: "cover", opacity: 0.5 }}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,32,91,0.5)",
                  }}
                />
              </div>

              <div style={{ padding: "20px 20px 24px" }}>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.25)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 10,
                  }}
                >
                  Industry {ind.num}
                </div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#fff", marginBottom: 8 }}>
                  {ind.name}
                </div>
                <div style={{ fontSize: 11, fontWeight: 300, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
                  {ind.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .industries-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .industries-container {
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
