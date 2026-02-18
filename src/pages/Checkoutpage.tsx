import { useNavigate } from "react-router-dom";

const PLAN_DETAILS = {
  BASIC: {
    title: "Basic – AI Landing Page",
    fullPrice: 14999,
    delivery: "5–7 Days",
    paymentLink: "https://rzp.io/l/basic123", // Replace
  },
  STANDARD: {
    title: "Standard – AI Website",
    fullPrice: 29999,
    delivery: "10–14 Days",
    paymentLink: "https://rzp.io/l/standard123", // Replace
  },
  PREMIUM: {
    title: "Premium – Custom AI System",
    fullPrice: 50000,
    delivery: "2–4 Weeks",
    paymentLink: "https://rzp.io/l/premium123", // Replace
  },
};

export default function CheckoutPage() {
  const navigate = useNavigate();

  const params = new URLSearchParams(window.location.search);
  const selectedPlan = params.get("plan")?.toUpperCase() || "BASIC";
  const name = params.get("name") || "Client";
  const email = params.get("email") || "Not Provided";
  const project = params.get("project") || "AI Web Project";

  const plan = PLAN_DETAILS[selectedPlan];

  const totalProjectValue = plan.fullPrice;
  const advance = Math.round(totalProjectValue * 0.5);
  const remaining = totalProjectValue - advance;

  const invoiceNumber = `NM-${Date.now().toString().slice(-6)}`;
  const today = new Date().toLocaleDateString();

  const handlePayment = () => {
    // append info to success redirect
    const redirectUrl = `${plan.paymentLink}?name=${encodeURIComponent(
      name
    )}&email=${encodeURIComponent(email)}&plan=${selectedPlan}&project=${encodeURIComponent(
      project
    )}`;

    window.location.href = redirectUrl;
  };

  return (
    <div
      className="min-h-screen text-white px-6 py-20"
      style={{
        background:
          "radial-gradient(circle at 20% 20%, rgba(208,255,113,0.05), transparent 40%), #0f0f0f",
      }}
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1
              className="text-3xl font-black uppercase"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Nishant More
            </h1>
            <p className="text-white/50 text-sm">
              AI Landing Page Designer & Web System Builder
            </p>
          </div>

          <div className="text-right text-sm text-white/60">
            <p><strong>Invoice:</strong> {invoiceNumber}</p>
            <p><strong>Date:</strong> {today}</p>
          </div>
        </div>

        {/* CLIENT + PAYMENT */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">

          <div className="rounded-3xl p-8 bg-[#141414] border border-white/10">
            <h2 className="text-lg font-bold mb-6">Bill To</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Project:</strong> {project}</p>
            <p><strong>Plan:</strong> {plan.title}</p>
          </div>

          <div className="rounded-3xl p-8 bg-[#141414] border border-white/10">
            <h2 className="text-lg font-bold mb-6">Payment Summary</h2>

            <div className="flex justify-between mb-3">
              <span>Total Project Value</span>
              <span>₹{totalProjectValue.toLocaleString()}</span>
            </div>

            <div className="flex justify-between mb-3">
              <span>Advance (50%)</span>
              <span>₹{advance.toLocaleString()}</span>
            </div>

            <div className="flex justify-between mb-3 text-white/50">
              <span>Remaining Balance</span>
              <span>₹{remaining.toLocaleString()}</span>
            </div>

            <hr className="border-white/10 my-5" />

            <div className="flex justify-between text-xl font-bold">
              <span>Amount Due Now</span>
              <span style={{ color: "#D0FF71" }}>
                ₹{advance.toLocaleString()}
              </span>
            </div>

            <button
              onClick={handlePayment}
              className="w-full mt-8 py-4 rounded-xl font-bold uppercase text-sm transition-opacity hover:opacity-85"
              style={{
                backgroundColor: "#D0FF71",
                color: "#0f0f0f",
              }}
            >
              Proceed to Payment →
            </button>

            <button
              onClick={() => navigate("/payment-cancel")}
              className="w-full mt-4 py-3 rounded-xl text-sm text-white/60 border border-white/20 hover:bg-white/5"
            >
              Cancel Order
            </button>
          </div>
        </div>

        {/* TERMS */}
        <div className="text-white/60 text-sm space-y-4">
          <h3 className="text-white font-bold text-lg mb-4">
            Terms & Conditions
          </h3>
          <p>• 50% advance required before development begins.</p>
          <p>• Remaining 50% payable before final deployment.</p>
          <p>• Pricing includes applicable taxes.</p>
          <p>• No refund once development has started.</p>
          <p>• Scope changes may affect timeline & cost.</p>
        </div>
      </div>
    </div>
  );
}
