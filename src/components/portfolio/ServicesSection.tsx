import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import ParallaxText from "./ParallaxText";

const accordionServices = [
  {
    number: "01",
    title: "AI GENERATED LANDING PAGES",
    items: [
      "AI-assisted high-quality UI generation",
      "Conversion-focused layout structure",
      "Performance optimized design",
      "Mobile-first responsive build",
    ],
  },
  {
    number: "02",
    title: "UI / UX SYSTEM DESIGN",
    items: [
      "Structured user journey mapping",
      "Conversion hierarchy planning",
      "Trust & CTA positioning",
      "Clear messaging architecture",
    ],
  },
  {
    number: "03",
    title: "AUTHENTICATION SYSTEMS",
    items: [
      "Login / Signup flows",
      "Role-based access control",
      "Firebase / Supabase integration",
      "Secure session handling",
    ],
  },
  {
    number: "04",
    title: "DATABASE & STORAGE",
    items: [
      "Database configuration",
      "Cloud storage setup",
      "Scalable architecture planning",
      "Structured data modeling",
    ],
  },
];

const featureCards = [
  "API Integration",
  "Database Configuration",
  "Authentication Setup",
  "On-page SEO Setup",
  "Analytics Integration",
  "Payment Gateway Integration",
  "Deployment & Hosting Setup",
  "Admin Dashboard Screens",
  "Security & Compliance Audit",
  "Custom Screens / Feature Development",
];

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref } = useScrollReveal();

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <ParallaxText text="SERVICES" speed={0.12} className="opacity-[0.03]" />
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="grid md:grid-cols-3 gap-16 items-start mb-24">

          {/* Left - Animation Path Clearing */}
          <div id="portrait-services-anchor" className="relative h-[200px] md:h-[500px]" />

          {/* Middle/Left Text */}
          <div ref={ref} className="reveal-mask">
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: "#D0FF71" }}
            >
              Services
            </p>

            <h2
              className="text-foreground font-black uppercase leading-none mb-6"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                letterSpacing: "-0.03em",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              DIGITAL SYSTEMS
              <br />
              I BUILD
            </h2>

            <p className="text-muted-foreground leading-relaxed max-w-sm">
              I design and develop AI-powered landing pages and full digital
              systems engineered for clarity, performance, scalability, and
              conversion.
            </p>
          </div>

          {/* Right — Accordion */}
          <div className="divide-y divide-border">
            {accordionServices.map((service, i) => (
              <div key={i} className="py-6">
                <button
                  className="w-full flex items-center justify-between gap-4 text-left group"
                  onClick={() => toggle(i)}
                  data-cursor-hover
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className="text-xs font-mono"
                      style={{ color: "#D0FF71" }}
                    >
                      {service.number}
                    </span>

                    <span
                      className="font-bold text-foreground group-hover:text-accent transition-colors"
                      style={{
                        fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                        fontFamily: "'Syne', sans-serif",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {service.title}
                    </span>
                  </div>

                  <div
                    className={`service-arrow ${
                      openIndex === i ? "open" : ""
                    }`}
                  />
                </button>

                <div
                  className={`service-accordion-content ${
                    openIndex === i ? "open" : ""
                  }`}
                >
                  <ul className="pt-5 pb-2 pl-10 space-y-3">
                    {service.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-muted-foreground text-sm"
                      >
                        <span
                          style={{ color: "#D0FF71", marginTop: "2px" }}
                        >
                          →
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= FEATURE CARDS GRID ================= */}

        <div className="grid md:grid-cols-3 gap-6">
          {featureCards.map((feature, i) => (
            <div
              key={i}
              className="rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2"
              style={{
                background:
                  "linear-gradient(135deg, #141414 0%, #1c1c1c 100%)",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
              }}
              data-cursor-hover
            >
              <div
                className="text-sm font-bold uppercase mb-4"
                style={{ color: "#D0FF71", fontFamily: "'Syne', sans-serif" }}
              >
                Feature
              </div>

              <h3
                className="text-foreground font-bold leading-snug"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "1.1rem",
                }}
              >
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
