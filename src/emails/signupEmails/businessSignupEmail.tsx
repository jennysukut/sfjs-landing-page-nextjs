import { Tailwind, Html, Img, Head, Preview } from "@react-email/components";
import * as React from "react";

type BusinessEmailProps = {
  businessName: string;
  betaTester?: boolean;
};

export default function BusinessSignupEmail({
  businessName = "busniessName",
  betaTester,
}: BusinessEmailProps) {
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
          <Preview>Welcome to Straightforward Job Site {businessName}!</Preview>
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
              {`You've been signed up to get first access to Straightforward
              Job Site and we couldn't be happier to have you join us!`}
            </p>
            <p className="EmailInfo mt-12 text-end text-olive">
              {`We will be opening our platform early to businesses on our list so you can create a job post to be active on our launch!`}
            </p>
            {betaTester && (
              <p className="EmailInfo text-end text-olive">
                {`We'll be choosing a small handful of businesses to be beta testers and get a free job post in exchange for feedback. We'll let you know if you make the list!`}
              </p>
            )}
            <p className="EmailInfo mt-12 text-jade">
              {`We hope you'll enjoy the conscious + thoughtful + simple +
              human-focused enviornment we're working so hard to create ✨`}
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
