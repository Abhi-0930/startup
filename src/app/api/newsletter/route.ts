import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY) 
  : null;

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    if (!resend) {
      console.error("Resend API Key is missing.");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    // 1. Send notification to the agency
    const { data, error } = await resend.emails.send({
      from: "Code Loom <hello@codeloom.in>",
      to: ["hello@codeloom.in"],
      subject: `New Newsletter Subscriber: ${email}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 20px auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #000; border-bottom: 2px solid #ff5c00; padding-bottom: 10px;">New Newsletter Subscriber</h2>
          <p style="font-size: 16px; color: #333;">You have a new subscriber to the Code Loom newsletter!</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #666;"><strong>Subscriber Email:</strong></p>
            <p style="font-size: 18px; color: #000; margin-top: 5px;">${email}</p>
          </div>
          <p style="font-size: 12px; color: #999; margin-top: 30px; text-align: center; border-top: 1px solid #eee; padding-top: 20px;">
            This subscriber was captured on <a href="https://codeloom.in">codeloom.in</a>
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json(
        { error: error.message || "Email service error" },
        { status: 500 }
      );
    }

    // 2. (Optional) Send welcome email to subscriber
    await resend.emails.send({
      from: "Code Loom <hello@codeloom.in>",
      to: [email],
      subject: `Welcome to Code Loom!`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 20px auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #000; border-bottom: 2px solid #ff5c00; padding-bottom: 10px;">You're In!</h2>
          <p style="font-size: 16px; color: #333; line-height: 1.6;">Thanks for subscribing to the Code Loom newsletter.</p>
          <p style="font-size: 16px; color: #333; line-height: 1.6;">You'll now receive exclusive insights on design, performance engineering, and AI-driven growth directly in your inbox.</p>
          <div style="margin-top: 30px; text-align: center;">
            <a href="https://codeloom.in" style="background: #000; color: #fff; padding: 12px 25px; border-radius: 50px; text-decoration: none; font-weight: bold;">Visit our site</a>
          </div>
          <p style="font-size: 12px; color: #999; margin-top: 40px; text-align: center;">
            © 2026 Code Loom. Build the future, one pixel at a time.
          </p>
        </div>
      `,
    }).catch(err => console.error("Welcome email failed:", err));

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("Newsletter API Route Error:", err);
    return NextResponse.json(
      { error: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
