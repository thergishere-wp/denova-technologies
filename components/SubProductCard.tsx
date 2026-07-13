import Image from "next/image";
import type { SubProduct } from "@/lib/subProducts";

interface Props {
  product: SubProduct;
  index: number;
  brandName: string;
}

export default function SubProductCard({ product, index, brandName }: Props) {
  return (
    <div className="group bg-[#1B2F68] border border-white/10 hover:border-[#29B8E8]/60 transition-colors duration-150 flex flex-col">
      {/* Product image — client photos land at product.image */}
      <div className="relative aspect-[4/3] bg-[#142250] overflow-hidden">
        <Image
          src={product.image}
          alt={`${brandName} ${product.name}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B2F68]/60 to-transparent" />
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
      </div>
    </div>
  );
}
