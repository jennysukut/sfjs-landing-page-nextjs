"useclient";

import SiteButton from "@/components/siteButton";
import SiteLabel from "@/components/siteLabel";
import { useState } from "react";
import { makersInfo } from "@/lib/makersInfo";
import getRandomMakerDetails from "@/utils/getRandomMaker";
import { MakerInfoType } from "@/lib/makersInfo";
import Link from "next/link";
import { useModal } from "@/contexts/ModalContext";
import SignupOptionsModal from "@/components/modals/signupModals/signupOptionsModal";

const makersArray = Object.entries(makersInfo);

export default function MakersSection() {
  const [clickedMaker, setClickedMaker] = useState({});
  const [randomMakerDetail, setRandomMakerDetail] = useState("");
  const { showModal } = useModal();

  function handleClick(maker: MakerInfoType) {
    setClickedMaker(maker);
    setRandomMakerDetail(getRandomMakerDetails(maker, randomMakerDetail));
  }

  //make a way to display a random line from the maker's details when their picture is clicked.
  //the random line should be displayed in a siteLabel

  return (
    <section className="MakersSection flex w-full flex-col self-center border-b-2 border-t-2 border-olive/20 pt-20">
      <div className="MakersContainer">
        <div className="MakersTitles ml-16">
          <h1 className="MakersTitle">our makers:</h1>
          <p className="MakersSubtitle mb-5 max-w-xl font-semibold italic">
            this is our group of amazing humans volunteering their time, energy,
            and expertise to make this idea a reality
          </p>
        </div>
        <div className="AllMakers mb-20 mt-14 flex max-w-4xl flex-wrap items-center justify-center gap-10 gap-x-16">
          {/* MakersButtonContainer */}
          {makersArray.map(([key, maker]) => (
            <div
              key={key}
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

              {clickedMaker === maker.lastName && (
                <ul>
                  <SiteLabel
                    variant="display"
                    aria={randomMakerDetail}
                    key={randomMakerDetail}
                  >
                    {randomMakerDetail}
                  </SiteLabel>
                </ul>
              )}
            </div>
          ))}
        </div>
        {randomMakerDetail && (
          <SiteLabel
            variant="display"
            aria={randomMakerDetail}
            addClasses="max-w-[600px]"
          >
            {randomMakerDetail}
          </SiteLabel>
        )}
      </div>
      <div className="ButtonContainer mb-20 mt-5 flex max-w-2xl flex-col items-end justify-end gap-8 self-end">
        <Link href={"/support"}>
          <SiteButton
            aria="help support us"
            size="large"
            variant="filled"
            colorScheme="c4"
            addClasses="px-10"
          >
            help this bunch of hooligans{" "}
          </SiteButton>
        </Link>
        <div className="OtherButtons flex justify-end gap-4">
          <SiteButton
            aria="collaborate"
            size="large"
            variant="filled"
            colorScheme="b4"
            addClasses="px-14"
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
      </div>
    </section>
  );
}
