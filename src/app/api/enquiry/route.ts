import { NextResponse } from "next/server";

// ─────────────────────────────────────────────
// Admin email – all enquiries are delivered here
// ─────────────────────────────────────────────
const ADMIN_EMAIL = "ashwinantonyjose28@gmail.com";

// ─────────────────────────────────────────────
// HTML email builder (admin notification)
// ─────────────────────────────────────────────
function buildAdminEmailHTML(data: Record<string, string>): string {
  const rows = [
    ["Full Name", data.fullName],
    ["Phone Number", data.phone],
    ["Email Address", data.email || "Not provided"],
    ["Event Type", data.eventType],
    ["Event Date", data.eventDate || "To be decided"],
    ["Kerala District / Region", data.district || "Not specified"],
    ["Expected Guest Count", data.guestCount || "Not specified"],
    ["Estimated Budget", data.budgetRange || "Not specified"],
    ["Special Requirements", data.message || "None"],
    ["Questionnaire Selections", data.questionnaire || "None selected"],
    ["Submitted At", new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) + " IST"],
  ];

  const tableRows = rows
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:10px 14px;background:#1a1a1a;color:#d4af37;font-weight:600;font-size:12px;
          text-transform:uppercase;letter-spacing:0.08em;white-space:nowrap;width:200px;
          border-bottom:1px solid #2a2a2a;">${label}</td>
        <td style="padding:10px 14px;background:#111;color:#f0f0f0;font-size:14px;
          border-bottom:1px solid #2a2a2a;">${value}</td>
      </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0a0a0d;font-family:'Segoe UI',Arial,sans-serif;">
  <div style="max-width:620px;margin:30px auto;border-radius:12px;overflow:hidden;
    box-shadow:0 8px 40px rgba(0,0,0,0.6);border:1px solid #2a2a2a;">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#111 0%,#1a1500 100%);
      padding:32px 32px 24px;text-align:center;border-bottom:2px solid #d4af37;">
      <div style="font-size:11px;letter-spacing:0.2em;color:#d4af37;text-transform:uppercase;
        font-weight:700;margin-bottom:8px;">✦ AAJ GROUPS ✦</div>
      <h1 style="margin:0;font-size:22px;color:#fff;font-weight:700;letter-spacing:0.03em;">
        New Event Enquiry Received
      </h1>
      <p style="margin:8px 0 0;color:#a0a0a0;font-size:13px;">
        A potential client has submitted an enquiry through the website.
      </p>
    </div>

    <!-- Alert Banner -->
    <div style="background:#d4af37;padding:12px 24px;text-align:center;">
      <p style="margin:0;color:#0a0a0d;font-size:13px;font-weight:700;letter-spacing:0.05em;">
        🔔 ACTION REQUIRED — Please follow up within 24 hours
      </p>
    </div>

    <!-- Table -->
    <div style="padding:24px;">
      <table style="width:100%;border-collapse:collapse;border-radius:8px;overflow:hidden;">
        ${tableRows}
      </table>
    </div>

    <!-- CTA -->
    <div style="padding:0 24px 24px;text-align:center;">
      ${data.phone ? `<a href="tel:${data.phone}" style="display:inline-block;margin:6px;padding:12px 28px;
        background:#d4af37;color:#0a0a0d;border-radius:8px;text-decoration:none;
        font-weight:700;font-size:13px;letter-spacing:0.05em;">📞 Call Client</a>` : ""}
      ${data.phone ? `<a href="https://wa.me/${data.phone.replace(/\D/g, "")}" style="display:inline-block;
        margin:6px;padding:12px 28px;background:#25D366;color:#fff;border-radius:8px;
        text-decoration:none;font-weight:700;font-size:13px;letter-spacing:0.05em;">💬 WhatsApp</a>` : ""}
      ${data.email ? `<a href="mailto:${data.email}" style="display:inline-block;margin:6px;
        padding:12px 28px;background:#2a2a2a;color:#d4af37;border-radius:8px;
        text-decoration:none;font-weight:700;font-size:13px;letter-spacing:0.05em;">✉️ Reply by Email</a>` : ""}
    </div>

    <!-- Footer -->
    <div style="background:#0d0d0d;padding:16px 24px;text-align:center;
      border-top:1px solid #2a2a2a;">
      <p style="margin:0;color:#555;font-size:11px;">
        AAJ GROUPS Event Management · Kerala, India<br>
        This is an automated notification. Do not reply to this email directly.
      </p>
    </div>
  </div>
