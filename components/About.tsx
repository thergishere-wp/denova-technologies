"use client";

import Image from "next/image";
import AnimatedSection, { fadeUp } from "./AnimatedSection";
import { motion } from "framer-motion";

const stats = [
  { label: "Sri Lanka", sub: "Primary market" },
  { label: "Bangladesh", sub: "Active market" },
  { label: "8+ Brands", sub: "Authorized distributor" },
  { label: "1 Day", sub: "Response time" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{ background: "#fff", padding: "6rem 0" }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 3rem",
          display: "grid",
          gridTemplateColumns: "40fr 60fr",
          gap: "5rem",
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* LEFT — image */}
        <div style={{ position: "relative", height: 560 }}>
          <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
            <Image
              src="/images/about/about-factory-operations.png"
              alt="Factory operations — Denova Technologies"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,32,91,0.2)",
              }}
            />
          </div>

          {/* Floating stat callout */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              background: "var(--navy)",
              padding: "20px 24px",
              minWidth: 180,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-ibm-plex-condensed), var(--font-ibm-plex-sans), sans-serif",
                fontWeight: 700,
                fontSize: "2.5rem",
                color: "#fff",
                lineHeight: 1,
              }}
            >
              25+
            </div>
            <div style={{ fontSize: 13, color: "var(--blue-mid)", marginTop: 4 }}>
              Years of Industry Experience
            </div>
          </div>
        </div>

        {/* RIGHT — content */}
        <AnimatedSection>
          <motion.div variants={fadeUp} style={{ marginBottom: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 20, height: 2, background: "var(--blue)" }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: "var(--blue)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                About Denova
              </span>
            </div>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-ibm-plex-condensed), var(--font-ibm-plex-sans), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 3vw, 2.75rem)",
              color: "var(--navy)",
              lineHeight: 1.1,
              marginBottom: 24,
              letterSpacing: "-0.01em",
            }}
          >
            More Than a Machine Supplier
          </motion.h2>

          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 36 }}>
            <p style={{ fontSize: 15, fontWeight: 400, color: "var(--text2)", lineHeight: 1.7 }}>
              DeNova Technology Ltd is a forward-focused technology solutions provider serving both apparel and
              non-apparel industrial manufacturers across Sri Lanka and Bangladesh. The company specializes in
              delivering advanced machinery and intelligent software systems designed to enhance manufacturing
              efficiency, speed, and product quality while minimizing human intervention.
            </p>
            <p style={{ fontSize: 15, fontWeight: 400, color: "var(--text2)", lineHeight: 1.7 }}>
              With a strong emphasis on cost-effectiveness, DeNova ensures low ownership and operating costs,
              making high-tech solutions accessible to manufacturers of all sizes. Beyond supply, the company
              offers reliable after-sales support, including fast-response service, maintenance, and spare
              parts, ensuring minimal downtime and continuous productivity.
            </p>
            <p style={{ fontSize: 15, fontWeight: 400, color: "var(--text2)", lineHeight: 1.7 }}>
              Backed by a team with over 25 years of industry experience, DeNova brings deep expertise gained
              from working with leading brands across the USA, Europe, and China — positioning itself as a
              trusted partner in driving industrial innovation and operational excellence.
            </p>
          </motion.div>

          {/* Stat grid */}
          <motion.div
            variants={fadeUp}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 0,
              borderTop: "1px solid var(--border)",
              paddingTop: 28,
            }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  paddingRight: 16,
                  borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none",
                  paddingLeft: i > 0 ? 16 : 0,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-ibm-plex-condensed), var(--font-ibm-plex-sans), sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "var(--navy)",
                    lineHeight: 1.2,
                  }}
                >
                  {s.label}
                </div>
                <div style={{ fontSize: 11, color: "var(--subtle)", marginTop: 3 }}>
                  {s.sub}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
