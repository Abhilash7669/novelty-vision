import Header from "@/components/layout/header/header";
import LenisProvider from "@/providers/lenis-provider";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function MainLayout({ children, className = "" }: Props) {
  return (
    <LenisProvider>
      <div className={className}>
        <Header />
        {children}
      </div>
    </LenisProvider>
  );
}
