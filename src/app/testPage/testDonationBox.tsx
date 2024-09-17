"use client";

import { useState, useEffect } from "react";
import ProgressBar from "@/components/progressBar";
import InfoBox from "@/components/infoBox";
import SiteButton from "@/components/siteButton";
import { supportPageInfo } from "@/lib/siteCopy/supportPageInfo";
import { gql } from "@apollo/client";
import client from "../../lib/apollo-client";
import Script from "next/script";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

type DonationCategory = "business" | "individual";
const fellowDonationSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  address: z.string().min(10).optional(),
  amount: z.number(),
});
const businessDonationSchema = z.object({
  businessName: z.string().min(2),
  contactName: z.string().min(2),
  email: z.string().email(),
  amount: z.number(),
});

type FellowFormData = z.infer<typeof fellowDonationSchema>;
type BusinessFormData = z.infer<typeof businessDonationSchema>;

type DonationFormData = FellowFormData | BusinessFormData;

function TestDonationBox() {
  const rewards = supportPageInfo.rewards;
  const targetAmount = 15000;
  const [currentAmount, setCurrentAmount] = useState(0);
  const [donationCategory, setDonationCategory] = useState("individual");
  const [showAddress, setShowAddress] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState("");

  const individualRewardsArray = Object.entries(
    supportPageInfo.rewards.individual,
  );
  const businessRewardsArray = Object.entries(supportPageInfo.rewards.business);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm<DonationFormData>({
    resolver: zodResolver(
      donationCategory === "individual"
        ? fellowDonationSchema
        : businessDonationSchema,
    ),
  });

  const onSubmit: SubmitHandler<DonationFormData> = (data) => {
    console.log(`${donationCategory} donation:`, data);
    // Handle donation submission
  };

  // Number Calculation + Adjustment for Display
  const parseAmount = (amount: string): number => {
    return parseFloat(amount.replace(/[^0-9.]/g, "")) || 0;
  };

  const calculatePercentage = () => {
    const percentage = (currentAmount / targetAmount) * 100;
    return percentage.toFixed(1);
  };

  return (
    <>
      <Script
        type="text/javascript"
        src="https://secure.helcim.app/helcim-pay/services/start.js"
      />
      <div className={`DonationStation mt-8 flex w-5/12 flex-col gap-6`}>
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
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col items-center"
          >
            <h1 className="SupportUsTitle mt-2">show your support</h1>
            <h3 className="SupportUsSubtitle mt-2 text-lg font-medium italic text-jade">
              for Straightforward Job Site
            </h3>
            <p className="DonationComment max-w-60 pt-8 text-sm font-medium text-olive">
              scroll down the page or click the amount buttons to see our
              rewards{" "}
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
                onClick={() => setDonationCategory("individual")}
                isSelected={donationCategory === "individual"}
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
                onClick={() => setDonationCategory("business")}
                isSelected={donationCategory === "business"}
              >
                business
              </SiteButton>
            </div>

            {/* donation amount options */}
            <div className="AmountOptions mt-8 flex max-w-sm flex-wrap items-center justify-center gap-4">
              {donationCategory && (
                <>
                  <Controller
                    name="amount"
                    control={control}
                    render={({ field }) => (
                      <>
                        {Object.entries(
                          rewards[donationCategory as DonationCategory],
                        ).map(([amount]) => (
                          <SiteButton
                            key={amount}
                            aria={amount}
                            variant="hollow"
                            colorScheme="e5"
                            isSelected={
                              field.value ===
                              parseFloat(amount.replace("$", ""))
                            }
                            onClick={() => {
                              setSelectedAmount(amount);
                              field.onChange(
                                parseFloat(amount.replace("$", "")),
                              );
                            }}
                          >
                            {amount}
                          </SiteButton>
                        ))}
                        <input
                          type="text"
                          inputMode="decimal"
                          placeholder="custom amount"
                          className="rounded-full border-2 border-jade bg-cream p-2 px-4 text-center text-xs placeholder-jade drop-shadow-smJade"
                          aria-label="custom amount"
                          onChange={(e) => {
                            const value = parseFloat(e.target.value);
                            if (!isNaN(value)) {
                              setSelectedAmount(`$${value}`);
                              field.onChange(value);
                            }
                          }}
                        />
                      </>
                    )}
                  />
                </>
              )}
            </div>

            <p className="SupportUsComment mt-10 max-w-60 text-sm font-normal italic text-olive">
              every donation is helpful & sincerely appreciated!{" "}
            </p>

            {/* donor information */}
            <div className="DonorInfo mb-4 mt-10 flex w-full max-w-sm flex-col gap-4">
              {donationCategory === "individual" && (
                <>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Your First Name*"
                    className="rounded-full border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
                    aria-label="firstName"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Your Last Name*"
                    className="rounded-full border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
                    aria-label="lastName"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email*"
                    className="rounded-full border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
                    aria-label="email"
                    required
                  />
                  {showAddress && (
                    <input
                      type="text"
                      name="address"
                      placeholder="Your Address*"
                      className="rounded-full border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
                      aria-label="address"
                      required
                    />
                  )}
                </>
              )}
              {donationCategory === "business" && (
                <>
                  <input
                    type="text"
                    name="businessName"
                    placeholder="Business Name*"
                    className="rounded-full border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
                    aria-label="business name"
                    required
                  />
                  <input
                    type="text"
                    name="contactName"
                    placeholder="Contact Name*"
                    className="rounded-full border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
                    aria-label="contact name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address*"
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
    </>
  );
}

export default TestDonationBox;
