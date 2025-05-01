import BgGrainContainer from "@/components/common/containers/bg-grain-container";
import Customers from "@/components/slices/landing/customers";
import Faq from "@/components/slices/landing/faq";
import GetStarted from "@/components/slices/landing/get-started";
import Hero from "@/components/slices/landing/hero";
import ProductShowcase from "@/components/slices/landing/product-showcase";
import Stats from "@/components/slices/landing/stats";
import Testimonial from "@/components/slices/landing/testimonial";
import WhatWeDo from "@/components/slices/landing/what-we-do";
import TsParticle from "@/components/ts-particle/ts-particle";

export default function Home() {
  return (
    <BgGrainContainer>
      <div className="space-y-24 md:space-y-36">
        <div className="space-y-24 relative">
          <TsParticle />
          <Hero />
          <Customers />
          <Stats />
        </div>
        <ProductShowcase />
        <WhatWeDo />
        <Testimonial />
        <Faq />
        <GetStarted />
      </div>
    </BgGrainContainer>
  );
}
