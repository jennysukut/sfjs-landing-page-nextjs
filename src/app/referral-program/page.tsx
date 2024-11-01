"use client";

import { useState } from "react";
import { useModal } from "@/contexts/ModalContext";

import SiteButton from "@/components/siteButton";
import InfoBox from "@/components/infoBox";
import SignupModalCollaborator1 from "@/components/modals/signupModals/signupCollaborator1";
import SignupModalBusiness1 from "@/components/modals/signupModals/signupBusiness1";

export default function ReferralProgram() {
  const { showModal } = useModal();
  const [currentCategory, setCurrentCategory] = useState("prelaunch");
  const [currentType, setCurrentType] = useState("");

  return (
    <div className="ReferralProgramPage am:pb-4 flex w-[95vw] max-w-[1600px] flex-col items-center self-center p-10 sm:w-[75vw] sm:p-14">
      <div className="ReferralProgramTitle&Options flex flex-col items-center justify-center justify-items-center gap-6 xl:flex-row">
        <h1 className="ReferralProgramTitle text-right lg:text-left">
          our referral programs:
        </h1>
        <div className="buttonContainer mb-12 flex flex-col items-center gap-4 md:flex-row lg:gap-8">
          <SiteButton
            aria="prelaunch"
            variant="filled"
            size="large"
            colorScheme="b5"
            isSelected={currentCategory === "prelaunch"}
            onClick={() => {
              setCurrentCategory("prelaunch");
            }}
          >
            pre-launch & beta phase
          </SiteButton>
          <SiteButton
            aria="postlaunch"
            variant="filled"
            size="large"
            colorScheme="d3"
            isSelected={currentCategory === "postlaunch"}
            onClick={() => {
              setCurrentCategory("postlaunch");
            }}
          >
            post-launch
          </SiteButton>
        </div>
      </div>
      <div className="PreLaunchOptions mb-12 flex flex-col gap-4 lg:flex-row lg:gap-8">
        <SiteButton
          aria="individual"
          variant="filled"
          colorScheme="b3"
          size="large"
          addClasses="w-[18rem]"
          isSelected={currentType === "individual"}
          onClick={() => setCurrentType("individual")}
        >
          for individuals
        </SiteButton>
        <SiteButton
          aria="business"
          variant="filled"
          colorScheme="e6"
          size="large"
          addClasses="w-[18rem]"
          isSelected={currentType === "business"}
          onClick={() => setCurrentType("business")}
        >
          for businesses
        </SiteButton>
      </div>
      {/* pre-launch details for individuals*/}
      {currentCategory === "prelaunch" && currentType === "individual" ? (
        <div className="PreLaunchDetails flex flex-col gap-8">
          <InfoBox
            variant="hollow"
            aria="details"
            width="extraWide"
            addClasses="leading-8 text-center"
          >
            <p className="detail">
              {`During our Development & Beta Phase, we have a special referral program available to individuals! It’s called our Straightforward Sharing Program and it works alongside our Crowdfunding Campaign.`}
            </p>
          </InfoBox>
          <InfoBox
            variant="hollow"
            aria="details"
            addClasses="leading-8"
            width="extraWide"
          >
            <p className="detail pt-4">{`In the Straightforward Sharing Program, you spread the word about this new platform with businesses. If they decide to take advantage of our crowdfunding rewards, you get 10% of the amount they’ve invested! `}</p>
            <p className="detail pt-4 text-center italic">{`This means anywhere from $25 to $5,000, depending on how many future jobs the business wants to secure. `}</p>
            <p className="detail pt-4">{`If you sign up to be a part of this program, you’ll get to meet with our fantastic Co-Founder Jacob to make sure you’re a good fit and we’ll provide you with a referral code and contract to get started!`}</p>
          </InfoBox>
          <div className="ButtonContainer mb-40 self-end">
            <SiteButton
              variant="hollow"
              colorScheme="f1"
              aria="referral button"
              size="large"
              onClick={() => showModal(<SignupModalCollaborator1 />)}
            >
              join the program
            </SiteButton>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* pre-launch details for businesses*/}
      {currentCategory === "prelaunch" && currentType === "business" ? (
        <div className="PreLaunchDetails flex flex-col gap-8">
          <InfoBox
            variant="hollow"
            aria="details"
            width="extraWide"
            addClasses="leading-8 text-center flex flex-col items-center"
          >
            <p className="detail">
              {`During our Development & Beta Phase, we have two special offers for all businesses:`}
            </p>
            <p className="detail pt-4 text-center">
              {`1/2 Off Pre-Purchased Job Posts bought in our Crowdfunding Campaign and our Business Referral Program.`}
            </p>
          </InfoBox>
          <InfoBox
            variant="hollow"
            aria="details"
            addClasses="leading-8 flex gap-x-8 items-center"
            width="extraWide"
          >
            <h2 className="detail pt-4">{`Half-Off Option:`}</h2>
            <p className="detail pt-4">{`The ½ Off Option is part of our Crowdfunding Campaign and you can get anywhere from 1 to a Lifetime of Job Listings at this price! `}</p>
          </InfoBox>
          <InfoBox
            variant="hollow"
            aria="details"
            addClasses="leading-8 flex items-center gap-x-8"
            width="extraWide"
          >
            <h2 className="detail pt-4">{`Business Referral Program:`}</h2>
            <div className="TextGroup">
              <p className="detail pt-4">{`Our Business Referral Program is something you can sign up for if you’re a part of our Beta Test!`}</p>
              <p className="detail pt-4">{`Once you’ve had a chance to try our platform, you can refer other businesses to purchase Job-Listings within our Crowdfunding Campaign and you’ll get $100 credit towards a future job post with us.`}</p>
              <p className="detail pt-4">{`You’ll get a referral code if you’re selected to be part of our group of Business Beta Testers.`}</p>
            </div>
          </InfoBox>

          <div className="ButtonContainer self-end">
            <SiteButton
              variant="hollow"
              colorScheme="c5"
              aria="business referral button"
              size="large"
              onClick={() => showModal(<SignupModalBusiness1 />)}
            >
              apply to be a beta tester
            </SiteButton>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* post-launch details for individuals*/}
      {currentCategory === "postlaunch" && currentType === "individual" ? (
        <div className="PostLaunchDetails flex flex-col gap-8">
          <InfoBox
            variant="hollow"
            aria="details"
            width="extraWide"
            addClasses="leading-8 text-center"
          >
            <p className="detail">
              {`After our launch, we will continue our referral program, transitioning from our Crowdfunding Campaign to a focus on referrals for Job Listings. `}
            </p>
          </InfoBox>
          <InfoBox
            variant="hollow"
            aria="details"
            addClasses="leading-8"
            width="extraWide"
          >
            <p className="detail pt-4 text-center italic">{`We’ll be paying our referral partners $100 for each Job Post they bring to our Straightforward Job Site!`}</p>
            <p className="detail pt-4">{`This 25% commission is a hefty one that reflects our care for people and our desire to find ways to help support more humans with our intentional + human-centric platform.`}</p>
          </InfoBox>
          <div className="ButtonContainer self-end">
            <SiteButton
              variant="hollow"
              colorScheme="f1"
              aria="referral button"
              size="large"
              onClick={() => showModal(<SignupModalCollaborator1 />)}
            >
              become a referral partner
            </SiteButton>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* post-launch details for businesses*/}
      {currentCategory === "postlaunch" && currentType === "business" ? (
        <div className="PostLaunchDetails flex flex-col gap-8">
          <InfoBox
            variant="hollow"
            aria="details"
            width="extraWide"
            addClasses="leading-8 text-center flex flex-col items-center"
          >
            <p className="detail">
              {`Once we’re finished with our Beta Test, we’ll launch this Straightforward Job Site and open it for all businesses and job-seekers to use!`}
            </p>
            <p className="detail pt-4 text-left">
              {`During this time, businesses can sign up to be a Business Referral Partner and can gain credits to their account for bringing other businesses on board. `}
            </p>
            <p className="detail pt-4 italic">
              {`When the business posts their first job listing, you’ll get $100 credit to use on future job posts of your own!`}
            </p>
          </InfoBox>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
