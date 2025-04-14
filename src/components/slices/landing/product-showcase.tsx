import Image from "next/image";
import Halo from "@/assets/halo-product.png";
import Button from "@/components/common/button/button";

type Props = object;

export default function ProductShowcase({}: Props) {
  return (
    <section className="relative space-y-12 pb-24">
      <div className="space-y-4 flex flex-col md:items-center">
        <h3 className="font-neue-montreal font-medium text-4xl text-white">
          Advertise with Halo
        </h3>
      </div>
      <div className="flex items-end rounded-[1.25rem] h-[60vw] md:h-[34vw] w-full relative overflow-hidden md:max-w-[80%] mx-auto border-[#EBE5D2] border-[0.25px] bg-[rgba(36,38,43,0.16)]">
        <div className="relative h-[94%] w-full">
          <Image src={Halo} fill className="object-contain" alt="image" />
        </div>
      </div>
      <div className="space-y-4 flex flex-col items-start md:items-center justify-center">
        <p className="text-muted-foreground text-lg leading-6 md:text-center">
        Powering the world&apos;s best product teams,<br /> from next-gen startups to established enterprises.
        </p>
        <Button hasArrow>
          Get your ad slots now
        </Button>
      </div>
    </section>
  );
}
