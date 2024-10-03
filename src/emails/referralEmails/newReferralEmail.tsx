import { Tailwind, Html, Img, Head, Preview } from "@react-email/components";
import * as React from "react";

type ReferralEmailProps = {
  email: string;
  name: string;
  referralCode?: string;
  message: string;
};

export default function NewReferralEmail({
  email,
  name = "testName",
  referralCode,
  message,
}: ReferralEmailProps) {
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
          <Preview>Our Newest Referral Partner: {name}</Preview>
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
            <p className="EmailInfo text-jade">{`We have a new referral partner!`}</p>
            <p className="EmailInfo">{`Name: ${name},`}</p>
            <p className="EmailInfo text-midnight">{`Email: ${email},`}</p>
            <p className="EmailInfo">{`Referral Code: ${referralCode},`}</p>
            <p className="EmailInfo italic text-olive">
              {`Their collaboration ideas:`}
            </p>
            <p className="EmailInfo mt-12 text-olive">{message}</p>
          </section>
        </body>
      </Tailwind>
    </Html>
  );
}
