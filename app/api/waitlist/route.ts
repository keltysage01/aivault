import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const airtableApiUrl = "https://api.airtable.com/v0";

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

    await saveLeadToAirtable(email);

    return NextResponse.json({
      message: "You're in. Your free AI starter guide is ready.",
      downloadUrl: "/the-ai-vault-starter-guide.pdf",
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

async function saveLeadToAirtable(email: string) {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME;

  if (!apiKey || !baseId || !tableName) {
    console.warn("Airtable is not configured. Lead was not stored.", { email });
    return;
  }

  const response = await fetch(
    `${airtableApiUrl}/${baseId}/${encodeURIComponent(tableName)}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Email: email,
              Source: "The AI Vault starter guide",
              Offer: "$10 Founder Circle subscription",
              Status: "Guide requested",
            },
          },
        ],
      }),
    },
  );

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Airtable save failed: ${details}`);
  }
}
