"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Industries", href: "#industries" },
  { label: "Solutions", href: "#solutions" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d1a3d]/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-16 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <span className="bg-white px-3 py-1.5 rounded-sm inline-flex items-center">
            <Image
              src="/denova-logo.png"
              alt="DeNova Technologies Ltd"
              width={120}
              height={40}
              className="object-contain"
              priority
            />
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-150 relative pb-1 ${
                active === link.label
                  ? "text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#29B8E8]"
                  : "text-[#94A3B8] hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-[#1E6CC8] text-white text-xs font-bold uppercase tracking-widest px-4 xl:px-6 py-3 whitespace-nowrap hover:bg-[#29B8E8] transition-colors duration-150 cursor-pointer"
          >
            Request a Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2 cursor-pointer"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0d1a3d] border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => { setActive(link.label); setMobileOpen(false); }}
              className="text-sm font-semibold uppercase tracking-wider text-[#94A3B8] hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#1E6CC8] text-white text-xs font-bold uppercase tracking-widest px-6 py-3 text-center hover:bg-[#29B8E8] transition-colors mt-2"
          >
            Request a Quote
          </a>
        </div>
      )}
    </nav>
  );
}
