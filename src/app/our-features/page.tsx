"use client";

import Image from "next/image";
import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { AmsDetails } from "./amsDetails";
import InfoBox from "@/components/infoBox";
import { HumanTechDetails } from "./humanTechDetails";
import { JobBoardDetails } from "./jobBoardDetails";
import { NoGhostingDetails } from "./noGhostingDetails";
export default function OurFeaturesPage() {
  const descriptorList = useMemo(
    () => [
      "thoughtful",
      "practical",
      "almost radical",
      "conscious",
      "uniquely sensible",
      "straightforward",
    ],
    [],
  );

  const [currentDescriptor, setCurrentDescriptor] = useState(descriptorList[0]);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("none");
  const [showBottomButtons, setShowBottomButtons] = useState(true);
  const [showTopButtons, setShowTopButtons] = useState(true);
  const [bgImage, setBgImage] = useState("/BackgroundShapes8.svg");

  // backgroundImage: {`${selectedCategory === "ams" ? 'url("/BackgroundShapes9.svg")' : 'url("/BackgroundShapes8.svg")'}`},

  const rotate = {
    start: { opacity: 0, rotate: -15 },
    move: {
      rotate: 0,
      opacity: 1,
      transition: {
        opacity: {
          duration: 1,
          ease: "easeInOut",
          delay: 1,
        },
        rotate: {
          duration: 1,
          repeat: 0,
          ease: "easeInOut",
          delay: 1,
        },
      },
    },
  };

  const swirl = {
    start: { rotate: 360 },
    move: {
      rotate: 0,
      transition: {
        rotate: {
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0,
        },
      },
    },
  };

  const bounce = {
    start: { y: 100 },
    move: {
      y: [
        100, 0, -20, 0, -20, 5, 50, 0, -20, 0, -20, 5, 50, 0, -20, 0, -20, 5,
        50, 0, -20, 0, -20, 5, 50, 0,
      ],
      transition: {
        y: {
          duration: 60,
          repeat: 0,
          ease: "easeInOut",
          delay: 0,
        },
      },
    },
  };

  const opacity = {
    start: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        opacity: {
          duration: 1,
          ease: "easeInOut",
          delay: 1.5,
        },
      },
    },
  };

  const categoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory("none");
      setShowBottomButtons(true);
      setShowTopButtons(true);
      setBgImage("/BackgroundShapes8.svg");
    } else {
      setSelectedCategory(category);
      if (category === "ams" || category === "humanTech") {
        setShowBottomButtons(false);
        setBgImage("/BackgroundShapes10.svg");
      } else if (category === "jobBoard" || category === "noGhosting") {
        setShowTopButtons(false);
        setBgImage("/BackgroundShapes9.svg");
      }
    }
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
        }, 1000);

        return () => clearTimeout(changeWordTimeout);
      }, 3000);

      return () => clearInterval(transitionInterval);
    } else {
      setCurrentDescriptor("straightforward");
    }
  }, [isFlipping, currentDescriptor, descriptorList]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRotated(true);
    }, 1000); // Delay before the rotation starts

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`LandingPageContainer -mt-48 flex h-[140vh] w-[100vw] max-w-[1600px]`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`FeaturesPage mx-auto mt-60 flex w-[85%] max-w-[1600px] flex-col`}
      >
        {/* TOP BUTTON OPTIONS */}
        {showTopButtons && (
          <div className="TopButtons flex justify-between">
            <div
              className={`HumanFocusedTechSection ${selectedCategory === "ams" ? "invisible" : ""} flex flex-col`}
            >
              <button
                className="HumanFocusedTechButtons items-middle font-mono -mt-20 ml-[10vw] flex gap-3 font-semibold"
                onClick={() => categoryClick("humanTech")}
              >
                <Image
                  width={90}
                  height={90}
                  alt="human focused tech"
                  src="/human-flower.svg"
                  className={`align-middle transition-transform duration-1000 ${isRotated ? "rotate-90" : ""} hover:rotate-45`}
                ></Image>
                <div className="Title mt-8 flex flex-col text-left">
                  <p>human</p>
                  <p>focused</p>
                  <p>facets</p>
                </div>
              </button>
            </div>

            <div className="ApplicationManagerSection flex flex-col gap-4">
              <button
                className={`ApplicationManagerButtons ${selectedCategory === "humanTech" ? "invisible" : ""} items-middle font-mono mr-[2vw] flex gap-3 self-end font-semibold`}
                onClick={() => categoryClick("ams")}
              >
                <div className="Title flex flex-col text-right align-middle text-olive">
                  <p>two-way</p>
                  <p>application</p>
                  <p>manager</p>
                </div>
                <motion.div
                  initial="start"
                  variants={swirl}
                  viewport={{ once: true }}
                  whileInView="move"
                  className="align-middle"
                >
                  <Image
                    width={80}
                    height={80}
                    alt="two-way application manager"
                    src="/ams-star.svg"
                    className={`align-middle transition-transform duration-1000 ${isRotated ? "-rotate-90" : ""} hover:-rotate-12`}
                  ></Image>
                </motion.div>
              </button>
            </div>
          </div>
        )}

        {selectedCategory === "ams" && <AmsDetails />}
        {selectedCategory === "humanTech" && <HumanTechDetails />}

        {/* MAIN TITLE */}
        {selectedCategory === "none" && (
          <div className="TitleGroup flex flex-col items-center">
            <div className="TitleSection flex flex-col items-center gap-10 self-center">
              <h1 className="Title text-[3.5rem] tracking-widest text-midnight">
                explore our{" "}
              </h1>
              <div className="SecondLine -mt-3 mr-6 self-center">
                <h1
                  className={`Title inline-block font-serif text-[4rem] font-semibold tracking-normal text-midnight`}
                >
                  <span className="Title font-sans text-[3.5rem] tracking-widest text-midnight">
                    sweet{" "}
                  </span>
                  features
                </h1>
              </div>
            </div>

            <div className="NoteSection flex items-start gap-4 self-center">
              <div className="Arrow">
                <motion.div
                  initial="start"
                  variants={rotate}
                  viewport={{ once: true }}
                  whileInView="move"
                  className="align-middle"
                >
                  <Image
                    width={60}
                    height={25}
                    alt="arrow"
                    src="/features-arrow.svg"
                    className="ml-4 mt-1 align-middle"
                  ></Image>
                </motion.div>
              </div>

              <motion.div
                initial="start"
                variants={opacity}
                viewport={{ once: true }}
                whileInView="show"
                className="mt-6 flex gap-2"
              >
                <p className="Note font-mono text-midnight">& </p>
                <div className="RotatingWordContainer w-[20vw]">
                  <span
                    className={`font-mono inline-block text-midnight transition-all duration-1000 ${
                      isFlipping
                        ? "-rotate-x-90 -translate-y-2 opacity-0"
                        : "rotate-x-0 translate-y-0 opacity-100"
                    }`}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {" "}
                    {currentDescriptor}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* {selectedCategory === "jobBoard" && <JobBoardDetails />} */}
        {selectedCategory === "noGhosting" && <NoGhostingDetails />}

        {/* MAYBE we need to make the buttons absolute in their positioning so they're not affected when things move around on the page? */}
        {/* BOTTOM BUTTON OPTIONS */}
        {showBottomButtons && (
          <div className="BottomButtons flex justify-between">
            <button
              className={`HonestJobBoardSection ${selectedCategory === "noGhosting" ? "invisible" : ""} items-middle font-mono absolute bottom-96 left-8 flex gap-4 font-semibold`}
              onClick={() => categoryClick("jobBoard")}
            >
              <motion.div
                initial="start"
                variants={bounce}
                viewport={{ once: false }}
                whileInView="move"
                className="mt-6 flex gap-2"
              >
                <Image
                  width={175}
                  height={200}
                  alt="active and honest job board"
                  src="/job-board-semi-circle.svg"
                  className={`align-middle transition-transform duration-1000 hover:shrink`}
                ></Image>
              </motion.div>
              <div className="Title mt-8 flex flex-col text-left text-peach">
                <p>an active</p>
                <p>& honest</p>
                <p>job board</p>
              </div>
            </button>

            <button
              className={`NoGhostingSection ${selectedCategory === "jobBoard" ? "invisible" : ""} items-middle font-mono absolute bottom-80 right-40 mb-8 flex gap-3 self-end font-semibold`}
              onClick={() => categoryClick("noGhosting")}
            >
              <div className="Title flex flex-col text-right align-middle text-magenta">
                <p>our ghosting</p>
                <p>disincentive</p>
              </div>
              <Image
                width={100}
                height={100}
                alt="no more ghosting"
                src="/ghosting-flower.svg"
                className={`align-middle transition-transform duration-1000 ${isRotated ? "-rotate-90" : ""} hover:-rotate-12`}
              ></Image>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
