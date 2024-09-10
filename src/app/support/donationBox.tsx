"use client";

import { useState } from "react";
import ProgressBar from "@/components/progressBar";
import InfoBox from "@/components/infoBox";
import SiteButton from "@/components/siteButton";
import { supportPageInfo } from "@/lib/siteCopy/supportPageInfo";

type DonationCategory = "business" | "individuals" | "";

function DonationBox() {
  const rewards = supportPageInfo.rewards;
  const targetAmount = 15490;
  const individualRewardsArray = Object.entries(
    supportPageInfo.rewards.individuals,
  );
  const businessRewardsArray = Object.entries(supportPageInfo.rewards.business);

  //obviously, we'll set this only we actually get the donation.
  //We'll have to write the logic when we get the info sent back from Helcim upon successful donation
  const [currentAmount, setCurrentAmount] = useState(0);
  const [donationCategory, setDonationCategory] =
    useState<DonationCategory>("individuals");

  const [individualDonationData, setIndividualDonationData] = useState({
    name: "",
    email: "",
    address: "",
    amount: "",
  });

  const [businessDonationData, setBusinessDonationData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    amount: "",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [selectedAmount, setSelectedAmount] = useState<string>("");
  const [customAmount, setCustomAmount] = useState("");
  const [businessName, setBusinessName] = useState("");

  const setCategory = (e: any) => {
    if (donationCategory === e.target.value) {
      setDonationCategory("");
    } else {
      setDonationCategory(e.target.value);
    }
  };

  // handling form updates
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
    if (selectedAmount === amount) {
      setSelectedAmount("");
    } else {
      setSelectedAmount(amount);
    }
  };

  //Form Submission Handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const donationAmount = selectedAmount || customAmount;
    const parsedAmount = parseAmount(donationAmount);
    setCurrentAmount((prevAmount) => prevAmount + parsedAmount);

    // We'll add the  form submission logic here that'll redirect to our Helcim payment integration
    console.log("Form submitted:", {
      donationCategory,
      name,
      businessName,
      email,
      address,
      donationAmount,
    });
  };

  //Number Calculation + Adjustment for Display
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
      ([amount]) => amount === selectedAmount,
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

  return (
    <div className="DonationStation flex w-5/12 flex-col gap-6">
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
            value="individuals"
            colorScheme="e5"
            addClasses="px-8 py-3"
            onClick={setCategory}
            selectable={true}
            isSelected={donationCategory === "individuals"}
          >
            individual
          </SiteButton>
          <SiteButton
            aria="business"
            variant="filled"
            value="business"
            colorScheme="f3"
            addClasses="px-8 py-3"
            onClick={setCategory}
            selectable={true}
            isSelected={donationCategory === "business"}
          >
            business
          </SiteButton>
        </div>

        {/* donation amount options */}

        <div className="AmountOptions mt-8 flex max-w-sm flex-wrap items-center justify-center gap-4">
          {donationCategory && (
            <>
              {Object.entries(rewards[donationCategory]).map(([amount]) => (
                <SiteButton
                  key={amount}
                  aria={amount}
                  variant="hollow"
                  selectable={true}
                  isSelected={selectedAmount === amount}
                  colorScheme="e5"
                  addClasses={selectedAmount === amount ? "" : ""}
                  onClick={() => handleAmountSelection(amount)}
                >
                  {amount}
                </SiteButton>
              ))}

              <input
                type="text"
                inputMode="decimal"
                placeholder="custom amount"
                value={customAmount}
                onChange={(e) => {
                  handleCustomAmountChange(e);
                  setSelectedAmount("");
                }}
                className="rounded-full border-2 border-jade bg-cream p-2 px-4 text-center text-xs placeholder-jade drop-shadow-jade"
                aria-label="custom amount"
              />
            </>
          )}
        </div>

        {/* put the reward information box here */}
        {donationCategory === "individuals" &&
          printRewardsArray(individualRewardsArray)}

        {donationCategory === "business" &&
          printRewardsArray(businessRewardsArray)}

        <p className="SupportUsComment mt-10 max-w-60 text-sm font-normal italic text-olive">
          every donation is helpful & sincerely appreciated!{" "}
        </p>

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
                  className="rounded-full border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
                  aria-label="name"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email*"
                  value={email}
                  onChange={handleEmailChange}
                  className="rounded-full border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
                  aria-label="email"
                  required
                />
                <input
                  type="text"
                  placeholder="Your Address*"
                  value={address}
                  onChange={handleAddressChange}
                  className="rounded-full border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
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
                  className="rounded-full border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
                  aria-label="business name"
                  required
                />
                <input
                  type="text"
                  placeholder="Contact Name*"
                  value={name}
                  onChange={handleNameChange}
                  className="rounded-full border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
                  aria-label="contact name"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address*"
                  value={email}
                  onChange={handleEmailChange}
                  className="rounded-full border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
                  aria-label="email"
                  required
                />
              </>
            )}

            {/* submission button */}
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
  );
}

export default DonationBox;
