import { useModal } from "@/contexts/ModalContext";
import { motion } from "framer-motion";

import Link from "next/link";
import SiteButton from "@/components/siteButton";
import ButtonContainer from "@/components/buttonContainer";
import SignupOptionsModal from "@/components/modals/signupModals/signupOptionsModal";
import HelpUsModal from "@/components/modals/helpUsModal";
import Image from "next/image";
import { useState, useEffect } from "react";
import MotionContainer from "@/components/motionContainer";

function OtherHeaderSection() {
  const descriptorList = ["simple", "honest", "personal", "colorful", "human."];

  const { showModal } = useModal();

  const [currentDescriptor, setCurrentDescriptor] = useState(descriptorList[0]);
  const [isFlipping, setIsFlipping] = useState(false);

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

  useEffect(() => {
    if (currentDescriptor !== descriptorList[descriptorList.length - 1]) {
      const transitionInterval = setInterval(() => {
        setIsFlipping(true);

        const changeWordTimeout = setTimeout(() => {
          setCurrentDescriptor((prev) => {
            const currentIndex = descriptorList.indexOf(prev);
            const nextIndex = currentIndex + 1;
            return descriptorList[nextIndex];
          });
          setIsFlipping(false);
        }, 500); // Half a second for flip animation

        return () => clearTimeout(changeWordTimeout);
      }, 1500);

      return () => clearInterval(transitionInterval);
    } else {
      setCurrentDescriptor("human.");
    }
  }, [isFlipping]);

  return (
    <section className="HeaderSection z-10 mt-4 flex w-full flex-col gap-2 self-center align-middle">
      <div className="TitleSection flex justify-between gap-4 self-center">
        <h1 className="Title self-start text-[3.5rem] tracking-widest text-midnight">
          {/* where hiring is{" "} */}
          hiring, but more{" "}
        </h1>

        <div className="RotatingWordContainer -mb-4 mt-0 w-[17vw]">
          <h1
            className={`inline-block font-serif text-[4.5rem] font-semibold tracking-normal text-midnight transition-all duration-500 ${
              isFlipping
                ? "-rotate-x-90 -translate-y-2 opacity-0"
                : "rotate-x-0 translate-y-0 opacity-100"
            }`}
            style={{ transformStyle: "preserve-3d" }}
          >
            {currentDescriptor}
          </h1>
        </div>
      </div>
      <div className="Buttons mb-20 ml-4 mt-4 flex gap-6 self-center">
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
            colorScheme="b4"
            size="medium"
          >
            what makes us different?
          </SiteButton>
          <SiteButton
            variant="filled"
            aria="features"
            size="medium"
            colorScheme="c4"
          >
            check out our features
          </SiteButton>
          <SiteButton
            variant="filled"
            aria="signup"
            size="medium"
            colorScheme="b6"
          >
            sign up!
          </SiteButton>
        </MotionContainer>
      </div>
    </section>
  );
}

export default OtherHeaderSection;
