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
  }, [isFlipping]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRotated(true);
    }, 1000); // Delay before the rotation starts

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="FeaturesPage flex w-[85%] max-w-[1600px] flex-col justify-center self-center">
      <div className="TopButtons flex justify-between">
        <button
          className="HumanFocusedTechSection items-middle font-mono ml-[2vw] flex gap-3 font-semibold"
          onClick={() => console.log("human focused tech click")}
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
            <p>tech</p>
          </div>
        </button>
        <button
          className="ApplicationManagerSection items-middle font-mono mr-[2vw] flex gap-3 self-end font-semibold"
          onClick={() => console.log("application manager click")}
        >
          <div className="Title flex flex-col text-right align-middle text-olive">
            <p>two-way</p>
            <p>application</p>
            <p>manager</p>
          </div>
          <Image
            width={80}
            height={80}
            alt="two-way application manager"
            src="/ams-star.svg"
            className={`align-middle transition-transform duration-1000 ${isRotated ? "-rotate-90" : ""} hover:-rotate-12`}
          ></Image>
        </button>
      </div>

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
          <div className="RotatingWordContainer w-[17vw]">
            <span
              className={`font-mono inline-block text-midnight transition-all duration-1000 ${
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
