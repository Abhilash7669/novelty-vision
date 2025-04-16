import WhiteQuote from "@/assets/white-quote.svg";
import { testimonial } from "@/data/testimonial";
import Image from "next/image";

type Props = object;

export default function Testimonial({}: Props) {
  return (
    <section className="flex items-center justify-center secondary-gradient py-12 z-20 overflow-hidden">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 pt-40 relative w-[92%] md:w-[82%]">
            <Image src={WhiteQuote} alt="quote" height={300} width={300} className="absolute -top-32 -left-6 md:-left-24"  />
            {testimonial.map((item, i) => (
                <div className="space-y-4" key={i}>
                    <div className="space-y-2">
                        <div className="relative h-12 w-24">
                            <Image fill src={item.logo} sizes="96px" alt="image" />
                        </div>
                        <p className="text-muted-foreground text-base">
                            {item.quote}
                        </p>
                    </div>
                    <p className="text-muted-foreground shadow-text-gradient text-sm">
                        {item.identifier}
                    </p>
                </div>
            ))}
        </div>
    </section>
  )
}