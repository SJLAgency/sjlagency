const { execSync } = require("child_process");

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

    res.status(200).json({
      success: true,
      message: "Application submitted successfully! Seth will be in touch shortly.",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to submit. Please try again." });
  }
}
