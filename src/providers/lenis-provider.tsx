"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


type Props = {
  children: React.ReactNode;
};

export default function LenisProvider({ children }: Props) {

    const [lenisRef, setLenisRef] = useState<Lenis | null>(null);

    const pathName = usePathname();

    
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
        setLenisRef(() => lenis);

        return () => {
            cancelAnimationFrame(rf);
        };

    }, []);

    useEffect(() => {

        lenisRef?.scrollTo(0, { immediate: true });

    }, [lenisRef, pathName]);

    return(
        <div className={pathName === "/" ? "" : "pt-44"}>
            { children }
        </div>
    )

}
