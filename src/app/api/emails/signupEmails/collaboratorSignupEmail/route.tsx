import { NextResponse } from "next/server";
import { Resend } from "resend";
import CollaboratorSignupEmail from "@/emails/signupEmails/collaboratorSignupEmail";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email, firstName } = await request.json();

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Thank You from Straightforward Job Site!",
    react: CollaboratorSignupEmail({ firstName }),
  });

  return NextResponse.json({ status: "ok" });
}
