import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, message } = body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: "Portfolio Offer",
      text: message,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("❌ Error sending mail:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
