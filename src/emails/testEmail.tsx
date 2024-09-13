import { Tailwind, Button, Html, Img, Head } from "@react-email/components";
import * as React from "react";

export default function TestEmail() {
  const baseUrl = "http://localhost:3000";
  return (
    <Html>
      <Tailwind
        config={{
          theme: {
            fontFamily: {
              sans: ["satoshi", "sans-serif"],
              serif: ["courier", "serif"],
              helv: ["helvetica", "sans-serif"],
            },
            extend: {
              colors: {
                jade: "#50B09F",
                olive: "#A6A646",
                eggshell: "#FFF9F3",
                cream: "#F8F2EC",
                apricot: "#FDA26B",
                midnight: "#308B7B",
              },

              letterSpacing: {
                superwide: "0.15em",
              },
            },
          },
          plugins: [require("@mertasan/tailwindcss-variables")],
        }}
      >
        <body className="Email font-helv gap-12 bg-cream font-semibold tracking-widest text-midnight">
          <Head>
            <Img
              src={`${baseUrl}/sfjs-logo.png`}
              width="153"
              height="50"
              alt="straightforward job site"
              className="Email Header px-10 py-10"
            />
          </Head>
          <section className="EmailBody px-[15%] py-[5%] text-left text-[1rem] leading-relaxed">
            <p className="EmailInfo">Hello there,</p>
            <p className="EmailInfo">
              This is a test email where we&apos;ll see how it goes when we have
              a simple background with olive text over it. Perhaps we&apos;ll
              try a fun font like consolas and see how that renders?
            </p>
          </section>
        </body>
      </Tailwind>
    </Html>
  );
}
