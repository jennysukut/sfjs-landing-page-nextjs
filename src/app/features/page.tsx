"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import FeaturesHeaderSection from "./headerSection";
import InfoBox from "@/components/infoBox";
import SiteButton from "@/components/siteButton";
import ButtonOptionsComponent from "@/components/ButtonOptionsContainer";
import AddHandler from "@/components/addHandler";
import DeleteHandler from "@/components/deleteHandler";
import StackedCards from "./featuresDetails";

export default function OurFeaturesPage() {
  const [selectedFeature, setSelectedFeature] = useState("");
  const featuresRef = useRef<HTMLDivElement | null>(null);

  const scrollToFeaturesSection = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAdd = (type: "feature", item: any) => {
    AddHandler({
      item,
      type,
      setFunctions: {
        feature: setSelectedFeature,
      },
      oneChoice: {
        feature: true,
      },
    });
  };

  const handleDelete = (type: "feature", item: any) => {
    DeleteHandler({
      item,
      type,
      setFunctions: {
        feature: setSelectedFeature,
      },
    });
  };

  return (
    <div className="FeaturesPage flex flex-col items-center justify-center">
      <button className="test" onClick={scrollToFeaturesSection}>
        test
      </button>
      <FeaturesHeaderSection />

      <div
        ref={featuresRef}
        className={`FeaturesPageTopSection my-8 flex max-w-[1600px] flex-col items-center justify-center gap-8`}
      >
        {" "}
        <StackedCards />
        {/* <ButtonOptionsComponent
          type="feature"
          buttons={[
            "no ghosting",
            "two-way application managment",
            "honest + active job board",
            "human-focused tech",
          ]}
          selectedArray={selectedFeature}
          handleAdd={handleAdd}
          handleDelete={handleDelete}
          buttonSize="medium"
        /> */}
      </div>
      {/* <div className="Info">
        <InfoBox
          variant="filled"
          colorScheme="b3"
          aria="info"
          size="extraLarge"
          width="extraWide"
          addClasses="absolute z-10 top-0"
        >
          testing one info box
        </InfoBox>
        <InfoBox
          variant="filled"
          colorScheme="f1"
          aria="info"
          size="extraLarge"
          width="extraWide"
          addClasses="fixed z-20 -top-96"
        >
          testing another info box
        </InfoBox>
      </div> */}
    </div>
  );
}
