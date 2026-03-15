import { useEffect, useState, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Feature Selection & Scope Lock",
    content: "Client selects required features like authentication, database, APIs, payments, analytics and deployment. Scope is locked based on selected plan.",
    icon: "01",
  },
  {
    title: "System Architecture Planning",
    content: "We design the architecture using Supabase, APIs, secure authentication layers and AI-generated UI strategy.",
    icon: "02",
  },
  {
    title: "AI-Powered UI Development",
    content: "Responsive AI-generated landing pages built with Lovable, Framer & modern frameworks — optimized for performance and conversion.",
    icon: "03",
  },
  {
    title: "Backend & Integrations",
    content: "Authentication, database configuration, API integrations, payments, admin dashboards and analytics are implemented.",
    icon: "04",
  },
  {
    title: "Security, Testing & Deployment",
    content: "Security audit, validation checks, performance optimization and production deployment.",
    icon: "05",
  },
];

export default function WorkflowSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <section
      id="workflow"
      className="py-32 relative overflow-hidden"
      style={{
        background: "#0f0f0f",
      }}
    >
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20"
          style={{ background: "#D0FF71" }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-10"
          style={{ background: "#D0FF71" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* HEADER */}
        <div className="mb-20">
          <p
            className="text-xs uppercase tracking-[0.3em] mb-4 font-bold"
            style={{ color: "#D0FF71" }}
          >
            Development Process
          </p>

          <h2
            className="font-black uppercase leading-[0.9] tracking-tighter"
            style={{
              fontSize: "clamp(3rem, 10vw, 8rem)",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            WORKFLOW
            <br />
            <span className="text-white/20">SYSTEM</span>
          </h2>
        </div>

        {/* CAROUSEL */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
          aria-label="Workflow steps carousel"
        >
          <CarouselContent className="-ml-4 md:-ml-8">
            {steps.map((step, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:pl-8 basis-full md:basis-[45%] lg:basis-[35%]"
                role="group"
                aria-label={`Step ${index + 1}: ${step.title}`}
              >
                <div
                  className={cn(
                    "group relative h-full rounded-[2rem] p-10 transition-all duration-500 border border-white/5",
                    "backdrop-blur-xl bg-white/[0.02] hover:bg-white/[0.05]",
                    current === index && "border-[#D0FF71]/30 bg-white/[0.04]"
                  )}
                  style={{
                    boxShadow: current === index 
                      ? "0 20px 40px rgba(0,0,0,0.4), inset 0 0 20px rgba(208,255,113,0.05)" 
                      : "0 20px 40px rgba(0,0,0,0.2)"
                  }}
                >
                  <div 
                    className="text-6xl font-black mb-8 transition-colors duration-500"
                    style={{ 
                      fontFamily: "'Syne', sans-serif",
                      color: current === index ? "#D0FF71" : "rgba(255,255,255,0.05)",
                      WebkitTextStroke: current === index ? "none" : "1px rgba(255,255,255,0.1)"
                    }}
                  >
                    {step.icon}
                  </div>

                  <h3
                    className="text-2xl font-bold mb-6 group-hover:text-[#D0FF71] transition-colors"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {step.title}
                  </h3>

                  <p className="text-white/50 text-base leading-relaxed font-medium">
                    {step.content}
                  </p>

                  <div className="absolute bottom-6 right-6 opacity-5 group-hover:opacity-20 transition-opacity">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
                      <path d="M0 30H60M30 0V60" stroke="#D0FF71" strokeWidth="0.5" />
                      <circle cx="30" cy="30" r="20" stroke="#D0FF71" strokeWidth="0.5" />
                    </svg>
                  </div>

                  {current === index && (
                    <div 
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-1 blur-md transition-all duration-500"
                      style={{ background: "#D0FF71", opacity: 0.6 }}
                    />
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* PROGRESS & NAVIGATION */}
        <div className="mt-16 flex items-center justify-between">
          <div className="flex gap-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                  "h-1 transition-all duration-500 rounded-full",
                  current === index ? "w-12 bg-[#D0FF71]" : "w-6 bg-white/10 hover:bg-white/20"
                )}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>

          <div className="text-white/20 font-mono text-sm tracking-widest uppercase">
            Phase <span className="text-[#D0FF71] font-bold">0{current + 1}</span> / 05
          </div>
        </div>
      </div>
    </section>
  );
}
