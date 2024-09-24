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
import { motion } from "framer-motion";
import ButtonContainer from "@/components/buttonContainer";
import InfoModal from "@/components/modals/infoModal";

type Category = "individual" | "business";

export default function FeaturesSection() {
  const features = landingPageText.features;
  const [category, setCategory] = useState("individual" as Category);
  // I have the detail set to none with a differentiation between "" and "none" because
  //we've got the little note + arrow after the features section that I want to only exist before someone has clicked one of the detail buttons.
  const [detail, setDetail] = useState("none");
  const { showModal } = useModal();

  const motionContainer = {
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const motionItem = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        x: {
          type: "spring",
          duration: 0.8,
        },
        opacity: {
          duration: 0.5,
          ease: "easeInOut",
        },
      },
    },
  };

  const featuresButtonStyles = clsx(
    "flex max-w-[67rem]",
    detail === "" || detail === "none"
      ? "flex-wrap justify-center gap-6 sm:px-14 pt-4"
      : "flex-col  items-center sm:items-end justify-start gap-4",
  );

  function detailClick(e: any) {
    setDetail(e.target.name);
    // showModal(
    //   <InfoModal
    //     colorScheme={selectedFeature?.colorScheme}
    //     title={e.target.name}
    //     variant="filled"
    //   >
    //     <div>
    //       {selectedFeature?.details.map((detail, index) => (
    //         <p key={index} className="mb-4 text-left">
    //           {detail.trim()}
    //         </p>
    //       ))}
    //     </div>
    //   </InfoModal>,
    // );
  }

  function handleClick(buttonType: Category) {
    setCategory(buttonType);
    setDetail("");
  }

  const selectedFeature = features[category].find(
    (feature) => feature.title === detail,
  );

  return (
    <section className="FeaturesSection flex w-[95%] flex-col items-center justify-center p-4 sm:p-14">
      {/* Features Heading */}
      <div className="FeaturesHeading flex flex-col items-center justify-center gap-8 pb-8 sm:flex-row">
        <div className="FeaturesTitle mr-14 flex flex-col text-left">
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
          >
            for job-seekers
          </SiteButton>
        </div>
      </div>
      {/* Features */}
      <div
        className={`FeaturesContainer flex flex-col items-center self-center pt-4 align-middle ${detail === "" || detail === "none" ? "" : "sm:flex-row"}`}
      >
        {
          <>
            <div className={`FeatureButtons ${featuresButtonStyles}`}>
              {/* <motion.ul
              className={`FeatureButtons ${featuresButtonStyles}`}
              variants={motionContainer}
              whileInView={"show"}
              viewport={{ once: true }}
              initial="hidden"
            > */}
              {features[category].map(({ colorScheme, title }) => {
                return (
                  // <motion.li key={`button-${title}`} variants={motionItem}>
                  <SiteButton
                    aria={title}
                    variant="filled"
                    size="extraLarge"
                    colorScheme={colorScheme as ButtonColorOption}
                    onClick={detailClick}
                    name={title}
                    key={`button-${title}`}
                  >
                    {title}
                  </SiteButton>
                  // </motion.li>
                );
              })}
              {/* </motion.ul> */}
            </div>
            <div className="TallFeaturesDetails flex max-w-lg bg-cream p-8 pt-0">
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
      {/* //animate this to fade in after a bit of time */}
      {detail === "none" && (
        <div className="FeaturesPrompt mt-4 flex self-center pb-8 sm:mt-12 sm:-translate-x-[50%] sm:items-start">
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
