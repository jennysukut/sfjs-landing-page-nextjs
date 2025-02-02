"use client";

import Image from "next/image";
import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import FeaturesHeaderSection from "./headerSection";
import InfoBox from "@/components/infoBox";
import SiteButton from "@/components/siteButton";
import ButtonOptionsComponent from "@/components/ButtonOptionsContainer";
import AddHandler from "@/components/addHandler";
import DeleteHandler from "@/components/deleteHandler";
export default function OurFeaturesPage() {
  const [selectedFeature, setSelectedFeature] = useState("");

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
      <FeaturesHeaderSection />
      <div
        className={`FeaturesPageTopSection my-8 flex max-w-[1600px] flex-col items-center justify-center gap-8`}
      >
        <ButtonOptionsComponent
          type="feature"
          buttons={["no ghosting", "other feature", "third feature"]}
          selectedArray={selectedFeature}
          handleAdd={handleAdd}
          handleDelete={handleDelete}
          buttonSize="medium"
        />
      </div>
    </div>
  );
}