</body>
</html>`;
}

// ─────────────────────────────────────────────
// HTML email builder (client auto-reply)
// ─────────────────────────────────────────────
function buildClientEmailHTML(name: string, eventType: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0a0a0d;font-family:'Segoe UI',Arial,sans-serif;">
  <div style="max-width:580px;margin:30px auto;border-radius:12px;overflow:hidden;
    box-shadow:0 8px 40px rgba(0,0,0,0.5);border:1px solid #2a2a2a;">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#111 0%,#1a1500 100%);
      padding:36px 32px;text-align:center;border-bottom:2px solid #d4af37;">
      <div style="font-size:10px;letter-spacing:0.25em;color:#d4af37;text-transform:uppercase;
        font-weight:700;margin-bottom:10px;">✦ AAJ GROUPS ✦</div>
      <h1 style="margin:0;font-size:24px;color:#fff;font-weight:700;">
        Thank You, ${name}!
      </h1>
      <p style="margin:10px 0 0;color:#a0a0a0;font-size:14px;line-height:1.6;">
        Your enquiry has been received and we're already excited to help craft your perfect event.
      </p>
    </div>

    <!-- Body -->
    <div style="background:#111;padding:32px;">
      <p style="color:#d0d0d0;font-size:15px;line-height:1.8;margin:0 0 20px;">
        Dear <strong style="color:#fff;">${name}</strong>,
      </p>
      <p style="color:#a0a0a0;font-size:14px;line-height:1.8;margin:0 0 20px;">
        We've received your enquiry for a <strong style="color:#d4af37;">${eventType}</strong>.
        Our team at AAJ GROUPS will personally review your requirements and reach out to you
        within <strong style="color:#fff;">24 hours</strong>.
      </p>

      <!-- Promise box -->
      <div style="background:#1a1a1a;border-left:3px solid #d4af37;border-radius:0 8px 8px 0;
        padding:16px 20px;margin:24px 0;">
        <p style="margin:0 0 8px;color:#d4af37;font-size:12px;font-weight:700;
          letter-spacing:0.1em;text-transform:uppercase;">What Happens Next?</p>
        <ul style="margin:0;padding-left:18px;color:#a0a0a0;font-size:13px;line-height:2;">
          <li>Our team reviews your event requirements</li>
          <li>We prepare a customised proposal for you</li>
          <li>A consultation call is scheduled at your convenience</li>
          <li>Your dream event begins to take shape ✨</li>
        </ul>
      </div>

      <p style="color:#a0a0a0;font-size:13px;line-height:1.8;margin:0;">
        In the meantime, feel free to explore our services and gallery at
        <a href="https://aajgroups.com" style="color:#d4af37;">aajgroups.com</a>.
      </p>
    </div>

    <!-- Sign-off -->
    <div style="background:#0d0d0d;padding:24px 32px;border-top:1px solid #2a2a2a;">
      <p style="margin:0;color:#d0d0d0;font-size:14px;line-height:1.8;">
        Warm regards,<br>
        <strong style="color:#d4af37;">Ashwin Antony Jose</strong><br>
        <span style="color:#666;font-size:12px;">Director, AAJ GROUPS Event Management · Kerala, India</span>
      </p>
    </div>

    <div style="background:#0a0a0a;padding:12px;text-align:center;">
      <p style="margin:0;color:#444;font-size:11px;">
        Creating Experiences, Crafting Memories.
      </p>
    </div>
  </div>
</body>
</html>`;
}

