import { NextResponse } from "next/server";
import { Resend } from "resend";
import BusinessDonationEmail from "@/emails/donationEmails/businessDonationEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email, businessName, amount } = await request.json();

  await resend.emails.send({
    from: "simple@straightforwardjobsite.com",
    to: email,
    subject: "Thank You from Straightforward Job Site!",
    react: BusinessDonationEmail({ businessName, amount }),
  });

  return NextResponse.json({ status: "ok" });
}
