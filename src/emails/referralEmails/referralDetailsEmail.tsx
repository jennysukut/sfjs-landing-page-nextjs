import { Tailwind, Html, Img, Head, Preview } from "@react-email/components";
import * as React from "react";

type ReferralEmailProps = {
  firstName: string;
  referralCode?: string;
};

export default function ReferralDetailsEmail({
  firstName = "testName",
  referralCode,
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
          <Preview>
            {`Welcome to Straightforward Job Site's Referral Program!`}
          </Preview>
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
            <p className="EmailInfo text-jade">{`Hello there ${firstName}! Here are the referral program details we mentioned earlier:`}</p>
            <p className="EmailInfo">
              {`Over at Straightforward Job Site we've got an exciting crowdfunding campaign going, where fellow job-seekers can pitch in and businesses can get extra special deals + rewards by signing up and funding our development!`}
            </p>

            <p className="EmailInfo mt-12 text-end text-olive">
              {`We know things are difficult out there and we thought it would be a fun idea to set up a referral program that's mutually beneficial to us and other awesome people such as yourself!`}
            </p>
            <p className="EmailInfo mt-12 text-end text-jade">
              {`How it plays out is pretty simple: If you get a business on board and they donate to our campaign, you get 10% of what they spend! They get a great deal, you get some cash, and we get jobs to fill our site and fund our build - Triple-Win!`}
            </p>
            <p className="EmailInfo mt-12">
              {`Here's your very own referral code: ${referralCode}`}
            </p>
            <p className="EmailInfo mt-12 text-olive">
              {/* add the contract link here */}
              {`We've got a contract here for you to look over `}
              <a
                href="http://straightforwardjobsite.com/sfjs-referral-contract.pdf"
                className="Link italic text-olive underline"
              >
                here
              </a>
              {` and sign before you're officially part of the program - you should also have a meeting scheduled with Jacob {one of our founders} to go over details and any questions you might have.`}
            </p>
            <p className="EmailInfo mt-12 text-end italic text-midnight">
              {`Give it a glance and we're excited to have you as part of our cohort of creative humans making the world better for the people in it, one step at a time. Talk to you soon ✨`}
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
