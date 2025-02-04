"use client";

import Image from "next/image";
import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import SiteButton from "@/components/siteButton";

export default function FeaturesHeaderSection({
  selectedFeature,
  setSelectedFeature,
  scrollToFeaturesSection,
}: any) {
  const clickButton = (title: string) => {
    setSelectedFeature(title);
    scrollToFeaturesSection();
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

  return (
    <div
      className={`FeaturesPageTopSection flex h-[100vh] w-[100vw] max-w-[1600px] justify-center overflow-clip`}
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

      {/* <div className="FeaturesLabelButtons absolute flex h-[100vh] w-[100%] flex-col">
        <div className="GhostingButton ml-[50vw] self-center">
          <SiteButton
            variant="filled"
            colorScheme="b3"
            aria="no ghosting"
            size="large"
            addClasses="rotate-12"
            isSelected={selectedFeature === "no ghosting"}
            onClick={() => clickButton("no ghosting")}
          >
            no more ghosting
          </SiteButton>
        </div>
        <div className="AMSButton ml-14 self-start">
          <SiteButton
            variant="filled"
            colorScheme="f3"
            aria="application manager"
            size="large"
            addClasses="-rotate-6"
            isSelected={selectedFeature === "two-way application managment"}
            onClick={() => clickButton("two-way application managment")}
          >
            two-way application manager
          </SiteButton>
        </div>

        <div className="GhostingButton ml-[50vw] mt-[30vh] self-center align-bottom">
          <SiteButton
            variant="filled"
            colorScheme="c4"
            aria="job board"
            size="large"
            addClasses="rotate-3"
            isSelected={selectedFeature === "honest + active job board"}
            onClick={() => clickButton("honest + active job board")}
          >
            honest + active job board
          </SiteButton>
        </div>
        <div className="AMSButton -mt-14 ml-32 self-start align-baseline">
          <SiteButton
            variant="filled"
            colorScheme="b4"
            aria="human focused tech"
            size="large"
            addClasses=""
            isSelected={selectedFeature === "human-focused tech"}
            onClick={() => clickButton("human-focused tech")}
          >
            human focused tech
          </SiteButton>
        </div>
      </div> */}

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
                unique{" "}
              </span>
              features
            </h1>
          </div>
        </div>
        <motion.div
          initial="start"
          variants={motionItem}
          viewport={{ once: false }}
          whileInView="move"
          className="-mr-14 mt-8 self-end"
        >
          <button onClick={() => scrollToFeaturesSection()}>
            <Image
              width={50}
              height={30}
              alt="arrow"
              src="/PointArrow.svg"
              className="mt-4 rotate-90 align-middle"
            ></Image>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
