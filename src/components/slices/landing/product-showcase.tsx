// import Halo from "@/assets/halo-product.png";
import Button from "@/components/common/button/button";
import Circle from "@/components/common/circle/circle";
import VideoPlayer from "@/components/video-player/video-player";
import Image from "next/image";
import { JSX } from "react";

type Props = object;

type IconShowcaseType = {
  src: string;
  highlightText: string;
  text: string;
};

const M_DATA: IconShowcaseType[] = [
  {
    src: "/icons/rocket-icon.svg",
    highlightText: "Real-Time Content Updates.",
    text: "Place new your ads anytime, rotate creatives, and shift across locations—no delays.",
  },
  {
    src: "/icons/refresh-icon.svg",
    highlightText: "Amplifying your digital campaigns.",
    text: "Mirror your online messaging in the real world to drive recall and expand reach.",
  },
  {
    src: "/icons/target-icon.svg",
    highlightText: "Hyperlocal Audience Targeting.",
    text: "Reach the city’s key hotspots with bold, high-visibility digital screens.",
  },
  {
    src: "/icons/trust-icon.svg",
    highlightText: "Stronger Brand Trust.",
    text: "Premium, tech-driven displays position your brand as modern, credible, and aspirational.",
  },
];

export default function ProductShowcase({}: Props) {
  return (
    <section className="relative pb-24 w-full overflow-hidden product-showcase-bg rounded-b-4xl rounded-bl-4xl md:rounded-b-[18.6rem] md:rounded-bl-[18.6rem]">
      <Circle className="absolute hidden md:block -top-[22rem] left-2/4 -translate-x-2/4 h-[32rem] w-[32rem] circle-shadow-faded" />
      <div className="w-[92%] space-y-12 mx-auto">
        <div className="space-y-4 flex flex-col md:items-center mt-12 md:mt-64 relative">
          <Circle className="absolute hidden md:block -top-24 left-2/4 -translate-x-2/4 h-[32rem] w-[32rem]" />
          <p className="font-neue-montreal font-medium text-4xl text-white">
            <span className="text-muted-foreground">Say Hello to</span>{" "}
            <span className="italic">Halo !</span>
          </p>
        </div>
        <div className="flex items-end h-[60vw] md:h-[34vw] w-full relative overflow-hidden md:max-w-[80%] mx-auto z-10">
          <div className="relative h-[94%] w-full">
            <VideoPlayer src="/halo-ads-web.webm" type="video/webm" />
          </div>
        </div>
        <div className="flex items-start md:items-center justify-center">
          <p className="text-gray-200 text-lg leading-6 md:text-center max-w-[60ch]">
            Partner with the largest DOOH network for exclusive access to key
            city hubs, boosting your brand’s visibility and reach in
            high-traffic areas.{" "}
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-12 mx-auto w-[92%] md:w-[58%] mt-20">
        {M_DATA.map((item, i) => (
          <IconShowcase
          key={i}
          src={item.src}
          highlightText={item.highlightText}
          text={item.text}
          />
        ))}
      </div>
      <div className="flex items-center w-[92%] mx-auto md:justify-center mt-24">
        <Button className="z-30" hasArrow>Get your ad slots now</Button>
      </div>
    </section>
  );
}

function IconShowcase({
  src = "",
  highlightText = "",
  text = "",
}: IconShowcaseType): JSX.Element {
  return (
    <div className="flex flex-col gap-4 max-w-[60ch] md:max-w-full">
      <div className="relative h-[3rem] w-[3rem]">
        <Image fill alt="image" src={src} />
      </div>
      <p className="text-muted-foreground text-sm">
        <span className="text-gray-200">{highlightText}</span>
        {text}
      </p>
    </div>
  );
}
