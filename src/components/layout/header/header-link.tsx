import { LinkItem } from "@/types/common-types";
import Link from "next/link";

type Props = {
    item: LinkItem;
};

export default function HeaderLink({ item }: Props) {
  return (
    <li
      className="text-muted text-sm w-fit transition-all hover:text-white active:scale-95"
    >
      <Link href={item.href || ""}>{item.text}</Link>
    </li>
  );
}
