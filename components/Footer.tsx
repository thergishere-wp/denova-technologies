import Link from "next/link";
import Image from "next/image";

const products = [
  { label: "DOCAD", href: "/products/docad" },
  { label: "Özer Makina", href: "/products/ozer-makina" },
  { label: "JINGWEI / JWEI", href: "/products/jingwei" },
  { label: "C-TEX", href: "/products/ctex" },
  { label: "MU Big Data", href: "/products/mu-bigdata" },
];

const industryLinks = [
  "Apparel Manufacturing",
  "Home Textiles",
  "Technical & Industrial",
];

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Team", href: "#team" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const brandLogos = [
  { src: "/brands/docad-logo.jpg", alt: "DOCAD", href: "/products/docad" },
  { src: "/brands/ozer-logo.png", alt: "Özer Makina", href: "/products/ozer-makina" },
  { src: "/brands/jwei-logo.svg", alt: "JWEI", href: "/products/jingwei" },
  { src: "/brands/ctex-logo.png", alt: "C-TEX", href: "/products/ctex" },
  { src: "/brands/mu-logo.jpg", alt: "MU Big Data", href: "/products/mu-bigdata" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d1a3d] border-t-2 border-[#29B8E8]">
      {/* Brand logos bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-5 sm:py-8">
          <div className="text-[#94A3B8] text-[10px] font-mono uppercase tracking-widest mb-4 sm:mb-6">
            Authorized Distributors
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-8">
            {brandLogos.map((logo) => (
              <Link key={logo.alt} href={logo.href} className="opacity-60 hover:opacity-100 transition-opacity duration-150">
                <span className="bg-white px-3 py-2 inline-flex items-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={80}
                    height={36}
                    className="object-contain"
                    style={{ maxHeight: "32px", width: "auto" }}
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-10 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 sm:gap-12">
          {/* Brand col */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-5 inline-flex">
              <span className="bg-white px-3 py-2 rounded-sm inline-flex items-center">
                <Image
                  src="/denova-logo.png"
                  alt="DeNova Technologies Ltd"
                  width={140}
                  height={48}
                  className="object-contain"
                />
              </span>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-6 max-w-xs">
              Advanced manufacturing solutions for the modern industrial landscape.
              Sri Lanka · Bangladesh · Kenya · New Zealand.
            </p>
            <div className="flex flex-col gap-2">
              <a href="mailto:dinesh@denovatech.com" className="text-[#94A3B8] text-xs hover:text-[#29B8E8] transition-colors font-mono">
                dinesh@denovatech.com
              </a>
              <span className="text-[#94A3B8] text-xs font-mono">www.denovatec.com</span>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 pb-2 border-b border-white/10">
              Products
            </h4>
            <ul className="flex flex-col gap-3">
              {products.map((p) => (
                <li key={p.label}>
                  <Link
                    href={p.href}
                    className="text-[#94A3B8] text-sm hover:text-[#29B8E8] transition-colors"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 pb-2 border-b border-white/10">
              Industries
            </h4>
            <ul className="flex flex-col gap-3">
              {industryLinks.map((item) => (
                <li key={item}>
                  <a href="#industries" className="text-[#94A3B8] text-sm hover:text-[#29B8E8] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-bold uppercase tracking-widest text-xs mt-8 mb-6 pb-2 border-b border-white/10">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-[#94A3B8] text-sm hover:text-[#29B8E8] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 pb-2 border-b border-white/10">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              {[
                { country: "Sri Lanka", phone: "+94 777 395884" },
                { country: "Bangladesh", phone: "+880 1817-079822" },
                { country: "New Zealand", phone: "+64 27 5555880" },
              ].map((c) => (
                <div key={c.country}>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#94A3B8]/60 mb-0.5">
                    {c.country}
                  </div>
                  <div className="text-white text-sm font-mono">{c.phone}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[#94A3B8] text-xs">
            © 2024 DeNova Technologies Ltd. All Rights Reserved.
          </div>
          <div className="text-[#94A3B8] text-[10px] font-mono text-center sm:text-right">
            Authorized Distributor for DOCAD · Özer Makina · JINGWEI · C-TEX · MU Big Data
          </div>
        </div>
      </div>
    </footer>
  );
}
