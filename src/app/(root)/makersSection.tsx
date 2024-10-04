"useclient";

import { useState } from "react";
import { useModal } from "@/contexts/ModalContext";
import { motion } from "framer-motion";

import Link from "next/link";
import SiteButton from "@/components/siteButton";
import SiteLabel from "@/components/siteLabel";
import MotionContainer from "@/components/motionContainer";
import ButtonContainer from "@/components/buttonContainer";
import SignupOptionsModal from "@/components/modals/signupModals/signupOptionsModal";
import SignupModalCollaborator1 from "@/components/modals/signupModals/signupCollaborator1";
import getRandomMakerDetails from "@/utils/getRandomMaker";
import HelpUsModal from "@/components/modals/helpUsModal";

import { makersInfo } from "@/lib/makersInfo";
import { MakerInfoType } from "@/lib/makersInfo";

const makersArray = Object.entries(makersInfo);

export default function MakersSection() {
  const [clickedMaker, setClickedMaker] = useState({});
  const [randomMakerDetail, setRandomMakerDetail] = useState("");
  const { showModal } = useModal();

  function handleClick(maker: MakerInfoType) {
    setClickedMaker(maker);
    setRandomMakerDetail(getRandomMakerDetails(maker, randomMakerDetail));
  }

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

  //make a way to display a random line from the maker's details when their picture is clicked.
  //the random line should be displayed in a siteLabel

  return (
    <section className="MakersSection flex w-full flex-col self-center border-b-2 border-t-2 border-olive/20 pt-16 sm:pt-20">
      <div className="MakersContainer">
        <div className="MakersTitles ml-4 sm:ml-16">
          <h1 className="MakersTitle">our makers:</h1>
          <p className="MakersSubtitle mb-5 max-w-xl font-semibold italic">
            this is our group of amazing humans volunteering their time, energy,
            and expertise to make this idea a reality
          </p>
        </div>
        <MotionContainer addClasses="AllMakers mb-20 mt-14 flex max-w-4xl flex-wrap items-center justify-center gap-10  gap-x-10 sm:gap-x-16">
          {/* MakersButtonContainer */}
          {makersArray.map(([key, maker]) => (
            <motion.div
              key={key}
              variants={motionItem}
              className="MakerPicturesContainer flex flex-col items-center"
            >
              <div className="ButtonContainer flex">
                <SiteButton
                  variant="avatar"
                  size="largeCircle"
                  colorScheme="b1"
                  aria="test"
                  addClasses={`${maker.shadow} mb-4`}
                  addImage={`${maker.img}`}
                  onClick={() => handleClick(maker)}
                ></SiteButton>
              </div>
              <div className="MakerName flex flex-col items-center pl-2">
                <p>{maker.firstName}</p>
                <p>{maker.lastName}</p>
              </div>
            </motion.div>
          ))}
        </MotionContainer>

        {randomMakerDetail && (
          <SiteLabel
            variant="display"
            aria={randomMakerDetail}
            addClasses="sm:ml-16 max-w-[600px]"
          >
            {randomMakerDetail}
          </SiteLabel>
        )}
      </div>

      <ButtonContainer addClasses="ButtonContainer mb-20 mt-5 flex max-w-2xl flex-col items-end justify-end gap-4 sm:gap-8 self-end">
        <SiteButton
          aria="help support us"
          size="large"
          variant="filled"
          colorScheme="c4"
          addClasses="px-10"
          onClick={() => showModal(<HelpUsModal />)}
        >
          help this bunch of hooligans{" "}
        </SiteButton>
        <div className="OtherButtons flex flex-col items-end justify-end gap-6 sm:flex-row">
          <SiteButton
            aria="collaborate"
            size="large"
            variant="filled"
            colorScheme="b4"
            addClasses="px-14"
            onClick={() => showModal(<SignupModalCollaborator1 />)}
          >
            collaborate with us
          </SiteButton>
          <SiteButton
            aria="sign up"
            size="large"
            variant="filled"
            colorScheme="e6"
            onClick={() => showModal(<SignupOptionsModal />)}
          >
            sign up!{" "}
          </SiteButton>
        </div>
      </ButtonContainer>
    </section>
  );
}
