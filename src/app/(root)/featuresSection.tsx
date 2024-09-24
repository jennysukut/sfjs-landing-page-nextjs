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
    "hidden lg:flex max-w-[80rem] md:max-w-[60rem]",
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
    <section className="FeaturesSection flex flex-col items-center justify-center p-4 md:w-[95%] md:p-14">
      {/* Features Heading */}
      <div className="FeaturesHeading flex flex-col items-center justify-center gap-8 pb-8 lg:flex-row">
        <div className="FeaturesTitle items-left mr-14 flex flex-col text-left sm:max-lg:mr-64">
          <h1 className="FeaturesTitle">our features:</h1>
          <p className="PromisesSubtitle font-semibold italic">
            choose category:
          </p>
        </div>
        <div className="ButtonContainer flex flex-col items-center gap-4 sm:flex-row sm:gap-10">
          <SiteButton
            aria="features for businesses"
            size="extraLarge"
            variant="filled"
            colorScheme="b3"
            padding="extra"
            onClick={() => handleClick("business")}
            addClasses="w-[20rem] text-[1rem]"
          >
            for businesses
          </SiteButton>
          <SiteButton
            aria="features for job seekers"
            size="extraLarge"
            variant="filled"
            colorScheme="c4"
            padding="extra"
            onClick={() => handleClick("individual")}
            addClasses="w-[20rem] text-[1rem]"
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
          className={`MobileFeatureButtons flex flex-col items-center gap-6 lg:hidden`}
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
            <div className="TallFeaturesDetails hidden max-w-lg bg-cream p-8 pt-0 lg:flex">
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
            className="w-[90px] translate-y-[-20px]"
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
      </ButtonContainer>
    </section>
  );
}
