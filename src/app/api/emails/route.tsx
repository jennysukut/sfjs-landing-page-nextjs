import { NextResponse } from "next/server";
import { Resend } from "resend";
import TestEmail from "@/emails/testEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  await resend.emails.send({
    from: "straightforwardjobsite@gmail.com",
    to: "jennysukut@gmail.com",
    subject: "testEmail",
    react: TestEmail(),
  });

  return NextResponse.json({ status: "ok" });
}
