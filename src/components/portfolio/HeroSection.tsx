import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const portraitRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [scrollZ, setScrollZ] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const progress = Math.min(window.scrollY / 500, 1);
      setScrollZ(progress * 8);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return;
    const rect = portraitRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -6, y: dx * 6 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background words */}
      <span className="bg-word" style={{ left: "-2%", top: "30%", fontFamily: "'Syne', sans-serif" }}>
        WEB
      </span>
      <span className="bg-word" style={{ right: "-2%", top: "30%", fontFamily: "'Syne', sans-serif" }}>
        DESIGNER
      </span>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Top headline */}
        <div className="text-center mb-10">
          <h1
            className="text-foreground font-black uppercase leading-none mb-6"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 3.5rem)",
              letterSpacing: "-0.03em",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            Nishant builds high-converting
            <br />
            <span style={{ color: "#D0FF71" }}>AI landing pages</span> &amp; digital systems.
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            AI Landing Page Designer &amp; Builder focused on clarity, structure,
            and scalable web architecture.
          </p>
        </div>

        {/* Portrait + Accent bubble */}
        <div className="relative flex justify-center items-center mb-10">
          {/* Accent Hi bubble */}
          <div
            className="absolute z-20 flex items-center justify-center w-16 h-16 rounded-full font-bold text-sm"
            style={{
              backgroundColor: "#D0FF71",
              color: "#0f0f0f",
              top: "-18px",
              left: "calc(50% + 120px)",
              fontSize: "0.7rem",
              letterSpacing: "0.05em",
              fontFamily: "'Syne', sans-serif",
              transform: "rotate(12deg)",
            }}
          >
            <div className="text-center leading-tight">
              <div className="text-lg">👋</div>
              <div>Hi!</div>
            </div>
          </div>

          {/* Portrait Placeholder (ScrollingPortrait will overlap this exactly at scrollY=0) */}
          <div className="portrait-wrapper">
            <div
              id="portrait-hero-anchor"
              className="portrait-inner relative overflow-hidden opacity-0"
              style={{
                width: "clamp(280px, 32vw, 420px)",
                height: "clamp(360px, 42vw, 540px)",
                borderRadius: "2.5rem",
              }}
            >
              {/* Image removed to prevent duplication/flicker */}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center px-7 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wide transition-opacity hover:opacity-85"
            style={{ backgroundColor: "#D0FF71", color: "#0f0f0f" }}
          >
            Start a Project
          </a>
          <a
            href="#projects"
            className="inline-flex items-center px-7 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wide border border-border text-foreground hover:border-accent transition-colors"
          >
            View Work
          </a>
          <a
            href="https://fiverr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wide border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
          >
            Hire Me on Fiverr ↗
          </a>
        </div>
      </div>
    </section>
  );
}
