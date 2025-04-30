import Image from "next/image";
import BgGrain from "@/assets/bg-grains.png"
import { cn } from "@/lib/utils";

type Props = {
    className?: string;
    children: React.ReactNode;
}

export default function BgGrainContainer({ className= "", children }: Props) {
  return (
    <section className={cn("relative h-full border border-background", className)}>
        <div className="absolute top-0 left-0 h-full w-full -z-10 opacity-10">
            <div className="relative h-full w-full">
                <Image
                    fill
                    src={BgGrain}
                    alt="bg-grain"
                />
            </div>
        </div>
        {children}
    </section>
  )
}