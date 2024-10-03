import { NextResponse } from "next/server";
import { Resend } from "resend";
import NewReferralEmail from "@/emails/referralEmails/newReferralEmail";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email, name, referralCode, message } = await request.json();

  await resend.emails.send({
    from: "updates@straightforwardjobsite.com",
    to: "straightforwardjobsite@gmail.com",
    subject: "New Referral Collaborator Update!",
    react: NewReferralEmail({
      email,
      name,
      referralCode,
      message,
    }),
  });

  return NextResponse.json({ status: "ok" });
}
