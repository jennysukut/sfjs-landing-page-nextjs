"use client";

import { useState } from "react";
import React from "react";

import InfoBox from "@/components/infoBox";
import SiteButton from "@/components/siteButton";
import ProgressBar from "@/components/progressBar";
import SiteLabel from "@/components/siteLabel";
import CrowdfundingRewardsSection from "@/components/crowdfundingRewardsSection";

import { supportPageInfo } from "@/lib/supportPageInfo";

type DonationCategory = "business" | "individuals";

export default function Support() {
  //obviously, we'll set this only we actually get the donation.
  //We'll have to write the logic when we get the info sent back from Helcim upon successful donation
  const [currentAmount, setCurrentAmount] = useState(0);
  const [donationCategory, setDonationCategory] =
    useState<DonationCategory>("individuals");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [selectedAmount, setSelectedAmount] = useState<string>("");
  const [customAmount, setCustomAmount] = useState("");
  const [businessName, setBusinessName] = useState("");

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^\d.]/g, "");

    value = value.replace(/^0+/, "");

    const decimalIndex = value.indexOf(".");
    if (decimalIndex !== -1) {
      value =
        value.slice(0, decimalIndex + 1) +
        value.slice(decimalIndex + 1).replace(/\./g, "");
    }

    const parts = value.split(".");
    if (parts[1] && parts[1].length > 2) {
      parts[1] = parts[1].slice(0, 2);
      value = parts.join(".");
    }

    setCustomAmount(value ? "$" + value : "");
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleBusinessNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessName(e.target.value);
  };

  const handleAmountSelection = (amount: string) => {
    setSelectedAmount(amount);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const donationAmount = selectedAmount || customAmount;
    const parsedAmount = parseAmount(donationAmount);
    setCurrentAmount((prevAmount) => prevAmount + parsedAmount);

    // Add your form submission logic here
    console.log("Form submitted:", {
      name,
      email,
      address,
      donationCategory,
      donationAmount: parsedAmount,
    });
  };

  const parseAmount = (amount: string): number => {
    return parseFloat(amount.replace(/[^0-9.]/g, "")) || 0;
  };

  function individualOptions() {
    setDonationCategory("individuals");
  }

  function businessOptions() {
    setDonationCategory("business");
  }

  return (
    <div className="SupportPage p-14">
      <div className="DetailsAndDonation flex justify-evenly">
        <div className="CurrentStatusAndTimeline flex flex-col">
          <h1 className="CurrentStatusTitle pl-4">our current status:</h1>
          <InfoBox
            aria="our current status"
            variant="hollow"
            addClasses="max-w-md text-sm py-8 px-12"
          >
            {supportPageInfo.currentStatus.map((status, index) => (
              <p key={index} className="mb-2 last:mb-0">
                {status}
              </p>
            ))}
          </InfoBox>

          <InfoBox
            aria="our crowdfunding needs"
            variant="filled"
            colorScheme="c4"
            addClasses="max-w-md text-sm py-8 px-12"
          >
            {supportPageInfo.crowdfundingNeed.map((status, index) => (
              <p key={index} className="mb-2 mt-4 last:mb-0">
                {status}
              </p>
            ))}
          </InfoBox>
          <InfoBox
            aria="our current status"
            variant="hollow"
            addClasses="max-w-md text-sm py-8 px-12 text-center flex flex-col items-center"
          >
            our goal is to raise between:
            <SiteLabel aria="goal" variant="display" addClasses="px-8 m-5">
              $15.490 - $216.738
            </SiteLabel>
            {supportPageInfo.goalDetail}
          </InfoBox>
        </div>

        {/* Donation Box */}
        <div className="DonationStation mt-20 flex w-5/12 flex-col">
          <div className="ProgressBarContainer mb-4 px-2">
            <p className="ProgressBarStatus">
              current amount raised: ${currentAmount}
            </p>
            <ProgressBar current={currentAmount} total={15490} />
          </div>
          <InfoBox
            className="DonateHere"
            aria="support us"
            variant="hollow"
            addClasses="flex flex-col text-center items-center"
          >
            <h1 className="SupportUsTitle mt-2">show your support</h1>
            <h3 className="SupportUsSubtitle mt-2 font-medium italic text-jade">
              for Straightforward Job Site
            </h3>
            <p className="SupportUsComment mt-10 max-w-52 text-sm font-normal italic text-olive">
              every amount is helpful & sincerely appreciated!{" "}
            </p>

            {/* donor options: business / individual */}
            <div className="DonationOptions mt-8 flex gap-6">
              <SiteButton
                aria="human"
                variant="filled"
                colorScheme="e5"
                addClasses="px-8 py-3"
                onClick={individualOptions}
              >
                individual
              </SiteButton>
              <SiteButton
                aria="business"
                variant="filled"
                colorScheme="f3"
                addClasses="px-8 py-3"
                onClick={businessOptions}
              >
                business
              </SiteButton>
            </div>

            {/* donation amount options */}
            <div className="AmountOptions mt-8 flex max-w-sm flex-wrap items-center justify-center gap-4">
              {donationCategory && (
                <>
                  {Object.entries(
                    supportPageInfo.rewards[donationCategory],
                  ).map(([amount]) => (
                    // this turns the whole button jade when it's selected. I'd like to customize this so the drop shadow and bg are different
                    <SiteButton
                      key={amount}
                      aria={amount}
                      variant="hollow"
                      colorScheme="e5"
                      addClasses={
                        selectedAmount === amount ? "bg-jade text-cream" : ""
                      }
                      onClick={() => handleAmountSelection(amount)}
                    >
                      {amount}
                    </SiteButton>
                  ))}

                  <input
                    type="text"
                    inputMode="decimal"
                    placeholder="$0.00"
                    value={customAmount}
                    onChange={(e) => {
                      handleCustomAmountChange(e);
                      setSelectedAmount("");
                    }}
                    className="rounded-full border border-2 border-jade bg-cream p-2 px-4 text-center text-xs placeholder-jade drop-shadow-jade"
                    aria-label="custom amount"
                  />
                </>
              )}
            </div>

            {donationCategory === "individuals" &&
              (selectedAmount || customAmount) && (
                <InfoBox
                  variant="hollow"
                  aria="reward description"
                  addClasses="mb-8 text-xs text-left mt-4"
                >
                  <div className="w-full max-w-[300px]">
                    {Object.entries(
                      supportPageInfo.rewards.individuals[
                        (selectedAmount ||
                          customAmount) as keyof typeof supportPageInfo.rewards.individuals
                      ] || {},
                    ).map(([amount, description]) => (
                      <React.Fragment key={amount}>
                        {Array.isArray(description) ? (
                          description.map((item: string, itemIndex: number) => (
                            <p
                              key={itemIndex}
                              className="relative mb-2 pl-6 before:absolute before:left-0 before:content-['•']"
                            >
                              {item}
                            </p>
                          ))
                        ) : (
                          <p className="relative mb-2 pl-6 before:absolute before:left-0 before:content-['•']">
                            {description}
                          </p>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </InfoBox>
              )}

            {/* donor information */}
            <div className="DonorInfo mb-4 mt-10 flex w-full max-w-sm flex-col gap-4">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {donationCategory === "individuals" && (
                  <>
                    <input
                      type="text"
                      placeholder="Your Name*"
                      value={name}
                      onChange={handleNameChange}
                      className="rounded-full border border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
                      aria-label="name"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email*"
                      value={email}
                      onChange={handleEmailChange}
                      className="rounded-full border border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
                      aria-label="email"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Your Address*"
                      value={address}
                      onChange={handleAddressChange}
                      className="rounded-full border border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
                      aria-label="address"
                      required
                    />
                  </>
                )}
                {donationCategory === "business" && (
                  <>
                    <input
                      type="text"
                      placeholder="Business Name*"
                      value={businessName}
                      onChange={handleBusinessNameChange}
                      className="rounded-full border border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
                      aria-label="business name"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address*"
                      value={email}
                      onChange={handleEmailChange}
                      className="rounded-full border border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
                      aria-label="email"
                      required
                    />
                  </>
                )}
                {donationCategory && (
                  <div className="mt-4 flex justify-end">
                    <SiteButton
                      type="submit"
                      aria="submit donation"
                      variant="filled"
                      colorScheme="e5"
                    >
                      continue
                    </SiteButton>
                  </div>
                )}
              </form>
            </div>
          </InfoBox>
        </div>
      </div>
      <div className="EstimatedTimelineContainer mx-auto flex max-w-3xl flex-col items-center justify-center">
        <h1 className="EstimatedTimelineTitle mt-12 self-end pr-8">
          our est. timeline:
        </h1>
        <InfoBox
          aria="our est. timeline"
          variant="hollow"
          addClasses="text-sm py-8 px-12 self-end"
        >
          {supportPageInfo.estTimeline.map((status, index) => (
            <p key={index} className="mb-2 last:mb-0">
              {status}
            </p>
          ))}
        </InfoBox>
        <p className="TimelineNote mt-8 max-w-md self-end text-right text-xs font-medium italic text-olive">
          {supportPageInfo.timelineAst}
        </p>
      </div>

      <div className="RewardsSectionContainer mx-auto mt-12 flex max-w-3xl flex-col items-center justify-center">
        <h1 className="RewardIncentivesTitle self-start pl-12">
          our incentives & rewards:
        </h1>
        <InfoBox
          variant="hollow"
          aria="our incentives & rewards"
          addClasses="min-w-full"
        >
          {supportPageInfo.incentivesAndRewards.map((reward, index) => (
            <p key={index} className="mb-4 text-sm last:mb-0">
              {reward}
            </p>
          ))}
        </InfoBox>
      </div>
      <CrowdfundingRewardsSection />
    </div>
  );
}
