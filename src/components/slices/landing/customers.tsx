import Chip from "@/components/common/button/chip";
import GlowContainer from "@/components/common/glow-container/glow-container";
import { customers } from "@/data/customers";
import Image from "next/image";

type Props = object;

export default function Customers({}: Props) {
  return (
    <GlowContainer className="flex items-start md:items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-12 w-[92%] md:w-auto mx-auto">
        <div>
          <p className="text-white text-lg md:text-center">
            Powering the world&apos;s best product teams.
          </p>
          <p className="text-muted-foreground text-lg md:text-center">
            From next-gen startups to established enterprises.
          </p>
        </div>
        <ul className="grid grid-cols-3 md:grid-cols-4 gap-12 w-full">
          {customers.map((item, i) => (
            <li className="flex items-center justify-center relative" key={i}>
              <Image src={item.src} alt="image" className="object-contain" />
            </li>
          ))}
        </ul>
        <Chip>Meet our customers</Chip>
      </div>
    </GlowContainer>
  );
}
