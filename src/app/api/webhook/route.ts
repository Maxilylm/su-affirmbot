import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const body = formData.get("Body") as string | null;
    const userMessage = body?.trim() || "I need encouragement today";

    // Call Groq for a personalized affirmation
    const groqResponse = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "system",
              content:
                "You are AffirmBot, a compassionate affirmation generator. Given the user's message, respond with a short, personalized, uplifting affirmation (2-3 sentences max). Be warm, specific to what they shared, and encouraging. No hashtags, no emojis, no quotes around your response.",
            },
            {
              role: "user",
              content: userMessage,
            },
          ],
          max_tokens: 150,
          temperature: 0.9,
        }),
      }
    );

    let affirmation = "You are worthy, you are capable, and today is full of possibilities.";

    if (groqResponse.ok) {
      const data = await groqResponse.json();
      affirmation = data.choices?.[0]?.message?.content?.trim() || affirmation;
    } else {
      console.error("Groq API error:", groqResponse.status, await groqResponse.text());
    }

    // Return TwiML XML response
    const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Message>${escapeXml(affirmation)}</Message>
</Response>`;

    return new NextResponse(twiml, {
      status: 200,
      headers: { "Content-Type": "text/xml" },
    });
  } catch (error) {
    console.error("Webhook error:", error);
    const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Message>Something went wrong, but remember: you are enough, always.</Message>
</Response>`;
    return new NextResponse(twiml, {
      status: 200,
      headers: { "Content-Type": "text/xml" },
    });
  }
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
