import { NextResponse } from "next/server";
import { Resend } from "resend";
import BusinessSignupEmail from "@/emails/signupEmails/businessSignupEmail";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email, businessName } = await request.json();

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Welcome to Straightforward Job Site!",
    react: BusinessSignupEmail({ businessName }),
  });

  return NextResponse.json({ status: "ok" });
}
