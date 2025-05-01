// import Button from "@/components/common/button/button";
import BlueGlow from "@/components/common/glow/blue-glow";

type Props = object;

export default function GetStarted({}: Props) {
  return (
    <section className="flex items-center justify-center relative pt-24">
        <div className="w-[92%] space-y-6 flex flex-col items-center justify-center">
            <div className="space-y-4 flex flex-col items-center justify-center">
                <p className="text-5xl text-muted-foreground font-neue-montreal font-medium">
                    Ready to give your brand a shot with <span className="text-white italic">- Halo?</span>
                </p>
            </div>
        </div>
        <BlueGlow 
            className="top-[150%]" 
        />
    </section>
  )
}