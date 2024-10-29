"use client";

import SiteButton from "@/components/siteButton";
import client from "@/lib/apollo-client";
import { GET_CURRENT_AMOUNT } from "@/graphql/mutations";
import { useEffect, useState } from "react";
import getRandomColorScheme from "@/utils/getRandomColorScheme";
import { makersInfo } from "@/lib/makersInfo";

export default function OurSupporters() {
  const [fellows, setFellows] = useState(381);
  const [currentName, setCurrentName] = useState("");

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

  const fellowClick = () => {
    if (currentName === "jacob") {
      setCurrentName("");
    } else {
      setCurrentName("jacob");
    }
  };

  //get the current amount of donations on re-render
  // useEffect(() => {
  //   getCurrentAmount();
  // }, []);

  return (
    <div className="OurSupportersPage max-w-[85vw] justify-center self-center">
      <h1 className="OurSupportersTitle py-8">Our Supporters:</h1>
      <div className="OurSupportersGroup flex flex-wrap gap-4">
        {Array.from({ length: fellows }).map((_, index) => (
          <SiteButton
            aria="supporter"
            variant="filled"
            size={currentName === "jacob" ? "default" : "smallCircle"}
            onClick={fellowClick}
            colorScheme={getRandomColorScheme("a1")}
            key={index}
          >
            {currentName}
          </SiteButton>
        ))}
      </div>
    </div>
  );
}
