import Image from "next/image";
import SiteButton from "@/components/siteButton";
import { useState } from "react";
import InfoBox from "@/components/infoBox";

export function HumanTechDetails() {
  return (
    <div className="HumanTechSection -mt-6 flex flex-col">
      <div className="humanTechDetails flex flex-wrap items-center justify-center gap-6 text-center">
        <InfoBox
          variant="filled"
          colorScheme="f1"
          aria="no resumes"
          size="small"
        >
          no resumes
        </InfoBox>
        <InfoBox
          variant="filled"
          colorScheme="b3"
          aria="no resumes"
          size="small"
        >
          realistic expectations
        </InfoBox>
        <InfoBox
          variant="filled"
          colorScheme="c1"
          aria="no resumes"
          size="small"
        >
          ease of mind
        </InfoBox>
        <InfoBox
          variant="filled"
          colorScheme="d1"
          aria="no resumes"
          size="small"
        >
          {`10-50 applications per job listing`}
        </InfoBox>
        <InfoBox
          variant="filled"
          colorScheme="b4"
          aria="no resumes"
          size="small"
        >
          {`mood-boosting colors`}
        </InfoBox>
        <InfoBox
          variant="filled"
          colorScheme="b6"
          aria="no resumes"
          size="small"
        >
          intuitive design
        </InfoBox>
        <InfoBox
          variant="filled"
          colorScheme="c4"
          aria="no resumes"
          size="small"
        >
          daily application limits
        </InfoBox>
        <InfoBox
          variant="filled"
          colorScheme="d4"
          aria="no resumes"
          size="small"
        >
          {`no ghosting`}
        </InfoBox>
        <InfoBox
          variant="filled"
          colorScheme="f3"
          aria="no resumes"
          size="small"
        >
          {`descrimination-curbing details`}
        </InfoBox>
        <InfoBox
          variant="filled"
          colorScheme="e6"
          aria="no resumes"
          size="small"
        >
          {`people-over-profits structure`}
        </InfoBox>
        <InfoBox
          variant="filled"
          colorScheme="e5"
          aria="no resumes"
          size="small"
        >
          {`all-human interactions`}
        </InfoBox>
        <InfoBox
          variant="filled"
          colorScheme="c2"
          aria="no resumes"
          size="small"
        >
          {`human-focused profiles`}
        </InfoBox>
        <InfoBox
          variant="filled"
          colorScheme="c5"
          aria="no resumes"
          size="small"
        >
          {`respect for people's time + attention + data`}
        </InfoBox>
      </div>
      <p className="excerpt ml-14 mt-14 max-w-[45vw]">
        {` We treat everyone like a real human, never like a number, simple data,
        or way to boost our bottom dollar. We believe this is the least we can
        do, and the least you deserve.`}
      </p>
    </div>
  );
}
