"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function useCountUp(target: number, duration = 800, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, trigger]);
  return count;
}

const featurePanels = [
  {
    num: "01",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f62fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="0" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "CAD & Pattern Software",
    desc: "StyleCAD pattern making, marker planning, 3D simulation.",
    tag: "USA · StyleCAD",
  },
  {
    num: "02",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f62fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 8 4 4 20 4 20 20 4 20 4 16" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <polyline points="8 8 4 12 8 16" />
      </svg>
    ),
    title: "Automatic Cutting Systems",
    desc: "Single-ply and multi-ply CNC cutting for high-speed fabric processing.",
    tag: "China · Italy",
  },
  {
    num: "03",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f62fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18" />
        <path d="M3 6h18" />
        <path d="M3 18h18" />
        <circle cx="8" cy="6" r="2" />
        <circle cx="16" cy="12" r="2" />
        <circle cx="8" cy="18" r="2" />
      </svg>
    ),
    title: "Spreading & Fabric Inspection",
    desc: "Tension-free automated spreading, defect detection and roll tracking.",
    tag: "Turkey · UK · China",
  },
  {
    num: "04",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f62fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" />
        <polyline points="16 7 12 3 8 7" />
        <line x1="12" y1="3" x2="12" y2="7" />
      </svg>
    ),
    title: "Smart Factory Solutions",
    desc: "Warehouse automation, packing lines and sewing floor management.",
    tag: "China · MU Technology",
  },
];

const metrics = [
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 8, suffix: "+", label: "Global Brands" },
  { value: 2, suffix: "", label: "Markets Served" },
  { value: 24, suffix: "/7", label: "Support" },
];

export default function Hero() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const c0 = useCountUp(metrics[0].value, 800, inView);
  const c1 = useCountUp(metrics[1].value, 800, inView);
  const c2 = useCountUp(metrics[2].value, 800, inView);
  const c3 = useCountUp(metrics[3].value, 800, inView);
  const counts = [c0, c1, c2, c3];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      style={{
        minHeight: "100vh",
        background: "var(--navy)",
        paddingTop: 64,
        display: "flex",
        alignItems: "stretch",
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 3rem",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "60fr 40fr",
          gap: "4rem",
          alignItems: "center",
          paddingTop: "5rem",
          paddingBottom: "4rem",
        }}
        className="hero-grid"
      >
        {/* LEFT */}
        <div style={{ position: "relative" }}>
          {/* Blue accent line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: -28,
              top: 0,
              bottom: 0,
              width: 3,
              background: "var(--blue)",
              transformOrigin: "top",
            }}
          />

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
            style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}
          >
            <div style={{ width: 20, height: 2, background: "var(--blue)" }} />
            <span style={{ fontSize: 11, fontWeight: 600, color: "var(--blue-mid)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Sri Lanka &amp; Bangladesh
            </span>
          </motion.div>

          {/* H1 */}
          <div style={{ marginBottom: 24 }}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              style={{
                fontFamily: "var(--font-ibm-plex-condensed), var(--font-ibm-plex-sans), sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2.8rem, 5vw, 5.5rem)",
                lineHeight: 1,
                color: "#fff",
                letterSpacing: "-0.01em",
              }}
            >
              Advanced Manufacturing
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              style={{
                fontFamily: "var(--font-ibm-plex-condensed), var(--font-ibm-plex-sans), sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2.8rem, 5vw, 5.5rem)",
                lineHeight: 1,
                color: "var(--blue-mid)",
                letterSpacing: "-0.01em",
              }}
            >
              Solutions.
            </motion.h1>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            style={{
              fontSize: 17,
              fontWeight: 300,
              color: "rgba(255,255,255,0.6)",
              maxWidth: 480,
              lineHeight: 1.65,
              marginBottom: 36,
            }}
          >
            Authorized reseller and distributor for world-leading industrial machinery and software
            brands — delivering precision, efficiency, and long-term partnership to apparel
            manufacturers across Sri Lanka and Bangladesh.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}
          >
            <button
              onClick={scrollToProducts}
              style={{
                background: "var(--blue)",
                color: "#fff",
                fontSize: 14,
                fontWeight: 600,
                padding: "13px 24px",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => ((e.currentTarget).style.background = "var(--blue2)")}
              onMouseLeave={(e) => ((e.currentTarget).style.background = "var(--blue)")}
            >
              Explore Products →
            </button>
            <button
              onClick={scrollToContact}
              style={{
                background: "transparent",
                color: "#fff",
                fontSize: 14,
                fontWeight: 600,
                padding: "13px 24px",
                border: "1px solid rgba(255,255,255,0.5)",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "border-color 0.15s, background 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget).style.borderColor = "#fff";
                (e.currentTarget).style.background = "rgba(255,255,255,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget).style.borderColor = "rgba(255,255,255,0.5)";
                (e.currentTarget).style.background = "transparent";
              }}
            >
              Request a Quote
            </button>
          </motion.div>

          {/* Metrics bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            style={{
              borderTop: "1px solid rgba(255,255,255,0.12)",
              paddingTop: 28,
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 0,
            }}
          >
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 + i * 0.08 }}
                style={{
                  paddingRight: 16,
                  borderRight: i < metrics.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
                  paddingLeft: i > 0 ? 16 : 0,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-ibm-plex-condensed), var(--font-ibm-plex-sans), sans-serif",
                    fontWeight: 700,
                    fontSize: "2.5rem",
                    color: "#fff",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {counts[i]}{m.suffix}
                </div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 4 }}>
                  {m.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — image + feature panels */}
        <div style={{ position: "relative", height: "100%", minHeight: 500 }}>
          {/* Background image */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              overflow: "hidden",
              background: "var(--navy2)",
            }}
          >
            <Image
              src="/images/hero/hero-cutting-room.png"
              alt="Industrial fabric cutting room"
              fill
              style={{ objectFit: "cover", opacity: 0.6 }}
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, rgba(0,32,91,0.6) 0%, rgba(0,32,91,0.2) 100%)",
              }}
            />
          </div>

          {/* Feature panels */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              padding: "2rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              height: "100%",
            }}
          >
            {featurePanels.map((panel, i) => (
              <motion.div
                key={panel.num}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 + i * 0.1 }}
                className="feature-panel"
                style={{
                  background: "rgba(0,20,60,0.75)",
                  backdropFilter: "blur(4px)",
                  padding: "14px 16px",
                  borderLeft: "3px solid transparent",
                  transition: "border-color 0.15s, background 0.15s",
                  cursor: "default",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderLeftColor = "var(--blue)";
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(0,20,60,0.9)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderLeftColor = "transparent";
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(0,20,60,0.75)";
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", fontWeight: 700, marginBottom: 4 }}>
                      {panel.num}
                    </div>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        border: "1px solid rgba(255,255,255,0.15)",
                        background: "var(--navy)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {panel.icon}
                    </div>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#fff", marginBottom: 4 }}>
                      {panel.title}
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.45)", lineHeight: 1.5, marginBottom: 8 }}>
                      {panel.desc}
                    </div>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        color: "var(--blue-mid)",
                        background: "rgba(15,98,254,0.15)",
                        padding: "2px 8px",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}
                    >
                      {panel.tag}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding-top: 3rem !important;
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
