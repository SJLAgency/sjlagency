/**
 * EZLife Application Submission Handler
 * 
 * Receives form data from the Vue SPA at /ezlife.html, posts it to
 * the Hermes webhook running on Seth's local machine (via Cloudflare tunnel),
 * which handles Zoho CRM creation and email notifications.
 */
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const WEBHOOK_URL = process.env.EZLIFE_WEBHOOK_URL || "https://latest-warrant-wood-possibly.trycloudflare.com/webhooks/ezlife-submission";
  const WEBHOOK_SECRET = process.env.EZLIFE_WEBHOOK_SECRET || "ezlife-sjl-webhook-secret-2026";

  try {
    const { insured, rate, owner, beneficiaries } = req.body;

    // Forward to Hermes webhook (runs locally with Zoho + email access)
    const webhookResp = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Hub-Signature-256": `sha256=${await hmacSha256(WEBHOOK_SECRET, JSON.stringify(req.body))}`,
        "X-Webhook-ID": "ezlife-submission",
      },
      body: JSON.stringify(req.body),
    });

    if (!webhookResp.ok) {
      console.error("Webhook failed:", webhookResp.status, await webhookResp.text());
      throw new Error(`Webhook returned ${webhookResp.status}`);
    }

    res.status(200).json({
      success: true,
      message: "Application submitted successfully! Seth will be in touch shortly.",
    });
  } catch (error) {
    console.error("EZLife submission error:", error);
    res.status(500).json({
      error: "Failed to submit. Please try again or call 214-272-2769.",
    });
  }
}

async function hmacSha256(secret, data) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(data));
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}