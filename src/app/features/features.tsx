import { useState, useEffect } from "react";
import InfoBox from "@/components/infoBox";
import SiteButton from "@/components/siteButton";
import SiteLabel from "@/components/siteLabel";
import Image from "next/image";
import { motion } from "framer-motion";
import HonestActiveJobBoard from "./honestActiveJobBoard";
import NoGhosting from "./noGhosting";

const Features = () => {
  return (
    <div className="FeaturesSection flex flex-col gap-14">
      <HonestActiveJobBoard />
      <NoGhosting />
    </div>
  );
};

export default Features;
