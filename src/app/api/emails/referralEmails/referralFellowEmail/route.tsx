import { NextResponse } from "next/server";
import { Resend } from "resend";
import ReferralDetailsEmail from "@/emails/referralEmails/referralDetailsEmail";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email, firstName, referralCode } = await request.json();

  await resend.emails.send({
    from: "founders@straightforwardjobsite.com",
    to: email,
    subject: "Straightforward Job Site Referral Details",
    react: ReferralDetailsEmail({
      firstName,
      referralCode,
    }),
  });

  return NextResponse.json({ status: "ok" });
}
