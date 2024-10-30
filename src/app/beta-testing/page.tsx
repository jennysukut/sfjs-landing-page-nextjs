"use client";

import { useModal } from "@/contexts/ModalContext";

import InfoBox from "@/components/infoBox";
import SiteButton from "@/components/siteButton";
import SignupOptionsModal from "@/components/modals/signupModals/signupOptionsModal";
import MotionContainer from "@/components/motionContainer";

export default function BetaTesting() {
  const { showModal } = useModal();
  return (
    <div className="BetaTestingPage flex w-[95vw] max-w-[1600px] flex-col gap-8 self-center p-10 pb-4 sm:w-[75vw] sm:p-14">
      <h1 className="BetaTestingTitle">our beta testing details:</h1>
      <p className="BetaTestingSubtitle -mt-4 w-[70%] text-left text-sm italic sm:w-[50vw] sm:text-left sm:text-lg">
        {`once we've finished initial development for our platform, we will launch an exclusive beta testing phase!`}
      </p>
      <MotionContainer addClasses="BetaTestingDetails mb-14 justify-center">
        <div className="InfoBoxContainer flex w-[70vw] flex-col gap-10">
          <InfoBox
            variant="filled"
            aria="free jobs"
            colorScheme="f1"
            addClasses="self-start"
          >
            {`Every Job Listing in our Beta Testing Phase is Free!`}
          </InfoBox>
          <InfoBox
            variant="filled"
            aria="job seekers beta"
            colorScheme="c4"
            addClasses="self-end text-center leading-6"
          >
            <p className="detail">
              {`Job-Seekers in our Beta Phase will get early access in exchange for helpful feedback!`}
            </p>
            <p className="detail pt-4">
              {`They’ll be able to access our platform, build their profile, search and apply for jobs!`}
            </p>
          </InfoBox>
          <InfoBox
            variant="filled"
            aria="business beta testing"
            colorScheme="b3"
            addClasses="ml-14 text-center leading-6"
          >
            {`We will be selecting a handful of businesses to participate in our Beta Test, where they’ll be able to set up real job postings for free in exchange for their insights in the process!`}
          </InfoBox>
        </div>
      </MotionContainer>
      <div className="ButtonContainer mb-8 mt-4 self-end">
        <SiteButton
          variant="filled"
          aria="signup"
          colorScheme="b4"
          size="large"
          addClasses="self-end"
          onClick={() => showModal(<SignupOptionsModal />)}
        >
          sign up and become a beta tester
        </SiteButton>
      </div>
    </div>
  );
}
