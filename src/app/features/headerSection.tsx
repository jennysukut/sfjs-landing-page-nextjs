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
          width={440}
          height={600}
          alt="top group"
          src="/TopSideBG10.svg"
          className="-my-40 -mt-20 max-w-[50vw] self-start"
        ></Image>
        <Image
          width={220}
          height={400}
          alt="right group"
          src="/RightSideBG10.svg"
          className="-mb-52 -mt-44 max-w-[30vw] self-end"
        ></Image>
        <Image
          width={600}
          height={600}
          alt="bottom group"
          src="/BottomSideBG10.svg"
          className="-mb-44 mr-60 mt-4 max-w-[60vw] self-center"
        ></Image>
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
