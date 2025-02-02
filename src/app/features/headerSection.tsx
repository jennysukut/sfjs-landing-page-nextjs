"use client";

import Image from "next/image";
import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import SiteButton from "@/components/siteButton";

export default function FeaturesHeaderSection() {
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

  const motionItem = {
    start: { opacity: 0, y: -100 },
    move: {
      y: [
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
        y: {
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
      className={`FeaturesPageTopSection flex h-[100vh] w-[100vw] max-w-[1600px] justify-center overflow-clip`}
      // style={{
      //   backgroundImage: `url("/BackgroundShapes10.svg")`,
      //   backgroundSize: "contain",
      //   backgroundPosition: "center",
      // }}
    >
      <div className="BackgroundElements absolute -z-20 flex w-[100vw] flex-col">
        <Image
          width={400}
          height={600}
          alt="top group"
          src="/TopSideBG10.svg"
          className="-my-40 -mt-20 max-w-[50vw] self-start"
        ></Image>
        <Image
          width={170}
          height={400}
          alt="right group"
          src="/RightSideBG10.svg"
          className="-my-40 max-w-[30vw] self-end"
        ></Image>
        <Image
          width={600}
          height={600}
          alt="bottom group"
          src="/BottomSideBG10.svg"
          className="-mb-40 mr-60 mt-4 max-w-[60vw] self-center"
        ></Image>
      </div>

      <div className="FeaturesLabelButtons absolute flex h-[100%] w-[100%] flex-col">
        <div className="GhostingButton ml-[50vw] self-center">
          <SiteButton
            variant="filled"
            colorScheme="b3"
            aria="no ghosting"
            size="medium"
            addClasses="rotate-12"
          >
            no more ghosting
          </SiteButton>
        </div>
        <div className="AMSButton ml-14 self-start">
          <SiteButton
            variant="filled"
            colorScheme="f3"
            aria="application manager"
            size="medium"
            addClasses="-rotate-6"
          >
            two-way application manager
          </SiteButton>
        </div>

        <div className="GhostingButton ml-[50vw] mt-[30vh] self-center align-bottom">
          <SiteButton
            variant="filled"
            colorScheme="c4"
            aria="job board"
            size="medium"
            addClasses="-rotate-1"
          >
            honest + active job board
          </SiteButton>
        </div>
        <div className="AMSButton -mt-14 ml-32 self-start align-baseline">
          <SiteButton
            variant="filled"
            colorScheme="b4"
            aria="human focused tech"
            size="medium"
            addClasses="rotate-6"
          >
            human focused tech
          </SiteButton>
        </div>
      </div>

      {/* MAIN TITLE */}
      <div className="TitleGroup mt-20 flex flex-col items-center">
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

        {/* <div className="NoteSection flex items-start gap-4 self-center">
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
          </div> */}
        {/*
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
          </motion.div> */}
        {/* </div> */}
        {/* <motion.div
          initial="start"
          variants={motionItem}
          viewport={{ once: false }}
          whileInView="move"
          className="-mr-32 mt-14 self-end"
        >
          <Image
            width={50}
            height={30}
            alt="arrow"
            src="/PointArrow.svg"
            className="mt-4 rotate-90 align-middle"
          ></Image>
        </motion.div> */}
      </div>
    </div>
  );
}
