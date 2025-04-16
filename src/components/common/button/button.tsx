import CaretRight from "@/components/common/arrow/caret-right";
import { cn } from "@/lib/utils";

type Props = {
  variant?: "default" | "secondary" | "destructive"; 
  children: React.ReactNode;
  className?: string;
  hasArrow?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = "default", 
  className = "",
  children,
  hasArrow = false,
  ...props
}: Props) {

  const variantClasses = {
    default: "bg-white text-onyx",
    secondary: "bg-gray-500 text-white",
    destructive: "bg-red-500 text-white",
  };

  const baseClass = "rounded-full py-[0.75rem] flex items-center space-x-1 px-4 text-sm cursor-pointer font-medium transition-all hover:opacity-90 active:scale-95 group";

  return (
    <button
      className={cn(baseClass, variantClasses[variant], className)}
      {...props}
    >
      {children}{hasArrow && <span className="group-hover:left-1 left-0 relative transition-all"><CaretRight /></span>}
    </button>
  );
}
