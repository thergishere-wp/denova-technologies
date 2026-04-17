"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import BrandBar from "@/components/BrandBar";
import About from "@/components/About";
import Products from "@/components/Products";
import Industries from "@/components/Industries";
import WhyDenova from "@/components/WhyDenova";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [prefillProduct, setPrefillProduct] = useState<string>("");

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <BrandBar />
        <About />
        <Products onEnquire={setPrefillProduct} />
        <Industries />
        <WhyDenova />
        <Contact prefillProduct={prefillProduct} />
      </main>
      <Footer />
    </>
  );
}
