"useclient";

import SiteButton from "./siteButton";
import InfoBox from "./infoBox";
import { useState } from "react";
import { landingPageText } from "@/lib/landingPageText";
import Image from "next/image";
import { ButtonColorOption } from "@/lib/buttonColors";

export default function FeaturesSection() {
  const [category, setCategory] = useState("individual");
  const [clickedButton, setClickedButton] = useState("none");

  function testClick(e: any) {
    if (clickedButton === e.target.name) {
      setClickedButton("");
    } else setClickedButton(e.target.name);
  }

  function featurePrompt() {
    if (clickedButton === "none") {
      return (
        <div className="FeaturesPrompt flex flex-col items-start">
          <p className="FeaturesPrompt max-w-44 text-center text-xs text-jade">
            {landingPageText.arrowprompts.feature}
          </p>
          <Image
            className="-translate-y-[5vh] translate-x-[20vh]"
            src="/GreenArrow.svg"
            alt="arrow"
            width={100}
            height={75}
          ></Image>
        </div>
      );
    }
  }

  function handleBusinessClick() {
    setCategory("business");
  }

  function handleIndividualClick() {
    setCategory("individual");
  }

  return (
    <div className="FeaturesSection mt-40 flex flex-col">
      <div className="FeaturesHeading flex items-center justify-center">
        <div className="FeaturesTitle mr-14 flex flex-col text-left">
          <h1 className="FeaturesTitle">our features:</h1>
          <p className="PromisesSubtitle mb-5 font-semibold italic">
            choose category:
          </p>
        </div>
        <div className="ButtonContainer mb-8 mt-5 flex gap-10">
          <SiteButton
            aria="features for businesses"
            size="large"
            variant="filled"
            colorScheme="b3"
            addClasses="px-14"
            onClick={handleBusinessClick}
          >
            for businesses
          </SiteButton>
          <SiteButton
            aria="features for job seekers"
            size="large"
            variant="filled"
            colorScheme="c4"
            addClasses="px-14"
            onClick={handleIndividualClick}
          >
            for job-seekers
          </SiteButton>
        </div>
      </div>

      {/* For Job Seekers */}
      <div className="Features flex max-w-5xl flex-wrap justify-center gap-6 px-20">
        {landingPageText.features.individualFeatures.map(
          ({ colorScheme, title, addClasses, details }) => {
            if (category === "individual") {
              return (
                <div key={`button-${title}`}>
                  <SiteButton
                    aria={title}
                    variant="filled"
                    size="large"
                    colorScheme={colorScheme as ButtonColorOption}
                    addClasses={addClasses}
                    onClick={testClick}
                    name={title}
                    key={`button-${title}`}
                  >
                    {title}
                  </SiteButton>
                  {clickedButton === title && (
                    <InfoBox
                      variant="filled"
                      aria={title}
                      colorScheme={colorScheme as ButtonColorOption}
                      addClasses="text-xs max-w-5xl"
                      key={`info-${title}`}
                    >
                      {details}
                    </InfoBox>
                  )}
                </div>
              );
            }
            return null;
          },
        )}

        {/* For Businesses */}
        {landingPageText.features.businessFeatures.map(
          ({ colorScheme, title, addClasses, details }) => {
            if (category === "business") {
              return (
                <div key={`button-${title}`}>
                  <SiteButton
                    aria={title}
                    variant="filled"
                    size="large"
                    colorScheme={colorScheme as ButtonColorOption}
                    addClasses={addClasses}
                    onClick={testClick}
                    name={title}
                    key={`button-${title}`}
                  >
                    {title}
                  </SiteButton>
                  {clickedButton === title && (
                    <InfoBox
                      variant="filled"
                      aria={title}
                      colorScheme={colorScheme as ButtonColorOption}
                      addClasses="text-xs max-w-5xl"
                      key={`info-${title}`}
                    >
                      {details}
                    </InfoBox>
                  )}
                </div>
              );
            }
            return null;
          },
        )}
      </div>
      {featurePrompt()}
    </div>
  );
}
