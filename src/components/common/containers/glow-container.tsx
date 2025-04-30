import { cn } from "@/lib/utils";

type Props = {
    children: React.ReactNode;
    className?: string;
};

export default function GlowContainer({ children, className= "" }: Props) {
  return (
    <div className={cn("min-h-[50vh] overflow-hidden w-full relative", className)}>
      <div className="[box-shadow:inset_0px_53.88px_43.41px_0px_#044192] rounded-full h-[2200px] w-[2200px] absolute top-0 left-2/4 -translate-x-2/4"></div>
      <div className="mt-40 w-[92%] mx-auto">
      {children}
      </div>
    </div>
  );
}
