import Image from "next/image";
import Halo from "@/assets/halo-product.png";
import Button from "@/components/common/button/button";

type Props = object;

export default function ProductShowcase({}: Props) {
  return (
    <section className="relative space-y-12 pb-24 w-[92%] mx-auto">
      <div className="space-y-4 flex flex-col md:items-center">
        <h3 className="font-neue-montreal font-medium text-4xl text-white">
          <span className="text-muted-foreground">Say Hello to</span>
          {" "}<span className="italic">Halo !</span>
        </h3>
      </div>
      <div className="flex items-end rounded-[1.25rem] h-[60vw] md:h-[34vw] w-full relative overflow-hidden md:max-w-[80%] mx-auto z-10">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-[rgba(235,229,210,0.5)] to-[rgba(104,101,90,0.5)] rounded-[1.25rem] -z-10"></div>
        <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 h-[99.7%] w-[99.9%] bg-[#15191F] z-0 rounded-[1.25rem]"></div>
        <div className="relative h-[94%] w-full">
          <Image src={Halo} fill className="object-contain" alt="image" />
        </div>
      </div>
      <div className="space-y-4 flex flex-col items-start md:items-center justify-center">
        <p className="text-muted-foreground text-lg leading-6 md:text-center max-w-[60ch]">
        Partner with the largest DOOH network for exclusive access to key city hubs, boosting your brand’s visibility and reach in high-traffic areas.        </p>
        <Button hasArrow>
          Get your ad slots now
        </Button>
      </div>
    </section>
  );
}
