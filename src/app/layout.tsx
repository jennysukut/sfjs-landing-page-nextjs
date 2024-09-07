import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Straightforward Job Site",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-cream">
        <NavBar />
        <div className="Main flex flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
