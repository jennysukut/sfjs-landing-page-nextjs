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
import MoreFeaturesSection from "./moreFeaturesSection";
const Features = ({ amsRef, ghostingRef, humanTechRef }: any) => {
  const [viewMore, setViewMore] = useState(false);

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
      <TwoWayAms amsRef={amsRef} />
      <NoGhosting ghostingRef={ghostingRef} />
      <HumanFocusedTech humanTechRef={humanTechRef} />
      <div className="SeeMoreSection flex flex-col">
        <div className="SeeMoreButton self-end">
          <SiteButton
            variant="filled"
            aria="see more"
            colorScheme="b4"
            size="medium"
            isSelected={viewMore}
            onClick={() => setViewMore(!viewMore)}
            addClasses="px-20"
          >
            View More Details
          </SiteButton>
        </div>
        {viewMore === true && (
          <div className="FeaturesSection">
            <MoreFeaturesSection />
          </div>
        )}
      </div>
    </div>
  );
};

export default Features;
