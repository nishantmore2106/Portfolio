import { useEffect, useRef, useState } from "react";

const navLinks = ["Home", "About", "Projects", "Blogs"];

function RollLink({ label, href }: { label: string; href: string }) {
  return (
    <a href={href} className="roll-link text-sm font-medium tracking-wide">
      <div className="roll-wrap">
        <span>{label}</span>
        <span style={{ color: "#D0FF71" }}>{label}</span>
      </div>
    </a>
  );
}

export default function Header() {
  const [compact, setCompact] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll.current && current > 100) {
        // scrolling DOWN
        setCompact(true);
      } else {
        // scrolling UP
        setCompact(false);
      }

      lastScroll.current = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className={`relative flex items-center transition-all duration-1200 ease-[cubic-bezier(.16,1,.3,.36,1)]
        bg-black/75 backdrop-blur-xl shadow-2xl rounded-full border border-white/10
        ${compact ? "px-5 py-2 gap-4" : "px-6 py-3 gap-8"}
        `}
      >
        {/* PROFILE IMAGE (ALWAYS VISIBLE) */}
        <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 shrink-0">
          <img
            src="/potrait (2).png"
            alt="Nishant"
            className="w-full h-full object-cover"
          />
        </div>

        {/* FULL NAVIGATION */}
        <div
          className={`flex items-center transition-all duration-500 ease-in-out
          ${compact 
            ? "opacity-0 scale-95 pointer-events-none absolute"
            : "opacity-100 scale-100 pointer-events-auto relative"}
          `}
        >
          <nav className="hidden md:flex items-center gap-8 text-white whitespace-nowrap">
            {navLinks.map((link) => (
              <RollLink
                key={link}
                label={link}
                href={`#${link.toLowerCase()}`}
              />
            ))}
          </nav>

          <a
            href="#contact"
            className="ml-6 px-6 py-2.5 rounded-full text-sm font-medium bg-white text-black hover:bg-[#D0FF71] transition-all duration-300"
          >
            Contact
          </a>
        </div>

        {/* COMPACT STATE (Available for Work) */}
        <div
          className={`flex items-center transition-all duration-500 ease-in-out whitespace-nowrap
          ${compact 
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-4 pointer-events-none absolute"}
          `}
        >
          <span className="text-white text-sm font-medium flex items-center gap-3">
            Available for work
            <span className="w-2.5 h-2.5 bg-[#D0FF71] rounded-full animate-pulse"></span>
          </span>
        </div>
      </div>
    </header>
  );
}
