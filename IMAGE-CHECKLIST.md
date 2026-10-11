# DeNova Site — Image & Brochure Status

Updated 2026-07-14 after placing the sourced images.

## ✅ Done — real images live (18 of 22)

| Brand | Product | Source |
|---|---|---|
| OPTITEX | Pattern Design Software, Marker Making Suite, Cut Plan Software (+ 3D shot in the carousel) | client's Optitex folder (818px captures) |
| Özer | Automatic Spreading Machine | your download |
| JWEI | Pattern Cutter, Template Cutter, Sample Fabric Cutter, Low Ply (MI60), High Ply | your downloads + existing gallery |
| C-TEX | Inspection, Relaxing, Colour (official diagram), Master (machine close-up) | your downloads + site gallery + c-tex.co.uk banner |
| MU | MU-GST, MU-MES, U-PAD tablet | brochure / existing gallery (1280px) |

Hero now uses `/images/hero-automation.jpg` (industrial robot arm, Pexels — free
license) as the background and `/images/hero-machine.jpg` (JWEI MI60 render) in
the right panel. **Zero Unsplash stock remains anywhere on the site.**

## ⬜ Branded fallback (no photo exists — card shows brand logo + name)

These render the brochure-style branded face. Drop a JPG at the path below and
redeploy to upgrade them to a photo card — no code changes:

1. `public/products/ozer-makina/air-floatation-spreading-tables.jpg` — ⚠️ not on Özer's site (model unconfirmed — ask Shivanthi/Raveen)
2. `public/products/ozer-makina/conveyorized-spreading-table.jpg` — same
3. `public/products/ozer-makina/fabric-loaders.jpg` — same

## 📄 Product brochures (PDF downloads)

Drop each product's digital brochure at:

```
public/brochures/[brand-id]/[product-slug].pdf
```

e.g. `public/brochures/jingwei/low-ply-cutting.pdf`

A **"Download Brochure"** button appears on that product's card automatically
at the next deploy. Brand ids: `optitex`, `ozer-makina`, `jingwei`, `ctex`,
`mu-bigdata`. Slugs match the image filenames above.

## Nice-to-have upgrades later

- Replace the Optitex screenshots (818px captures from the company profile) with
  higher-res official media-kit images if Optitex sends them
- A real Özer air-floatation/loader photo set from the Özer rep
- Higher-res C-TEX Master shot (current one is a crop from their web banner)
