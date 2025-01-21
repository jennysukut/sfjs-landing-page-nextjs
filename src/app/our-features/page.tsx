"use client";

import clsx from "clsx";
import SiteButton from "@/components/siteButton";
import InfoBox from "@/components/infoBox";
import { landingPageText } from "@/lib/siteCopy/landingPageText";
import { ButtonColorOption } from "@/lib/stylingData/buttonColors";
import { useState } from "react";
import ResponsiveGrid from "@/components/responsiveGrid";
type Category = "individual" | "business";
import ExampleScroller from "@/components/scroller";
export default function OurFeaturesPage() {
  const features = landingPageText.features;
  const [category, setCategory] = useState("individual" as Category);
  const [detail, setDetail] = useState("none");

  function detailClick(name: string) {
    if (detail === name) {
      setDetail("");
    } else {
      setDetail(name);
    }
  }

  const selectedFeature = features[category].find(
    (feature) => feature.title === detail,
  );

  return (
    <div className="FeaturesPage flex w-[85%] max-w-[1600px] flex-col items-center justify-center gap-10 self-center">
      {/* Make a grid here that has the title inside an info box with special formatting? Or we can have the title plain, surrounded by info boxes? */}
      {/* We could alt/also make two columns similiar to the profiles, with the title at the top of the left column and the other details in the right column? */}

      <div className="TitleSection self-start">
        <h1
          className={`Title inline-block font-serif text-[3rem] font-semibold tracking-normal text-midnight`}
        >
          <span className="Title font-sans text-[2.5rem]">our </span>
          features:
        </h1>
      </div>
      <ExampleScroller />
      {/* <div className={`FeatureButtons flex flex-wrap justify-center gap-6`}>
        {features[category].map(({ colorScheme, title }) => {
          return (
            <SiteButton
              aria={title}
              variant="hollow"
              size="superLarge"
              colorScheme={colorScheme as ButtonColorOption}
              onClick={() => detailClick(title)}
              name={title}
              key={`button-${title}`}
            >
              {title}
            </SiteButton>
          );
        })}
      </div> */}
    </div>
  );
}
