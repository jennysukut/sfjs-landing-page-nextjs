"use client";

import SiteButton from "@/components/siteButton";
import InfoBox from "@/components/infoBox";
import { useState } from "react";
import { pricingDetails } from "@/lib/siteCopy/pricingDetails";
import Image from "next/image";
type Category = "individual" | "business";

export default function PricingPage() {
  const [category, setCategory] = useState("");
  const [showListingQuestion, setShowListingQuestion] = useState(false);
  const [showInactiveDetails, setShowInactiveDetails] = useState(false);
  const [showDumbQuestion, setShowDumbQuestion] = useState(false);
  const [dumb, setDumb] = useState(false);

  // function handleClick(buttonType: Category) {
  //   setCategory(buttonType);
  //   if (buttonType === "business") {
  //     setCategory(buttonType);
  //     setTimeout(() => {
  //       setShowListingQuestion(true);
  //     }, 1500);
  //   }
  // }

  function handleClick(buttonType: Category) {
    setCategory(buttonType);
    if (buttonType === "business") {
      setTimeout(() => {
        setShowListingQuestion(true);
      }, 1500);
    }
  }

  function inactiveListingClick() {
    if (showInactiveDetails) {
      setShowInactiveDetails(false);
      setShowDumbQuestion(false);
      setDumb(false);
    } else {
      setShowInactiveDetails(true);
      setTimeout(() => {
        setShowDumbQuestion(true);
      }, 1500);
    }
  }

  function handleDumbClick() {
    setDumb(!dumb);
  }

  return (
    <div className="PricingPage flex w-[75%] max-w-[1600px] flex-col self-center p-14 pb-4">
      <div className="PricingTitleContainer flex flex-col self-start text-left">
        <h1 className="PricingTitle">our straightforward pricing:</h1>
        <p className="PricingSubtitle italic">
          because that&apos;s how all pricing should be
        </p>
      </div>
      <div className="PricingOptions flex gap-12 self-center pt-12">
        <SiteButton
          aria="features for businesses"
          size="large"
          variant="filled"
          colorScheme="b3"
          addClasses="px-14"
          onClick={() => handleClick("business")}
        >
          for businesses
        </SiteButton>
        <SiteButton
          aria="features for job seekers"
          size="large"
          variant="filled"
          colorScheme="c4"
          addClasses="px-14"
          onClick={() => handleClick("individual")}
        >
          for job-seekers
        </SiteButton>
      </div>

      <div className="PricingDetails flex gap-12 self-center pt-12">
        {/* individual pricing details */}
        {category === "individual" && (
          <InfoBox
            aria="individual pricing"
            variant="filled"
            colorScheme="c4"
            textSize="medium"
            className="BusinessPricing self-end"
            addClasses="self-start text-center py-10 leading-6 mb-8"
          >
            <p className="PricingDetails py-2">
              Our pricing model is pay-what-you-want!
            </p>
            <p className="PricingDetails py-2 font-medium italic">
              We know our site and the common-sense tools it offers are
              valuable, but we are all too familiar with the fact that often
              those who most need the tools are unable to afford them.
            </p>
            <p className="PricingDetails py-2">
              That&apos;s why we&apos;re making the amount up to you!
            </p>
            <p className="PricingDetails py-2">
              Every single job-seeker who uses our site has access to all our
              features, despite what their budget might look like.
            </p>
          </InfoBox>
        )}

        {/* business pricing details */}
        {category === "business" && (
          <div className="BusinessInfo">
            <InfoBox
              aria="business pricing"
              variant="filled"
              colorScheme="b3"
              textSize="medium"
              addClasses="self-start text-center py-10 leading-6 mb-8"
              className="BusinessPricing"
            >
              <p className="PricingDetail">
                We have a no-nonsense flat-rate pricing:
              </p>
              <p className="PricingDetail py-2">
                $400/month for each active job listing
              </p>
              <p className="PricingDetail font-medium italic">
                This includes our qualified applicant filtering and integrated
                Application Management System.
              </p>
            </InfoBox>
            <div
              className={`transition-opacity duration-500 ease-in-out ${showListingQuestion ? "opacity-100" : "opacity-0"}`}
            >
              <SiteButton
                aria="inactive job question"
                variant="filled"
                colorScheme="f3"
                onClick={() => setDumb(!dumb)}
                addClasses="px-8"
              >
                what if a job listing is inactive?
              </SiteButton>
            </div>

            <div className="PricingDetailsContainer flex flex-row-reverse items-center justify-between">
              <div className="InactiveDetailsContainer flex flex-col self-end">
                {showInactiveDetails && (
                  <InfoBox
                    aria="inactive job details"
                    variant="filled"
                    colorScheme="f3"
                    textSize="small"
                    addClasses="mt-8 text-center max-w-96 self-end py-10 px-14"
                  >
                    {pricingDetails.inactiveJobDetails.map((detail, index) => (
                      <p key={index} className="mb-2">
                        {detail}
                      </p>
                    ))}
                  </InfoBox>
                )}
                <div
                  className={`self-end pt-8 transition-opacity duration-500 ease-in-out ${showDumbQuestion ? "opacity-100" : "opacity-0"}`}
                >
                  <SiteButton
                    aria="inactive job question"
                    variant="filled"
                    colorScheme="a5"
                    onClick={handleDumbClick}
                    addClasses="px-8"
                  >
                    {dumb
                      ? "nevermind, I was just being silly."
                      : "...but what if I want to have a job post without actually hiring?"}
                  </SiteButton>
                </div>
              </div>
              {dumb && (
                <Image
                  width={200}
                  height={100}
                  alt="dumb"
                  src="/wait-what.gif"
                  className="mr-12 self-end rounded-3xl drop-shadow-lilac"
                ></Image>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
