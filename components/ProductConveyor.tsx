"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// One flagship product per functional category — a breadth-of-range proof
// strip, deliberately not one-per-brand or the full catalog.
const items = [
  {
    name: "CAD & Pattern Making Software",
    brand: "DOCAD",
    href: "/products/docad",
    image: "/products/docad/pattern-creation.jpg",
    featured: false,
  },
  {
    name: "Inkjet Plotter",
    brand: "DOCAD",
    href: "/products/docad",
    image: "/products/docad/inkjet-plotter.jpg",
    featured: false,
  },
  {
    name: "Automatic Spreading Machine",
    brand: "Özer Makina",
    href: "/products/ozer-makina",
    image: "/products/ozer-makina/automatic-spreading-machine.jpg",
    featured: false,
  },
  {
    name: "Digital Cutting Machine — MI60",
    brand: "JWEI",
    href: "/products/jingwei",
    image: "/products/jingwei/low-ply-cutting.jpg",
    featured: true,
    specs: ["100m/min", "0.01mm accuracy"],
  },
  {
    name: "Fabric Inspection Machine",
    brand: "C-TEX",
    href: "/products/ctex",
    image: "/products/ctex/fabric-inspection-machine.jpg",
    featured: false,
  },
  {
    name: "Fabric Relaxing Machine",
    brand: "C-TEX",
    href: "/products/ctex",
    image: "/products/ctex/fabric-relaxing-machine.jpg",
    featured: false,
  },
  {
    name: "MES Factory Dashboard",
    brand: "MU Big Data",
    href: "/products/mu-bigdata",
    image: "/products/mu-bigdata/mu-mes.jpg",
    featured: false,
  },
  {
    name: "Digitizer",
    brand: "DOCAD",
    href: "/products/docad",
    image: "/products/docad/digitizer.jpg",
    featured: false,
  },
];

function ConveyorCard({
  item,
  ariaHidden,
}: {
  item: (typeof items)[number];
  ariaHidden?: boolean;
}) {
  return (
    <Link
      href={item.href}
      aria-hidden={ariaHidden}
      tabIndex={ariaHidden ? -1 : 0}
      draggable={false}
      className={`group/card shrink-0 bg-[#1B2F68] border border-white/10 hover:border-[#29B8E8]/60 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#29B8E8] transition-colors duration-150 flex flex-col ${
        item.featured ? "w-72 sm:w-80" : "w-56 sm:w-64"
      }`}
    >
      <div className="relative aspect-[4/3] bg-[#142250] overflow-hidden">
        <Image
          src={item.image}
          alt={`${item.brand} ${item.name}`}
          fill
          draggable={false}
          className="object-cover transition-transform duration-500 group-hover/card:scale-105 select-none"
          sizes="320px"
        />
        {item.featured && (
          <span className="absolute top-2 left-2 bg-[#29B8E8] text-[#0d1a3d] text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-1">
            Flagship
          </span>
        )}
      </div>
      <div className="p-3 sm:p-4">
        <div className="text-[#29B8E8] text-[10px] font-mono uppercase tracking-widest mb-1">
          {item.brand}
        </div>
        <div className="text-white font-bold text-sm leading-snug">
          {item.name}
        </div>
        {item.specs && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {item.specs.map((s) => (
              <span
                key={s}
                className="text-[9px] font-mono uppercase tracking-wider bg-[#142250] text-[#29B8E8] px-1.5 py-0.5"
              >
                {s}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

export default function ProductConveyor() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Auto-scroll via scrollLeft on a real scroll container: native touch-drag
  // and keyboard focus scrolling keep working, the rAF loop just advances the
  // belt whenever the user isn't interacting.
  useEffect(() => {
    if (reducedMotion) return;
    const track = trackRef.current;
    if (!track) return;
    let raf: number;
    const step = () => {
      if (!pausedRef.current) {
        const half = track.scrollWidth / 2;
        track.scrollLeft = track.scrollLeft >= half ? track.scrollLeft - half + 0.6 : track.scrollLeft + 0.6;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    const pause = () => (pausedRef.current = true);
    const resume = () => (pausedRef.current = false);
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);
    track.addEventListener("touchstart", pause, { passive: true });
    track.addEventListener("touchend", resume);
    track.addEventListener("touchcancel", resume);
    track.addEventListener("focusin", pause);
    track.addEventListener("focusout", resume);
    return () => {
      cancelAnimationFrame(raf);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
      track.removeEventListener("touchstart", pause);
      track.removeEventListener("touchend", resume);
      track.removeEventListener("touchcancel", resume);
      track.removeEventListener("focusin", pause);
      track.removeEventListener("focusout", resume);
    };
  }, [reducedMotion]);

  return (
    <section
      aria-label="DeNova product range"
      className="bg-[#0d1a3d] border-y-2 border-[#1B2F68] relative"
    >
      {/* Belt edge framing: hairlines + rivet dots */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[3px] border-b border-[#29B8E8]/20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(148,163,184,0.5) 1px, transparent 1.5px)",
          backgroundSize: "48px 3px",
          backgroundPosition: "24px 1px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-[3px] border-t border-[#29B8E8]/20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(148,163,184,0.5) 1px, transparent 1.5px)",
          backgroundSize: "48px 3px",
          backgroundPosition: "24px 1px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-6 sm:pt-8 flex items-center justify-between gap-4">
        <div className="text-[#29B8E8] text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em]">
          Product Line — What We Deliver
        </div>
        <div className="hidden sm:block text-white/30 text-[10px] font-mono uppercase tracking-widest">
          8 Categories · 5 Brands
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-4 sm:gap-5 overflow-x-auto py-6 sm:py-8 px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <ConveyorCard key={item.name} item={item} />
        ))}
        {/* Duplicate set for the seamless loop — hidden from a11y tree */}
        {items.map((item) => (
          <ConveyorCard key={`${item.name}-dup`} item={item} ariaHidden />
        ))}
      </div>
    </section>
  );
}
