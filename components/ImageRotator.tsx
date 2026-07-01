"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface RotatorImage {
  src: string;
  alt: string;
}

interface ImageRotatorProps {
  images: RotatorImage[];
  intervalMs?: number;
  sizes?: string;
  showDots?: boolean;
  priority?: boolean;
}

export default function ImageRotator({
  images,
  intervalMs = 3500,
  sizes = "100vw",
  showDots = true,
  priority = false,
}: ImageRotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={images[index].src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            className="object-cover"
            sizes={sizes}
            priority={priority}
          />
        </motion.div>
      </AnimatePresence>

      {showDots && images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={(e) => {
                e.stopPropagation();
                setIndex(i);
              }}
              aria-label={`Show image ${i + 1}`}
              className={`h-1.5 rounded-none transition-all duration-200 cursor-pointer ${
                i === index ? "w-5 bg-[#29B8E8]" : "w-1.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
