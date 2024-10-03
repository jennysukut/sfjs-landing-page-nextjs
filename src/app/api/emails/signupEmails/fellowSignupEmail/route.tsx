import { NextResponse } from "next/server";
import { Resend } from "resend";
import IndividualSignupEmail from "@/emails/signupEmails/individualSignupEmail";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email, firstName, betaTester } = await request.json();

  await resend.emails.send({
    from: "simple@straightforwardjobsite.com",
    to: email,
    subject: "Welcome to Straightforward Job Site!",
    react: IndividualSignupEmail({ firstName, betaTester }),
  });

  return NextResponse.json({ status: "ok" });
}
