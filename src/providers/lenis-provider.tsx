"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";


type Props = {
  children: React.ReactNode;
};

export default function LenisProvider({ children }: Props) {

    const router = usePathname();

    
    useEffect(() => {


        const lenis = new Lenis({
            duration: 2.6,
            smoothWheel: true
        });

        function raf(time: number): void {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        const rf = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rf);
        };

    }, []);

    return(
        <div className={router === "/" ? "" : "pt-44"}>
            { children }
        </div>
    )

}
