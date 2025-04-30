import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export default function Circle({ className }: Props) {
  return (
    <div
      className={cn(
        "circle-shadow h-[20rem] w-[20rem] rounded-full",
        className
      )}
    ></div>
  );
}
