import { useScrollReveal } from "@/hooks/useScrollReveal";

import { useNavigate } from "react-router-dom";




const plans = [
  {
    name: "BASIC",
    subtitle: "AI Landing Page",
    price: "₹14,999",
    delivery: "5 – 7 Days",
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
    delivery: "10 – 14 Days",
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
    delivery: "2 – 4 Weeks",
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
  const { ref } = useScrollReveal();
const navigate = useNavigate();
  return (
    <section id="pricing" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div ref={ref} className="reveal mb-20 text-center">
          <p
            className="text-xs uppercase tracking-widest mb-4"
            style={{ color: "#D0FF71" }}
          >
            Pricing
          </p>

          <h2
            className="text-foreground font-black uppercase leading-none mb-6"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              letterSpacing: "-0.03em",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            INVEST IN
            <br />
            PERFORMANCE
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Flexible packages designed for founders, AI startups, and businesses
            ready to build high-converting digital systems.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="relative rounded-3xl p-10 transition-all duration-300 hover:-translate-y-3"
              style={{
                background: plan.highlighted
                  ? "linear-gradient(135deg, #1c1c1c 0%, #222222 100%)"
                  : "linear-gradient(135deg, #141414 0%, #1c1c1c 100%)",
                border: plan.highlighted
                  ? "1px solid #D0FF71"
                  : "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
              }}
              data-cursor-hover
            >
              {plan.highlighted && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase"
                  style={{
                    backgroundColor: "#D0FF71",
                    color: "#0f0f0f",
                  }}
                >
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <p
                  className="text-xs uppercase tracking-widest mb-2"
                  style={{ color: "#D0FF71" }}
                >
                  {plan.name}
                </p>

                <h3
                  className="text-foreground font-bold mb-4"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "1.4rem",
                  }}
                >
                  {plan.subtitle}
                </h3>

                <div
                  className="text-foreground font-black"
                  style={{
                    fontSize: "2.5rem",
                    fontFamily: "'Syne', sans-serif",
                  }}
                >
                  {plan.price}
                </div>

                <p className="text-muted-foreground text-sm mt-2">
                  Delivery: {plan.delivery}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-muted-foreground text-sm"
                  >
                    <span style={{ color: "#D0FF71" }}>→</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-4 rounded-xl font-bold uppercase tracking-wide text-sm transition-all duration-300 hover:opacity-85"
                style={{
                  backgroundColor: "#D0FF71",
                  color: "#0f0f0f",
                }}
                  onClick={() => {
                  navigate(`/onboarding?plan=${plan.name}`);
                     }}
              >
                Start Project
              </button>
            </div>
          ))}
        </div>

        {/* Payment Info */}
        <div className="mt-16 text-center text-muted-foreground text-sm">
          Accepted Payments: UPI • Bank Transfer • Razorpay • PayPal • Wise
        </div>
      </div>
    </section>
  );
}
