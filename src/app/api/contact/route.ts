import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function badRequest(error: string) {
  return NextResponse.json({ error }, { status: 400 });
}

export async function POST(request: Request) {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return badRequest("Invalid request body.");
  }

  const { name, email, subject, message, company } = body ?? {};

  // Honeypot: only bots fill in this hidden field. Pretend success so they
  // don't learn to leave it blank.
  if (typeof company === "string" && company.trim().length > 0) {
    return NextResponse.json({ success: true });
  }

  if (typeof name !== "string" || name.trim().length < 2 || name.length > 200) {
    return badRequest("Please enter your name.");
  }
  if (typeof email !== "string" || email.length > 200 || !EMAIL_RE.test(email.trim())) {
    return badRequest("Please enter a valid email address.");
  }
  if (typeof subject !== "string" || subject.trim().length < 2 || subject.length > 200) {
    return badRequest("Please enter a subject.");
  }
  if (typeof message !== "string" || message.trim().length < 10 || message.length > 5000) {
    return badRequest("Message should be at least 10 characters.");
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    console.error(
      "Contact form is not configured: missing RESEND_API_KEY or CONTACT_TO_EMAIL."
    );
    return NextResponse.json(
      { error: "The contact form isn't set up yet. Please reach out via email or socials instead." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email.trim(),
      subject: subject.trim(),
      text: `From: ${name.trim()} <${email.trim()}>\n\n${message.trim()}`,
    });

    if (error) {
      console.error("Resend rejected the email:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error sending contact email:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
