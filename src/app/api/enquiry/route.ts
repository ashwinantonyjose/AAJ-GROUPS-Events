import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, email, eventType, eventDate, district, guestCount, budgetRange, message } = body;

    // Validate required fields
    if (!fullName || !phone || !eventType) {
      return NextResponse.json(
        { error: "Missing required fields (fullName, phone, eventType)" },
        { status: 400 }
      );
    }

    // In production, forward to an environment-configured service (e.g. Resend, Sendgrid, or Webhook)
    const emailWebhook = process.env.ENQUIRY_WEBHOOK_URL;
    if (emailWebhook) {
      try {
        await fetch(emailWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            lead: {
              fullName,
              phone,
              email: email || "N/A",
              eventType,
              eventDate: eventDate || "TBD",
              district,
              guestCount,
              budgetRange,
              message: message || "No custom message",
              submittedAt: new Date().toISOString()
            }
          })
        });
      } catch (err) {
        console.error("Optional webhook delivery error:", err);
      }
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Enquiry received successfully. AAJ GROUPS will contact you shortly."
    });
  } catch (error) {
    console.error("Error processing enquiry:", error);
    return NextResponse.json(
      { error: "Failed to process enquiry. Please contact via WhatsApp." },
      { status: 500 }
    );
  }
}

