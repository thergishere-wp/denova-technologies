import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhatWeDo from "@/components/WhatWeDo";
import Industries from "@/components/Industries";
import Solutions from "@/components/Solutions";
import Products from "@/components/Products";
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
        <TrustBar />
        <WhatWeDo />
        <Industries />
        <Solutions />
        <Products />
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
