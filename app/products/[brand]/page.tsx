import { existsSync } from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { brands } from "@/lib/brands";
import { galleryImages } from "@/lib/galleryImages";
import { subProducts } from "@/lib/subProducts";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageRotator from "@/components/ImageRotator";
import SubProductCard from "@/components/SubProductCard";

interface Props {
  params: Promise<{ brand: string }>;
}

const brandLogoMap: Record<string, string> = {
  docad: "/brands/docad-logo.jpg",
  "ozer-makina": "/brands/ozer-logo.png",
  jingwei: "/brands/jwei-logo.svg",
  ctex: "/brands/ctex-logo.png",
  "mu-bigdata": "/brands/mu-logo.jpg",
};

export async function generateStaticParams() {
  return brands.map((b) => ({ brand: b.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { brand: brandId } = await params;
  const brand = brands.find((b) => b.id === brandId);
  if (!brand) return {};
  return {
    title: `${brand.name} | DeNova Technologies Ltd`,
    description: brand.description,
  };
}

export default async function BrandPage({ params }: Props) {
  const { brand: brandId } = await params;
  const brand = brands.find((b) => b.id === brandId);
  if (!brand) notFound();

  const images = galleryImages[brand.id] ?? [];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0d1a3d]">
        {/* Hero */}
        <div className="relative overflow-hidden bg-[#142250] pt-24 pb-10 sm:pt-32 sm:pb-20 border-b border-white/10">
          {/* Background — brand product imagery, dimmed and rotating behind the content */}
          {images.length > 0 && (
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 opacity-35">
                <ImageRotator
                  images={images}
                  intervalMs={5000}
                  sizes="100vw"
                  showDots={false}
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#142250] via-[#142250]/80 to-[#142250]/25" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#142250] via-transparent to-[#142250]/40" />
            </div>
          )}
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[#29B8E8] text-xs font-mono uppercase tracking-widest mb-5 sm:mb-8 hover:gap-3 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M13 8H3M7 4l-4 4 4 4" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Products
            </Link>
            <div className="flex items-start gap-3 sm:gap-6 mb-4 sm:mb-6">
              <div className="hidden sm:block text-6xl lg:text-8xl font-bold text-white/5 font-mono leading-none select-none">
                {brand.number}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  {brand.country && (
                    <span
                      className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 border text-[#29B8E8]"
                      style={{ borderColor: brand.accentColor }}
                    >
                      {brand.country}
                    </span>
                  )}
                  {brand.founded && (
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/30">
                      Est. {brand.founded}
                    </span>
                  )}
                </div>
                {/* DeNova logo + brand logo — authorized distributor pairing */}
                <div className="mb-3 sm:mb-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="bg-white px-3 py-2 inline-flex items-center h-10 sm:h-12">
                      <Image
                        src="/denova-logo.png"
                        alt="DeNova Technologies Ltd logo"
                        width={124}
                        height={40}
                        className="object-contain"
                        style={{ maxHeight: "36px", width: "auto" }}
                        priority
                      />
                    </span>
                    <span className="text-white/30 text-lg font-mono select-none" aria-hidden="true">
                      ×
                    </span>
                    <span className="bg-white px-4 py-2 inline-flex items-center h-10 sm:h-12">
                      <Image
                        src={brandLogoMap[brand.id]}
                        alt={`${brand.name} logo`}
                        width={160}
                        height={44}
                        className="object-contain"
                        style={{ maxHeight: "36px", width: "auto" }}
                        priority
                      />
                    </span>
                  </div>
                  <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest mt-2">
                    DeNova Technologies — Authorized Distributor of {brand.name}
                  </p>
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white mb-3">
                  {brand.name}
                </h1>
                <p className="text-[#29B8E8] text-xs font-mono uppercase tracking-widest">
                  {brand.category}
                </p>
              </div>
            </div>
            <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed max-w-3xl">
              {brand.description}
            </p>
          </div>
        </div>

        {/* Products grid */}
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-10 sm:py-20">
          {/* Trust stat (C-TEX — verified accurate) */}
          {brand.id === "ctex" && (
            <div className="mb-10 sm:mb-16 bg-[#1B2F68] border-l-2 border-l-[#29B8E8] px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-10">
              <div>
                <span className="text-white text-3xl font-mono font-bold">20+</span>
                <span className="text-[#94A3B8] text-xs uppercase tracking-wider ml-2">Years in the Field</span>
              </div>
              <div>
                <span className="text-white text-3xl font-mono font-bold">1000+</span>
                <span className="text-[#94A3B8] text-xs uppercase tracking-wider ml-2">Installations Worldwide</span>
              </div>
            </div>
          )}

          {/* Sub-product cards, grouped by category */}
          {(subProducts[brand.id] ?? []).map((group) => (
            <div key={group.title} className="mb-10 sm:mb-16">
              <h2 className="text-[#29B8E8] text-xs font-mono uppercase tracking-widest mb-6 pb-3 border-b border-white/10">
                {group.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {group.items.map((product, i) => {
                  // Brochure appears once the PDF is dropped at this path —
                  // checked at build time, no code change needed.
                  const brochure = `/brochures/${brand.id}/${product.slug}.pdf`;
                  const hasBrochure = existsSync(
                    path.join(process.cwd(), "public", brochure)
                  );
                  return (
                    <SubProductCard
                      key={product.slug}
                      product={product}
                      index={i}
                      brandName={brand.name}
                      brandLogo={brandLogoMap[brand.id]}
                      brochureUrl={hasBrochure ? brochure : undefined}
                    />
                  );
                })}
              </div>
            </div>
          ))}

          {/* Benefits */}
          <div className="mb-10 sm:mb-16">
            <h2 className="text-[#29B8E8] text-xs font-mono uppercase tracking-widest mb-4 sm:mb-6 pb-3 border-b border-white/10">
              Key Benefits
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {brand.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 bg-[#1B2F68] p-5 border border-white/10"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-0.5" aria-hidden="true">
                    <circle cx="10" cy="10" r="9" stroke="#29B8E8" strokeWidth="1.5" />
                    <path d="M6 10l3 3 5-5" stroke="#29B8E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-white/80 text-sm leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div id="product-cta" className="bg-[#1B2F68] border-t-2 border-t-[#29B8E8] p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
            <div>
              <h3 className="text-white font-bold text-xl sm:text-2xl uppercase tracking-tight mb-2">
                Interested in {brand.name}?
              </h3>
              <p className="text-[#94A3B8] text-sm">
                Contact our team for a demo, pricing, or technical specifications.
              </p>
            </div>
            <Link
              href="/#contact"
              className="bg-[#1E6CC8] text-white text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-[#29B8E8] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
            >
              Request a Quote for {brand.name}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
