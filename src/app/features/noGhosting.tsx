import { useState, useEffect } from "react";
import InfoBox from "@/components/infoBox";
import SiteButton from "@/components/siteButton";
import SiteLabel from "@/components/siteLabel";
import Image from "next/image";
import { motion } from "framer-motion";
import MotionContainer from "@/components/motionContainer";

const MotionImage = motion(Image);

const NoGhosting = ({ ghostingRef }: any) => {
  const noGhostingInfo = [
    "Whether that be a custom message from the business, or our own notification letting you know pertinent updates, you'll never be left in the dark. You deserve it.",
  ];

  const [details, setDetails] = useState("why");

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
        addClasses="self-center flex flex-col z-0 items-center"
      >
        <div
          className="background absolute -mt-8 h-[95%] w-[80vw] self-center"
          style={{
            backgroundImage: `url("/BackgroundShapes11.svg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <h2 className="title mt-4 text-center text-[1.9rem] font-semibold">
          No More Ghosting{" "}
        </h2>
        <div className="Details mt-6 flex w-[100%] flex-col items-center gap-4 align-top">
          <SiteLabel
            variant="display"
            size="medium"
            aria="no ghosting"
            colorScheme="b3"
            textSize="large"
            width="large"
            addClasses="self-middle uppercase py-4"
          >
            {`Ghosting is rampant. We're here to mitigate it.`}
          </SiteLabel>
          <div className="Buttons my-0 mb-2 flex gap-4">
            <SiteButton
              colorScheme="f3"
              variant="hollow"
              aria="why"
              onClick={() => setDetails("why")}
              isSelected={details === "why"}
            >
              why it happens
            </SiteButton>
            <SiteButton
              colorScheme="b6"
              variant="hollow"
              aria="how"
              onClick={() => setDetails("how")}
              isSelected={details === "how"}
            >
              {`how we're fixing it`}
            </SiteButton>
          </div>

          <div className="DetailsAndFlower flex">
            {/* <MotionImage
              width={120}
              height={120}
              alt="no ghosting"
              src="/lime-flower.svg"
              // animate={{ rotate: 360 }}
              // transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="top-30 absolute left-10 hover:rotate-12"
            /> */}
            <InfoBox variant="hollow" aria="reasons" size="thin">
              {details === "why" && (
                <div className="WhyDetails">
                  <h2 className="Title font-mono italic">{`WHY GHOSTING HAPPENS:`}</h2>
                  <ul className="Details mb-4 ml-2 mt-8 flex list-disc flex-col gap-4 text-emerald">
                    {noGhostingDetails.map((detail: string, index: number) => {
                      return <li key={index}>{detail}</li>;
                    })}
                  </ul>
                </div>
              )}
              {details === "how" && (
                <div className="HowDetails">
                  <h2 className="Title font-mono italic">{`WHAT WE'RE DOING ABOUT IT:`}</h2>
                  <ul className="Details mb-4 ml-2 mt-8 flex list-disc flex-col gap-4 text-emerald">
                    {whatWeCanDo.map((detail: string, index: number) => {
                      return <li key={index}>{detail}</li>;
                    })}
                  </ul>
                </div>
              )}
            </InfoBox>
          </div>
        </div>
      </InfoBox>
    </div>
  );
};

export default NoGhosting;
