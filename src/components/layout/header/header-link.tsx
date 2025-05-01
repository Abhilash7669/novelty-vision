import TransitionLink from "@/components/common/link/transition-link";
import { LinkItem } from "@/types/common-types";

type Props = {
    item: LinkItem;
};

export default function HeaderLink({ item }: Props) {
  return (
    <li
      className="text-muted text-sm w-fit transition-all hover:text-white active:scale-95"
    >
      <TransitionLink  href={item.href || ""}>{item.text}</ TransitionLink>
    </li>
  );
}
