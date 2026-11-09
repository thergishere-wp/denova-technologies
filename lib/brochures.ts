import { existsSync } from "fs";
import path from "path";
import { brands } from "./brands";

// Brand-level brochure — only for a PDF that covers the whole brand (all
// products in one). Drop it at public/brochures/{brandId}.pdf and it appears
// automatically. Single-product brochures belong at
// public/brochures/{brandId}/{productSlug}.pdf instead (see the brand page).
export function getBrochureUrl(brandId: string): string | null {
  const rel = `/brochures/${brandId}.pdf`;
  const abs = path.join(process.cwd(), "public", rel);
  return existsSync(abs) ? rel : null;
}

export function getBrochureMap(): Record<string, string | null> {
  const map: Record<string, string | null> = {};
  for (const b of brands) {
    map[b.id] = getBrochureUrl(b.id);
  }
  return map;
}
