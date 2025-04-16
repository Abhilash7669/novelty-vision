import Customers from "@/components/slices/landing/customers";
import Hero from "@/components/slices/landing/hero";
import ProductShowcase from "@/components/slices/landing/product-showcase";
import Stats from "@/components/slices/landing/stats";

export default function Home() {
  return (
    <main className="space-y-24 md:space-y-36 relative">
      <div className="space-y-24">
        <div className="w-[92%] mx-auto mt-44">
          <Hero />
        </div>
        <Customers />
        <Stats />
      </div>
      <div className="w-[92%] mx-auto relative">
        <ProductShowcase />
      </div>
    </main>
  );
}
