"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { GalleryImage } from "@/lib/galleryImages";

interface ProductImageGalleryProps {
  images: GalleryImage[];
  brandName: string;
}

export default function ProductImageGallery({ images, brandName }: ProductImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!isHovered && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
      }, 4000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, images.length]);

  const visibleThumbs = images.slice(0, 4);

  return (
    <section className="bg-[#0d1a3d] py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-[#29B8E8] text-xs font-mono uppercase tracking-widest mb-4 sm:mb-6">
          {brandName} — Product Gallery
        </div>

        {/* Desktop: main image left + thumbnails right */}
        <div
          className="hidden md:flex gap-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main image — 65% */}
          <div className="relative flex-1" style={{ minHeight: "420px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={images[activeIndex].src}
                  alt={images[activeIndex].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 65vw, 800px"
                />
                <div className="absolute inset-0 bg-[#142250]/10" />
              </motion.div>
            </AnimatePresence>
            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
              {!isHovered && (
                <motion.div
                  key={`progress-${activeIndex}`}
                  className="h-full bg-[#29B8E8]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "linear" }}
                />
              )}
            </div>
          </div>

          {/* Thumbnail column — 35% */}
          <div className="flex flex-col gap-3 w-48 xl:w-56 shrink-0">
            {visibleThumbs.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`relative overflow-hidden cursor-pointer transition-all duration-150 ${
                  activeIndex === i
                    ? "border-l-4 border-[#29B8E8] opacity-100"
                    : "border-l-4 border-transparent opacity-50 hover:opacity-80"
                }`}
                style={{ height: "96px" }}
                aria-label={img.alt}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="224px"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: stacked layout with horizontal thumbnail strip */}
        <div className="md:hidden">
          <div
            className="relative w-full overflow-hidden"
            style={{ height: "240px" }}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={images[activeIndex].src}
                  alt={images[activeIndex].alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile thumbnail row */}
          <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
            {visibleThumbs.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`relative shrink-0 overflow-hidden cursor-pointer transition-all duration-150 ${
                  activeIndex === i
                    ? "border-b-2 border-[#29B8E8] opacity-100"
                    : "border-b-2 border-transparent opacity-50"
                }`}
                style={{ width: "72px", height: "54px" }}
                aria-label={img.alt}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="72px"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
