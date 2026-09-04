"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { brands } from "@/lib/brands";
import { galleryImages } from "@/lib/galleryImages";
import ImageRotator from "@/components/ImageRotator";

const brandLogoMap: Record<string, string> = {
  docad: "/brands/docad-logo.jpg",
  "ozer-makina": "/brands/ozer-logo.png",
  jingwei: "/brands/jwei-logo.svg",
  ctex: "/brands/ctex-logo.png",
  "mu-bigdata": "/brands/mu-logo.jpg",
  kasu: "/brands/kasu-logo.png",
};

export default function Products({ standalone = false }: { standalone?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
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
            Six world-class brands, one partner. Open any catalog for full
            product details and specifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/products/${brand.id}`}
                className="bg-[#1B2F68] border border-white/10 border-t-2 hover:border-t-[#29B8E8] hover:-translate-y-1 transition-all duration-150 cursor-pointer group flex flex-col h-full overflow-hidden focus:outline-none focus-visible:ring-1 focus-visible:ring-[#29B8E8]"
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
                    View Catalog
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 7h8M7 3l4 4-4 4" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
