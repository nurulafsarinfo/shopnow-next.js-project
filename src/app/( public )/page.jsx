import Hero from "@/components/Hero";
import ProductHighlights from "@/components/ProductHighlights";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">


      <main className="min-h-screen">
        <Hero></Hero>
        <ProductHighlights></ProductHighlights>
        <Features></Features>
        <Testimonials></Testimonials>
        <FAQ></FAQ>
        <CTA></CTA>
        <About></About>
      </main>


    </div>
  );
}
