"use client";

import { useState, useEffect } from "react";
import InfoBox from "@/components/infoBox";
import SiteButton from "@/components/siteButton";
import SiteLabel from "@/components/siteLabel";
import Image from "next/image";
import { motion } from "framer-motion";
import ButtonOptionsComponent from "@/components/ButtonOptionsContainer";

const OurPricing = () => {
  const [viewMore, setViewMore] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("job seekers");
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
    <div className="OurPricing flex w-[90%] max-w-[1600px] items-center justify-between gap-8 self-center pr-4">
      <div className="PricingOptions flex flex-col gap-4 self-start">
        {/* <h1 className="Title text-center text-jade">pricing:</h1> */}
        <SiteButton
          variant="filled"
          aria="job seeker pricing"
          colorScheme="b4"
          size="medium"
          addClasses="w-[15vw]"
          onClick={() => setSelectedCategory("job seekers")}
          isSelected={selectedCategory === "job seekers"}
        >
          for job seekers
        </SiteButton>
        <SiteButton
          variant="filled"
          colorScheme="d4"
          aria="business pricing"
          size="medium"
          addClasses="w-[15vw]"
          onClick={() => setSelectedCategory("business")}
          isSelected={selectedCategory === "business"}
        >
          for businesses
        </SiteButton>
      </div>
      <div className="MiddleColumn flex flex-col gap-4 text-center">
        <h2 className="WithUs">Straightforward Job Site Pricing</h2>
        <InfoBox
          variant="hollow"
          size="large"
          addClasses="w-[32vw]"
          aria="our info"
        >
          {selectedCategory === "job seekers" && (
            <div className="JobSeekerInfo">Job Seeker Info With Us</div>
          )}
          {selectedCategory === "business" && (
            <div className="JobSeekerInfo">Business Info With Us</div>
          )}
        </InfoBox>
      </div>
      <div className="RightColumn flex flex-col gap-4 text-center">
        <h2 className="WithThem">Status Quo Pricing</h2>
        <InfoBox
          variant="hollow"
          size="large"
          addClasses="w-[32vw]"
          aria="our info"
        >
          {selectedCategory === "job seekers" && (
            <div className="JobSeekerInfo">Job Seeker Info With Them</div>
          )}
          {selectedCategory === "business" && (
            <div className="JobSeekerInfo">Business Info With Them</div>
          )}
        </InfoBox>
      </div>
    </div>
  );
};

export default OurPricing;
