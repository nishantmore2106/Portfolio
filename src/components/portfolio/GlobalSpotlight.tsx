import { useEffect, useState, useRef } from "react";

export default function GlobalSpotlight() {
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

  // Calculate vertical position of the spotlight
  // It moves at a slower rate than the scroll to "stay" with sections longer
  const spotlightTop = scrollY * 0.8;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div 
        className="absolute left-1/2 -translate-x-1/2 w-[140vw] h-[140vh] opacity-[0.05] blur-[160px]"
        style={{
          top: `${-20 + (spotlightTop % window.innerHeight) * 0.1}%`,
          background: "radial-gradient(circle, #D0FF71 0%, transparent 70%)",
          transform: `translate3d(0, ${spotlightTop * 0.2}px, 0)`,
        }}
      />
    </div>
  );
}
