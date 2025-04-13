import { cn } from "@/lib/utils";

type Props = {
  variant?: "default"; 
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Chip({
  variant = "default", 
  className = "",
  children,
  ...props
}: Props) {

  const variantClasses = {
    default: "bg-[#32394a] text-subtle",
  };

  const baseClass = "rounded-full py-2 px-6 text-sm font-medium";

  return (
    <button
      className={cn(baseClass, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
