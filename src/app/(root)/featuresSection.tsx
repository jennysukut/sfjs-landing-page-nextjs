"useclient";

import SiteButton from "@/components/siteButton";
import InfoBox from "@/components/infoBox";
import { useState, useEffect } from "react";
import { landingPageText } from "@/lib/siteCopy/landingPageText";
import Image from "next/image";
import { ButtonColorOption } from "@/lib/stylingData/buttonColors";
import clsx from "clsx";
import Link from "next/link";
type Category = "individual" | "business";

export default function FeaturesSection() {
  const features = landingPageText.features;
  const [category, setCategory] = useState("individual" as Category);
  const [detail, setDetail] = useState("none");
  const [isClient, setIsClient] = useState(false);

  const featuresButtonStyles = clsx(
    "flex max-w-5xl",
    detail === "" || detail === "none"
      ? "flex-wrap justify-center gap-6 px-20 pt-4"
      : "flex-col items-end justify-start gap-4",
  );

  function detailClick(e: any) {
    setDetail(e.target.name);
  }

  function getDetail() {}

  function handleClick(buttonType: Category) {
    setCategory(buttonType);
    setDetail("");
  }

  const selectedFeature = features[category].find(
    (feature) => feature.title === detail,
  );

  return (
    <section className="FeaturesSection flex w-full flex-col items-center justify-center p-20">
      {/* Features Heading */}
      <div className="FeaturesHeading flex w-[95%] items-center justify-center pb-8">
        <div className="FeaturesTitle mr-14 flex flex-col text-left">
          <h1 className="FeaturesTitle">our features:</h1>
          <p className="PromisesSubtitle font-semibold italic">
            choose category:
          </p>
        </div>
        <div className="ButtonContainer flex gap-10">
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
      </div>

      {/* Features */}
      <div className="FeaturesContainer flex flex-row items-start gap-10 self-center pt-4 align-middle">
        {
          <>
            <div className={`FeatureButtons ${featuresButtonStyles}`}>
              {features[category].map(({ colorScheme, title }) => {
                return (
                  <div key={`button-${title}`}>
                    <SiteButton
                      aria={title}
                      variant="filled"
                      size="large"
                      colorScheme={colorScheme as ButtonColorOption}
                      onClick={detailClick}
                      name={title}
                      key={`button-${title}`}
                    >
                      {title}
                    </SiteButton>
                  </div>
                );
              })}
            </div>
            <div className="TallFeaturesDetails flex max-w-lg">
              {selectedFeature && (
                <InfoBox
                  key={`info-${selectedFeature.title}`}
                  variant="filled"
                  aria={selectedFeature.title}
                  colorScheme={selectedFeature.colorScheme as ButtonColorOption}
                  addClasses="text-sm max-w-5xl py-20 px-20 flex flex-col justify-center leading-6"
                >
                  {selectedFeature.details.map((detail, index) => (
                    <p key={index} className="mb-4 text-left">
                      {detail.trim()}
                    </p>
                  ))}
                </InfoBox>
              )}
            </div>
          </>
        }
      </div>

      {detail === "none" && (
        <div className="FeaturesPrompt mt-12 flex -translate-x-[50%] items-start pb-8">
          <p className="FeaturesPrompt max-w-44 text-center text-xs text-jade">
            {landingPageText.arrowprompts.feature}
          </p>
          <Image
            className="translate-y-[-20px]"
            src="/GreenArrow.svg"
            alt="arrow"
            width={100}
            height={75}
          ></Image>
        </div>
      )}

      <div className="ButtonContainer flex gap-8 self-end pr-20 pt-12">
        <SiteButton
          aria="sign up"
          size="large"
          variant="filled"
          colorScheme="c5"
        >
          get in early
        </SiteButton>
        <Link href={"/support"}>
          <SiteButton
            aria="support us"
            size="large"
            variant="filled"
            colorScheme="b2"
          >
            show your support{" "}
          </SiteButton>
        </Link>
      </div>
    </section>
  );
}
