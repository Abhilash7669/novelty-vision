import { cn } from "@/lib/utils";

type Props = {
  variant?: "default" | "secondary" | "destructive"; 
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = "default", 
  className = "",
  children,
  ...props
}: Props) {

  const variantClasses = {
    default: "bg-white text-onyx",
    secondary: "bg-gray-500 text-white",
    destructive: "bg-red-500 text-white",
  };

  const baseClass = "rounded-full py-[0.75rem] px-4 text-sm cursor-pointer font-medium transition-all hover:opacity-90 active:scale-95";

  return (
    <button
      className={cn(baseClass, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
