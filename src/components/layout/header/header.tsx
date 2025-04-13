import Button from "@/components/common/button/button";
import HeaderLink from "@/components/layout/header/header-link";
import { headerLinkA, headerLinkB } from "@/data/header";

type Props = object;

export default function Header({}: Props) {
  return (
    <header className="fixed top-12 left-2/4 -translate-x-2/4 w-[78%] z-50">
      <nav className="flex items-center justify-between">
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
          <Button>
            Contact Sales
          </Button>
        </div>
      </nav>
    </header>
  );
}
