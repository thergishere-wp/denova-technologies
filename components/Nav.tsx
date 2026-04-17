"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Brands", href: "#brands" },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = useCallback((href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200"
        style={{
          height: 64,
          borderBottom: "1px solid var(--border)",
          boxShadow: scrolled ? "0 4px 16px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div
          className="max-content h-full flex items-center justify-between"
          style={{ maxWidth: 1400, margin: "0 auto", padding: "0 3rem" }}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo("#")}
            className="flex items-center gap-3 flex-shrink-0"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <div
              className="flex items-center justify-center flex-shrink-0"
              style={{
                width: 40,
                height: 40,
                background: "var(--navy)",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--blue-mid)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                <line x1="12" y1="2" x2="12" y2="22" />
                <line x1="2" y1="8.5" x2="22" y2="8.5" />
                <line x1="2" y1="15.5" x2="22" y2="15.5" />
              </svg>
            </div>
            <div className="hidden sm:block text-left">
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "var(--navy)",
                  lineHeight: 1.2,
                  fontFamily: "var(--font-ibm-plex-condensed), var(--font-ibm-plex-sans), sans-serif",
                  letterSpacing: "0.01em",
                }}
              >
                Denova Technologies Ltd
              </div>
              <div style={{ fontSize: 11, color: "var(--muted)", lineHeight: 1 }}>
                Industrial Machinery Solutions
              </div>
            </div>
          </button>

          {/* Center nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: isActive ? "var(--blue)" : "var(--muted)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "4px 0",
                    borderBottom: isActive ? "2px solid var(--blue)" : "2px solid transparent",
                    transition: "color 0.15s, border-color 0.15s",
                    fontFamily: "inherit",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLButtonElement).style.color = "var(--blue)";
                    (e.target as HTMLButtonElement).style.borderBottomColor = "var(--blue)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.target as HTMLButtonElement).style.color = "var(--muted)";
                      (e.target as HTMLButtonElement).style.borderBottomColor = "transparent";
                    }
                  }}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo("#contact")}
              className="hidden md:block"
              style={{
                background: "var(--blue)",
                color: "#fff",
                fontSize: 13,
                fontWeight: 600,
                padding: "9px 18px",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "background 0.15s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.background = "var(--blue2)")}
              onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.background = "var(--blue)")}
            >
              Request a Quote
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center items-center"
              style={{ width: 40, height: 40, background: "none", border: "none", cursor: "pointer", gap: 5 }}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                style={{ display: "block", width: 22, height: 2, background: "var(--navy)", transformOrigin: "center" }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
                style={{ display: "block", width: 22, height: 2, background: "var(--navy)" }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                style={{ display: "block", width: 22, height: 2, background: "var(--navy)", transformOrigin: "center" }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden"
            style={{ background: "var(--navy)" }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i + 0.1, duration: 0.3, ease: "easeOut" }}
                onClick={() => scrollTo(link.href)}
                style={{
                  fontSize: 32,
                  fontWeight: 600,
                  color: "#fff",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "12px 0",
                  fontFamily: "var(--font-ibm-plex-condensed), var(--font-ibm-plex-sans), sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.3, ease: "easeOut" }}
              onClick={() => scrollTo("#contact")}
              style={{
                marginTop: 24,
                background: "var(--blue)",
                color: "#fff",
                fontSize: 16,
                fontWeight: 600,
                padding: "14px 32px",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              Request a Quote
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
