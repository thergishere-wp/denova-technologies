"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { products, categoryLabels, type ProductCategory } from "@/lib/products";
import AnimatedSection, { fadeUp } from "./AnimatedSection";

const categories: ProductCategory[] = [
  "software",
  "cutting",
  "spreading",
  "inspection",
  "smart-factory",
  "services",
];

const categoryIcons: Record<ProductCategory, React.ReactNode> = {
  software: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round">
      <rect x="2" y="3" width="20" height="14" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  cutting: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round">
      <path d="M6 9l6 6 6-6" /><circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" /><line x1="6" y1="9" x2="6" y2="21" /><line x1="18" y1="9" x2="18" y2="21" />
    </svg>
  ),
  spreading: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round">
      <line x1="3" y1="8" x2="21" y2="8" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="16" x2="21" y2="16" />
    </svg>
  ),
  inspection: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  "smart-factory": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round">
      <rect x="2" y="7" width="20" height="14" /><polyline points="16 7 12 3 8 7" />
    </svg>
  ),
  services: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
};

interface ProductCardProps {
  product: (typeof products)[0];
  onEnquire: (productName: string) => void;
}

function ProductCard({ product, onEnquire }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderLeft: hovered ? "3px solid var(--blue)" : "3px solid transparent",
        transition: "border-color 0.15s, transform 0.15s, box-shadow 0.15s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 8px 24px rgba(0,0,0,0.1)" : "none",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Image */}
      <div style={{ height: 200, position: "relative", background: "var(--off)", flexShrink: 0 }}>
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{
              objectFit: "cover",
              filter: hovered ? "brightness(0.9)" : "brightness(1)",
              transition: "filter 0.15s",
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {categoryIcons[product.category]}
          </div>
        )}

        {/* Brand badge */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            background: "var(--navy)",
            color: "var(--blue-mid)",
            fontSize: 10,
            fontWeight: 600,
            padding: "4px 10px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {product.brand}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "16px 16px 0", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text)", marginBottom: 6, lineHeight: 1.3 }}>
          {product.name}
        </div>
        <div style={{ fontSize: 12, fontWeight: 300, color: "var(--muted)", lineHeight: 1.6, marginBottom: 12, flex: 1 }}>
          {product.description}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 14 }}>
          {product.specs.slice(0, 3).map((spec) => (
            <span
              key={spec}
              style={{
                fontSize: 10,
                background: "var(--off)",
                border: "1px solid var(--border)",
                color: "var(--muted)",
                padding: "2px 7px",
              }}
            >
              {spec}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          padding: "10px 16px",
        }}
      >
        <button
          onClick={() => onEnquire(product.name)}
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "var(--blue)",
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "inherit",
            transition: "gap 0.15s",
          }}
          onMouseEnter={(e) => ((e.currentTarget).style.gap = "10px")}
          onMouseLeave={(e) => ((e.currentTarget).style.gap = "6px")}
        >
          Enquire <span>→</span>
        </button>
      </div>
    </motion.div>
  );
}

interface Props {
  onEnquire?: (productName: string) => void;
}

export default function Products({ onEnquire }: Props) {
  const [activeTab, setActiveTab] = useState<ProductCategory>("software");

  const filteredProducts = products.filter((p) => p.category === activeTab);

  const handleEnquire = useCallback(
    (productName: string) => {
      onEnquire?.(productName);
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    },
    [onEnquire]
  );

  return (
    <section
      id="products"
      style={{ background: "var(--off)", padding: "6rem 0" }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 3rem" }} className="products-container">
        {/* Header */}
        <AnimatedSection
          style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 36, flexWrap: "wrap", gap: 20 }}
        >
          <motion.div variants={fadeUp}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 20, height: 2, background: "var(--blue)" }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: "var(--blue)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Product Portfolio
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
              }}
            >
              Our Product Portfolio
            </h2>
          </motion.div>

          {/* Tabs */}
          <motion.div
            variants={fadeUp}
            style={{ display: "flex", flexWrap: "wrap", gap: 2 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  padding: "8px 16px",
                  background: activeTab === cat ? "var(--navy)" : "#fff",
                  color: activeTab === cat ? "#fff" : "var(--muted)",
                  border: "1px solid var(--border)",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "background 0.15s, color 0.15s",
                  borderLeft: activeTab === cat ? "none" : "1px solid var(--border)",
                }}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
              background: "var(--border)",
            }}
            className="products-grid"
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onEnquire={handleEnquire} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .products-grid {
            grid-template-columns: 1fr !important;
          }
          .products-container {
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
