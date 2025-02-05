import { useState, useEffect } from "react";
import InfoBox from "@/components/infoBox";
import SiteButton from "@/components/siteButton";
import SiteLabel from "@/components/siteLabel";
import Image from "next/image";
import { motion } from "framer-motion";
import HonestActiveJobBoard from "./honestActiveJobBoard";
import NoGhosting from "./noGhosting";
import TwoWayAms from "./twoWayAMS";
import HumanFocusedTech from "./humanFocusedTech";

const Features = () => {
  const opacity = {
    start: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        opacity: {
          duration: 1,
          ease: "easeInOut",
          delay: 0.25,
        },
      },
    },
  };
  return (
    <div className="FeaturesSection flex flex-col gap-14">
      <HonestActiveJobBoard />
      <TwoWayAms />
      <NoGhosting />
      <HumanFocusedTech />
    </div>
  );
};

export default Features;
