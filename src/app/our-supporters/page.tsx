"use client";

import SiteButton from "@/components/siteButton";
import client from "@/lib/apollo-client";
import { GET_CURRENT_AMOUNT } from "@/graphql/mutations";
import { useEffect, useState } from "react";
import getRandomColorScheme from "@/utils/getRandomColorScheme";

export default function OurSupporters() {
  const [fellows, setFellows] = useState(381);

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

  //get the current amount of donations on re-render
  // useEffect(() => {
  //   getCurrentAmount();
  // }, []);

  return (
    <div className="OurSupportersPage max-w-[90vw] justify-center self-center">
      <h1 className="OurSupportersTitle py-8">Number of Fellows Signed Up:</h1>
      <div className="OurSupportersGroup flex flex-wrap gap-4">
        {Array.from({ length: fellows }).map((_, index) => (
          <SiteButton
            aria="supporter"
            variant="filled"
            size="smallCircle"
            colorScheme={getRandomColorScheme("a1")}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
