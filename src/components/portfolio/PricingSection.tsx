import { useNavigate } from "react-router-dom";
import FadeIn from "@/components/ui/FadeIn";

const plans = [
  {
    name: "BASIC",
    subtitle: "AI Landing Page",
    price: "₹14,999",
    delivery: "Delivery: 5 – 7 Days",
    description: "Perfect for startups needing a fast, high-converting landing page.",
    features: [
      "1 High-Converting Landing Page",
      "AI Generated UI Structure",
      "Responsive Design",
      "On-page SEO Setup",
      "Contact Form Integration",
      "Deployment (Netlify / Vercel)",
      "Performance Optimization",
    ],
    highlighted: false,
  },
  {
    name: "STANDARD",
    subtitle: "Growth Website System",
    price: "₹29,999",
    delivery: "Delivery: 10 – 14 Days",
    description: "For scaling brands seeking advanced UX architecture and continuous iteration.",
    features: [
      "Up to 5 Pages Website",
      "Custom UI / UX Architecture",
      "API Integration",
      "Database Configuration",
      "Authentication Setup",
      "Analytics Integration",
      "Payment Integration",
      "Deployment + Hosting Setup",
    ],
    highlighted: true,
  },
  {
    name: "PREMIUM",
    subtitle: "Full AI Digital System",
    price: "Custom Quote",
    delivery: "Delivery: 2 – 4 Weeks",
    description: "Comprehensive end-to-end digital solutions for established enterprises.",
    features: [
      "Full Website (5–10 Pages)",
      "Advanced AI Integrations",
      "Admin Dashboard Screens",
      "Role-Based Authentication",
      "Database + Storage Architecture",
      "Security & Compliance Audit",
      "Advanced SEO Setup",
      "Post-Launch Support",
    ],
    highlighted: false,
  },
];

export default function PricingSection() {
  const navigate = useNavigate();
  return (
    <section 
      id="pricing" 
      className="py-24 md:py-32 relative overflow-hidden bg-[#072974]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">

        {/* Header */}
        <FadeIn direction="up" className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4b7cfb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z"/>
            </svg>
            <span className="text-blue-200 font-medium text-sm md:text-base tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>Pricing Plans</span>
          </div>

          <h2
            className="text-white font-semibold text-3xl md:text-5xl lg:text-6xl tracking-tight max-w-2xl"
            style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.15 }}
          >
            Flexible design support<br />for growing brands
          </h2>
        </FadeIn>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, i) => {
            const isLight = plan.highlighted;
            
            if (isLight) {
              // Light Card matching the reference
              return (
                <FadeIn key={i} direction="up" delay={0.1 + i * 0.1} className="bg-white rounded-[2rem] p-4 flex flex-col relative h-full shadow-2xl">
                  <div className="bg-[#f0f3f8] rounded-[1.5rem] p-6 mb-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-gray-600 font-medium text-sm md:text-base" style={{ fontFamily: "'Inter', sans-serif" }}>{plan.name}</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4b7cfb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z"/>
                      </svg>
                    </div>
                    <div className="mb-4 flex items-baseline gap-1">
                      <span className="text-gray-900 font-bold text-4xl xl:text-[2.75rem] tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>{plan.price}</span>
                    </div>
                    <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed max-w-[90%] mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {plan.description}
                    </p>
                    <p className="text-gray-700 font-semibold text-sm md:text-[15px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {plan.delivery}
                    </p>
                  </div>

                  <div className="px-4 flex flex-col flex-1">
                    <span className="text-gray-900 font-semibold text-sm md:text-base mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>What's Included:</span>
                    <div className="flex flex-col gap-3 mb-10 flex-1">
                      {plan.features.map((feature, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <div className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-[#4b7cfb]" />
                          <span className="text-gray-600 text-sm md:text-[15px] leading-snug" style={{ fontFamily: "'Inter', sans-serif" }}>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 mt-auto pb-2">
                      <button
                        onClick={() => navigate(`/onboarding?plan=${plan.name}`)}
                        className="flex-1 bg-[#111111] text-white hover:bg-black transition-colors py-4 rounded-full font-medium text-sm md:text-base text-center justify-center flex"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Get In Touch
                      </button>
                      <button
                        onClick={() => navigate(`/onboarding?plan=${plan.name}`)}
                        className="w-14 h-14 shrink-0 bg-[#111111] hover:bg-black transition-colors text-white rounded-full flex items-center justify-center"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>
                </FadeIn>
              );
            }

            // Dark Card matching the reference
            return (
              <FadeIn key={i} direction="up" delay={0.1 + i * 0.1} className="bg-[#1e326c] rounded-[2rem] p-6 md:p-8 flex flex-col relative h-full shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-blue-100 font-medium text-sm md:text-base" style={{ fontFamily: "'Inter', sans-serif" }}>{plan.name}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4b7cfb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z"/>
                  </svg>
                </div>
                <div className="mb-4 flex items-baseline gap-1">
                  <span className="text-white font-bold text-4xl xl:text-[2.75rem] tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>{plan.price}</span>
                </div>
                <p className="text-gray-300 text-sm md:text-[15px] mb-2 leading-relaxed max-w-[90%]" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {plan.description}
                </p>
                <p className="text-white font-semibold text-sm md:text-[15px] mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {plan.delivery}
                </p>

                <span className="text-white font-semibold text-sm md:text-base mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>What's Included:</span>
                <div className="flex flex-col gap-3 mb-10 flex-1">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-[#4b7cfb]" />
                      <span className="text-gray-300 text-sm md:text-[15px] leading-snug" style={{ fontFamily: "'Inter', sans-serif" }}>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 mt-auto">
                  <button
                    onClick={() => navigate(`/onboarding?plan=${plan.name}`)}
                    className="flex-1 bg-[#152554] text-white hover:bg-[#0f1b40] transition-colors py-4 rounded-full font-medium text-sm md:text-base text-center justify-center flex"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Get In Touch
                  </button>
                  <button
                    onClick={() => navigate(`/onboarding?plan=${plan.name}`)}
                    className="w-14 h-14 shrink-0 bg-[#152554] hover:bg-[#0f1b40] transition-colors text-white rounded-full flex items-center justify-center"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
