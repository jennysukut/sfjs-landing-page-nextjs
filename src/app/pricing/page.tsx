"use client";

import SiteButton from "@/components/siteButton";
import InfoBox from "@/components/infoBox";
import { useState } from "react";
type Category = "individual" | "business";

export default function PricingPage() {
  const [category, setCategory] = useState("");

  function handleClick(buttonType: Category) {
    if (category === buttonType) {
      setCategory("");
    } else {
      setCategory(buttonType);
    }
  }
  return (
    <div className="PricingPage flex w-[75%] max-w-[1600px] flex-col self-center p-14 pb-4">
      <div className="PricingTitleContainer flex flex-col self-start text-left">
        <h1 className="PricingTitle">our straightforward pricing:</h1>
        <p className="PricingSubtitle italic">
          because that's how all pricing should be
        </p>
      </div>
      <div className="PricingOptions flex gap-12 self-center pt-12">
        <SiteButton
          aria="features for businesses"
          size="large"
          variant="filled"
          colorScheme="b3"
          addClasses="px-14"
          onClick={() => handleClick("business")}
        >
          for businesses
        </SiteButton>
        <SiteButton
          aria="features for job seekers"
          size="large"
          variant="filled"
          colorScheme="c4"
          addClasses="px-14"
          onClick={() => handleClick("individual")}
        >
          for job-seekers
        </SiteButton>
      </div>
      <div className="PricingDetails flex gap-12 self-center pt-12">
        {category === "business" && (
          <InfoBox
            aria="business pricing"
            variant="filled"
            colorScheme="b3"
            textSize="medium"
            className="BusinessPricing self-start"
          >
            Business Pricing
          </InfoBox>
        )}
        {category === "individual" && (
          <InfoBox
            aria="individual pricing"
            variant="filled"
            colorScheme="c4"
            textSize="medium"
            className="BusinessPricing self-end"
          >
            Individual Pricing
          </InfoBox>
        )}
      </div>
    </div>
  );
}
