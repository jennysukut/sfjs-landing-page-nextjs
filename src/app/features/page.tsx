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
      <FeaturesHeaderSection
        setSelectedFeature={setSelectedFeature}
        selectedFeature={selectedFeature}
        scrollToFeaturesSection={scrollToFeaturesSection}
      />

      <div
        ref={featuresRef}
        className={`FeaturesPageTopSection my-8 flex max-w-[1600px] flex-col items-center justify-center gap-8`}
      >
        <ButtonOptionsComponent
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
        />
        <StackedCards selectedFeature={selectedFeature} />
      </div>
    </div>
  );
}
