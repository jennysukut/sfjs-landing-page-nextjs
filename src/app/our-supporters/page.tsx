"use client";

import SiteButton from "@/components/siteButton";
import client from "@/lib/apollo-client";
import { GET_CURRENT_AMOUNT } from "@/graphql/mutations";
import { useEffect, useState } from "react";
import getRandomColorScheme from "@/utils/getRandomColorScheme";
import { makersInfo } from "@/lib/makersInfo";

export default function OurSupporters() {
  const [fellows, setFellows] = useState(381);
  const [currentName, setCurrentName] = useState(0);

  const getCurrentAmount = () => {
    client
      .mutate({
        mutation: GET_CURRENT_AMOUNT,
      })
      .then(({ data }) => {
        setFellows(data.metrics.fellowMetrics.signups);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fellowClick = (index: any) => {
    if (currentName === index) {
      setCurrentName(0);
    } else {
      setCurrentName(index);
    }
  };

  //get the current amount of donations on re-render
  // useEffect(() => {
  //   getCurrentAmount();
  // }, []);

  return (
    <div className="OurSupportersPage max-w-[80vw] justify-center self-center">
      <h1 className="OurSupportersTitle pt-8">our supporters:</h1>
      <p className="OurSupportersSubtitle mb-8 w-[70%] self-end text-right text-sm italic sm:max-w-[40rem] sm:text-left sm:text-lg md:mt-4">
        {`each of these circles represents a fellow who has signed up & supports our straightforward job site`}
      </p>
      <div className="OurSupportersGroup mb-14 flex flex-wrap gap-4">
        {Array.from({ length: fellows }).map((_, index) => (
          <SiteButton
            aria="supporter"
            variant="filled"
            size={currentName === index ? "default" : "smallCircle"}
            onClick={() => fellowClick(index)}
            colorScheme={getRandomColorScheme("a1")}
            key={index}
          >
            {currentName === index ? currentName : ""}
          </SiteButton>
        ))}
      </div>
    </div>
  );
}
