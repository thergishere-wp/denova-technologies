import Image from "next/image";
import type { SubProduct } from "@/lib/subProducts";

interface Props {
  product: SubProduct;
  index: number;
  brandName: string;
  /** White-chip brand logo path, used by the branded fallback face. */
  brandLogo: string;
  /** Set when /public/brochures/[brand]/[slug].pdf exists (checked at build). */
  brochureUrl?: string;
}

export default function SubProductCard({
  product,
  index,
  brandName,
  brandLogo,
  brochureUrl,
}: Props) {
  return (
    <div className="group bg-[#1B2F68] border border-white/10 hover:border-[#29B8E8]/60 transition-colors duration-150 flex flex-col">
      <div className="relative aspect-[4/3] bg-[#142250] overflow-hidden">
        {product.image ? (
          <>
            <Image
              src={product.image}
              alt={`${brandName} ${product.name}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B2F68]/60 to-transparent" />
          </>
        ) : (
          /* Branded face — brochure-style presentation for list-only products */
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(27,47,104,0.6) 0, rgba(27,47,104,0.6) 1px, transparent 1px, transparent 18px)",
            }}
          >
            <span className="bg-white px-3 py-2 inline-flex items-center">
              <Image
                src={brandLogo}
                alt={`${brandName} logo`}
                width={110}
                height={36}
                className="object-contain"
                style={{ maxHeight: "30px", width: "auto" }}
              />
            </span>
            <div className="w-10 h-0.5 bg-[#29B8E8]" />
            <div className="text-white/70 text-xs font-mono uppercase tracking-[0.2em] text-center leading-relaxed">
              {product.name}
            </div>
          </div>
        )}
        <span className="absolute top-3 left-3 text-[#29B8E8] text-xs font-mono bg-[#0d1a3d]/80 px-2 py-1">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="text-white font-bold text-lg uppercase tracking-wide mb-3">
          {product.name}
        </h3>
        <p className="text-[#94A3B8] text-sm leading-relaxed flex-1">
          {product.description}
        </p>

        {/* Spec strip — only where verified numbers exist */}
        {product.specs && product.specs.length > 0 && (
          <div className="mt-5 pt-4 border-t border-white/10 grid grid-cols-2 gap-x-4 gap-y-3">
            {product.specs.map((spec) => (
              <div key={spec.label}>
                <div className="text-white/40 text-[10px] font-mono uppercase tracking-widest mb-0.5">
                  {spec.label}
                </div>
                <div className="text-[#29B8E8] text-xs font-mono font-bold">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Digital brochure download — appears when the PDF is dropped in */}
        {brochureUrl && (
          <a
            href={brochureUrl}
            download
            className="mt-5 inline-flex items-center gap-2 border border-[#29B8E8]/40 text-[#29B8E8] hover:bg-[#29B8E8] hover:text-[#0d1a3d] transition-colors duration-150 text-[11px] font-bold uppercase tracking-widest px-4 py-2.5 self-start"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 1v8M4 6l3 3 3-3M2 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download Brochure
          </a>
        )}
      </div>
    </div>
  );
}
