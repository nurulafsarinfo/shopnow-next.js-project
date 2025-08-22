
import Hero from "./components/Hero";
import ProductPage from "./products/page";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">


      <main className="min-h-screen">
        <Hero></Hero>
        <ProductPage></ProductPage>
      </main>


    </div>
  );
}
