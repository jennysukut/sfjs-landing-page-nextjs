import Image from "next/image";
import SiteButton from "@/components/siteButton";
import { useState } from "react";
import InfoBox from "@/components/infoBox";

export function JobBoardDetails() {
  return (
    <div
      className={`JobBoardDetails -mb-48 -mt-14 ml-14 flex flex-col items-end gap-6 self-center`}
    >
      <div className="ButtonsAndScreenshots flex flex-col gap-6">
        <Image
          width={600}
          height={445}
          alt="JobBoard"
          src="/jobBoardSS.png"
          className={`rounded-3xl border-2 border-jade align-middle drop-shadow-jade`}
        ></Image>
      </div>
      <div className="Details mt-8 max-w-[26vw]">
        <InfoBox variant="hollow" aria="ams details" size="thin">
          <h2 className="Title pb-1 text-xl text-midnight">Job Board</h2>
          details go here
        </InfoBox>
      </div>
    </div>
  );
}
