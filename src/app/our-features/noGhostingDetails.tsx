import Image from "next/image";
import SiteButton from "@/components/siteButton";
import { useState } from "react";
import InfoBox from "@/components/infoBox";

export function NoGhostingDetails() {
  const noGhostingDetails = [
    "Simply put, there are too many applications and not enough time to respond to them all.",
    "The use of ATS systems and their AI makes the resume review process impersonal, and facilitates less human interaction in the hiring process overall.",
    "There's no real incentive to for hiring staff and applicants to respond to eachother.",
    "We've forgotten that hiring is a human process that takes place between people who deserve thoughtful and honest communication, from both sides.",
  ];

  return (
    <div
      className={`NoGhostingDetails -mb-48 -mt-14 ml-14 flex flex-col items-center gap-6 self-center`}
    >
      <InfoBox aria="ghosting" variant="filled" colorScheme="b3">
        Ghosting is rampant. But do we know why?
      </InfoBox>
      <InfoBox
        variant="filled"
        aria="stop it"
        addClasses="relative z-20 self-end -mt-12"
        size="small"
        colorScheme="b5"
      >
        {`/ what can we do to mitigate it?`}
      </InfoBox>
      <InfoBox variant="hollow" aria="reasons" size="thin">
        <h2 className="Title font-mono italic">{`WHY GHOSTING HAPPENS:`}</h2>
        <ul className="Details mb-4 ml-2 mt-8 flex list-disc flex-col gap-4 text-emerald">
          {noGhostingDetails.map((detail: string, index: number) => {
            return <li key={index}>{detail}</li>;
          })}
        </ul>{" "}
      </InfoBox>
    </div>
  );
}
