"use client";

import SiteButton from "@/components/siteButton";
import InfoBox from "@/components/infoBox";
import FeaturesSection from "@/components/featuresSection";

import Image from "next/image";
import { landingPageText } from "@/lib/landingPageText";

export default function Home() {
  const promises = landingPageText.promises.map((promise: string) => {
    return (
      <InfoBox aria={promise} variant="hollow">
        {promise}
      </InfoBox>
    );
  });

  return (
    <main className="Main flex flex-grow flex-col items-center bg-cream">
      <div className="MainSection flex w-full max-w-[1000px] flex-grow justify-center">
        <div className="MainContainer mt-28 flex -translate-x-[18vh] flex-col items-start gap-4">
          <h1 className="MainText max-w-[700px] text-2xl font-bold text-midnight">
            our mission: to bring simplicity, honesty, and transparency to the
            job market.
          </h1>
          <div className="ButtonContainer mt-5 flex gap-8">
            <SiteButton
              aria="sign up"
              size="large"
              variant="filled"
              colorScheme="b1"
            >
              sign me up!
            </SiteButton>
            <SiteButton
              aria="support us"
              size="large"
              variant="filled"
              colorScheme="e5"
            >
              how can i help?
            </SiteButton>
          </div>
        </div>
      </div>
      <div className="PromisesSection mt-32 flex translate-x-[30vh] flex-col flex-wrap items-end justify-end text-right">
        <h1 className="PromisesTitle">our promises:</h1>
        <p className="PromisesSubtitle mb-5 font-semibold italic">
          to businesses and job-seekers
        </p>
        {promises}
        <div className="ButtonContainer mt-5 flex flex-col gap-4">
          <SiteButton
            aria="sign up"
            size="large"
            variant="filled"
            colorScheme="c3"
            addClasses="px-10"
          >
            sign me up!
          </SiteButton>
          <SiteButton
            aria="support us"
            size="large"
            variant="filled"
            colorScheme="b1"
            addClasses="px-14"
          >
            support us
          </SiteButton>
          <div className="PromisePrompt flex items-end">
            <Image
              src="/PurpleArrow.svg"
              alt="arrow"
              width={100}
              height={89}
            ></Image>
            <p className="PromisesPrompt max-w-44 text-center text-xs text-lilac">
              {landingPageText.arrowprompts.promise}
            </p>
          </div>
        </div>
      </div>
      <FeaturesSection />
    </main>
  );
}