// ─────────────────────────────────────────────
// Send email via Resend (fetch-based, no npm)
// ─────────────────────────────────────────────
async function sendViaResend(opts: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "AAJ GROUPS <onboarding@resend.dev>",
      to: [opts.to],
      subject: opts.subject,
      html: opts.html,
      reply_to: opts.replyTo,
    }),
  });

  return res.ok;
}

// ─────────────────────────────────────────────
// Optional: webhook forwarding
// ─────────────────────────────────────────────
async function sendViaWebhook(payload: Record<string, unknown>): Promise<void> {
  const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL;
  if (!webhookUrl) return;
  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error("Webhook delivery error:", err);
  }
}

// ─────────────────────────────────────────────
// POST /api/enquiry
// ─────────────────────────────────────────────
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      phone,
      email,
      eventType,
      eventDate,
      district,
      guestCount,
      budgetRange,
      message,
      questionnaire,
    } = body;

    // Validate required fields
    if (!fullName || !phone || !eventType) {
      return NextResponse.json(
        { error: "Missing required fields: fullName, phone, eventType" },
        { status: 400 }
      );
    }

    const formData: Record<string, string> = {
      fullName,
      phone,
      email: email || "",
      eventType,
      eventDate: eventDate || "",
      district: district || "",
      guestCount: guestCount || "",
      budgetRange: budgetRange || "",
      message: message || "",
      questionnaire: Array.isArray(questionnaire) ? questionnaire.join(", ") : questionnaire || "",
    };

    // 1️⃣ Send admin notification email
    const adminSubject = `🔔 New Enquiry: ${eventType} — ${fullName}`;
    const adminHTML = buildAdminEmailHTML(formData);

    const adminSent = await sendViaResend({
      to: ADMIN_EMAIL,
      subject: adminSubject,
      html: adminHTML,
      replyTo: email || undefined,
    });

    if (!adminSent) {
      // Log to console as fallback when Resend key not configured
      console.log("═══════════════════════════════════════════");
      console.log("📩 NEW ENQUIRY RECEIVED — AAJ GROUPS");
      console.log("═══════════════════════════════════════════");
      console.log(`Name       : ${fullName}`);
      console.log(`Phone      : ${phone}`);
      console.log(`Email      : ${email || "N/A"}`);
      console.log(`Event Type : ${eventType}`);
      console.log(`Event Date : ${eventDate || "TBD"}`);
      console.log(`District   : ${district || "N/A"}`);
      console.log(`Guests     : ${guestCount || "N/A"}`);
      console.log(`Budget     : ${budgetRange || "N/A"}`);
      console.log(`Message    : ${message || "None"}`);
      console.log(`Questionnaire: ${formData.questionnaire}`);
      console.log(`Admin Email: ${ADMIN_EMAIL}`);
      console.log("═══════════════════════════════════════════");
      console.log("ℹ️  Set RESEND_API_KEY in .env.local to enable email delivery.");
    }

    // 2️⃣ Send client auto-reply (only if client email was provided)
    if (email && email.includes("@")) {
      await sendViaResend({
        to: email,
        subject: `We've received your enquiry — AAJ GROUPS`,
        html: buildClientEmailHTML(fullName, eventType),
        replyTo: ADMIN_EMAIL,
      });
    }

    // 3️⃣ Optional webhook forwarding
    await sendViaWebhook({ lead: formData, adminEmail: ADMIN_EMAIL });

    return NextResponse.json({
      success: true,
      message: "Enquiry received successfully. AAJ GROUPS will contact you shortly.",
    });
  } catch (error) {
    console.error("Enquiry API error:", error);
    return NextResponse.json(
      { error: "Failed to process enquiry. Please contact via WhatsApp." },
      { status: 500 }
    );
  }
}
