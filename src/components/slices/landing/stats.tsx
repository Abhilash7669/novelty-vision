import BlueGlow from "@/components/common/glow/blue-glow";
import { stats } from "@/data/stats";
import { JSX } from "react";

type Props = object;

type StatProps = {
  text: string;
  stat: string;
};

export default function Stats({}: Props) {
  return (
    <section className="flex items-center justify-center relative w-[92%] mx-auto">
      {/* <BlueGlow className="h-[14rem] top-full" /> */}
      <div className="flex flex-wrap gap-12">
        {stats.map((item) => (
          <Stat 
            key={item.stat}
            text={item.text} 
            stat={item.stat} 
        />
        ))}
      </div>
    </section>
  );
}

function Stat({ text, stat }: StatProps): JSX.Element {
  return (
    <div className="flex flex-col md:items-center justify-center">
      <p className="shadow-text-gradient font-neue-montreal font-medium text-7xl md:text-[8vw] md:text-center">
        {stat ? stat : "Default Text"}
      </p>
      <p className="text-muted-foreground text-lg md:text-[1vw] md:text-center">
        {text ? text : "Default text"}
      </p>
    </div>
  );
}
