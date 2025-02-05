import { useState, useEffect } from "react";
import InfoBox from "@/components/infoBox";
import SiteButton from "@/components/siteButton";
import SiteLabel from "@/components/siteLabel";
import Image from "next/image";
import { motion } from "framer-motion";
import MotionContainer from "@/components/motionContainer";
import { ButtonColorOption } from "@/lib/stylingData/buttonColors";
import { useModal } from "@/contexts/ModalContext";
import ActivePostCheckModal from "@/components/modals/activePostCheckModal";

const TwoWayAms = () => {
  const { showModal } = useModal();
  const [clickedButton, setClickedButton] = useState("job seekers");
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
        className="z-10 -mb-10 -ml-10 -mt-20 self-start"
      >
        <SiteLabel
          variant="display"
          aria="no ghost jobs"
          size="medium"
          textSize="medium"
          colorScheme="c3"
          addClasses="-rotate-12"
          width="large"
        >
          keep track of everything all in one place
        </SiteLabel>
      </motion.div>
      <InfoBox
        aria="job board info"
        variant="hollow"
        size="extraLarge"
        width="extraWide"
        addClasses="self-center flex flex-col"
      >
        <h2 className="title mb-6 mt-4 text-center text-[1.9rem] font-semibold">
          Two-Way Application Management
        </h2>
        <div className="ButtonOptions mb-6 flex justify-center gap-6">
          <SiteButton
            variant="hollow"
            colorScheme="b2"
            size="medium"
            aria="test"
            onClick={() => setClickedButton("job seekers")}
            isSelected={clickedButton === "job seekers"}
          >
            for job seekers
          </SiteButton>
          <SiteButton
            variant="hollow"
            colorScheme="c1"
            size="medium"
            aria="test"
            onClick={() => setClickedButton("businesses")}
            isSelected={clickedButton === "businesses"}
          >
            for businesses
          </SiteButton>
        </div>
        <div className="Details flex w-[100%] justify-center gap-6 align-top">
          {/* left column */}
          <div className="LeftColumn flex flex-col align-top"></div>

          {/* middle column */}
          {/* <Image
            width={100}
            height={100}
            alt="arrow"
            src="/swirl-arrow.svg"
            className="z-50 mr-4 self-start pt-4"
          ></Image> */}

          {/* right column */}
          <div className="RightColumn relative flex flex-col">
            {/* <Image
              width={500}
              height={300}
              alt="JobBoard"
              src="/jobBoardSS.png"
              className={`my-10 self-end rounded-3xl border-2 border-jade align-middle drop-shadow-jade`}
            ></Image> */}
            {clickedButton === "job seekers" && (
              <video
                src="/ams-video.mp4"
                width={500}
                height={300}
                autoPlay
                className={`rounded-3xl border-2 border-jade align-middle drop-shadow-jade`}
              />
            )}
            {clickedButton === "businesses" && (
              <video
                src="/ams-video.mp4"
                width={500}
                height={300}
                autoPlay
                className={`rounded-3xl border-2 border-jade align-middle drop-shadow-jade`}
              />
            )}
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

export default TwoWayAms;
