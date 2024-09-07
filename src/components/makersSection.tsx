"useclient";

import SiteButton from "./siteButton";
import SiteLabel from "./siteLabel";
import { useState } from "react";
import { makersInfo } from "@/lib/makersInfo";
import getRandomMakerDetails from "@/utils/getRandomMaker";
import { MakerInfoType } from "@/lib/makersInfo";

export default function MakersSection() {
  const [clickedMaker, setClickedMaker] = useState({});
  const [randomMakerDetail, setRandomMakerDetail] = useState("");

  function handleClick(maker: MakerInfoType) {
    setClickedMaker(maker);
    setRandomMakerDetail(getRandomMakerDetails(maker, randomMakerDetail));
  }

  //make a way to display a random line from the maker's details when their picture is clicked.
  //the random line should be displayed in a siteLabel

  return (
    <div className="MakersSection mt-32 flex flex-col">
      <div className="MakersTitles -translate-x-24">
        <h1 className="MakersTitle">our makers:</h1>
        <p className="MakersSubtitle mb-5 max-w-xl font-semibold italic">
          this is our group of amazing humans volunteering their time, energy,
          and expertise to make this idea a reality
        </p>
      </div>
      <div className="AllMakers mb-20 mt-14 flex max-w-4xl flex-wrap items-center justify-center gap-10 gap-x-16">
        {/* MakersButtonContainer */}
        {Object.entries(makersInfo).map(([key, maker]) => (
          <div
            key={key}
            className="MakersButtonContainer flex flex-col items-center"
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
        <SiteLabel variant="display" aria={randomMakerDetail}>
          {randomMakerDetail}
        </SiteLabel>
      )}
    </div>
  );
}
