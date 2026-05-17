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

    await saveLeadToSupabase(email);

    return NextResponse.json({
      message: "You're on the list. Head into Circle for the free starter kit.",
      email,
    });
  } catch (error) {
    console.error("Waitlist submission failed", error);

    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

async function saveLeadToSupabase(email: string) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    console.warn("Supabase is not configured. Lead was not stored.", { email });
    return;
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/leads`, {
    method: "POST",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "resolution=merge-duplicates",
    },
    body: JSON.stringify({
      email,
      source: "The AI Vault starter guide",
      offer: "$10 Founder Circle subscription",
      status: "guide_requested",
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Supabase save failed: ${details}`);
  }
}
