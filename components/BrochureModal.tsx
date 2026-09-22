"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface Props {
  url: string;
  brandName: string;
  onClose: () => void;
}

export default function BrochureModal({ url, brandName, onClose }: Props) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeBtnRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/70 motion-safe:animate-[fadeIn_150ms_ease-out]"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${brandName} brochure`}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[#0d1a3d] border border-white/10 w-full h-full max-w-5xl max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10 shrink-0">
          <div className="text-white text-sm sm:text-base font-bold uppercase tracking-wide truncate">
            {brandName} <span className="text-[#94A3B8] font-normal">— Brochure</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={url}
              download
              className="inline-flex items-center gap-2 bg-[#1E6CC8] text-white text-xs font-bold uppercase tracking-widest px-3 sm:px-4 py-2.5 hover:bg-[#29B8E8] transition-colors duration-150 cursor-pointer"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 1.5v8M3.5 6.5L7 10l3.5-3.5M2 12.5h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="hidden sm:inline">Download</span>
            </a>
            <button
              ref={closeBtnRef}
              onClick={onClose}
              aria-label="Close brochure viewer"
              className="w-11 h-11 flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors duration-150 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#29B8E8]"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* PDF */}
        <iframe
          src={url}
          title={`${brandName} brochure`}
          className="flex-1 w-full bg-white"
        />
      </div>
    </div>,
    document.body
  );
}
