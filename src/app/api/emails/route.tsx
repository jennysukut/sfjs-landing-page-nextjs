import { NextResponse } from "next/server";
import { Resend } from "resend";
import Email from "@/emails/testEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "jennysukut@gmail.com",
    subject: "hello world",
    react: Email(),
  });

  return NextResponse.json({ status: "ok" });
}
