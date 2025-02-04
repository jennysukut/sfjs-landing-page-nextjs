import { useState, useEffect } from "react";
import InfoBox from "@/components/infoBox";
import SiteButton from "@/components/siteButton";
import SiteLabel from "@/components/siteLabel";
import Image from "next/image";
import { motion } from "framer-motion";
import MotionContainer from "@/components/motionContainer";
import { ButtonColorOption } from "@/lib/stylingData/buttonColors";
const HonestActiveJobBoard = () => {
  const jobPostIncludes = [
    "pay details: hourly or annual amount",
    "location: remote, onsite, or hybrid",
    "number of current applications",
    "position type: full time or part time",
    "non-negotiable skills needed",
    "expected experience level",
    "interview process stages and details",
    "the job's responsibilities and perks",
  ];

  const jobPostFeatures = [
    { detail: "Pay Details", colorScheme: "b4" },
    { detail: "Location Type", colorScheme: "f5" },
    { detail: "Number of Applications", colorScheme: "f1" },
    { detail: "Hybrid Details", colorScheme: "d2" },

    { detail: "Position Type", colorScheme: "c4" },
    { detail: "Non-Negotiable Skills", colorScheme: "d1" },
    { detail: "Minimum Experience Levels", colorScheme: "b6" },
    { detail: "Perks", colorScheme: "f3" },

    { detail: "Full Interview Process", colorScheme: "c3" },
    { detail: "Responsibilities", colorScheme: "b3" },
    { detail: "Ideal Candidate Details", colorScheme: "d1" },
    { detail: "& More...", colorScheme: "e6" },
  ];

  const activeChecks = [
    "Every job listing *must* be active.",
    "If applications aren't being reviewed, the job post is renewed at double, then triple the price, and finally removed from our system.",
    "Businesses posting non-active jobs will have that history available on their profile.",
    "We believe this disincentive for ghost jobs & evergreen listings will put ghost jobs back in the grave.",
  ];

  const swirl = {
    start: { rotate: 360 },
    move: {
      rotate: 0,
      transition: {
        rotate: {
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0,
        },
      },
    },
  };

  const motionItem = {
    start: { opacity: 0, rotate: 12 },
    move: {
      rotate: [6, -2, 0],
      opacity: 1,
      transition: {
        opacity: {
          duration: 0.74,
          ease: "easeInOut",
          delay: 1,
        },
        rotate: {
          type: "tween",
          duration: 3,
          repeat: 0,
          ease: "easeInOut",
          delay: 1,
        },
      },
    },
  };

  // this isn't swirling how I'd like - make sure rotate -360 is an option
  const revSwirl = {
    start: { rotate: -360 },
    move: {
      rotate: 0,
      transition: {
        rotate: {
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0,
        },
      },
    },
  };

  return (
    <div className="HonestActiveJobBoardContainer mt-24 flex flex-col">
      <motion.div
        initial="start"
        variants={motionItem}
        viewport={{ once: true }}
        whileInView="move"
        className="z-50 -mb-10 -mr-10 -mt-20 self-end"
      >
        <SiteLabel
          variant="display"
          aria="no ghost jobs"
          size="medium"
          textSize="medium"
          colorScheme="b3"
          addClasses="rotate-12"
          width="large"
        >
          no ghost jobs or evergreen listings
        </SiteLabel>
      </motion.div>
      <InfoBox
        aria="job board info"
        variant="hollow"
        size="extraLarge"
        width="extraWide"
        addClasses="self-center flex flex-col"
      >
        <h2 className="title mt-4 text-center text-[1.9rem] font-semibold">
          Our Honest + Active Job Board
        </h2>
        <div className="Details flex w-[100%] justify-between align-top">
          {/* left column */}
          <div className="LeftColumn flex flex-col align-top">
            <div className="Title flex gap-4">
              <motion.div
                initial="start"
                variants={swirl}
                viewport={{ once: true }}
                whileInView="move"
                className="align-middle"
              >
                <Image
                  width={100}
                  height={100}
                  alt="two-way application manager"
                  src="/peach-starburst.svg"
                  className={`drop-shadow-smLime transition-transform duration-1000`}
                ></Image>
              </motion.div>
              <h2 className="PostIncludesTitle mt-8 max-w-[50%] align-middle text-2xl font-bold italic text-peach">
                EACH POST INCLUDES:
              </h2>
            </div>

            <MotionContainer
              direction="x"
              addClasses="Details mt-4 max-w-[35vw] justify-start gap-2 mb-6 ml-6 flex flex-wrap "
            >
              {jobPostFeatures.map((feature, index) => {
                return (
                  <SiteLabel
                    variant="display"
                    aria={feature.detail}
                    key={index}
                    addClasses="px-6"
                    size="medium"
                    colorScheme={feature.colorScheme as ButtonColorOption}
                  >
                    {feature.detail}
                  </SiteLabel>
                );
              })}
            </MotionContainer>
          </div>

          {/* middle column */}
          <Image
            width={100}
            height={100}
            alt="arrow"
            src="/swirl-arrow.svg"
            className="z-50 mr-4 self-start pt-4"
          ></Image>

          {/* right column */}
          <div className="RightColumn relative flex flex-col">
            <Image
              width={500}
              height={300}
              alt="JobBoard"
              src="/jobBoardSS.png"
              className={`my-10 self-end rounded-3xl border-2 border-jade align-middle drop-shadow-jade`}
            ></Image>
            <div className="OtherDetails -ml-14 mb-4 mr-20 mt-4 flex max-w-[40vw] flex-col flex-wrap items-end gap-4">
              <div className="StarAndTitle flex gap-4 align-text-bottom">
                <h2 className="ActiveJobs text-right text-[1.6rem] leading-9 text-olive">
                  ONLY ACTIVE JOBS ALLOWED HERE
                </h2>
                <motion.div
                  initial="start"
                  variants={revSwirl}
                  viewport={{ once: true }}
                  whileInView="move"
                >
                  <Image
                    width={100}
                    height={100}
                    alt="star"
                    src="/ams-star.svg"
                    className="z-50"
                  ></Image>
                </motion.div>
              </div>

              <SiteButton
                variant="hollow"
                aria="active listing details"
                colorScheme="b4"
                addClasses="px-8 mr-4"
              >
                how do we make sure listings are active?
              </SiteButton>
            </div>
          </div>
        </div>
      </InfoBox>
    </div>
  );
};

export default HonestActiveJobBoard;
