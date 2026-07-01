export interface GalleryImage {
  src: string;
  alt: string;
}

export const galleryImages: Record<string, GalleryImage[]> = {
  docad: [
    { src: "/products/docad/docad-1.jpg", alt: "DOCAD CAD software interface" },
    { src: "/products/docad/docad-2.jpg", alt: "DOCAD CAD/CAM system" },
    {
      src: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=1200&h=750&fit=crop&auto=format",
      alt: "DOCAD automated pattern cutting output",
    },
  ],
  "ozer-makina": [
    { src: "/products/ozer/ozer-1.png", alt: "Özer Makina automatic spreading machine" },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=750&fit=crop&auto=format",
      alt: "Özer Makina industrial textile production line",
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=750&fit=crop&auto=format",
      alt: "Özer Makina fabric spreading system",
    },
  ],
  jingwei: [
    { src: "/products/jwei/jwei-1.png", alt: "JWEI pattern cutter" },
    { src: "/products/jwei/jwei-2.png", alt: "JWEI digital cutting system" },
    { src: "/products/jwei/jwei-3.jpg", alt: "JWEI cutting machine" },
    { src: "/products/jwei/jwei-multilayer.png", alt: "JWEI multilayer cutting system" },
  ],
  ctex: [
    { src: "/products/ctex/ctex-1.png", alt: "C-TEX fabric inspection machine" },
    { src: "/products/ctex/ctex-2.png", alt: "C-TEX inspection system" },
    { src: "/products/ctex/ctex-3.jpg", alt: "C-TEX fabric relaxing machine" },
  ],
  "mu-bigdata": [
    { src: "/products/mu/mu-1.webp", alt: "MU Big Data factory software" },
    { src: "/products/mu/mu-2.webp", alt: "MU MES system" },
    { src: "/products/mu/mu-3.png", alt: "MU production analytics dashboard" },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=750&fit=crop&auto=format",
      alt: "MU Big Data shop floor tablet U-PAD in use",
    },
  ],
};
