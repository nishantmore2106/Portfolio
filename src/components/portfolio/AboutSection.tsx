import { useEffect, useRef, useState } from "react";
import ParallaxText from "./ParallaxText";

function useCounter(target: number, duration: number = 1800) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(interval);
  }, [started, target, duration]);

  return { count, ref };
}

function StatCard({
  target,
  suffix = "",
  label,
}: {
  target: number;
  suffix?: string;
  label: string;
}) {
  const { count, ref } = useCounter(target);

  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="counter-number">
        {count}
        <span style={{ color: "#D0FF71" }}>{suffix}</span>
      </div>
      <p className="text-muted-foreground text-sm uppercase tracking-widest mt-2">
        {label}
      </p>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <ParallaxText text="ABOUT" speed={0.15} className="opacity-[0.03]" top="10%" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Portrait Landing Area */}
          <div className="hidden md:block relative h-[540px] w-full">
            {/* The ScrollingPortrait component will "land" here visually */}
            <div 
              id="portrait-about-anchor"
              className="absolute inset-0 rounded-[2.5rem] border border-white/5 bg-white/[0.02]"
              aria-hidden="true"
            />
          </div>

          <div>
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: "#D0FF71" }}
            >
              About
            </p>
            <h2
              className="text-foreground font-black uppercase leading-none mb-6"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                letterSpacing: "-0.03em",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              ABOUT ME
            </h2>
            
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I'm Nishant More — an AI Landing Page Designer & Builder with 6
                years of focused experience in crafting high-converting digital
                experiences. I blend strategic thinking with clean visual design
                to build pages that don't just look good — they perform.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From early-stage startups to established brands, I've helped
                clients across the globe build landing pages and digital systems
                that drive real results. My approach is methodical: understand
                the user, map the journey, and design for conversion.
              </p>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12"
          style={{ borderTop: "1px solid hsl(var(--border))" }}
        >
          <StatCard target={3} label="Years Experience" />
          <StatCard target={10} label="Completed Projects" />
          <StatCard target={5} suffix="+" label="Clients " />
        </div>
      </div>
    </section>
  );
}
