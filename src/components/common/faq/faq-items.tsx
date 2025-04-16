"use client"

import { FaqData } from "@/data/faq";
import { useState } from "react";

type Props = {
    faqData: FaqData[]
};

export default function FaqItems({ faqData }: Props) {

    const [isActive, setIsActive] = useState<number | null>(0);

    function handleFaq(i: number): void {

        setIsActive(prevState => {

            if(prevState === i) return null;

            return i;

        });

    }

    if(!faqData) return "Loading"; // todo: loader

  return (
    <ul className="w-full space-y-12">
        {faqData.map((item, i) => (
            <li className="relative pb-6" key={i}>
                <div 
                    onClick={() => handleFaq(i)}
                    className={`${isActive === i && ("faq-head-active")} cursor-pointer flex items-center justify-between`}>
                    <p className="text-xl font-neue-montreal">
                        {item.question}
                    </p>
                    <span className="plus shadow-text-gradient"></span>
                </div>
                <p className={`text-muted-foreground text-xl transition-all duration-500 overflow-hidden w-full md:w-[80%] ${isActive === i ? "max-h-[50rem] pt-4" : "max-h-[0rem] pt-0"}`}>
                    {item.answer}
                </p>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-b from-[rgba(235,229,210,0.5)] to-[rgba(104,101,90,0.5)]" />
            </li>
        ))}
    </ul>
  )
}