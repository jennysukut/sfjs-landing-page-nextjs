import { NextResponse } from "next/server";
import { Resend } from "resend";
import FellowDonationEmail from "@/emails/donationEmails/fellowDonationEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email, firstName, amount } = await request.json();

  await resend.emails.send({
    from: "simple@straightforwardjobsite.com",
    to: email,
    subject: "Thank You from Straightforward Job Site!",
    react: FellowDonationEmail({ firstName, amount }),
  });

  return NextResponse.json({ status: "ok" });
}
