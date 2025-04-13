import Customers from "@/components/slices/landing/customers";
import Hero from "@/components/slices/landing/hero";
import ProductShowcase from "@/components/slices/landing/product-showcase";

export default function Home() {
  return (
    <main className="space-y-24 relative">
      <div className="w-[92%] mx-auto mt-40">
        <Hero />
      </div>
      <Customers />
      <div className="w-[92%] mx-auto">
        <ProductShowcase />
      </div>
    </main>
  );
}
