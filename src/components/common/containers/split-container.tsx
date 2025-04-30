import { cn } from "@/lib/utils";

type Props = {
    children: React.ReactNode;
    className?: string;
};

export default function SplitContainer({ children, className }: Props) {
  return (
    <div className={cn("flex flex-col xl:flex-row justify-between w-full space-y-2 xl:space-y-0", className)}>
     { children }
    </div>
  );
}
