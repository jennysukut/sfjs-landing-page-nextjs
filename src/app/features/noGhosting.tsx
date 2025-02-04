import { useState, useEffect } from "react";
import InfoBox from "@/components/infoBox";
import SiteButton from "@/components/siteButton";
import SiteLabel from "@/components/siteLabel";
import Image from "next/image";
import { motion } from "framer-motion";
import MotionContainer from "@/components/motionContainer";

const NoGhosting = () => {
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

  const activeChecks = [
    "Every job listing *must* be active.",
    "If applications aren't being reviewed / stages aren't progressing, the job post is renewed at double, then triple the price, and finally removed from our system.",
    "Businesses posting non-active jobs will have that history available on their profile.",
    "We believe this disincentive for ghost jobs & evergreen listings will make ghost jobs a thing of the past!",
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

  return (
    <div className="HonestActiveJobBoardContainer mt-24 flex flex-col">
      <SiteLabel
        variant="display"
        aria="no ghost jobs"
        size="medium"
        textSize="medium"
        colorScheme="d4"
        addClasses="-rotate-12 -mb-10 -mt-20 -ml-10 self-start z-50"
      >
        more treating people like people
      </SiteLabel>
      <InfoBox
        aria="job board info"
        variant="hollow"
        size="extraLarge"
        width="extraWide"
        addClasses="self-center flex flex-col"
      >
        <h2 className="title mt-4 text-center text-[1.9rem] font-semibold">
          No More Ghosting{" "}
        </h2>
        <div className="Details flex w-[100%] justify-between align-top">
          {/* left column */}
          <div className="LeftColumn flex flex-col align-top">
            {/* <div className="Title flex gap-4">
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
              addClasses="Details mt-2 mb-6 ml-6 flex list-disc flex-col gap-2 text-[1.1rem] leading-6"
            >
              {jobPostIncludes.map((detail: string, index: number) => {
                return <li key={index}>{detail}</li>;
              })}
            </MotionContainer>
            <InfoBox
              variant="filled"
              colorScheme="b4"
              size="thin"
              aria="transparencyIntentionality"
              addClasses="max-w-[30vw] my-6 self-center text-center text-[1.5rem] leading-10"
            >
              <p className="Statement">
                it's time for transparency & intentionality
              </p>
            </InfoBox> */}
          </div>

          {/* middle column */}
          {/* <Image
            width={100}
            height={100}
            alt="arrow"
            src="/swirl-arrow.svg"
            className="z-50 mr-4 self-start pt-4"
          ></Image> */}

          {/* right column */}
          {/* <div className="RightColumn relative flex flex-col">
            <Image
              width={500}
              height={300}
              alt="JobBoard"
              src="/jobBoardSS.png"
              className={`my-10 self-end rounded-3xl border-2 border-jade align-middle drop-shadow-jade`}
            ></Image>
            <div className="OtherDetails -ml-24 mt-4 flex max-w-[40vw] flex-col flex-wrap">
              <SiteLabel
                size="medium"
                textSize="large"
                variant="display"
                colorScheme="c4"
                aria="active listing"
                addClasses="w-full py-4"
              >
                ONLY ACTIVE JOB POSTS HERE
              </SiteLabel>
              <MotionContainer
                direction="x"
                addClasses="Details mt-0 mb-6 ml-6 flex flex-col gap-3 text-olive leading-6"
              >
                {activeChecks.map((detail: string, index: number) => {
                  return <li key={index}>{detail}</li>;
                })}
              </MotionContainer>
            </div> */}
          {/* </div> */}
        </div>
      </InfoBox>
    </div>
  );
};

export default NoGhosting;
