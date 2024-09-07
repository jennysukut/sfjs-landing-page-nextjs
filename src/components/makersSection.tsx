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
            addClasses="mb-4"
            addImage="bg-lime"
            onClick={() => handleClick(maker.firstName)}
          ></SiteButton>
        </div>
        <p>{maker.firstName}</p>
        <p>{maker.lastName}</p>

        {clickedMaker === maker.firstName && (
          <ul>
            {maker.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        )}
      </div>
    ));
  }

  return (
    <div className="MakersSection mt-32 flex flex-col">
      <div className="MakersTitles -translate-x-36">
        <h1 className="MakersTitle">our makers:</h1>
        <p className="MakersSubtitle mb-5 max-w-xl font-semibold italic">
          this is our group of amazing humans volunteering their time, energy,
          and expertise to make this idea a reality
        </p>
      </div>

      <div className="AllMakers flex max-w-2xl flex-wrap items-center justify-center gap-8">
        {displayMakersInfo()}
      </div>

      {/* <SiteButton
        variant="avatar"
        size="largeCircle"
        colorScheme="b1"
        aria="test"
        addImage="bg-[url('/jacob.svg')] bg-cover"
      ></SiteButton> */}
    </div>
  );
}
