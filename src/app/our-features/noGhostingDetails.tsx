import Image from "next/image";
import SiteButton from "@/components/siteButton";
import { useState } from "react";
import InfoBox from "@/components/infoBox";

export function NoGhostingDetails() {
  const [details, setDetails] = useState("why");

  const noGhostingDetails = [
    "Simply put, there are too many applications and not enough time to respond to them all.",
    "The use of ATS systems and their AI makes the resume review process impersonal, and facilitates less human interaction in the hiring process overall.",
    "There's no real incentive to for hiring staff or applicants to respond to eachother.",
    "We've forgotten that hiring is a human process that takes place between people who deserve thoughtful and honest communication, from both sides.",
  ];

  const whatWeCanDo = [
    "Create transparency and accountability for job-seekers and hiring staff to communicate with eachother.",
    "Display ratings of businesses and applicants responsiveness.",
    "Focus on *connecting people* in the process, so they can communicate as kind, intentional humans.",
    "Offer response options to hiring staff & make job listings unable to be closed until each applicant gets a response.",
  ];

  return (
    <div
      className={`NoGhostingDetails -mb-10 -mt-14 ml-14 flex flex-col items-center gap-6 self-center`}
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
      <div className="Buttons my-0 -mb-2 flex gap-4 self-start">
        <SiteButton
          colorScheme="b3"
          variant="hollow"
          aria="why"
          onClick={() => setDetails("why")}
          isSelected={details === "why"}
        >
          why it happens
        </SiteButton>
        <SiteButton
          colorScheme="b6"
          variant="hollow"
          aria="how"
          onClick={() => setDetails("how")}
          isSelected={details === "how"}
        >
          {`how we're fixing it`}
        </SiteButton>
      </div>
      <InfoBox variant="hollow" aria="reasons" size="thin">
        {details === "why" && (
          <div className="WhyDetails">
            <h2 className="Title font-mono italic">{`WHY GHOSTING HAPPENS:`}</h2>
            <ul className="Details mb-4 ml-2 mt-8 flex list-disc flex-col gap-4 text-emerald">
              {noGhostingDetails.map((detail: string, index: number) => {
                return <li key={index}>{detail}</li>;
              })}
            </ul>
          </div>
        )}
        {details === "how" && (
          <div className="HowDetails">
            <h2 className="Title font-mono italic">{`WHAT WE'RE DOING ABOUT IT:`}</h2>
            <ul className="Details mb-4 ml-2 mt-8 flex list-disc flex-col gap-4 text-emerald">
              {whatWeCanDo.map((detail: string, index: number) => {
                return <li key={index}>{detail}</li>;
              })}
            </ul>
          </div>
        )}
      </InfoBox>
    </div>
  );
}
