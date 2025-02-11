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
import { idealButtonPattern } from "@/lib/stylingData/idealButtonPattern";

const TwoWayAms = ({ amsRef }: any) => {
  const { showModal } = useModal();
  const [clickedButton, setClickedButton] = useState("job seekers");
  const jobSeekersDetails = [
    "track every application you've submitted",
    "get real-time app status updates",
    "communicate via built-in messaging system",
    "schedule and track your interviews",
    "keep notes about your applications",
  ];

  const businessDetails = [
    "keeps track of all your job listings",
    "easily review and manage applications",
    "communicate and schedule interviews",
    "keep your applicants up-to-date",
    "move through the hiring process easily",
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

  const videoRef = useRef<HTMLVideoElement | null>(null); // Create a ref for the video

  useEffect(() => {
    if (videoRef.current) {
      const timer = setTimeout(() => {
        videoRef.current?.play(); // Play the video after the delay
      }, 5000);

      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, []);

  return (
    <div
      ref={amsRef}
      className="HonestActiveJobBoardContainer mt-24 flex flex-col"
    >
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
            colorScheme="b3"
            size="medium"
            aria="test"
            addClasses="w-[25rem]"
            onClick={() => setClickedButton("job seekers")}
            isSelected={clickedButton === "job seekers"}
          >
            for job seekers
          </SiteButton>
          <SiteButton
            variant="hollow"
            colorScheme="d3"
            size="medium"
            aria="test"
            addClasses="w-[25rem]"
            onClick={() => setClickedButton("businesses")}
            isSelected={clickedButton === "businesses"}
          >
            for businesses
          </SiteButton>
        </div>
        <div className="Details flex w-[100%] justify-center gap-6 align-top">
          {/* left column */}
          <div className="LeftColumn mt-4 flex flex-col gap-6 align-top">
            {clickedButton === "job seekers" && (
              <video
                src="/fellow-ams-video.mp4"
                width={500}
                height={300}
                autoPlay
                // ref={videoRef}
                loop
                className={`rounded-3xl border-2 border-jade align-middle drop-shadow-jade`}
              />
            )}
            {clickedButton === "businesses" && (
              <video
                src="/BusinessAMSSophiaVideo.mp4"
                width={500}
                height={300}
                autoPlay
                loop
                className={`rounded-3xl border-2 border-jade align-middle drop-shadow-jade`}
              />
            )}
            <p className="Comment ml-8 font-medium italic text-olive">
              {`it's like an ATS, but so much better...`}
            </p>
          </div>

          {/* right column */}
          <div className="RightColumn flex flex-col text-center">
            {clickedButton === "job seekers" && (
              <MotionContainer
                direction="x"
                addClasses="Details mt-4 gap-2 mb-6 flex flex-col"
              >
                {jobSeekersDetails.map((detail, index) => {
                  return (
                    <SiteLabel
                      variant="display"
                      aria={detail}
                      key={index}
                      addClasses="px-6"
                      size="medium"
                      colorScheme={
                        idealButtonPattern[index + 5] as ButtonColorOption
                      }
                    >
                      {detail}
                    </SiteLabel>
                  );
                })}
              </MotionContainer>
            )}
            {clickedButton === "businesses" && (
              <MotionContainer
                direction="x"
                addClasses="Details mt-4 gap-2 mb-6 flex flex-col"
              >
                {businessDetails.map((detail, index) => {
                  return (
                    <SiteLabel
                      variant="display"
                      aria={detail}
                      key={index}
                      addClasses="px-6"
                      size="medium"
                      colorScheme={
                        idealButtonPattern[index] as ButtonColorOption
                      }
                    >
                      {detail}
                    </SiteLabel>
                  );
                })}
              </MotionContainer>
            )}
          </div>
        </div>
      </InfoBox>
    </div>
  );
};

export default TwoWayAms;
