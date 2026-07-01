import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY ?? "");
  try {
    const { name, company, country, message } = await req.json() as {
      name: string;
      company: string;
      country: string;
      message: string;
    };

    if (!name || !company || !country || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "DeNova Website <noreply@denovatec.com>",
      to: ["sales@denovatec.com"],
      subject: `New Enquiry from ${company} (${country})`,
      html: `
        <div style="font-family: 'IBM Plex Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #142250; color: #f8fafc; padding: 32px;">
          <h2 style="color: #29B8E8; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 24px;">New Website Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #94A3B8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 120px;">Name</td>
              <td style="padding: 8px 0; color: #f8fafc;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94A3B8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Company</td>
              <td style="padding: 8px 0; color: #f8fafc;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94A3B8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Country</td>
              <td style="padding: 8px 0; color: #f8fafc;">${country}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; border-top: 1px solid #1B2F68; padding-top: 24px;">
            <div style="color: #94A3B8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">Message</div>
            <div style="color: #f8fafc; line-height: 1.6;">${message.replace(/\n/g, "<br/>")}</div>
          </div>
          <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #1B2F68; color: #94A3B8; font-size: 11px;">
            Sent via DeNova Technologies website — denovatec.com
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
