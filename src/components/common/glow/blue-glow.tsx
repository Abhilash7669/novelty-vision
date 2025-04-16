import { cn } from '@/lib/utils';

type Props = {
    className?: string;
}

export default function BlueGlow({ className }: Props) {
  return (
    <div className={cn("absolute top-0 left-0 h-[12rem] w-full rounded-full blue-glow -z-10", className)} />
)
}