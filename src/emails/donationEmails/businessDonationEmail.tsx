import { Tailwind, Html, Img, Head, Preview } from "@react-email/components";
import * as React from "react";

type TestEmailProps = {
  businessName: string;
  amount: number;
};

export default function BusinessDonationEmail({
  businessName = "testBusinessName",
  amount,
}: TestEmailProps) {
  const baseUrl = "http://straightforwardjobsite.com";
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
                watermelon: "#FFABDA",
                magenta: "#E673A9",
              },

              letterSpacing: {
                superwide: "0.15em",
              },
            },
          },
          plugins: [require("@mertasan/tailwindcss-variables")],
        }}
      >
        <body className="Email h-[100%] gap-12 bg-cream pb-40 font-sans font-semibold tracking-widest text-midnight">
          <Preview>Thank You from Straightforward Job Site!</Preview>
          <Head>
            <Img
              src={`${baseUrl}/sfjs-logo.png`}
              width="153"
              height="50"
              alt="straightforward job site"
              className="Email Header px-10 py-10"
            />
          </Head>
          <section className="EmailBody mb-8 px-[15%] py-[5%] text-left text-[1rem] leading-relaxed">
            <p className="EmailInfo text-jade">Hello there {businessName}!</p>
            <p className="EmailInfo">
              {`Thank you so much for your support of Straightforward Job Site!`}
            </p>
            <p className="EmailInfo mt-12 text-end text-olive">
              {`That ${amount} means so much to us and our group of makers is so grateful for your support.`}
            </p>
            <p className="EmailInfo mt-12 text-jade">
              {`We've made a note of your contribution and will shortly be sending along a contract for you to sign and claim your rewards! ✨`}
            </p>
            <p className="EmailInfo mt-20 text-end text-sm italic tracking-superwide text-olive">
              - the makers of straightforward job site
            </p>
          </section>
        </body>
      </Tailwind>
    </Html>
  );
}
