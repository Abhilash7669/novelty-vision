import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
    className?: string;
    children: React.ReactNode;
}

export default function BgGrainContainer({ className= "", children }: Props) {
  return (
    <section className={cn("relative h-full border border-background", className)}>
        <div className="absolute top-0 left-0 h-full w-full z-20 opacity-25 md:opacity-15">
            <div className="relative h-full w-full">
                <Image
                    fill
                    src="/bg/bg-grains.svg"
                    alt="bg-grain"
                    className="object-cover"
                />
            </div>
        </div>
        {children}
    </section>
  )
}