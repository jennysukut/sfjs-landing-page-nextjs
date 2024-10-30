"use client";

import { useModal } from "@/contexts/ModalContext";
import { motion } from "framer-motion";

import InfoBox from "@/components/infoBox";
import SiteButton from "@/components/siteButton";
import BetaTesterOptionsModal from "@/components/modals/signupModals/signupOptionsBetaTesters";
import MotionContainer from "@/components/motionContainer";

export default function BetaTesting() {
  const { showModal } = useModal();
  const motionItem = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        y: {
          type: "spring",
          duration: 0.8,
        },
        opacity: {
          duration: 0.5,
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <div className="BetaTestingPage flex w-[95vw] max-w-[1600px] flex-col gap-8 self-center p-10 pb-4 sm:w-[75vw] sm:p-14">
      <h1 className="BetaTestingTitle">our beta testing details:</h1>
      <p className="BetaTestingSubtitle -mt-4 w-[70%] text-left text-sm italic sm:w-[50vw] sm:text-left sm:text-lg">
        {`once we've finished initial development for our platform, we will launch an exclusive beta testing phase!`}
      </p>
      <MotionContainer addClasses="BetaTestingDetails w-[60vw] mb-14 justify-center flex flex-col self-center -mt-12">
        <InfoBox
          variant="filled"
          aria="free jobs"
          colorScheme="f1"
          addClasses="justify-self-end my-4"
        >
          {`Every Job Listing in our Beta Testing Phase is Free!`}
        </InfoBox>
        <InfoBox
          variant="filled"
          aria="job seekers beta"
          colorScheme="c4"
          addClasses="justify-self-start text-center leading-8 my-4"
        >
          <p className="detail">
            {`Job-Seekers in our Beta Phase will get early access in exchange for their feedback about the process.`}
          </p>
          <p className="detail pt-4">
            {`They’ll be able to access our job board, build their profile, search + apply for jobs, track their applications, and communicate with businesses using our messaging system!`}
          </p>
          <p className="detail pt-4">
            {`We hope our beta test will be able to facilitate real hiring and raise the standard for job simple + human job-hunting can be!`}
          </p>
        </InfoBox>
        <InfoBox
          variant="filled"
          aria="business beta testing"
          colorScheme="b4"
          addClasses="justify-self-end mr-8 text-center leading-8 my-4"
        >
          <p className="detail pt-4">
            {`We will be selecting a handful of businesses to participate in our Beta Test, where they’ll be able to set up real job postings for free in exchange for their insights and testimonials!`}
          </p>
          <p className="detail pt-4">
            {`They'll be able to set up their business profile, post a job, and walk through the process of reviewing applications, sending messages, moving through hiring stages, and hopefully filling their positions in just a few weeks.`}
          </p>
          <p className="detail pt-4">
            {`We hope the simplicity and ease of using this Straightforward Job Site will revolutionize the landscape by bringing a wholesome experience to our fellow humans who hire.`}
          </p>
        </InfoBox>
      </MotionContainer>
      <div className="ButtonContainer mb-8 self-end">
        <SiteButton
          variant="filled"
          aria="signup"
          colorScheme="c5"
          size="large"
          addClasses="self-end"
          onClick={() => showModal(<BetaTesterOptionsModal />)}
        >
          sign up to become a beta tester!
        </SiteButton>
      </div>
    </div>
  );
}
