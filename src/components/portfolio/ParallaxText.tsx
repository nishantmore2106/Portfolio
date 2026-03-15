import { useEffect, useState, useRef } from "react";

interface ParallaxTextProps {
  text: string;
  speed?: number;
  className?: string;
  top?: string;
}

export default function ParallaxText({ text, speed = 0.2, className, top = "20%" }: ParallaxTextProps) {
  const [scrollY, setScrollY] = useState(0);
  const rafRef = useRef<number>();

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const yOffset = scrollY * speed;

  return (
    <div 
      className={`absolute left-0 w-full pointer-events-none z-0 select-none overflow-hidden ${className}`}
      style={{ top }}
    >
      <h2 
        className="font-black uppercase whitespace-nowrap leading-none text-transparent"
        style={{
          fontSize: "25vw",
          WebkitTextStroke: "1px rgba(255,255,255,0.03)",
          transform: `translate3d(-5%, ${yOffset}px, 0)`,
          fontFamily: "'Syne', sans-serif"
        }}
      >
        {text}
      </h2>
    </div>
  );
}
