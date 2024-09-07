"useclient";

import SiteButton from "./siteButton";
import SiteLabel from "./siteLabel";
import { useState } from "react";
import Image from "next/image";
import { makersInfo } from "@/lib/makersInfo";

export default function MakersSection() {
  // function displayMakers() {
  //   const ourMakers = makersInfo.map((maker) => {
  //     console.log(maker);
  //   });
  // }  }

  return (
    <div className="MakersSection mt-32 flex flex-col">
      <div className="MakersTitles -translate-x-36">
        <h1 className="MakersTitle">our makers:</h1>
        <p className="MakersSubtitle mb-5 max-w-xl font-semibold italic">
          this is our group of amazing humans volunteering their time, energy,
          and expertise to make this idea a reality
        </p>
      </div>

      <SiteButton
        variant="avatar"
        size="largeCircle"
        colorScheme="b1"
        aria="test"
        addImage="bg-[url('/jacob.svg')] bg-cover"
      ></SiteButton>
    </div>
  );
}
