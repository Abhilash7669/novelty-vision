import Button from "@/components/common/button/button";
import Chip from "@/components/common/button/chip";

type Props = object;

export default function Hero({}: Props) {
  return (
    <section className="flex flex-col items-start md:items-center justify-start space-y-10 ">
        <Chip>
            Introducing Halo, how can DOOH benefit you?
        </Chip>
        <div className="flex flex-col items-start md:items-center space-y-6">
            <h1 className="font-neue-montreal font-medium text-white text-5xl max-w-[24ch] md:text-center">
                Scale your brand with a creative growth agency.
            </h1>
            <p className="text-muted-foreground text-lg md:text-center">
                With over 8 years of experience, Genesis are a passionate, driven and attentive.
            </p>
            <Button>
                Book an intro
            </Button>
        </div>
    </section>
  )
}