import React from "react";

export default function FloatingCVCard() {
  return (
    <div
      className="fixed bottom-8 right-8 z-50 group"
      style={{
        animation: "floatCard 6s ease-in-out infinite",
      }}
    >
      <div
        className="relative flex items-center gap-4 px-5 py-4 rounded-2xl backdrop-blur-xl transition-all duration-300 group-hover:scale-[1.04]"
        style={{
          background: "rgba(0,0,0,0.75)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
        }}
      >
        {/* Profile */}
        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20">
          <img
            src="/potrait (2).png"
            alt="Nishant"
            className="w-full h-full object-cover"
          />
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#D0FF71] rounded-full border-2 border-black"></span>
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <span className="text-white text-sm font-medium">
            Nishant More
          </span>
          <span className="text-white/50 text-xs">
            Available for work
          </span>
        </div>

        {/* Button */}
        <a
          href="/Nishant_More_Digital_Resume.html"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
          style={{
            backgroundColor: "#D0FF71",
            color: "#0f0f0f",
          }}
        >
          View CV
        </a>
      </div>
    </div>
  );
}
