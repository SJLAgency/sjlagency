const { execSync } = require("child_process");

function buildProspectEmail(name) {
  const safeName = name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f3ef;font-family:'Segoe UI',Helvetica,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f3ef;padding:20px 0;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.06);">
  <tr><td style="background:#1B1B2F;padding:32px 40px 28px;text-align:center;">
    <h1 style="margin:0 0 4px;font-size:22px;font-weight:700;color:#E8D48B;letter-spacing:0.5px;">SJL Insurance Agency</h1>
    <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.6);">Life Insurance — Made Simple</p>
  </td></tr>
  <tr><td style="padding:36px 40px 20px;">
    <p style="margin:0 0 6px;font-size:15px;color:#444;line-height:1.6;">Hi <strong style="color:#1B1B2F;">${safeName}</strong>,</p>
    <p style="margin:0 0 20px;font-size:15px;color:#444;line-height:1.6;">Thank you for starting your life insurance application. We're here to make the process smooth and clear every step of the way.</p>
    <h2 style="margin:0 0 16px;font-size:18px;font-weight:700;color:#1B1B2F;border-bottom:2px solid #D0802E;padding-bottom:8px;">What to Expect Next</h2>
    <p style="margin:0 0 20px;font-size:14px;color:#666;line-height:1.5;">To finalize your life insurance application and obtain coverage, we will accomplish the following steps:</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;background:#faf9f6;border-radius:8px;border-left:4px solid #D0802E;"><tr><td style="padding:16px 20px;">
      <h3 style="margin:0 0 4px;font-size:15px;font-weight:700;color:#1B1B2F;">Step 1 - Phone Interview & Signature</h3>
      <p style="margin:0 0 8px;font-size:13px;color:#D0802E;font-weight:600;">20-30 minutes</p>
      <p style="margin:0 0 6px;font-size:13px;color:#555;line-height:1.5;">We will contact you to collect: doctor/provider info, income/assets/net worth, medical & lifestyle questions, and your signature via secure electronic process or paper application.</p>
    </td></tr></table>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;background:#faf9f6;border-radius:8px;border-left:4px solid #C9A84C;"><tr><td style="padding:16px 20px;">
      <h3 style="margin:0 0 4px;font-size:15px;font-weight:700;color:#1B1B2F;">Step 2 - Free Medical Exam</h3>
      <p style="margin:0 0 8px;font-size:13px;color:#C9A84C;font-weight:600;">30 minutes</p>
      <p style="margin:0 0 6px;font-size:13px;color:#555;line-height:1.5;">We schedule a free exam at your convenience. A qualified examiner will ask medical questions, measure height/weight/blood pressure/pulse, and collect blood and urine specimens.</p>
    </td></tr></table>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;background:#faf9f6;border-radius:8px;border-left:4px solid #C9A84C;"><tr><td style="padding:16px 20px;">
      <h3 style="margin:0 0 4px;font-size:15px;font-weight:700;color:#1B1B2F;">Step 3 - Underwriting & Policy Delivery</h3>
      <p style="margin:0 0 8px;font-size:13px;color:#C9A84C;font-weight:600;">2-6 weeks</p>
      <p style="margin:0 0 6px;font-size:13px;color:#555;line-height:1.5;">The insurance company reviews your application, medical info, and exam results. May request additional reports from your healthcare providers. We will contact you with the final decision and next steps.</p>
    </td></tr></table>
    <h2 style="margin:0 0 16px;font-size:18px;font-weight:700;color:#1B1B2F;border-bottom:2px solid #D0802E;padding-bottom:8px;">Exam Prep Tips</h2>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:6px;"><tr><td width="8" style="background:#D0802E;border-radius:4px 0 0 4px;"></td><td style="padding:12px 16px;background:#faf9f6;border-radius:0 4px 4px 0;"><strong style="color:#1B1B2F;font-size:14px;">Stay hydrated</strong><p style="margin:4px 0 0;font-size:13px;color:#666;line-height:1.4;">Drink plenty of water — it makes urine and blood samples easier to collect.</p></td></tr></table>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:6px;"><tr><td width="8" style="background:#C9A84C;border-radius:4px 0 0 4px;"></td><td style="padding:12px 16px;background:#faf9f6;border-radius:0 4px 4px 0;"><strong style="color:#1B1B2F;font-size:14px;">Fast for 4-8 hours</strong><p style="margin:4px 0 0;font-size:13px;color:#666;line-height:1.4;">No food or drink except water before your exam.</p></td></tr></table>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:6px;"><tr><td width="8" style="background:#C9A84C;border-radius:4px 0 0 4px;"></td><td style="padding:12px 16px;background:#faf9f6;border-radius:0 4px 4px 0;"><strong style="color:#1B1B2F;font-size:14px;">Skip exercise for 12 hours</strong><p style="margin:4px 0 0;font-size:13px;color:#666;line-height:1.4;">Avoid rigorous workouts before your exam.</p></td></tr></table>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:6px;"><tr><td width="8" style="background:#D0802E;border-radius:4px 0 0 4px;"></td><td style="padding:12px 16px;background:#faf9f6;border-radius:0 4px 4px 0;"><strong style="color:#1B1B2F;font-size:14px;">No alcohol</strong><p style="margin:4px 0 0;font-size:13px;color:#666;line-height:1.4;">Alcohol dehydrates and can skew liver enzyme readings.</p></td></tr></table>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:6px;"><tr><td width="8" style="background:#D0802E;border-radius:4px 0 0 4px;"></td><td style="padding:12px 16px;background:#faf9f6;border-radius:0 4px 4px 0;"><strong style="color:#1B1B2F;font-size:14px;">Avoid caffeine</strong><p style="margin:4px 0 0;font-size:13px;color:#666;line-height:1.4;">Caffeine can elevate blood pressure and cause an inaccurate reading.</p></td></tr></table>
    <p style="margin:20px 0 0;font-size:14px;color:#555;line-height:1.6;">Once a decision has been made, we will contact you to discuss it and collect any additional forms, information, or premium payments required to place your policy in force.</p>
  </td></tr>
  <tr><td style="padding:0 40px;"><hr style="border:none;border-top:1px solid #e5e5e5;margin:0;"></td></tr>
  <tr><td style="padding:20px 40px 32px;text-align:center;">
    <p style="margin:0 0 10px;font-size:12px;color:#999;line-height:1.5;">
      <strong style="color:#555;">SJL Insurance Agency</strong><br>
      Garland, Texas &bull; Licensed in 40+ states<br>
      <a href="tel:2142722769" style="color:#D0802E;text-decoration:none;">214-272-2769</a>
      &nbsp;|&nbsp; <a href="mailto:seth@sjlagency.com" style="color:#D0802E;text-decoration:none;">seth@sjlagency.com</a>
    </p>
    <p style="margin:0;font-size:11px;color:#bbb;">This message was sent because you submitted a life insurance application through sjlagency.com and applyforlife.com.</p>
  </td></tr>
