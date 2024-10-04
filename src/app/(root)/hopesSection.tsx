"useclient";

import { useModal } from "@/contexts/ModalContext";

import Link from "next/link";
import InfoBox from "@/components/infoBox";
import SiteButton from "@/components/siteButton";
import MotionContainer from "@/components/motionContainer";
import ButtonContainer from "@/components/buttonContainer";
import SignupOptionsModal from "@/components/modals/signupModals/signupOptionsModal";
import HelpUsModal from "@/components/modals/helpUsModal";

export default function HopesSection() {
  const { showModal } = useModal();

  return (
    <section className="HopesSection flex w-full flex-col items-center p-4 pb-8 sm:p-20">
      <div className="HopesContainer flex flex-col">
        <div className="HopesTitleContainer w-full sm:p-8">
          <h1 className="HopeTitle text-start">our hopes:</h1>
          <p className="HopeSubtitle mb-2 max-w-xl font-semibold italic sm:mb-12">
            we have big ideals and even bigger dreams
          </p>
        </div>
        <MotionContainer addClasses="Change Container flex flex-col items-center">
          <InfoBox
            aria="change perspectives"
            variant="filled"
            colorScheme="f3"
            addClasses="rounded-full text-sm text-center self-center"
            size="small"
          >
            to change perspectives in the current work landscape
          </InfoBox>
          <div className="HopesDetails flex flex-col gap-8 sm:flex-row">
            <div className="infoBoxesLeft mt-1 flex max-w-sm flex-col items-center justify-center gap-8 py-4 sm:items-end sm:py-6">
              <div className="MotionContainer">
                <InfoBox
                  aria="change perspectives"
                  variant="filled"
                  colorScheme="d4"
                  addClasses="text-sm text-center py-8"
                >
                  to show how exciting & successful people-focused, conscious,
                  transparent businesses can be{" "}
                </InfoBox>
              </div>
              <div className="MotionContainer">
                <InfoBox
                  aria="change perspectives"
                  variant="filled"
                  colorScheme="f4"
                  size="small"
                  addClasses="rounded-full text-sm text-center"
                >
                  to write our own stories
                </InfoBox>
              </div>
            </div>
            <div className="infoBoxesRight -mt-8 flex max-w-sm flex-col-reverse items-center justify-center gap-8 py-4 sm:flex-col sm:items-start sm:py-6">
              <div className="MotionContainer">
                <InfoBox
                  aria="change perspectives"
                  variant="filled"
                  colorScheme="c5"
                  size="small"
                  addClasses="text-sm rounded-full text-center"
                >
                  to empower individuals
                </InfoBox>
              </div>
              <div className="MotionContainer">
                <InfoBox
                  aria="change perspectives"
                  variant="filled"
                  colorScheme="e6"
                  addClasses=" text-sm text-center py-8"
                >
                  to make human decency & honest communication a standard
                  business practice
                </InfoBox>
              </div>
            </div>
          </div>
        </MotionContainer>

        <ButtonContainer addClasses="ButtonContainer mt-8 sm:mt-24 flex-col sm:flex-row gap-6 self-start sm:pl-20">
          <SiteButton
            aria="support us"
            size="large"
            variant="filled"
            colorScheme="c4"
            addClasses="px-14"
            onClick={() => showModal(<HelpUsModal />)}
          >
            how can i help?
          </SiteButton>
          <SiteButton
            aria="sign up"
            size="large"
            variant="filled"
            colorScheme="f1"
            addClasses="px-10"
            onClick={() => showModal(<SignupOptionsModal />)}
          >
            sign me up!
          </SiteButton>
        </ButtonContainer>
      </div>
    </section>
  );
}
