import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello from the API" });
}

// Add other HTTP method handlers as needed (POST, PUT, DELETE, etc.)
