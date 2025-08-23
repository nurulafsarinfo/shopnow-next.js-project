
import Hero from "./components/Hero";
import ProductHighlights from "./components/ProductHighlights";
import ProductPage from "./products/page";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">


      <main className="min-h-screen">
        <Hero></Hero>
        <ProductHighlights></ProductHighlights>
      </main>


    </div>
  );
}
