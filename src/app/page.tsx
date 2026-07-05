import Footer from "@/components/Footer";

import Navbar from "@/components/navigation/Navbar";

import Hero from "@/components/home/Hero";
import ProductShowcase from "@/components/home/ProductShowcase";
import BuiltFor from "@/components/home/BuiltFor";
import WhyMalicc from "@/components/home/WhyMalicc";
import Spotlight from "@/components/home/Spotlight";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <ProductShowcase />

        <BuiltFor />

        <WhyMalicc />

        <Spotlight />

        <FinalCTA />

      </main>

      <Footer />
    </>
  );
}