import { Tailwind, Html, Img, Head, Preview } from "@react-email/components";
import * as React from "react";

type SignupEmailProps = {
  firstName: string;
  betaTester?: boolean;
};

export default function IndividualSignupEmail({
  firstName,
  betaTester,
}: SignupEmailProps) {
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
          <Preview>Welcome to Straightforward Job Site {firstName}!</Preview>
          <Head>
            <Img
              //we'll need to make sure this logo is working + the baseUrl is updated when the site goes live so we can access the URL
              src={`${baseUrl}/sfjs-logo.png`}
              width="153"
              height="50"
              alt="straightforward job site"
              className="Email Header px-10 py-10"
            />
          </Head>
          <section className="EmailBody mb-8 px-[15%] py-[5%] text-left text-[1rem] leading-relaxed">
            <p className="EmailInfo text-jade">Hello there {firstName}!</p>
            <p className="EmailInfo">
              {`You've been signed up to get first access to Straightforward
              Job Site and we couldn't be happier to have you join us!`}
            </p>
            <p className="EmailInfo mt-12 text-end text-olive">
              {`We will respect your inbox and send you a notice when we launch so you can make
              your profile + start job-searching the simple way!`}
            </p>
            {betaTester && (
              <p className="EmailInfo text-end italic text-olive">{`Since you're interested in being a beta tester, we'll be in touch as soon as our MVP is ready for testing!`}</p>
            )}
            <p className="EmailInfo mt-12 text-jade">
              {`We hope you'll enjoy the conscious + thoughtful +
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
