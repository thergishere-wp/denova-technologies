import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  company: z.string().min(1, "Company name is required"),
  country: z.enum(["Sri Lanka", "Bangladesh", "Other"] as const, { error: "Country is required" }),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Valid email is required"),
  productInterest: z.string().min(1, "Product interest is required"),
  message: z.string().optional(),
});

type EnquiryData = z.infer<typeof schema>;

function buildNotificationHtml(data: EnquiryData): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>New Enquiry — Denova Technologies</title></head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #161616;">
  <div style="background: #00205b; padding: 20px 24px; margin-bottom: 24px;">
    <h1 style="color: #fff; margin: 0; font-size: 18px; font-weight: 700;">New Enquiry — Denova Technologies</h1>
    <p style="color: #a6c8ff; margin: 6px 0 0; font-size: 13px;">${data.productInterest} — ${data.company}</p>
  </div>

  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
    <tr><td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #525252; width: 40%;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: 600;">${data.firstName} ${data.lastName}</td></tr>
    <tr><td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #525252;">Company</td><td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: 600;">${data.company}</td></tr>
    <tr><td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #525252;">Country</td><td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">${data.country}</td></tr>
    <tr><td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #525252;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">${data.phone}</td></tr>
    <tr><td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #525252;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;"><a href="mailto:${data.email}" style="color: #0f62fe;">${data.email}</a></td></tr>
    <tr><td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #525252;">Product Interest</td><td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: 600;">${data.productInterest}</td></tr>
  </table>

  ${data.message ? `<div style="margin-top: 20px; background: #f4f4f4; padding: 16px; font-size: 14px; line-height: 1.6;"><strong>Message:</strong><br/>${data.message}</div>` : ""}

  <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #8d8d8d;">
    Reply directly to this email to respond to the enquiry.
  </div>
</body>
</html>`;
}

function buildConfirmationHtml(data: EnquiryData): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Thank you — Denova Technologies</title></head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #161616;">
  <div style="background: #00205b; padding: 20px 24px; margin-bottom: 24px;">
    <h1 style="color: #fff; margin: 0; font-size: 18px; font-weight: 700;">Denova Technologies Ltd</h1>
    <p style="color: #a6c8ff; margin: 6px 0 0; font-size: 13px;">Industrial Machinery Solutions</p>
  </div>

  <p style="font-size: 16px; margin-bottom: 16px;">Dear ${data.firstName},</p>
  <p style="font-size: 14px; line-height: 1.7; margin-bottom: 16px;">
    Thank you for your enquiry about <strong>${data.productInterest}</strong>. We have received your message and our team will respond within <strong>1 business day</strong>.
  </p>
  <p style="font-size: 14px; line-height: 1.7; margin-bottom: 24px;">
    In the meantime, if you have any urgent questions please reach us directly using the contact details below.
  </p>

  <div style="background: #f4f4f4; padding: 20px; font-size: 13px; line-height: 2;">
    <strong style="font-size: 14px;">Denova Technologies Ltd</strong><br/>
    Email: <a href="mailto:sales@DeNovatec.com" style="color: #0f62fe;">sales@DeNovatec.com</a><br/>
    New Zealand: +64 27 5555880<br/>
    Sri Lanka: +94 777 395884<br/>
    Bangladesh: +880 1817-079822
  </div>

  <div style="margin-top: 24px; font-size: 12px; color: #8d8d8d; padding-top: 16px; border-top: 1px solid #e0e0e0;">
    © 2025 Denova Technologies Ltd. All rights reserved.
  </div>
</body>
</html>`;
}

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.issues[0]?.message ?? "Validation failed" },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY not set");
      return NextResponse.json({ success: false, error: "Email service not configured" }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const [notif, confirm] = await Promise.all([
      resend.emails.send({
        from: "Denova Website <onboarding@resend.dev>",
        to: ["sales@DeNovatec.com"],
        replyTo: data.email,
        subject: `New Enquiry — ${data.productInterest} — ${data.company}`,
        html: buildNotificationHtml(data),
      }),
      resend.emails.send({
        from: "Denova Technologies <onboarding@resend.dev>",
        to: [data.email],
        subject: "Thank you for your enquiry — Denova Technologies",
        html: buildConfirmationHtml(data),
      }),
    ]);

    if (notif.error || confirm.error) {
      console.error("Resend error:", notif.error ?? confirm.error);
      return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
