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
import { idealButtonPattern } from "@/lib/stylingData/idealButtonPattern";

const HumanFocusedTech = ({ humanTechRef }: any) => {
  const { showModal } = useModal();
  const [clickedButton, setClickedButton] = useState("job seekers");

  const swirl = {
    start: { rotate: 360 },
    move: {
      rotate: 0,
      transition: {
        rotate: {
          duration: 45,
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
    <div
      ref={humanTechRef}
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
          colorScheme="b4"
          addClasses="-rotate-12"
          width="large"
        >
          {`we've got your back, always`}
        </SiteLabel>
      </motion.div>
      <InfoBox
        aria="job board info"
        variant="hollow"
        size="extraLarge"
        width="extraWide"
        addClasses="self-center flex flex-col justify-center"
      >
        <h2 className="title mb-6 mt-4 text-center text-[1.9rem] font-semibold">
          Human-Focused Tech
        </h2>

        <p className="Excerpt mb-8 mt-3 max-w-[90%] self-center text-center italic text-midnight">
          {` We treat everyone like a real human, never like a number, simple data,
        or way to boost our bottom dollar. We believe this is the least we can
        do, and the least you deserve.`}
        </p>

        <div className="humanTechDetails mb-8 flex max-w-[95%] flex-wrap items-center justify-center gap-6 text-center">
          <InfoBox
            variant="filled"
            colorScheme="f1"
            aria="no resumes"
            size="extraSmall"
            textSize="medium"
          >
            no resumes
          </InfoBox>
          <InfoBox
            variant="filled"
            colorScheme="b3"
            aria="no resumes"
            size="extraSmall"
            textSize="medium"
          >
            realistic expectations
          </InfoBox>
          <InfoBox
            variant="filled"
            colorScheme="c1"
            aria="no resumes"
            size="extraSmall"
            textSize="medium"
          >
            ease of mind
          </InfoBox>
          <InfoBox
            variant="filled"
            colorScheme="d1"
            aria="no resumes"
            size="extraSmall"
            textSize="medium"
          >
            {`10-50 applications per job listing`}
          </InfoBox>
          <InfoBox
            variant="filled"
            colorScheme="b4"
            aria="no resumes"
            size="extraSmall"
            textSize="medium"
          >
            {`mood-boosting colors`}
          </InfoBox>
          <InfoBox
            variant="filled"
            colorScheme="b6"
            aria="no resumes"
            size="extraSmall"
            textSize="medium"
          >
            intuitive design
          </InfoBox>
          <InfoBox
            variant="filled"
            colorScheme="c4"
            aria="no resumes"
            size="extraSmall"
            textSize="medium"
          >
            daily application limits
          </InfoBox>
          <InfoBox
            variant="filled"
            colorScheme="d4"
            aria="no resumes"
            size="extraSmall"
            textSize="medium"
          >
            {`no ghosting`}
          </InfoBox>
          <InfoBox
            variant="filled"
            colorScheme="f3"
            aria="no resumes"
            size="extraSmall"
            textSize="medium"
          >
            {`descrimination-curbing details`}
          </InfoBox>
          <InfoBox
            variant="filled"
            colorScheme="e6"
            aria="no resumes"
            size="extraSmall"
            textSize="medium"
          >
            {`people-over-profits structure`}
          </InfoBox>
          <InfoBox
            variant="filled"
            colorScheme="e5"
            aria="no resumes"
            size="extraSmall"
            textSize="medium"
          >
            {`all-human interactions`}
          </InfoBox>
          <InfoBox
            variant="filled"
            colorScheme="c2"
            aria="no resumes"
            size="extraSmall"
            textSize="medium"
          >
            {`human-focused profiles`}
          </InfoBox>
          <InfoBox
            variant="filled"
            colorScheme="c5"
            aria="no resumes"
            size="extraSmall"
            textSize="medium"
          >
            {`respect for people's time + attention + data`}
          </InfoBox>
        </div>
        <motion.div
          initial="start"
          variants={swirl}
          viewport={{ once: true }}
          whileInView="move"
          className="absolute bottom-8 right-40 self-end"
        >
          <Image
            width={150}
            height={150}
            alt="two-way application manager"
            src="/jade-flower.svg"
            className={`drop-shadow-smLime transition-transform duration-1000`}
          ></Image>
        </motion.div>
      </InfoBox>
    </div>
  );
};

export default HumanFocusedTech;
