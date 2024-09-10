"use client";

import { useState } from "react";
import ProgressBar from "@/components/progressBar";
import InfoBox from "@/components/infoBox";
import SiteButton from "@/components/siteButton";
import { supportPageInfo } from "@/lib/siteCopy/supportPageInfo";
import { z } from "zod";

type DonationCategory = "business" | "individual";

function DonationBox() {
  const rewards = supportPageInfo.rewards;
  const targetAmount = 15490;
  const individualRewardsArray = Object.entries(
    supportPageInfo.rewards.individual,
  );
  const businessRewardsArray = Object.entries(supportPageInfo.rewards.business);

  //obviously, we'll set this only we actually get the donation.
  //We'll have to write the logic when we get the info sent back from Helcim upon successful donation
  const [currentAmount, setCurrentAmount] = useState(0);

  const [formData, setFormData] = useState({
    donationCategory: "individual",
    name: "",
    email: "",
    address: "",
    businessName: "",
    selectedAmount: "",
    customAmount: "",
  });

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | { target: { name: string; value: string } },
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAmountSelection = (amount: string) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedAmount: prevData.selectedAmount === amount ? "" : amount,
      customAmount: "",
    }));
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
    setFormData((prevData) => ({
      ...prevData,
      customAmount: value ? "$" + value : "",
      selectedAmount: "",
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const donationAmount = formData.selectedAmount || formData.customAmount;
    const parsedAmount = parseAmount(donationAmount);
    setCurrentAmount((prevAmount) => prevAmount + parsedAmount);

    // We'll add the form submission logic here that'll redirect to our Helcim payment integration
    console.log("Form submitted:", formData);
  };

  // Number Calculation + Adjustment for Display
  const parseAmount = (amount: string): number => {
    return parseFloat(amount.replace(/[^0-9.]/g, "")) || 0;
  };

  const calculatePercentage = () => {
    const percentage = (currentAmount / targetAmount) * 100;
    return percentage.toFixed(1);
  };

  // Display Rewards Relevant with Amount
  function printRewardsArray(
    rewardsArray: [string, string[]][],
  ): React.ReactNode {
    const selectedReward = rewardsArray.find(
      ([amount]) => amount === formData.selectedAmount,
    );

    if (!selectedReward) return null;
    const [amount, description] = selectedReward;

    return (
      <div key={amount} className="RewardBox">
        <InfoBox
          variant="hollow"
          aria={amount}
          addClasses=" text-xs mt-8 text-left"
        >
          <ul className="w-full">
            {description.map((item, index) => (
              <li key={index} className="relative mb-2 list-disc pl-6">
                {item}
              </li>
            ))}
          </ul>
        </InfoBox>
      </div>
    );
  }

  const isDonationCategory = (category: string): category is DonationCategory =>
    category === "business" || category === "individual";

  return (
    <div className="DonationStation flex w-5/12 flex-col gap-6 pt-20">
      <div className="ProgressBarContainer mb-4">
        <p className="ProgressBarStatus">
          current amount raised: ${currentAmount} / {calculatePercentage()}%
        </p>
        <ProgressBar current={currentAmount} total={targetAmount} />
      </div>

      {/* Donation Box */}
      <InfoBox
        className="DonateHere"
        aria="support us"
        variant="hollow"
        addClasses="flex flex-col text-center items-center"
      >
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-center"
        >
          <h1 className="SupportUsTitle mt-2">show your support</h1>
          <h3 className="SupportUsSubtitle mt-2 font-medium italic text-jade">
            for Straightforward Job Site
          </h3>
          <p className="DonationComment max-w-60 pt-8 text-sm font-medium text-olive">
            scroll down the page or click the amount buttons to see our rewards{" "}
          </p>

          {/* donor categories: business / individual */}
          <div className="DonationOptions mt-8 flex gap-6">
            <SiteButton
              aria="individual"
              variant="filled"
              name="donationCategory"
              value="individual"
              colorScheme="e5"
              addClasses="px-8 py-3"
              onClick={() =>
                handleInputChange({
                  target: { name: "donationCategory", value: "individual" },
                })
              }
              selectable={true}
              isSelected={formData.donationCategory === "individual"}
            >
              individual
            </SiteButton>
            <SiteButton
              aria="business"
              variant="filled"
              name="donationCategory"
              value="business"
              colorScheme="f3"
              addClasses="px-8 py-3"
              onClick={() =>
                handleInputChange({
                  target: { name: "donationCategory", value: "business" },
                })
              }
              selectable={true}
              isSelected={formData.donationCategory === "business"}
            >
              business
            </SiteButton>
          </div>

          {/* donation amount options */}
          <div className="AmountOptions mt-8 flex max-w-sm flex-wrap items-center justify-center gap-4">
            {formData.donationCategory &&
              isDonationCategory(formData.donationCategory) && (
                <>
                  {Object.entries(rewards[formData.donationCategory]).map(
                    ([amount]) => (
                      <SiteButton
                        key={amount}
                        aria={amount}
                        variant="hollow"
                        selectable={true}
                        isSelected={formData.selectedAmount === amount}
                        colorScheme="e5"
                        addClasses={
                          formData.selectedAmount === amount ? "" : ""
                        }
                        onClick={() => handleAmountSelection(amount)}
                      >
                        {amount}
                      </SiteButton>
                    ),
                  )}
                  <input
                    type="text"
                    name="customAmount"
                    inputMode="decimal"
                    placeholder="custom amount"
                    value={formData.customAmount}
                    onChange={handleCustomAmountChange}
                    className="rounded-full border-2 border-jade bg-cream p-2 px-4 text-center text-xs placeholder-jade drop-shadow-jade"
                    aria-label="custom amount"
                  />
                </>
              )}
          </div>

          {/* put the reward information box here */}
          {formData.donationCategory === "individual" &&
            printRewardsArray(individualRewardsArray)}

          {formData.donationCategory === "business" &&
            printRewardsArray(businessRewardsArray)}

          <p className="SupportUsComment mt-10 max-w-60 text-sm font-normal italic text-olive">
            every donation is helpful & sincerely appreciated!{" "}
          </p>

          {/* donor information */}
          <div className="DonorInfo mb-4 mt-10 flex w-full max-w-sm flex-col gap-4">
            {formData.donationCategory === "individual" && (
              <>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="rounded-full border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
                  aria-label="name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email*"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="rounded-full border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
                  aria-label="email"
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Your Address*"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="rounded-full border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
                  aria-label="address"
                  required
                />
              </>
            )}
            {formData.donationCategory === "business" && (
              <>
                <input
                  type="text"
                  name="businessName"
                  placeholder="Business Name*"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="rounded-full border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
                  aria-label="business name"
                  required
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Contact Name*"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="rounded-full border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
                  aria-label="contact name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="rounded-full border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
                  aria-label="email"
                  required
                />
              </>
            )}
          </div>

          {/* submission button */}
          <div className="mt-4 flex w-full max-w-sm justify-end">
            <SiteButton
              type="submit"
              aria="submit donation"
              variant="filled"
              colorScheme="e5"
              addClasses="px-8"
            >
              continue
            </SiteButton>
          </div>
        </form>
      </InfoBox>
    </div>
  );
}

export default DonationBox;
