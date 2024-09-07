"useclient";

import SiteButton from "./siteButton";
import InfoBox from "./infoBox";
import { useState } from "react";
import { landingPageText } from "@/lib/landingPageText";
import Image from "next/image";

export default function HopesSection() {
  return (
    <div className="HopesSection mb-20">
      <div className="HopesTitleContainer mb-10 mt-20 -translate-x-20">
        <h1 className="HopeTitle">our hopes:</h1>
        <p className="HopeSubtitle mb-5 max-w-xl font-semibold italic">
          we have big ideals and even bigger dreams
        </p>
      </div>
      <InfoBox
        aria="change perspectives"
        variant="filled"
        colorScheme="f3"
        addClasses="rounded-full text-sm text-center"
      >
        to change perspectives in the current work landscape
      </InfoBox>
      <div className="HopesDetails flex">
        <div className="infoBoxesLeft flex max-w-sm flex-col items-end">
          <InfoBox
            aria="change perspectives"
            variant="filled"
            colorScheme="d4"
            addClasses="text-sm text-center"
          >
            to show how exciting & successful people-focused, conscious,
            transparent businesses can be{" "}
          </InfoBox>
          <InfoBox
            aria="change perspectives"
            variant="filled"
            colorScheme="f4"
            addClasses="rounded-full text-sm px-14"
          >
            to do good{" "}
          </InfoBox>
        </div>
        <div className="infoBoxesRight flex max-w-sm flex-col items-start">
          <InfoBox
            aria="change perspectives"
            variant="filled"
            colorScheme="c5"
            addClasses="text-sm rounded-full"
          >
            to empower individuals
          </InfoBox>
          <InfoBox
            aria="change perspectives"
            variant="filled"
            colorScheme="e6"
            addClasses=" text-sm text-center"
          >
            to make human decency & good communication a standard practice
          </InfoBox>
        </div>
      </div>
    </div>
  );
}
