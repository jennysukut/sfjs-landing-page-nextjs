"useclient";

import SiteButton from "./siteButton";
import SiteLabel from "./siteLabel";
import { useState } from "react";
import Image from "next/image";
import { makersInfo } from "@/lib/makersInfo";

export default function MakersSection() {
  const [clickedMaker, setClickedMaker] = useState("");

  function handleClick(maker: string) {
    setClickedMaker(maker);
  }

  function displayMakersInfo() {
    return Object.entries(makersInfo).map(([key, maker]) => (
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
            onClick={() => handleClick(maker.firstName)}
          ></SiteButton>
        </div>
        <div className="MakerName flex flex-col items-center pl-2">
          <p>{maker.firstName}</p>
          <p>{maker.lastName}</p>
        </div>

        {/* {clickedMaker === maker.firstName && (
          <ul>
            {maker.details.map((detail) => (
              <SiteLabel variant="display" aria={detail} key={detail}>
                {detail}
              </SiteLabel>
            ))}
          </ul>
        )} */}
      </div>
    ));
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
        {displayMakersInfo()}
      </div>
      {/*here's where you'll put the detail label on image/button click*/}
    </div>
  );
}
