import Image from "next/image";
import SiteButton from "@/components/siteButton";
import { useState } from "react";
import InfoBox from "@/components/infoBox";

export function AmsDetails() {
  const [clickedButton, setClickedButton] = useState("job seekers");

  const jobSeekersDetails = [
    "tracks every application you've submitted",
    "gives real-time updates on the status of your application",
    "you can communicate with businesses via messaging system",
    "schedule and track interviews",
  ];

  return (
    <div
      className={`AmsDetails -mr-8 -mt-8 mb-14 flex flex-row-reverse gap-6 self-center`}
    >
      <div className="ButtonsAndScreenshots flex flex-col gap-6">
        <div className="ButtonOptions flex gap-4">
          <SiteButton
            variant="hollow"
            colorScheme="b2"
            aria="test"
            onClick={() => setClickedButton("job seekers")}
            isSelected={clickedButton === "job seekers"}
          >
            for job seekers
          </SiteButton>
          <SiteButton
            variant="hollow"
            colorScheme="c1"
            aria="test"
            onClick={() => setClickedButton("businesses")}
            isSelected={clickedButton === "businesses"}
          >
            for businesses
          </SiteButton>
        </div>
        {clickedButton === "job seekers" && (
          // <Image
          //   width={600}
          //   height={445}
          //   alt="two-way application manager"
          //   src="/ams-screenshot.svg"
          //   className={`rounded-3xl border-2 border-jade align-middle drop-shadow-jade`}
          // ></Image>
          <video
            src="/ams-video.mp4"
            width={600}
            height={445}
            autoPlay
            className={`rounded-3xl border-2 border-jade align-middle drop-shadow-jade`}
          />
        )}
      </div>
      <div className="Details mt-8 max-w-[27vw]">
        <InfoBox variant="hollow" aria="ams details" size="thin">
          <h2 className="Title pb-1 text-lg text-midnight">
            Application Manager
          </h2>
          <p className="SubTitle italic text-olive">for {clickedButton}</p>
          {clickedButton === "job seekers" && (
            <ul className="Details ml-2 mt-3 flex list-disc flex-col gap-2">
              {jobSeekersDetails.map((detail: string, index: number) => {
                return <li key={index}>{detail}</li>;
              })}
            </ul>
          )}
          {/* <ul className="Details ml-2 mt-3 list-disc">
            <li className="item">details about the ams here</li>
            <li className="item">some more info about it</li>
          </ul> */}
        </InfoBox>
      </div>
    </div>
  );
}
