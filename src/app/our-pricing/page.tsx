"use client";

import { useState, useEffect } from "react";
import InfoBox from "@/components/infoBox";
import SiteButton from "@/components/siteButton";
import SiteLabel from "@/components/siteLabel";
import Image from "next/image";
import { motion } from "framer-motion";
import ButtonOptionsComponent from "@/components/ButtonOptionsContainer";

const OurPricing = () => {
  const [selectedCategory, setSelectedCategory] = useState("job seekers");
  const [selectedAmount, setSelectedAmount] = useState("6");
  const [jobSeekerAmount, setJobSeekerAmount] = useState(19.99);

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

  const jobSeekerAmountOptions = [19.99, 44.99, 0.0, 39.99, 25.95];

  useEffect(() => {
    const interval = setInterval(() => {
      setJobSeekerAmount((prevAmount) => {
        const currentIndex = jobSeekerAmountOptions.indexOf(prevAmount);
        const nextIndex = (currentIndex + 1) % jobSeekerAmountOptions.length;
        return jobSeekerAmountOptions[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="OurPricing flex w-[90%] max-w-[1600px] items-start justify-between gap-8 self-center pr-4">
      <div className="PricingOptions flex h-full flex-col gap-4 self-start">
        <SiteButton
          variant="filled"
          aria="job seeker pricing"
          colorScheme="b4"
          size="medium"
          addClasses="w-[17vw]"
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
          addClasses="w-[17vw]"
          onClick={() => setSelectedCategory("business")}
          isSelected={selectedCategory === "business"}
        >
          for businesses
        </SiteButton>
      </div>
      <div className="OtherColumns flex min-h-[60vh] gap-8 align-top">
        <div className="MiddleColumn flex flex-col gap-6 border-l-2 border-l-olive border-opacity-15 pb-8 pl-6 text-center">
          <InfoBox
            variant="hollow"
            size="large"
            addClasses="w-[32vw]"
            aria="our info"
          >
            {selectedCategory === "job seekers" && (
              <div className="JobSeekerInfo flex flex-col gap-4">
                <h2 className="Title text-[1.5rem] leading-8">
                  Your Subscription With Us
                </h2>

                <p className="SubscriptionSubtitle text-center font-medium italic">
                  is always pay-what-you-want
                </p>
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="2"
                  value={selectedAmount}
                  className={`ScaleInput custom-range my-4 w-[85%]`}
                  onChange={(e) => setSelectedAmount(e.target.value)}
                />
                <p className="Details text-md">
                  {`monthly amount: $${selectedAmount}`}
                </p>
                <p className={`Details text-sm font-medium italic text-olive`}>
                  {` we're serious - you get to choose any amount + change or
                  update at any time!`}
                </p>
              </div>
            )}
            {selectedCategory === "business" && (
              <div className="JobSeekerInfo flex flex-col gap-4">
                Business Info With Us
              </div>
            )}
          </InfoBox>
          {selectedCategory === "job seekers" && (
            <InfoBox
              variant="filled"
              aria="comment"
              colorScheme="b3"
              size="thin"
            >
              <p className="details text-md leading-6">
                we believe in transparency and accessibility for every part of
                our human-centric platform
              </p>
            </InfoBox>
          )}
        </div>
        <div className="RightColumn flex flex-col gap-4 text-center">
          <InfoBox
            variant="hollow"
            size="large"
            addClasses="w-[32vw]"
            aria="our info"
          >
            {selectedCategory === "job seekers" && (
              <div className="JobSeekerInfo flex flex-col gap-4">
                <h2 className="Title text-[1.25rem] leading-7">
                  The Standard / Status Quo Pricing
                </h2>

                <p className="SubscriptionSubtitle text-center font-medium italic leading-6">
                  {`is generally tiered, complicated, and anything but transparent`}
                </p>
                <h1 className="Amount my-2 text-[1.75rem] text-lime text-opacity-75">
                  ${jobSeekerAmount}
                </h1>
                <p
                  className={`Details text-sm font-medium italic text-emerald`}
                >
                  {`...and that's not even counting the hundreds of hours you'll spend sending your resume out into the ether`}
                </p>
              </div>
            )}
            {selectedCategory === "business" && (
              <div className="JobSeekerInfo flex flex-col gap-4">
                Business Info With Them
              </div>
            )}
          </InfoBox>
          {selectedCategory === "job seekers" && (
            <div className="NonsenseComment flex justify-end self-end">
              <Image
                width={50}
                height={20}
                alt="arrow"
                src="/little-purple-arrow.svg"
              ></Image>
              <p className="Comment max-w-[50%] self-end pt-4 font-medium italic text-lilac">
                you deserve better than this nonsense
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurPricing;
