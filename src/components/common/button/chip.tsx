import Arrow from "@/components/common/arrow/arrow";
import { cn } from "@/lib/utils";


type Props = {
  variant?: "default" | "gradient"; 
  children: React.ReactNode;
  className?: string;
  hasArrow?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Chip({
  variant = "default", 
  className = "",
  children,
  hasArrow = false,
  ...props
}: Props) {

  const variantClasses = {
    default: "bg-[#32394a] text-subtle",
    gradient: "bg-[linear-gradient(102deg,#398DFF_22.87%,_#B18C19_92.72%)]"
  };

  const baseClass = "rounded-full flex items-center gap-2 py-2 px-4 text-sm font-medium";

  return (
    <button
      className={cn(baseClass, variantClasses[variant], className)}
      {...props}
    >
      {children}{hasArrow && <Arrow />}
    </button>
  );
}
