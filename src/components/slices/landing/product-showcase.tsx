import Image from "next/image";
import Halo from "@/assets/halo-product.png";
import Card from "@/assets/test-card.svg";

type Props = object;

export default function ProductShowcase({}: Props) {
  return (
    <section className="relative space-y-12">
      <div className="space-y-4 flex flex-col md:items-center">
        <h3 className="font-neue-montreal font-medium text-4xl text-white">
          Meet Halo
        </h3>
        <p className="text-muted-foreground text-lg leading-6 md:text-center">
          Powering the world&apos;s best product teams, <br />
          from next-gen startups to established enterprises.
        </p>
      </div>
      <div className="rounded-[1.25rem] w-full relative overflow-hidden max-w-[80%] mx-auto">
        <div className="absolute inset-0 -z-10">
          <div className="relative h-full w-full">
            <Image fill src={Card} alt="card" />
          </div>
        </div>
        <div className="relative h-[30vw] w-full">
          <Image src={Halo} fill className="object-contain" alt="image" />
        </div>
      </div>
    </section>
  );
}
