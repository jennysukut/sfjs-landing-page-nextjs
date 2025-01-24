import Image from "next/image";
import SiteButton from "@/components/siteButton";
import { useState } from "react";
export function AmsDetails() {
  const [clickedButton, setClickedButton] = useState("jobSeeker");
  return (
    <div
      className={`AmsDetails -mr-8 -mt-4 mb-14 flex flex-col gap-4 self-center`}
    >
      <div className="ButtonOptions flex gap-4">
        <SiteButton
          variant="hollow"
          colorScheme="b2"
          aria="test"
          onClick={() => setClickedButton("jobSeeker")}
        >
          for job seekers
        </SiteButton>
        <SiteButton
          variant="hollow"
          colorScheme="c1"
          aria="test"
          onClick={() => setClickedButton("business")}
        >
          for businesses
        </SiteButton>
      </div>
      {clickedButton === "jobSeeker" && (
        <Image
          width={800}
          height={445}
          alt="two-way application manager"
          src="/ams-screenshot.svg"
          className={`rounded-3xl border-2 border-jade align-middle drop-shadow-jade`}
        ></Image>
      )}

      <ul className="Details ml-8 mt-3 list-disc">
        <li className="item">details about the ams here</li>
        <li className="item">some more info about it</li>
      </ul>
    </div>
  );
}
