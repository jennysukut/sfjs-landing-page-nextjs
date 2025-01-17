"use client";

import { useModal } from "@/contexts/ModalContext";
import { motion } from "framer-motion";

import InfoBox from "@/components/infoBox";
import SiteButton from "@/components/siteButton";
import BetaTesterOptionsModal from "@/components/modals/signupModals/signupOptionsBetaTesters";
import MotionContainer from "@/components/motionContainer";
import Image from "next/image";

export default function BetaTesting() {
  const motionItem = {
    start: { opacity: 0, x: -100 },
    move: {
      x: [
        -100, 0, -20, 0, -20, 5, -20, 0, -30, 0, -20, 5, -20, 0, -30, 0, -20, 0,
        -20, 0,
      ],
      opacity: 1,
      transition: {
        opacity: {
          duration: 0.74,
          ease: "easeInOut",
          delay: 1,
        },
        x: {
          type: "tween",
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        },
      },
    },
  };

  return (
    <div
      className="BetaTestingPage -mb-10 -mt-48 flex h-[140vh] w-[100vw] max-w-[1600px] flex-col items-center justify-center"
      style={{
        backgroundImage: 'url("/BackgroundShapes7.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="TitleSection -mt-8 flex flex-col gap-6 self-center">
        <h1 className="Title self-center text-[3.5rem] tracking-widest text-midnight">
          get in early
        </h1>
        <div className="SecondLine mr-6 self-center">
          <h1
            className={`Title inline-block font-serif text-[4rem] font-semibold tracking-normal text-midnight`}
          >
            & <span className="Title font-sans text-[3.5rem]">be a beta </span>
            tester
          </h1>
        </div>
      </div>
      <div className="Buttons mb-28 mr-6 mt-4 flex gap-6 self-center">
        <motion.div
          initial="start"
          variants={motionItem}
          viewport={{ once: false }}
          whileInView="move"
          className="mt-8 align-middle"
        >
          <Image
            width={50}
            height={30}
            alt="arrow"
            src="/PointArrow.svg"
            className="mt-4 align-middle"
          ></Image>
        </motion.div>
        <MotionContainer>
          <SiteButton
            variant="filled"
            aria="what makes us different?"
            colorScheme="c1"
            size="medium"
          >
            get first access
          </SiteButton>
          <SiteButton
            variant="filled"
            aria="features"
            size="medium"
            colorScheme="f1"
          >
            post a job for free!
          </SiteButton>
          <SiteButton
            variant="filled"
            aria="signup"
            size="medium"
            colorScheme="b3"
          >
            learn more
          </SiteButton>
        </MotionContainer>
      </div>
    </div>
  );
}
