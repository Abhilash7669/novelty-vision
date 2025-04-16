import Button from "@/components/common/button/button";
import BlueGlow from "@/components/common/glow/blue-glow";

type Props = object;

export default function GetStarted({}: Props) {
  return (
    <section className="flex items-center justify-center relative pb-24">
        <div className="w-[92%] space-y-6 flex flex-col items-center justify-center">
            <div className="space-y-4 flex flex-col items-center justify-center">
                <p className="font-neue-montreal text-5xl text-center">
                    Ready to get started?
                </p>
                <p className="text-muted-foreground text-xl text-center">
                    Give HALO a spin!
                </p>
            </div>
            <Button variant="gradient" hasArrow> 
                Talk to us now
            </Button>
        </div>
        <BlueGlow />
    </section>
  )
}