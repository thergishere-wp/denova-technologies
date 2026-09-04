"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Industries", href: "#industries" },
  { label: "Solutions", href: "#solutions" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const brandLinks = [
  { label: "DOCAD", href: "/products/docad" },
  { label: "Özer Makina", href: "/products/ozer-makina" },
  { label: "JINGWEI / JWEI", href: "/products/jingwei" },
  { label: "C-TEX", href: "/products/ctex" },
  { label: "MU Big Data", href: "/products/mu-bigdata" },
  { label: "KASU", href: "/products/kasu" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");
  const pathname = usePathname();
  const isHome = pathname === "/";
  const onProducts = pathname.startsWith("/products");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Section anchors only exist on the homepage — prefix with "/" elsewhere.
  const anchorHref = (href: string) =>
    href.startsWith("#") && !isHome ? `/${href}` : href;

  const linkClass = (isActive: boolean) =>
    `text-sm font-semibold uppercase tracking-wider transition-colors duration-150 relative pb-1 ${
      isActive
        ? "text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#29B8E8]"
        : "text-[#94A3B8] hover:text-white"
    }`;

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
        {isHome ? (
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActive("");
            }}
            className="flex items-center group cursor-pointer"
            aria-label="Scroll to top"
          >
            <span className="bg-white px-3 py-1.5 rounded-sm inline-flex items-center">
              <Image
                src="/denova-logo.png"
                alt="DeNova Technologies Ltd"
                width={168}
                height={48}
                className="object-contain"
                priority
              />
            </span>
          </button>
        ) : (
          <Link href="/" className="flex items-center group">
            <span className="bg-white px-3 py-1.5 rounded-sm inline-flex items-center">
              <Image
                src="/denova-logo.png"
                alt="DeNova Technologies Ltd"
                width={168}
                height={48}
                className="object-contain"
                priority
              />
            </span>
          </Link>
        )}

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) =>
            link.label === "Products" ? (
              <div key={link.label} className="relative group">
                <Link
                  href="/products"
                  onClick={() => setActive(link.label)}
                  className={`${linkClass(active === link.label || onProducts)} inline-flex items-center gap-1`}
                >
                  {link.label}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    aria-hidden="true"
                    className="transition-transform duration-150 group-hover:rotate-180"
                  >
                    <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                {/* Brand dropdown — hover or keyboard focus */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-150">
                  <div className="bg-[#0d1a3d] border border-white/10 border-t-2 border-t-[#29B8E8] min-w-[220px] py-2 shadow-xl shadow-black/40">
                    <Link
                      href="/products"
                      onClick={() => setActive("Products")}
                      className="block px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#29B8E8] hover:bg-[#1B2F68] transition-colors"
                    >
                      All Products
                    </Link>
                    <div className="h-px bg-white/10 mx-5 my-1" />
                    {brandLinks.map((b) => (
                      <Link
                        key={b.href}
                        href={b.href}
                        onClick={() => setActive("Products")}
                        className="block px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#94A3B8] hover:text-white hover:bg-[#1B2F68] transition-colors"
                      >
                        {b.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={anchorHref(link.href)}
                onClick={() => setActive(link.label)}
                className={linkClass(active === link.label && !onProducts)}
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <a
            href={anchorHref("#contact")}
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
        <div className="lg:hidden bg-[#0d1a3d] border-t border-white/10 px-6 py-6 flex flex-col gap-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
          {navLinks.map((link) =>
            link.label === "Products" ? (
              <div key={link.label} className="flex flex-col gap-3">
                <Link
                  href="/products"
                  onClick={() => { setActive(link.label); setMobileOpen(false); }}
                  className="text-sm font-semibold uppercase tracking-wider text-[#94A3B8] hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
                <div className="flex flex-col gap-3 pl-4 border-l border-white/10">
                  {brandLinks.map((b) => (
                    <Link
                      key={b.href}
                      href={b.href}
                      onClick={() => { setActive("Products"); setMobileOpen(false); }}
                      className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]/70 hover:text-white transition-colors"
                    >
                      {b.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={anchorHref(link.href)}
                onClick={() => { setActive(link.label); setMobileOpen(false); }}
                className="text-sm font-semibold uppercase tracking-wider text-[#94A3B8] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href={anchorHref("#contact")}
            onClick={() => setMobileOpen(false)}
            className="bg-[#1E6CC8] text-white text-xs font-bold uppercase tracking-widest px-6 py-3 text-center hover:bg-[#29B8E8] transition-colors mt-2"
          >
            Request a Quote
          </a>
        </div>
      )}
    </nav>
  );
}
