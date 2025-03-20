import { useState, useEffect, useRef } from "react";
import InfoBox from "@/components/infoBox";
import SiteButton from "@/components/siteButton";
import SiteLabel from "@/components/siteLabel";
import Image from "next/image";
import { motion } from "framer-motion";
import MotionContainer from "@/components/motionContainer";
import { ButtonColorOption } from "@/lib/stylingData/buttonColors";
import { useModal } from "@/contexts/ModalContext";
import ActivePostCheckModal from "@/components/modals/activePostCheckModal";

const HonestActiveJobBoard = () => {
  const { showModal } = useModal();
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

  const videoRef = useRef<HTMLVideoElement | null>(null); // Create a ref for the video

  useEffect(() => {
    if (videoRef.current) {
      const timer = setTimeout(() => {
        videoRef.current?.play(); // Play the video after the delay
      }, 4500);

      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, []);

  return (
    <div className="HonestActiveJobBoardContainer mt-24 flex flex-col">
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
        <div className="Details flex w-[100%]">
          {/* left column */}
          <div className="LeftColumn flex flex-col align-middle">
            <div className="Title flex gap-4">
              {/* <motion.div
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
              </motion.div> */}
              {/* <h2 className="PostIncludesTitle ml-8 mt-8 align-middle text-2xl font-bold italic text-peach">
                EACH POST INCLUDES:
              </h2> */}
              <SiteLabel
                variant="display"
                size="medium"
                aria="no ghosting"
                colorScheme="b3"
                textSize="large"
                width="large"
                addClasses="self-middle uppercase py-4 mt-14 ml-4"
              >
                Each Post Includes:{" "}
              </SiteLabel>
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

          {/* right column */}
          <div className="RightColumn relative mt-4 flex flex-col">
            <video
              src="/job-board-video.mp4"
              width={500}
              height={300}
              autoPlay
              ref={videoRef}
              loop
              muted
              className={`my-10 rounded-3xl border-2 border-jade align-middle drop-shadow-jade`}
            />
            <div className="OtherDetails flex max-w-[40vw] flex-col flex-wrap items-end gap-4">
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
                onClick={() => showModal(<ActivePostCheckModal />)}
              >
                how do we make sure all listings are active?
              </SiteButton>
            </div>
          </div>
        </div>
      </InfoBox>
    </div>
  );
};

export default HonestActiveJobBoard;
