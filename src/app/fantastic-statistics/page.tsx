"use client";

import client from "@/lib/apollo-client";
import { GET_CURRENT_AMOUNT } from "@/graphql/mutations";
import { useState, useEffect } from "react";

import InfoBox from "@/components/infoBox";
import ProgressBar from "@/components/progressBar";
import SiteButton from "@/components/siteButton";
import { calculatePercentage } from "@/utils/numberUtils";

export default function FantasticStatistics() {
  const fellows = 175;
  const businesses = 1;
  const donations = 5;
  const fellowDonations = 5;
  const businessDonations = 0;
  const [currentDonationAmount, setCurrentDonationAmount] = useState(0);

  const targetFellows = 10000;
  const targetBusinesses = 500;
  const targetDonationAmount = 15000;

  //we'll need to get all the info to fill the data:
  //fellow sign-ups
  //collaborators
  //fellow beta-testers
  //referral partners
  //business sign-ups
  //business beta-testers
  //fellow donation numbers
  //business donation numbers
  //total donations
  //total pre-purchased jobs - this is optional. To get this number, I'll have to tie the business donation information to the relevant amount of jobs offered per amount and set the number based off that.

  //get the current amount of donations
  const getCurrentAmount = () => {
    client
      .mutate({
        mutation: GET_CURRENT_AMOUNT,
      })
      .then(({ data }) => {
        setCurrentDonationAmount(data.currentDonations);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //get the current amount of donations on re-render
  useEffect(() => {
    getCurrentAmount();
  }, []);

  console.log(currentDonationAmount, targetDonationAmount);

  return (
    <div className="FantasticStatisticsPage flex justify-evenly pt-8">
      <div className="StatisticsBoxes flex flex-col">
        <h1 className="FantStatsTitle mb-4 text-end">our stats:</h1>
        <InfoBox variant="hollow" aria="fellow_statistics" size="standard">
          <div className="DataStats">
            <div className="FellowStats flex flex-col items-center gap-6">
              <h2 className="ForFellows mb-4 pl-4 text-left text-jade">
                pertaining to fellows:
              </h2>
              <div className="FellowsSignedUp flex items-center gap-8">
                <SiteButton
                  variant="filled"
                  colorScheme="b4"
                  aria="fellows"
                  addClasses="px-8"
                >
                  150 people signed up
                </SiteButton>
              </div>
              <div className="Collaborators flex items-center gap-8">
                <SiteButton
                  variant="filled"
                  colorScheme="b1"
                  aria="collaborators"
                  addClasses="px-8"
                >
                  15 collaboration requests
                </SiteButton>
              </div>
              <div className="BetaTesters flex items-center gap-8">
                <SiteButton
                  variant="filled"
                  colorScheme="e5"
                  aria="beta testers"
                  addClasses="px-8"
                >
                  150 beta testers
                </SiteButton>
              </div>
              <div className="ReferralPartners flex items-center gap-8">
                <SiteButton
                  variant="filled"
                  colorScheme="f1"
                  aria="refferal partners"
                  addClasses="px-8"
                >
                  15 referral partner inquiries
                </SiteButton>
              </div>
            </div>
          </div>
        </InfoBox>
        <InfoBox
          variant="hollow"
          aria="fellow_statistics"
          size="standard"
          addClasses="my-8"
        >
          <div className="DataStats">
            <div className="BusinessStats flex flex-col items-center gap-6">
              <h2 className="ForBusinesses mb-4 pl-4 text-left text-jade">
                about businesses:
              </h2>
              <div className="FellowsSignedUp flex items-center gap-8">
                <SiteButton
                  variant="filled"
                  colorScheme="f3"
                  aria="fellows"
                  addClasses="px-8"
                >
                  200 businesses signed up
                </SiteButton>
              </div>
              <div className="Collaborators flex items-center gap-8">
                <SiteButton
                  variant="filled"
                  colorScheme="d4"
                  aria="collaborators"
                  addClasses="px-8"
                >
                  20 beta test requests
                </SiteButton>
              </div>
              <div className="BetaTesters flex items-center gap-8">
                <SiteButton
                  variant="filled"
                  colorScheme="e6"
                  aria="beta testers"
                  addClasses="px-8"
                >
                  10 pre-purchased job posts
                </SiteButton>
              </div>
            </div>
          </div>
        </InfoBox>
      </div>
      <div className="ProgressBars flex w-[45vw] flex-col gap-12">
        <h2 className="FantStatsTitle -mb-16 pr-8 text-end">our progress:</h2>
        <div className="ProgressBarContainer mb-4 mt-10 sm:mt-0">
          <p className="ProgressBarStatus w-[35vw] pb-2">
            fellows signed up: {fellows} /{" "}
            {calculatePercentage({
              currentAmount: fellows,
              targetAmount: targetFellows,
            })}
            %
          </p>
          <ProgressBar
            current={fellows}
            total={targetFellows}
            fillColor="bg-watermelon"
          />
        </div>
        <div className="ProgressBarContainer mb-4 mt-10 sm:mt-0">
          <p className="ProgressBarStatus w-[35vw] pb-2">
            businesses signed up: {businesses} /{" "}
            {calculatePercentage({
              currentAmount: businesses,
              targetAmount: targetBusinesses,
            })}
            %
          </p>
          <ProgressBar
            current={businesses}
            total={targetBusinesses}
            fillColor="bg-lime"
          />
        </div>
        <div className="ProgressBarContainer mb-4 mt-10 sm:mt-0">
          <p className="ProgressBarStatus w-[35vw] pb-2">
            total donations: {donations}
          </p>
          <ProgressBar current={donations} total={600} fillColor="bg-sky" />
        </div>
        <div className="ProgressBarContainer mb-4 mt-10 sm:mt-0">
          <p className="ProgressBarStatus w-[35vw] pb-2">
            fellow donations: {fellowDonations}
          </p>
          <ProgressBar
            current={fellowDonations}
            total={500}
            fillColor="bg-orange"
          />
        </div>
        <div className="ProgressBarContainer mb-4 mt-10 sm:mt-0">
          <p className="ProgressBarStatus w-[35vw] pb-2">
            business donations: {businessDonations}
          </p>
          <ProgressBar
            current={businessDonations}
            total={100}
            fillColor="bg-lilac"
          />
        </div>
        <div className="ProgressBarContainer mb-4 mt-10 sm:mt-0">
          <p className="ProgressBarStatus w-[35vw] pb-2">
            current donation amount: {currentDonationAmount} /{" "}
            {calculatePercentage({
              currentAmount: currentDonationAmount,
              targetAmount: targetDonationAmount,
            })}
            %
          </p>
          <ProgressBar
            current={currentDonationAmount}
            total={targetDonationAmount}
            fillColor="bg-magenta"
          />
        </div>
      </div>
    </div>
  );
}
