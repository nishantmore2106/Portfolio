import React from "react";

export default function ThreeDSection() {
  return (
    <section
      className="py-32 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 80% 20%, rgba(208,255,113,0.08), transparent 50%), #0f0f0f",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="flex flex-col items-center text-center">
          <p
            className="text-xs uppercase tracking-widest mb-6"
            style={{ color: "#D0FF71" }}
          >
            Advanced Experiences
          </p>

          <h2
            className="font-black uppercase leading-none mb-8"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              letterSpacing: "-0.03em",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            3D LANDING
            <br />
            PAGES
          </h2>

          <p className="text-white/60 leading-relaxed max-w-lg mb-10">
            Beyond static layouts — I build immersive 3D landing pages with
            scroll-triggered animations, parallax depth, interactive elements,
            and cinematic transitions powered by modern motion frameworks.
          </p>

          <ul className="space-y-4 text-white/70 text-left">
            <li>→ Scroll-driven animations</li>
            <li>→ Parallax depth layers</li>
            <li>→ 3D model integration</li>
            <li>→ Interactive UI transitions</li>
            <li>→ WebGL & motion frameworks</li>
          </ul>
        </div>

        {/* RIGHT MOCKUP */}
        <div className="relative flex justify-center items-center w-full">

          {/* Glow background */}
          <div
            className="absolute w-[800px] h-[800px] rounded-full blur-3xl opacity-30 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #D0FF71 0%, transparent 70%)",
            }}
          />

          {/* Simple Card Mockup */}
          <div
            className="relative rounded-3xl overflow-hidden w-full"
            style={{
              maxWidth: "1200px",
              height: "800px",
              background: "linear-gradient(135deg,#141414,#1c1c1c)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 40px 80px rgba(0,0,0,0.7)",
            }}
          >
            <iframe
              src="https://nishantdemo1.netlify.app"
              title="3D Landing Page Preview"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </div>
        </div>
      </div>
    </section>
  );
}