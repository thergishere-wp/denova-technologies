"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { brands, type Brand } from "@/lib/brands";
import { galleryImages } from "@/lib/galleryImages";
import ImageRotator from "@/components/ImageRotator";

const brandLogoMap: Record<string, string> = {
  docad: "/brands/docad-logo.jpg",
  "ozer-makina": "/brands/ozer-logo.png",
  jingwei: "/brands/jwei-logo.svg",
  ctex: "/brands/ctex-logo.png",
  "mu-bigdata": "/brands/mu-logo.jpg",
};

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <path d="M3 8l4 4 6-6" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProductModal({ brand, onClose }: { brand: Brand; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const images = galleryImages[brand.id] ?? [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#0d1a3d] border border-white/10 w-full max-w-5xl max-h-[90vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2"
      >
        {/* Left: rotating images */}
        <div className="relative h-48 sm:h-64 md:h-auto bg-[#142250]">
          {images.length > 0 ? (
            <ImageRotator images={images} sizes="(max-width: 768px) 100vw, 50vw" priority />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white/30 text-sm">
              No images available
            </div>
          )}
        </div>

        {/* Right: details */}
        <div className="p-5 sm:p-8 md:p-10 relative">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-2 right-2 sm:top-4 sm:right-4 p-3 text-white/50 hover:text-white transition-colors cursor-pointer"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <line x1="5" y1="5" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="17" y1="5" x2="5" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          <div className="h-9 mb-4 flex items-center">
            <span className="bg-white px-3 py-1.5 inline-flex items-center">
              <Image
                src={brandLogoMap[brand.id]}
                alt={`${brand.name} logo`}
                width={100}
                height={32}
                className="object-contain"
                style={{ maxHeight: "28px", width: "auto" }}
              />
            </span>
          </div>
          <h3 className="text-white font-bold text-2xl uppercase tracking-tight mb-1 pr-8">
            {brand.name}
          </h3>
          <p className="text-[#29B8E8] text-xs font-mono uppercase tracking-widest mb-5">
            {brand.category}
            {brand.country ? ` · ${brand.country}` : ""}
          </p>

          <p className="text-white/70 text-sm leading-relaxed mb-6">{brand.description}</p>

          {brand.productGroups && brand.productGroups.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {brand.productGroups.map((group) => (
                <div key={group.title}>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#94A3B8] mb-2">
                    {group.title}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {group.items.map((p, pi) => (
                      <div key={p} className="flex items-center gap-2">
                        <span className="text-[#29B8E8] text-[10px] font-mono w-4 text-right">
                          {String(pi + 1).padStart(2, "0")}
                        </span>
                        <span className="text-white/70 text-sm">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {brand.softwareProducts.length > 0 && (
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#94A3B8] mb-2">
                    Software Solutions
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {brand.softwareProducts.map((p, pi) => (
                      <div key={p} className="flex items-center gap-2">
                        <span className="text-[#29B8E8] text-[10px] font-mono w-4 text-right">
                          {String(pi + 1).padStart(2, "0")}
                        </span>
                        <span className="text-white/70 text-sm">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {brand.hardwareProducts.length > 0 && (
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#94A3B8] mb-2">
                    Hardware Solutions
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {brand.hardwareProducts.map((p, pi) => (
                      <div key={p} className="flex items-center gap-2">
                        <span className="text-[#29B8E8] text-[10px] font-mono w-4 text-right">
                          {String(pi + 1).padStart(2, "0")}
                        </span>
                        <span className="text-white/70 text-sm">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="border-t border-white/10 pt-4 mb-8 flex flex-col gap-2">
            {brand.benefits.map((b) => (
              <div key={b} className="flex items-start gap-2">
                <CheckIcon />
                <span className="text-white/60 text-xs leading-relaxed">{b}</span>
              </div>
            ))}
          </div>

          <Link
            href={`/products/${brand.id}`}
            className="flex items-center justify-between bg-[#1E6CC8] hover:bg-[#29B8E8] text-white px-4 py-3 transition-colors duration-150 text-xs font-bold uppercase tracking-widest"
          >
            View Full Details
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Products({ standalone = false }: { standalone?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeBrand, setActiveBrand] = useState<string | null>(null);

  const modalBrand = brands.find((b) => b.id === activeBrand) ?? null;
  const Heading = standalone ? "h1" : "h2";

  return (
    <section
      id="products"
      className={`pb-14 sm:pb-20 lg:pb-32 bg-[#0d1a3d] ${
        standalone ? "pt-32 sm:pt-40" : "pt-14 sm:pt-20 lg:pt-32"
      }`}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="text-[#29B8E8] text-xs font-mono uppercase tracking-[0.25em] mb-3">
            Our Brands
          </div>
          <Heading className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Our Products
          </Heading>
          <div className="w-20 h-0.5 bg-[#29B8E8]" />
          <p className="text-[#94A3B8] text-base mt-6 max-w-2xl">
            Five world-class brands, one partner. Click any card for a closer look.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.id}
              role="button"
              tabIndex={0}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActiveBrand(brand.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveBrand(brand.id);
                }
              }}
              className="text-left bg-[#1B2F68] border border-white/10 border-t-2 hover:border-t-[#29B8E8] hover:-translate-y-1 transition-all duration-150 cursor-pointer group flex flex-col overflow-hidden focus:outline-none focus-visible:ring-1 focus-visible:ring-[#29B8E8]"
              style={{ borderTopColor: brand.accentColor }}
            >
              <div className="relative h-36 sm:h-48 bg-[#142250]">
                {(galleryImages[brand.id] ?? []).length > 0 ? (
                  <ImageRotator
                    images={galleryImages[brand.id]}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    showDots={false}
                  />
                ) : null}
              </div>

              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="h-8 flex items-center">
                    <span className="bg-white px-2.5 py-1 inline-flex items-center">
                      <Image
                        src={brandLogoMap[brand.id]}
                        alt={`${brand.name} logo`}
                        width={80}
                        height={28}
                        className="object-contain"
                        style={{ maxHeight: "22px", width: "auto" }}
                      />
                    </span>
                  </span>
                  {brand.country && (
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 border border-[#29B8E8]/40 text-[#29B8E8]">
                      {brand.country}
                    </span>
                  )}
                </div>

                <h3 className="text-white font-bold text-xl uppercase tracking-tight mb-2">
                  {brand.name}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                  {brand.shortDescription}
                </p>

                <div className="flex items-center gap-2 text-[#29B8E8] text-xs font-bold uppercase tracking-wider group-hover:gap-3 transition-all duration-150">
                  Quick View
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {modalBrand && <ProductModal brand={modalBrand} onClose={() => setActiveBrand(null)} />}
      </AnimatePresence>
    </section>
  );
}
