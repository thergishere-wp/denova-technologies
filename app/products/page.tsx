import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Products from "@/components/Products";

export const metadata: Metadata = {
  title: "Products | DeNova Technologies Ltd — Apparel Machinery & Software Distributor",
  description:
    "Authorized distributor of DOCAD CAD software, Özer Makina spreading machines, JWEI digital cutting systems, C-TEX fabric inspection, MU Big Data smart factory software, and KASU lace laser cutting machines — serving apparel manufacturers in Sri Lanka, Bangladesh, Kenya and beyond.",
  keywords:
    "apparel machinery distributor, Sri Lanka, Bangladesh, CAD software, fabric spreading machine, digital cutting machine, fabric inspection, MES, laser lace cutting, DOCAD, Özer Makina, JWEI, C-TEX, MU Big Data, KASU",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0d1a3d]">
        <Products standalone />
      </main>
      <Footer />
    </>
  );
}
