"use client";

import { useState } from "react";

import InfoBox from "@/components/infoBox";
import SiteButton from "@/components/siteButton";

import { supportPageInfo } from "@/lib/supportPageInfo";

type DonationCategory = "business" | "individuals" | "";

export default function Support() {
  const [donationCategory, setDonationCategory] =
    useState<DonationCategory>("");

  const [customAmount, setCustomAmount] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [selectedAmount, setSelectedAmount] = useState("");

  const [businessName, setBusinessName] = useState("");

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d+$/.test(value)) {
      setCustomAmount(value);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleBusinessNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessName(e.target.value);
  };

  const handleAmountSelection = (amount: string) => {
    setSelectedAmount(amount);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", {
      name,
      email,
      address,
      donationCategory,
      donationAmount: selectedAmount || customAmount,
    });
  };

  function individualOptions() {
    setDonationCategory("individuals");
  }

  function businessOptions() {
    setDonationCategory("business");
  }

  return (
    <div className="SupportPage mt-14 p-14">
      <div className="DetailsAndDonation flex justify-between">
        <div className="CurrentStatusAndTimeline flex flex-col">
          <h1 className="CurrentStatusTitle">our current status:</h1>
        </div>

        {/* donation box */}
        <div className="DonationStation flex w-5/12 flex-col">
          {/* insert current donation amount tracker here */}
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
            <p className="SupportUsComment mt-10 max-w-48 text-xs font-normal italic text-olive">
              every amount is helpful & sincerely appreciated!{" "}
            </p>

            <div className="DonationOptions mt-8 flex gap-6">
              <SiteButton
                aria="human"
                variant="filled"
                colorScheme="e5"
                addClasses="px-8 py-3"
                onClick={individualOptions}
              >
                human
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

            <div className="AmountOptions mt-8 flex max-w-sm flex-wrap items-center justify-center gap-4">
              {donationCategory && (
                <>
                  {Object.entries(
                    supportPageInfo.rewards[donationCategory],
                  ).map(([amount]) => (
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
                    inputMode="numeric"
                    pattern="\d*"
                    placeholder="Custom"
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
                  <SiteButton
                    type="submit"
                    aria="submit donation"
                    variant="filled"
                    colorScheme="e5"
                    addClasses="mt-4"
                  >
                    next
                  </SiteButton>
                )}
              </form>
            </div>
          </InfoBox>
        </div>
      </div>
    </div>
  );
}
