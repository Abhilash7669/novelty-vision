import Button from "@/components/common/button/button";
import Chip from "@/components/common/button/chip";

type Props = object;

export default function Hero({}: Props) {
  return (
    <section className="flex flex-col items-start md:items-center justify-start space-y-10 w-[92%] mx-auto">
      <Chip hasArrow variant="gradient">
        Introducing Halo, how can DOOH benefit you?
      </Chip>
      <div className="flex flex-col items-start md:items-center space-y-6">
        <h1 className="font-neue-montreal font-medium text-white text-5xl max-w-[24ch] md:text-center">
          Beyond the social media feed
        </h1>
        <p className="text-muted-foreground text-lg md:text-center">
          Real World. Real Spaces. Real Impact
        </p>
        <Button className="z-30" hasArrow>Get Started</Button>
      </div>
    </section>
  );
}
