// import Image from "next/image";
// import Halo from "@/assets/halo-product.png";
import Button from "@/components/common/button/button";
import Circle from "@/components/common/circle/circle";
import VideoPlayer from "@/components/video-player/video-player";

type Props = object;

export default function ProductShowcase({}: Props) {
  return (
    <section className="relative pb-24 w-full overflow-hidden product-showcase-bg">
      <Circle className="absolute -top-[22rem] left-2/4 -translate-x-2/4 h-[32rem] w-[32rem] circle-shadow-faded" />
      <div className="w-[92%] space-y-12 mx-auto">
        <div className="space-y-4 flex flex-col md:items-center mt-64 relative">
          <Circle className="absolute -top-24 left-2/4 -translate-x-2/4 h-[32rem] w-[32rem]" />
          <p className="font-neue-montreal font-medium text-4xl text-white">
            <span className="text-muted-foreground">Say Hello to</span>{" "}
            <span className="italic">Halo !</span>
          </p>
        </div>
        <div className="flex items-end h-[60vw] md:h-[34vw] w-full relative overflow-hidden md:max-w-[80%] mx-auto z-10">
          <div className="relative h-[94%] w-full">
            <VideoPlayer 
              src="/halo-ads-web.webm"
              type="video/webm"
            />
          </div>
        </div>
        <div className="space-y-4 flex flex-col items-start md:items-center justify-center">
          <p className="text-muted-foreground text-lg leading-6 md:text-center max-w-[60ch]">
            Partner with the largest DOOH network for exclusive access to key
            city hubs, boosting your brand’s visibility and reach in
            high-traffic areas.{" "}
          </p>
          <Button hasArrow>Get your ad slots now</Button>
        </div>
      </div>
    </section>
  );
}
