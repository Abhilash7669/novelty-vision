import Customers from "@/components/slices/landing/customers";
import Faq from "@/components/slices/landing/faq";
import GetStarted from "@/components/slices/landing/get-started";
import Hero from "@/components/slices/landing/hero";
import ProductShowcase from "@/components/slices/landing/product-showcase";
import Stats from "@/components/slices/landing/stats";
import Testimonial from "@/components/slices/landing/testimonial";
import WhatWeDo from "@/components/slices/landing/what-we-do";

export default function Home() {
  return (
    <main className="space-y-24 md:space-y-36 relative">
      <div className="space-y-24">
        <Hero />
        <Customers />
        <Stats />
      </div>
      <ProductShowcase />
      <WhatWeDo />
      <Testimonial />
      <Faq />
      <GetStarted />
    </main>
  );
}
