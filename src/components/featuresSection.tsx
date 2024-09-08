"useclient";

import SiteButton from "./siteButton";
import InfoBox from "./infoBox";
import { useState, useEffect } from "react";
import { landingPageText } from "@/lib/landingPageText";
import Image from "next/image";
import { ButtonColorOption } from "@/lib/buttonColors";

export default function FeaturesSection() {
  const [category, setCategory] = useState("individual");
  const [clickedButton, setClickedButton] = useState("none");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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

  function getDetail() {}

  function handleBusinessClick() {
    setCategory("business");
    setClickedButton("");
  }

  function handleIndividualClick() {
    setCategory("individual");
    setClickedButton("");
  }

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <div className="FeaturesSection mt-40 flex flex-col justify-center">
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

      {clickedButton === "none" || clickedButton === "" ? (
        <div className="Features mt-8 flex max-w-5xl flex-wrap justify-center gap-6 px-20">
          {landingPageText.features.individualFeatures.map(
            ({ colorScheme, title, addClasses }) => {
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
                  </div>
                );
              }
              return null;
            },
          )}

          {landingPageText.features.businessFeatures.map(
            ({ colorScheme, title, addClasses }) => {
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
                  </div>
                );
              }
              return null;
            },
          )}
        </div>
      ) : (
        <div className="TallFeaturesGroup mt-8 flex flex-row justify-center">
          <div className="TallFeaturesButtons flex max-w-5xl flex-col items-end justify-start gap-4">
            {category === "individual"
              ? landingPageText.features.individualFeatures.map(
                  ({ colorScheme, title, addClasses }) => (
                    <div key={`button-${title}`}>
                      <SiteButton
                        aria={title}
                        variant="filled"
                        size="large"
                        colorScheme={colorScheme as ButtonColorOption}
                        addClasses={addClasses}
                        onClick={testClick}
                        name={title}
                      >
                        {title}
                      </SiteButton>
                    </div>
                  ),
                )
              : landingPageText.features.businessFeatures.map(
                  ({ colorScheme, title, addClasses }) => (
                    <div key={`button-${title}`}>
                      <SiteButton
                        aria={title}
                        variant="filled"
                        size="large"
                        colorScheme={colorScheme as ButtonColorOption}
                        addClasses={addClasses}
                        onClick={testClick}
                        name={title}
                      >
                        {title}
                      </SiteButton>
                    </div>
                  ),
                )}
          </div>
          <div className="TallFeaturesDetails ml-10 mr-20 flex max-w-lg">
            {category === "individual"
              ? landingPageText.features.individualFeatures.map(
                  ({ title, colorScheme, details }) =>
                    clickedButton === title && (
                      <InfoBox
                        key={`info-${title}`}
                        variant="filled"
                        aria={title}
                        colorScheme={colorScheme as ButtonColorOption}
                        addClasses="text-sm max-w-5xl py-14 px-20 flex flex-col justify-center m-0 leading-6"
                      >
                        {Array.isArray(details) ? (
                          details.map((detail, index) => (
                            <p key={index} className="mb-4 text-left">
                              {detail.trim()}
                            </p>
                          ))
                        ) : (
                          <p className="text-left">
                            {(details as string).trim()}
                          </p>
                        )}
                      </InfoBox>
                    ),
                )
              : landingPageText.features.businessFeatures.map(
                  ({ title, colorScheme, details }) =>
                    clickedButton === title && (
                      <InfoBox
                        key={`info-${title}`}
                        variant="filled"
                        aria={title}
                        colorScheme={colorScheme as ButtonColorOption}
                        addClasses="text-sm max-w-5xl py-14 px-20 flex flex-col justify-center m-0 leading-6"
                      >
                        {Array.isArray(details) ? (
                          details.map((detail, index) => (
                            <p key={index} className="mb-4 text-left">
                              {detail.trim()}
                            </p>
                          ))
                        ) : (
                          <p className="text-left">
                            {(details as string).trim()}
                          </p>
                        )}
                      </InfoBox>
                    ),
                )}
          </div>
        </div>
      )}

      {featurePrompt()}
    </div>
  );
}
