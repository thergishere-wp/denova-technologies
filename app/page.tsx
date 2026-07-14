import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductConveyor from "@/components/ProductConveyor";
import TrustBar from "@/components/TrustBar";
import WhatWeDo from "@/components/WhatWeDo";
import Industries from "@/components/Industries";
import Solutions from "@/components/Solutions";
import WhyUs from "@/components/WhyUs";
import Consultancy from "@/components/Consultancy";
import MachineryServices from "@/components/MachineryServices";
import SoftwareDevelopment from "@/components/SoftwareDevelopment";
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
        <ProductConveyor />
        <TrustBar />
        <WhatWeDo />
        <Industries />
        <Solutions />
        <WhyUs />
        <Consultancy />
        <MachineryServices />
        <SoftwareDevelopment />
        <Countries />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
