"useclient";

import SiteButton from "@/components/siteButton";
import InfoBox from "@/components/infoBox";
import { useState } from "react";
import { landingPageText } from "@/lib/siteCopy/landingPageText";
import Image from "next/image";
import { ButtonColorOption } from "@/lib/stylingData/buttonColors";
import clsx from "clsx";
import Link from "next/link";
import { useModal } from "@/contexts/ModalContext";
import SignupOptionsModal from "@/components/modals/signupModals/signupOptionsModal";

type Category = "individual" | "business";

export default function FeaturesSection() {
  const features = landingPageText.features;
  const [category, setCategory] = useState("individual" as Category);
  // I have the detail set to none with a differentiation between "" and "none" because
  //we've got the little note + arrow after the features section that I want to only exist before someone has clicked one of the detail buttons.
  const [detail, setDetail] = useState("none");
  const { showModal } = useModal();

  const featuresButtonStyles = clsx(
    "flex max-w-5xl",
    detail === "" || detail === "none"
      ? "flex-wrap justify-center gap-6 px-20 pt-4"
      : "flex-col items-end justify-start gap-4",
  );

  function detailClick(e: any) {
    setDetail(e.target.name);
  }

  function handleClick(buttonType: Category) {
    setCategory(buttonType);
    setDetail("");
  }

  const selectedFeature = features[category].find(
    (feature) => feature.title === detail,
  );

  return (
    <section className="FeaturesSection flex w-[90%] flex-col items-center justify-center p-20">
      {/* Features Heading */}
      <div className="FeaturesHeading flex items-center justify-center pb-8">
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
      <div className="FeaturesContainer flex flex-row items-start self-center pt-4 align-middle">
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
                  addClasses="text-sm max-w-5xl py-16 px-20 ml-8 flex flex-col justify-center leading-6"
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
            className="w-[90px] translate-y-[-20px]"
            src="/GreenArrow.svg"
            alt="arrow"
            width={146}
            height={86}
          ></Image>
        </div>
      )}

      <div className="ButtonContainer flex gap-8 self-end pr-20 pt-12">
        <SiteButton
          aria="sign up"
          size="large"
          variant="filled"
          colorScheme="c5"
          onClick={() => showModal(<SignupOptionsModal />)}
        >
          sign me up!
        </SiteButton>
        <Link href={"/support"}>
          <SiteButton
            aria="support us"
            size="large"
            variant="filled"
            colorScheme="b4"
          >
            show your support{" "}
          </SiteButton>
        </Link>
      </div>
    </section>
  );
}
