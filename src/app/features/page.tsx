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
import Features from "./features";

export default function OurFeaturesPage() {
  const [selectedFeature, setSelectedFeature] = useState("");
  const featuresRef = useRef<HTMLDivElement | null>(null);
  const amsRef = useRef<HTMLDivElement | null>(null);
  const ghostingRef = useRef<HTMLDivElement | null>(null);
  const humanTechRef = useRef<HTMLDivElement | null>(null);

  const scrollToFeaturesSection = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAms = () => {
    const offset = 120; // Adjust this value as needed
    const element = amsRef.current;
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
    // amsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToNoGhosting = () => {
    const offset = 120; // Adjust this value as needed
    const element = ghostingRef.current;
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  const scrollToHumanTech = () => {
    const offset = 110; // Adjust this value as needed
    const element = humanTechRef.current;
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
    // humanTechRef.current?.scrollIntoView({ behavior: "smooth" });
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

  useEffect(() => {
    if (selectedFeature === "two-way application managment") {
      scrollToAms();
    } else if (selectedFeature === "honest + active job board") {
      scrollToFeaturesSection();
    } else if (selectedFeature === "no ghosting") {
      scrollToNoGhosting();
    } else if (selectedFeature === "human-focused tech") {
      scrollToHumanTech();
    }
  }, [selectedFeature]);

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
            "honest + active job board",
            "two-way application managment",
            "no ghosting",
            "human-focused tech",
          ]}
          selectedArray={selectedFeature}
          handleAdd={handleAdd}
          handleDelete={handleDelete}
          buttonSize="medium"
        />

        <Features
          amsRef={amsRef}
          ghostingRef={ghostingRef}
          humanTechRef={humanTechRef}
        />
      </div>
    </div>
  );
}
