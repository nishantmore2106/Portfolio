import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { useNavigate } from "react-router-dom";

export default function PaymentSuccess() {
  const { width, height } = useWindowSize();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center text-white relative overflow-hidden bg-black">
      <Confetti width={width} height={height} recycle={false} />

      <div className="text-center z-10">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-4xl font-black mb-6">
          PAYMENT SUCCESSFUL
        </h1>
        <p className="text-white/60 mb-8">
          Your project has been confirmed. Invoice has been sent to your email.
        </p>

        <button
          onClick={() => navigate("/")}
          className="px-8 py-4 rounded-full font-bold"
          style={{ backgroundColor: "#D0FF71", color: "#0f0f0f" }}
        >
          Back to Website
        </button>
      </div>
    </div>
  );
}
