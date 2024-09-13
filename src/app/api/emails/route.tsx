import { NextResponse } from "next/server";
import { Resend } from "resend";
import TestEmail from "@/emails/testEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "jennysukut@gmail.com",
    subject: "Welcome!",
    react: TestEmail(),
  });

  return NextResponse.json({ status: "ok" });
}
