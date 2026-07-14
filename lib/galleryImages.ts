export interface GalleryImage {
  src: string;
  alt: string;
}

export const galleryImages: Record<string, GalleryImage[]> = {
  docad: [
    { src: "/products/docad/docad-1.jpg", alt: "DOCAD CAD software interface" },
    { src: "/products/docad/docad-2.jpg", alt: "DOCAD CAD/CAM system" },
  ],
  "ozer-makina": [
    { src: "/products/ozer/ozer-1.png", alt: "Özer Makina automatic spreading machine" },
    {
      src: "/products/ozer-makina/automatic-spreading-machine.jpg",
      alt: "Özer Makina servo-motor automatic spreading machine spreading patterned fabric",
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
    { src: "/products/mu/mu-1.webp", alt: "MU-GST standard time system with video process analysis" },
    { src: "/products/mu/mu-2.webp", alt: "U-PAD shop floor tablet terminal at a sewing station" },
    { src: "/products/mu/mu-3.png", alt: "MU-MES line balancing and production dashboard" },
  ],
};
