import { NextResponse } from "next/server";
import { Resend } from "resend";
import BusinessSignupEmail from "@/emails/signupEmails/businessSignupEmail";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email, businessName, betaTester } = await request.json();

  await resend.emails.send({
    from: "simple@straightforwardjobsite.com",
    to: email,
    subject: "Welcome to Straightforward Job Site!",
    react: BusinessSignupEmail({ businessName, betaTester }),
  });

  return NextResponse.json({ status: "ok" });
}
