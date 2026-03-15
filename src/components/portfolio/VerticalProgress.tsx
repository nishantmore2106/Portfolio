import { useEffect, useState, useRef } from "react";

export default function VerticalProgress() {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>();

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setProgress(currentProgress);
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 h-40 w-[2px] bg-white/5 z-50 rounded-full hidden md:block overflow-hidden">
      <div 
        className="w-full bg-[#D0FF71] shadow-[0_0_10px_#D0FF71] transition-all duration-100 ease-linear"
        style={{ height: `${progress}%` }}
      />
    </div>
  );
}
