"use client";

import Lenis from "lenis";
import { useEffect } from "react";


type Props = {
  children: React.ReactNode;
};

export default function LenisProvider({ children }: Props) {

    
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
        <div>
            { children }
        </div>
    )

}
