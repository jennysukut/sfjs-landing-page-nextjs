"use client";

import FeaturesSection from "./featuresSection";
import MakersSection from "./makersSection";
import HopesSection from "./hopesSection";
import PromisesSection from "./promisesSection";
import HeaderSection from "./headerSection";

export default function Home() {
  return (
    <div className="LandingPage flex flex-grow flex-col items-center gap-8 pt-20 md:pb-12 md:pt-40">
      <div className="LandingPageContainer flex w-[84%] max-w-[1600px] flex-col gap-20 sm:gap-32 md:w-[75%]">
        <HeaderSection />
        <PromisesSection />
      </div>
      <FeaturesSection />
      <div className="LandingPageContainer flex w-[84%] max-w-[1600px] flex-col gap-8 md:w-[75%]">
        <MakersSection />
        <HopesSection />
      </div>
    </div>
  );
}
