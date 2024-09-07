"useclient";

import SiteButton from "./siteButton";
import InfoBox from "./infoBox";
import { useState } from "react";
import { landingPageText } from "@/lib/landingPageText";

export default function FeaturesSection() {
  const [category, setCategory] = useState("individual");
  const [clickedButton, setClickedButton] = useState("");

  function testClick(e: any) {
    if (clickedButton === e.target.name) {
      setClickedButton("");
    } else setClickedButton(e.target.name);
  }

  const individualFeatureButtons =
    landingPageText.features.individualFeatures.map(
      ({
        colorScheme: color,
        title: title,
        addClasses: classes,
        details: details,
      }) => {
        if (category === "individual") {
          return (
            <SiteButton
              aria={title}
              variant="filled"
              size="large"
              colorScheme="f1"
              addClasses={classes}
              onClick={testClick}
              name={title}
            >
              {title}
            </SiteButton>
          );
        }
      },
    );

  const individualFeatureDetails =
    landingPageText.features.individualFeatures.map(
      ({
        colorScheme: color,
        title: title,
        addClasses: classes,
        details: details,
      }) => {
        if (clickedButton === title) {
          return (
            <InfoBox
              variant="filled"
              aria={title}
              colorScheme="b1"
              addClasses="text-xs max-w-4xl"
            >
              {details}
            </InfoBox>
          );
        }
      },
    );

  const businessFeatureButtons = landingPageText.features.businessFeatures.map(
    ({
      colorScheme: color,
      title: title,
      addClasses: classes,
      details: details,
    }) => {
      if (category === "business") {
        return (
          <SiteButton
            aria={title}
            variant="filled"
            size="large"
            colorScheme="f1"
            addClasses={classes}
            onClick={testClick}
            name={title}
          >
            {title}
          </SiteButton>
        );
      }
    },
  );

  const businessFeatureDetails = landingPageText.features.businessFeatures.map(
    ({
      colorScheme: color,
      title: title,
      addClasses: classes,
      details: details,
    }) => {
      if (clickedButton === title) {
        return (
          <InfoBox
            variant="filled"
            aria={title}
            colorScheme="b1"
            addClasses="text-xs max-w-4xl"
          >
            {details}
          </InfoBox>
        );
      }
    },
  );

  function handleBusinessClick() {
    setCategory("business");
  }

  function handleIndividualClick() {
    setCategory("individual");
  }

  return (
    <div className="FeaturesSection mb-60 mt-40 flex flex-col">
      <div className="FeaturesHeading flex">
        <div className="FeaturesTitle mr-14 flex flex-col text-left">
          <h1 className="FeaturesTitle">our features:</h1>
          <p className="PromisesSubtitle mb-5 font-semibold italic">
            choose category:
          </p>
        </div>
        <div className="ButtonContainer mb-8 mt-5 flex gap-8">
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
      <div className="Features flex max-w-5xl flex-wrap justify-center gap-4 px-20">
        {individualFeatureButtons}
        {individualFeatureDetails}

        {businessFeatureButtons}
        {businessFeatureDetails}
      </div>
    </div>
  );
}
