import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhatWeDo from "@/components/WhatWeDo";
import Solutions from "@/components/Solutions";
import Products from "@/components/Products";
import Industries from "@/components/Industries";
import WhyUs from "@/components/WhyUs";
import Countries from "@/components/Countries";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <WhatWeDo />
        <Solutions />
        <Products />
        <Industries />
        <WhyUs />
        <Countries />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
