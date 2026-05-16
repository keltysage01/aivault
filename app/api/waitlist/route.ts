import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: unknown };
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    // Placeholder integration point:
    // Connect Mailchimp, ConvertKit, Airtable, Supabase, or another email provider here.
    // A production integration should store the email, tag the lead magnet source,
    // and optionally send the starter guide link in a confirmation email.
    return NextResponse.json({
      message: "You're in. Your free AI starter guide is ready.",
      downloadUrl: "/the-ai-vault-starter-guide.pdf",
      email,
    });
  } catch {
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
