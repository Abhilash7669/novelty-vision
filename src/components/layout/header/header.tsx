import Button from "@/components/common/button/button";
import HeaderLink from "@/components/layout/header/header-link";
import { headerLinkA, headerLinkB } from "@/data/header";

type Props = object;

export default function Header({}: Props) {
  return (
    <header className="fixed bg-nav top-0 left-2/4 -translate-x-2/4 z-50 w-full">
      <div className="relative w-full flex items-center justify-center py-8">
        <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-gradient-to-b from-[rgba(235,229,210,0.5)] to-[rgba(104,101,90,0.5)]" />
        <nav className="flex items-center justify-between w-[78%]">
          <div className="flex items-center space-x-8">
            <p>N</p>
            <ul className="flex items-center space-x-6">
              {headerLinkA.map((item) => (
                <HeaderLink key={item.text} item={item} />
              ))}
            </ul>
          </div>
          <div className="flex items-center space-x-6">
            <ul>
              {headerLinkB.map((item) => (
                <HeaderLink key={item.text} item={item} />
              ))}
            </ul>
            <Button hasArrow>Contact Sales</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
