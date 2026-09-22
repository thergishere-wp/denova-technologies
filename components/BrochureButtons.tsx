"use client";

import { useState } from "react";
import BrochureModal from "./BrochureModal";

interface Props {
  url: string;
  brandName: string;
  variant: "full" | "compact";
}

export default function BrochureButtons({ url, brandName, variant }: Props) {
  const [open, setOpen] = useState(false);

  if (variant === "compact") {
    return (
      <>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setOpen(true);
          }}
          aria-label={`View ${brandName} brochure`}
          title="View Brochure"
          className="w-11 h-11 flex items-center justify-center bg-[#142250] border border-white/10 text-[#94A3B8] hover:text-[#29B8E8] hover:border-[#29B8E8]/50 transition-colors duration-150 cursor-pointer shrink-0"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M4 1.5h7l3 3v12a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5V2a.5.5 0 01.5-.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
            <path d="M11 1.5v3h3" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
          </svg>
        </button>
        {open && <BrochureModal url={url} brandName={brandName} onClose={() => setOpen(false)} />}
      </>
    );
  }

  return (
    <>
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 bg-[#142250] border border-white/10 text-white text-xs font-bold uppercase tracking-widest px-4 sm:px-5 py-2.5 sm:py-3 hover:border-[#29B8E8]/50 hover:text-[#29B8E8] transition-colors duration-150 cursor-pointer"
        >
          <svg width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M4 1.5h7l3 3v12a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5V2a.5.5 0 01.5-.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
            <path d="M11 1.5v3h3" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
          </svg>
          View Brochure
        </button>
        <a
          href={url}
          download
          className="inline-flex items-center gap-2 bg-[#1E6CC8] text-white text-xs font-bold uppercase tracking-widest px-4 sm:px-5 py-2.5 sm:py-3 hover:bg-[#29B8E8] transition-colors duration-150 cursor-pointer"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M7 1.5v8M3.5 6.5L7 10l3.5-3.5M2 12.5h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Download Brochure
        </a>
      </div>
      {open && <BrochureModal url={url} brandName={brandName} onClose={() => setOpen(false)} />}
    </>
  );
}
