"use client";

import FeaturesSection from "./featuresSection";
import MakersSection from "./makersSection";
import HopesSection from "./hopesSection";
import PromisesSection from "./promisesSection";
import HeaderSection from "./headerSection";

export default function Home() {
  return (
    <div className="LandingPage flex flex-grow flex-col items-center gap-32 py-40">
      <div className="LandingPageContainer flex w-[75%] max-w-[1600px] flex-col gap-24">
        <HeaderSection />
        <PromisesSection />
      </div>
      <FeaturesSection />
      <div className="LandingPageContainer flex w-[75%] max-w-[1600px] flex-col gap-24">
        <MakersSection />
        <HopesSection />
      </div>
    </div>
  );
}
