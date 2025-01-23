"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function OurFeaturesPage() {
  const descriptorList = [
    "thoughtful",
    "practical",
    "radical",
    "common sense",
    "straightforward",
  ];

  const [currentDescriptor, setCurrentDescriptor] = useState(descriptorList[0]);
  const [isFlipping, setIsFlipping] = useState(false);

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
      setCurrentDescriptor("straightforward");
    }
  }, [isFlipping]);

  return (
    <div className="FeaturesPage flex w-[85%] max-w-[1600px] flex-col items-center justify-center self-center">
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

      <div className="NoteSection flex items-baseline gap-4">
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
              className="ml-4 mt-2 align-middle"
            ></Image>
            {/* <Image
            width={45}
            height={25}
            alt="arrow"
            src="/squiggle-arrow.svg"
            className="ml-8 mt-2 align-middle"
          ></Image> */}
          </motion.div>
        </div>
        <motion.div
          initial="start"
          variants={opacity}
          viewport={{ once: true }}
          whileInView="show"
          className="flex gap-2 align-middle"
        >
          <p className="Note font-mono text-midnight">and </p>
          <div className="RotatingWordContainer w-[17vw]">
            <span
              className={`font-mono inline-block text-midnight transition-all delay-150 duration-1000 ${
                isFlipping
                  ? "-rotate-x-90 -translate-y-2 opacity-0"
                  : "rotate-x-0 translate-y-0 opacity-100"
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {currentDescriptor}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
