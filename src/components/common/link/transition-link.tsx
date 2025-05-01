"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

interface TransitionLinkProps extends LinkProps {
    children: React.ReactNode;
    href: string;
};

async function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function TransitionLink({ children, href="", ...props }: TransitionLinkProps) {

    const router = useRouter();

    async function handleTransition(e: MouseEvent<HTMLAnchorElement>): Promise<void> {

        e.preventDefault();
        
        const body = document.querySelector("body");

        body?.classList.add("page-transition");
        await sleep(500);
        router.push(href);
        await sleep(500);
        body?.classList.remove("page-transition");
    }

  return (
    <Link
        onClick={handleTransition}
        href={href}
        {...props}
    >
        {children}
    </Link>
  )
}