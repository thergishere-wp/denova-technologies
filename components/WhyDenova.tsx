"use client";

import { motion } from "framer-motion";
import AnimatedSection, { fadeUp } from "./AnimatedSection";

const valueCards = [
  {
    num: "01",
    title: "Authorized Distributor",
    body: "Direct from global manufacturers. Genuine products, full warranty, and official after-sales backing on every brand.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f62fe" strokeWidth="2" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "After-Sales Support",
    body: "Fast-response service, maintenance and spare parts for every brand we supply. Minimal downtime, maximum productivity.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f62fe" strokeWidth="2" strokeLinecap="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "25+ Years Expertise",
    body: "Deep industry knowledge from working with leading brands across the USA, Europe, and China for over two decades.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f62fe" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Low Ownership Costs",
    body: "Cost-effective solutions designed for manufacturers of all sizes — accessible technology without compromise on quality.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f62fe" strokeWidth="2" strokeLinecap="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
];

export default function WhyDenova() {
  return (
    <section style={{ background: "#fff", padding: "6rem 0" }}>
      <div
        style={{ maxWidth: 1400, margin: "0 auto", padding: "0 3rem", display: "grid", gridTemplateColumns: "40fr 60fr", gap: "5rem", alignItems: "start" }}
        className="why-grid"
      >
        {/* LEFT */}
        <AnimatedSection>
          <motion.div variants={fadeUp}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 20, height: 2, background: "var(--blue)" }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: "var(--blue)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Why Denova
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-ibm-plex-condensed), var(--font-ibm-plex-sans), sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 3vw, 2.75rem)",
                color: "var(--navy)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                marginBottom: 20,
              }}
            >
              More Than a Machine Supplier
            </h2>
            <p style={{ fontSize: 15, fontWeight: 400, color: "var(--text2)", lineHeight: 1.7 }}>
              We match you to the right solution, handle installation, train your team, and stay by your
              side long-term — wherever you operate in Sri Lanka or Bangladesh.
            </p>
          </motion.div>
        </AnimatedSection>

        {/* RIGHT — 2×2 card grid */}
        <AnimatedSection
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1,
            background: "var(--off)",
          }}
        >
          {valueCards.map((card) => (
            <motion.div
              key={card.num}
              variants={fadeUp}
              style={{
                background: "#fff",
                padding: "1.5rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {card.icon}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: "rgba(0,0,0,0.12)",
                    letterSpacing: "0.05em",
                    marginTop: 10,
                  }}
                >
                  {card.num}
                </div>
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>
                {card.title}
              </div>
              <div style={{ fontSize: 11, fontWeight: 300, color: "var(--muted)", lineHeight: 1.6 }}>
                {card.body}
              </div>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .why-grid {
            grid-template-columns: 1fr !important;
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
