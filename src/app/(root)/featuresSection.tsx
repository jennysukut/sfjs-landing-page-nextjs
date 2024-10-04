"useclient";

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import { useModal } from "@/contexts/ModalContext";
import { motion } from "framer-motion";

import SiteButton from "@/components/siteButton";
import InfoBox from "@/components/infoBox";
import SignupOptionsModal from "@/components/modals/signupModals/signupOptionsModal";
import ButtonContainer from "@/components/buttonContainer";
import DropDownButton from "@/components/dropDownButton";
import HelpUsModal from "@/components/modals/helpUsModal";

import { landingPageText } from "@/lib/siteCopy/landingPageText";
import { ButtonColorOption } from "@/lib/stylingData/buttonColors";

type Category = "individual" | "business";

export default function FeaturesSection() {
  const features = landingPageText.features;
  const [category, setCategory] = useState("individual" as Category);
  // I have the detail set to none with a differentiation between "" and "none" because
  //we've got the little note + arrow after the features section that I want to only exist before someone has clicked one of the detail buttons.
  const [detail, setDetail] = useState("none");
  const [mobileDetail, setMobileDetail] = useState("none");
  const { showModal } = useModal();

  const fadeInItem = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        opacity: {
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        },
      },
    },
  };

  const featuresButtonStyles = clsx(
    "hidden md:flex max-w-[80rem] md:max-w-[60rem]",
    detail === "" || detail === "none"
      ? "flex-wrap justify-center gap-6 sm:px-14 pt-4"
      : "flex-col  items-center sm:items-end justify-start gap-4",
  );

  function detailClick(name: string) {
    if (detail === name) {
      setDetail("");
    } else {
      setDetail(name);
    }
  }

  function mobileDetailClick(name: string) {
    if (mobileDetail === name) {
      setMobileDetail("");
    } else {
      setMobileDetail(name);
    }
  }

  function handleClick(buttonType: Category) {
    setCategory(buttonType);
    setDetail("");
  }

  const selectedFeature = features[category].find(
    (feature) => feature.title === detail,
  );

  return (
    <section className="FeaturesSection flex max-w-[95vw] flex-col items-center justify-center p-4 md:p-14">
      {/* Features Heading */}
      <div className="FeaturesHeading flex max-w-[90vw] flex-col items-start justify-center gap-8 pb-8 xl:flex-row">
        <div className="FeaturesTitle items-left mr-14 flex flex-col justify-start text-left">
          <h1 className="FeaturesTitle">our features:</h1>
          <p className="PromisesSubtitle font-semibold italic">
            choose category:
          </p>
        </div>
        <div className="ButtonContainer flex flex-col items-center gap-4 sm:gap-10 md:flex-row">
          <SiteButton
            aria="features for businesses"
            size="extraLarge"
            variant="filled"
            colorScheme="b3"
            onClick={() => handleClick("business")}
            addClasses="sm:w-[20rem] text-base"
          >
            for businesses
          </SiteButton>
          <SiteButton
            aria="features for job seekers"
            size="extraLarge"
            variant="filled"
            colorScheme="c4"
            onClick={() => handleClick("individual")}
            addClasses="sm:w-[20rem] text-base"
          >
            for job-seekers
          </SiteButton>
        </div>
      </div>
      {/* Features */}
      <div
        className={`FeaturesContainer items-top flex flex-col self-center pt-4 align-middle ${detail === "" || detail === "none" ? "" : "sm:flex-row"}`}
      >
        {/* Mobile Features */}
        <div
          className={`MobileFeatureButtons flex flex-col items-center gap-6 md:hidden`}
        >
          {features[category].map(({ colorScheme, title, details }) => {
            return (
              <DropDownButton
                aria={title}
                variant="filled"
                colorScheme={colorScheme as ButtonColorOption}
                onClick={() => mobileDetailClick(title)}
                name={title}
                key={`button-${title}`}
                details={details}
                isSelected={mobileDetail === title}
              >
                {title}
              </DropDownButton>
            );
          })}
        </div>
        {
          <>
            <div className={`FeatureButtons ${featuresButtonStyles}`}>
              {features[category].map(({ colorScheme, title }) => {
                return (
                  <SiteButton
                    aria={title}
                    variant="filled"
                    size="large"
                    colorScheme={colorScheme as ButtonColorOption}
                    onClick={() => detailClick(title)}
                    name={title}
                    key={`button-${title}`}
                  >
                    {title}
                  </SiteButton>
                );
              })}
            </div>
            <div className="TallFeaturesDetails hidden max-w-lg bg-cream pt-0 md:flex lg:px-8">
              {selectedFeature && (
                <InfoBox
                  key={`info-${selectedFeature.title}`}
                  variant="filled"
                  aria={selectedFeature.title}
                  colorScheme={selectedFeature.colorScheme as ButtonColorOption}
                  addClasses="text-sm max-w-[64rem] py-16 px-20 ml-8 flex flex-col justify-center leading-6"
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
        <motion.div
          initial="hidden"
          whileInView={"show"}
          variants={fadeInItem}
          className={`FeaturesPrompt mt-12 flex self-center pb-8 sm:-translate-x-[50%] sm:items-start ${mobileDetail !== "none" ? "hidden" : "last:"}`}
        >
          <p className="FeaturesPrompt max-w-44 text-center text-xs text-jade">
            {landingPageText.arrowprompts.feature}
          </p>
          <Image
            className="w-[90px] max-w-14 translate-y-[-20px] -rotate-12 sm:max-w-full sm:rotate-0"
            src="/GreenArrow.svg"
            alt="arrow"
            width={146}
            height={86}
          ></Image>
        </motion.div>
      )}
      <ButtonContainer addClasses="self-end items-end mr-4 flex-col mt-8 sm:mr-0 sm:flex-row ">
        <SiteButton
          aria="sign up"
          size="large"
          variant="filled"
          colorScheme="c5"
          onClick={() => showModal(<SignupOptionsModal />)}
        >
          sign me up!
        </SiteButton>
        <SiteButton
          aria="support us"
          size="large"
          variant="filled"
          colorScheme="b4"
          onClick={() => showModal(<HelpUsModal />)}
        >
          show your support{" "}
        </SiteButton>
      </ButtonContainer>
    </section>
  );
}
