"use client";

import FeaturesSection from "./featuresSection";
import MakersSection from "./makersSection";
import HopesSection from "./hopesSection";
import PromisesSection from "./promisesSection";
import HeaderSection from "./headerSection";

export default function Home() {
  return (
    <div className="LandingPage flex flex-grow flex-col items-center gap-8 pb-12 pt-40">
      <div className="LandingPageContainer flex w-[75%] max-w-[1600px] flex-col gap-32">
        <HeaderSection />
        <PromisesSection />
      </div>
      <FeaturesSection />
      <div className="LandingPageContainer flex w-[75%] max-w-[1600px] flex-col gap-8">
        <MakersSection />
        <HopesSection />
      </div>
    </div>
  );
}
