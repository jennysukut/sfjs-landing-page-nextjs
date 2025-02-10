import { useState, useEffect } from "react";
import InfoBox from "@/components/infoBox";
import SiteButton from "@/components/siteButton";
import SiteLabel from "@/components/siteLabel";
import Image from "next/image";
import { motion } from "framer-motion";
import MotionContainer from "@/components/motionContainer";

const MotionImage = motion(Image);

const NoGhosting = ({ ghostingRef }: any) => {
  const noGhostingDetails = [
    "Simply put, there are too many applications and not enough time to respond to them all.",
    "The use of ATS systems and their AI makes the resume review process impersonal, and facilitates less human interaction in the hiring process overall.",
    "There's no real incentive to for hiring staff or applicants to respond to eachother.",
    "We've forgotten that hiring is a human process that takes place between people who deserve thoughtful and honest communication, from both sides.",
  ];

  const whatWeCanDo = [
    "Create transparency and accountability for job-seekers and hiring staff to communicate with eachother.",
    "Display ratings of businesses and applicants responsiveness.",
    "Focus on *connecting people* in the process, so they can communicate as kind, intentional humans.",
    "Offer response options to hiring staff & make job listings unable to be closed until each applicant gets a response.",
  ];

  const noGhostingInfo = [
    "Whether that be a custom message from the business, or our own notification letting you know pertinent updates, you'll never be left in the dark. You deserve it.",
  ];

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

  return (
    <div ref={ghostingRef} className="NoGhostingContainer mt-24 flex flex-col">
      <motion.div
        initial="start"
        variants={motionItem}
        viewport={{ once: true }}
        whileInView="move"
        className="z-10 -mb-10 -mr-10 -mt-20 self-end"
      >
        <SiteLabel
          variant="display"
          aria="no ghost jobs"
          size="medium"
          textSize="medium"
          colorScheme="c5"
          width="large"
          addClasses="rotate-12"
        >
          more treating people like humans
        </SiteLabel>
      </motion.div>
      <InfoBox
        aria="job board info"
        variant="hollow"
        size="extraLarge"
        width="extraWide"
        addClasses="self-center flex flex-col z-0"
      >
        <h2 className="title mt-4 text-center text-[1.9rem] font-semibold">
          No More Ghosting{" "}
        </h2>
        <div className="Details mt-6 flex w-[100%] flex-col justify-between gap-4 align-top">
          {/* left column */}
          <div className="LeftColumn flex items-center justify-center gap-4">
            <SiteLabel
              variant="display"
              size="medium"
              aria="no ghosting"
              colorScheme="b3"
              textSize="large"
              width="large"
              addClasses="self-middle uppercase py-4"
            >
              We guarantee a response for each and every application!
              {/* {`Our Non-Negotiable Is Thoughtful Communication`} */}
            </SiteLabel>
          </div>

          <MotionImage
            width={120}
            height={120}
            alt="no ghosting"
            src="/lime-flower.svg"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="hover:rotate-12"
          />

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