</table>
</td></tr></table>
</body>
</html>`;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { insured, rate, owner, beneficiaries } = req.body;

    const summary = [
      "=== EZLife Online Application ===", "",
      "--- Proposed Insured ---",
      `Name: ${insured?.firstName || ""} ${insured?.middleName || ""} ${insured?.lastName || ""}`,
      `DOB: ${insured?.dob || ""}`,
      `Sex: ${insured?.sex || ""}`,
      `Height: ${insured?.height || ""}`,
      `Weight: ${insured?.weight || ""}`,
      `Address: ${insured?.address || ""}, ${insured?.city || ""}, ${insured?.state || ""} ${insured?.zip || ""}`,
      `Home Phone: ${insured?.homePhone || ""}`,
      `Work Phone: ${insured?.workPhone || ""}`,
      `Cell: ${insured?.cell || ""}`,
      `Best Time: ${insured?.bestTime || ""}`,
      `Email: ${insured?.email || ""}`,
      `DL#: ${insured?.dlNumber || ""}`,
      `SSN: ${insured?.ssn || ""}`,
      `US Citizen: ${insured?.usCitizen || ""}`,
      `Birth Place: ${insured?.birthPlace || ""}`,
      `Occupation: ${insured?.occupation || ""}`,
      `Annual Income: $${insured?.annualIncome || ""}`,
      `Assets: $${insured?.assets || ""}`,
      `Liabilities: $${insured?.liabilities || ""}`, "",
      "--- Rate & Plan ---",
      `Carrier: ${rate?.carrier || ""}`,
      `Plan: ${rate?.plan || ""}`,
      `Face Amount: $${rate?.faceAmount || ""}`,
      `Rate Class: ${rate?.rateClass || ""}`,
      `Modal Premium: $${rate?.modalPremium || ""}`,
      `Mode: ${rate?.mode || ""}`,
      `Payment Plan: ${rate?.paymentPlan || ""}`,
      `Bind: ${rate?.bind || ""}`,
      `Riders: ${rate?.riders || ""}`,
      `Existing Insurance: ${rate?.existingInsurance || ""}`,
      `Replacement: ${rate?.replacement || ""}`,
      `Purpose: ${rate?.purpose || ""}`, "",
      "--- Owner Information ---",
      `Insured is Owner: ${owner?.isInsuredOwner || "Yes"}`,
    ];

    if (owner?.isInsuredOwner === "No") {
      summary.push(
        `Owner/Trust Name: ${owner?.ownerName || ""}`,
        `Trustee Name: ${owner?.trusteeName || ""}`,
        `Address: ${owner?.address || ""}, ${owner?.city || ""}, ${owner?.state || ""} ${owner?.zip || ""}`,
        `Tax ID#: ${owner?.taxId || ""}`,
        `Trust Date: ${owner?.trustDate || ""}`,
        `Trust State: ${owner?.trustState || ""}`,
        `Trust Type: ${owner?.trustType || ""}`
      );
    }

    summary.push("", "--- Beneficiaries ---");
    const addBenef = (label, b) => {
      if (b?.fullName) {
        summary.push(
          `${label}: ${b.fullName}`,
          `  DOB: ${b.dob || ""} | %: ${b.percent || ""}`,
          `  Relationship: ${b.relationship || ""}`,
          `  SSN: ${b.ssn || ""}`
        );
      }
    };
    addBenef("Primary #1", beneficiaries?.primary1);
    addBenef("Primary #2", beneficiaries?.primary2);
    addBenef("Contingent #1", beneficiaries?.contingent1);
    addBenef("Contingent #2", beneficiaries?.contingent2);

    const fullSummary = summary.join("\n");
    const name = `${insured?.firstName || "New"} ${insured?.lastName || "Applicant"}`;

    // Send via the Google API script
    const sendCmd = [
      "python3",
      "/home/shermiez/.hermes/skills/productivity/google-workspace/scripts/google_api.py",
      "gmail", "send",
      "--to", "seth@sjlagency.com",
      "--from", '"EZLife App <term4sale@sjlagency.com>"',
      "--subject", `EZLife App: ${name}`,
      "--body", `A new EZLife application was submitted from sjlagency.com.<br><br>A new EZLife application has been submitted.<br><br>${fullSummary.replace(/\n/g, "<br>")}`,
      "--html",
    ];

    try {
      execSync(sendCmd.join(" "), { timeout: 15000, encoding: "utf-8" });
    } catch (emailErr) {
      console.error("Email send failed:", emailErr.message);
    }

    // Send auto-responder to the prospect
    const prospectEmail = insured?.email || "";
    if (prospectEmail) {
      const prospectCmd = [
        "python3",
        "/home/shermiez/.hermes/skills/productivity/google-workspace/scripts/google_api.py",
        "gmail", "send",
        "--to", prospectEmail,
        "--from", '"SJL Insurance Agency" <seth@sjlagency.com>',
        "--subject", "What to Expect Next — Your Life Insurance Application",
        "--body", buildProspectEmail(name),
        "--html",
      ];
      try {
        execSync(prospectCmd.join(" "), { timeout: 15000, encoding: "utf-8" });
      } catch (emailErr) {
        console.error("Prospect auto-responder failed:", emailErr.message);
      }
    }

    res.status(200).json({
      success: true,
      message: "Application submitted successfully! Seth will be in touch shortly.",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to submit. Please try again." });
  }
}
