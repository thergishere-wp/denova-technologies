import { existsSync } from "fs";
import path from "path";
import { brands } from "./brands";

// One brochure PDF per brand — drop a file at public/brochures/{brandId}.pdf
// and it appears automatically, no code change needed. Brands without a file
// yet just don't render the brochure buttons.
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
