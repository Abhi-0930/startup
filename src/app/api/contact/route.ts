import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY) 
  : null;

export async function POST(req: Request) {
  try {
    const { name, email, company, phone, services, budget, details } = await req.json();

    // basic validation
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and Email are required" },
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

    const { data, error } = await resend.emails.send({
      from: "Code Loom <hello@codeloom.in>",
      to: ["support@codeloom.in"],
      subject: `New Inquiry from ${name} - Code Loom`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 20px auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #000; border-bottom: 2px solid #ff5c00; padding-bottom: 10px;">New Lead Inquiry</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 150px;"><strong>Client Name:</strong></td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Phone:</strong></td>
              <td style="padding: 8px 0;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Company:</strong></td>
              <td style="padding: 8px 0;">${company || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Budget (INR):</strong></td>
              <td style="padding: 8px 0;">${budget}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Services:</strong></td>
              <td style="padding: 8px 0;">${services.join(", ")}</td>
            </tr>
          </table>

          <div style="margin-top: 30px; padding: 20px; bg-color: #f9f9f9; border-radius: 8px;">
            <p style="margin-top: 0; color: #666;"><strong>Project Details:</strong></p>
            <p style="line-height: 1.6; color: #333;">${details || 'No additional details provided.'}</p>
          </div>
          
          <p style="font-size: 12px; color: #999; margin-top: 30px; text-align: center; border-top: 1px solid #eee; padding-top: 20px;">
            This lead was generated from <a href="https://codeloom.in">codeloom.in</a>
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error Detail:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: error.message || "Email service error", details: error },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("API Route Error Catch:", err);
    return NextResponse.json(
      { error: err.message || "Internal Server Error", stack: process.env.NODE_ENV === 'development' ? err.stack : undefined },
      { status: 500 }
    );
  }
}
