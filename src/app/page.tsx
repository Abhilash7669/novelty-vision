import Customers from "@/components/slices/landing/customers";
import Hero from "@/components/slices/landing/hero";

export default function Home() {
  return (
    <main className="space-y-12 relative">
      <div className="w-[92%] mx-auto mt-40">
        <Hero />
      </div>
      <Customers />
    </main>
  );
}
