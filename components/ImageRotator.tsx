"use client";

import { useEffect, useState } from "react";
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
      {/* All slides stay mounted; only opacity toggles — avoids relying on
          AnimatePresence exit-unmount timing, which left faded-out slides
          stuck in the DOM indefinitely on long-lived pages. */}
      {images.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 transition-opacity duration-[600ms] ease-in-out"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i === index ? undefined : true}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            sizes={sizes}
            priority={priority && i === 0}
          />
        </div>
      ))}

      {showDots && images.length > 1 && (
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-10 flex items-center">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={(e) => {
                e.stopPropagation();
                setIndex(i);
              }}
              aria-label={`Show image ${i + 1}`}
              className="p-2.5 cursor-pointer flex items-center justify-center"
            >
              <span
                className={`block h-1.5 rounded-none transition-all duration-200 ${
                  i === index ? "w-5 bg-[#29B8E8]" : "w-1.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
