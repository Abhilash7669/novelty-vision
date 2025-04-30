"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  type: string;
  className?: string;
};

export default function VideoPlayer({
  src = "",
  type = "",
  className = "",
}: Props) {

  const [onMount, setOnMount] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {

    if(!onMount) return setOnMount(() => true);

    if(videoRef.current) {
        videoRef.current.pause();
        const observer = new IntersectionObserver((entires) => {
            entires.forEach(entry => {
                if(entry.isIntersecting) {
                    videoRef.current?.play();
                } else {
                    videoRef.current?.pause();
                }
            })
        }, {
            threshold: 0.8
        });
        observer.observe(videoRef?.current);
    }
    
  }, [onMount]);

  return (
    <video
      className={cn("h-full w-full object-cover rounded-[1.25rem]", className)}
      playsInline
      autoPlay={true}
      muted
      ref={videoRef}
      loop={true}
    >
      <source src={src} type={type} />
    </video>
  );
}
