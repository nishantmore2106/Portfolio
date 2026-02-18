import express from "express";
import cors from "cors";
import Razorpay from "razorpay";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

/* ---------------- RAZORPAY SETUP ---------------- */

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET,
});

/* ---------------- CREATE ORDER ---------------- */

app.post("/api/createOrder", async (req, res) => {
  try {
    const { amount } = req.body;

    const order = await razorpay.orders.create({
      amount: amount * 100, // convert to paise
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    });

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Order creation failed" });
  }
});

/* ---------------- SEND EMAIL ---------------- */

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/api/sendEmail", async (req, res) => {
  try {
    const { form, plan } = req.body;

    await resend.emails.send({
      from: "portfolio@yourdomain.com",
      to: "your@email.com",
      subject: `New Client - ${plan}`,
      html: `
        <h2>New Project Submission</h2>
        <p><strong>Name:</strong> ${form.name}</p>
        <p><strong>Email:</strong> ${form.email}</p>
        <p><strong>Company:</strong> ${form.company}</p>
        <p><strong>Plan:</strong> ${plan}</p>
        <p><strong>Goal:</strong> ${form.goal}</p>
        <p><strong>Features:</strong> ${form.features}</p>
        <p><strong>Deadline:</strong> ${form.deadline}</p>
        <p><strong>Budget:</strong> ${form.budget}</p>
        <p><strong>Notes:</strong> ${form.notes}</p>
      `,
    });

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Email failed" });
  }
});

/* ---------------- SERVER START ---------------- */

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
