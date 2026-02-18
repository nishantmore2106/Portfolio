import { useNavigate } from "react-router-dom";

export default function PaymentCancel() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center text-white bg-black">
      <div className="text-center">
        <h1 className="text-4xl font-black mb-6">
          PAYMENT CANCELLED
        </h1>
        <p className="text-white/60 mb-8">
          No worries. You can complete your payment anytime.
        </p>

        <button
          onClick={() => navigate("/")}
          className="px-8 py-4 rounded-full font-bold"
          style={{ backgroundColor: "#D0FF71", color: "#0f0f0f" }}
        >
          Return to Website
        </button>
      </div>
    </div>
  );
}
