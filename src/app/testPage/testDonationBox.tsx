"use client";

import { useState, useEffect } from "react";
import ProgressBar from "@/components/progressBar";
import InfoBox from "@/components/infoBox";
import SiteButton from "@/components/siteButton";
import { supportPageInfo } from "@/lib/siteCopy/supportPageInfo";
import { gql } from "@apollo/client";
import client from "../../lib/apollo-client";
import Script from "next/script";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import getRandomColorScheme from "@/utils/getRandomColorScheme";

type DonationCategory = "business" | "individual";
const fellowDonationSchema = z.object({
  firstName: z.string().min(2, { message: "your first name is required" }),
  lastName: z.string().min(2, { message: "your first name is required" }),
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

  // const {
  //   register,
  //   handleSubmit,
  //   setValue,
  //   watch,
  //   formState: { errors },
  // } = useForm<FellowFormData>({
  //   resolver: zodResolver(fellowDonationSchema),
  // }) ||
  // useForm<BusinessFormData>({ resolver: zodResolver(businessDonationSchema) });

  // const onIndividualDonation: SubmitHandler<FellowFormData> = (data) =>
  //   console.log(data);

  // const onBusinessDonation: SubmitHandler<BusinessFormData> = (data) =>
  //   console.log(data);

  const {
    register: registerIndividual,
    handleSubmit: handleSubmitIndividual,
    formState: { errors: errorsIndividual },
    setValue: setIndividualValue,
  } = useForm<FellowFormData>({
    resolver: zodResolver(fellowDonationSchema),
  });

  const {
    register: registerBusiness,
    handleSubmit: handleSubmitBusiness,
    formState: { errors: errorsBusiness },
    setValue: setBusinessValue,
  } = useForm<BusinessFormData>({
    resolver: zodResolver(businessDonationSchema),
  });

  const onIndividualDonation: SubmitHandler<FellowFormData> = (data) => {
    console.log("Individual donation:", data);
  };

  const onBusinessDonation: SubmitHandler<BusinessFormData> = (data) => {
    console.log("Business donation:", data);
  };

  const handleAmountChange = (amount: any) => {
    if (donationCategory === "individual") {
      const newValue = amount;
      setIndividualValue("amount", newValue);
      setSelectedAmount(String(newValue));
    }
    if (donationCategory === "business") {
      const newValue = amount;
      setBusinessValue("amount", newValue);
      setSelectedAmount(String(newValue));
    }
  };

  // const [formData, setFormData] = useState({
  //   donationCategory: "individual",
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   address: "",
  //   businessName: "",
  //   contactName: "",
  //   selectedAmount: "",
  //   customAmount: "",
  // });

  // //form input handlers
  // const handleInputChange = (
  //   e:
  //     | React.ChangeEvent<HTMLInputElement>
  //     | { target: { name: string; value: string } },
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  //   if (name === "donationCategory") {
  //     handleDonorTypeChange(value);
  //   }
  // };

  // const handleAmountSelection = (amount: string) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     selectedAmount: prevData.selectedAmount === amount ? "" : amount,
  //     customAmount: "",
  //   }));

  // Update showAddress based on the selected amount and donor type
  //   const numericValue = parseFloat(selectedAmount.replace("$", ""));
  //   setShowAddress(
  //     numericValue >= 100 && donationCategory === "individual",
  //   );
  // };

  // const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   let value = e.target.value.replace(/[^\d.]/g, "");
  //   value = value.replace(/^0+/, "");
  //   const decimalIndex = value.indexOf(".");
  //   if (decimalIndex !== -1) {
  //     value =
  //       value.slice(0, decimalIndex + 1) +
  //       value.slice(decimalIndex + 1).replace(/\./g, "");
  //   }
  //   const parts = value.split(".");
  //   if (parts[1] && parts[1].length > 2) {
  //     parts[1] = parts[1].slice(0, 2);
  //     value = parts.join(".");
  //   }
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     customAmount: value ? "$" + value : "",
  //     selectedAmount: "",
  //   }));

  //   // Update showAddress based on the custom amount and donor type
  //   const numericValue = parseFloat(value);
  //   setShowAddress(
  //     numericValue >= 100 && formData.donationCategory === "individual",
  //   );
  // };

  // const handleDonorTypeChange = (donationCategory: string) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     donationCategory,
  //   }));

  // // Update showAddress based on the donation amount and donor type
  // const numericValue = parseFloat(selectedAmount.replace("$", ""));
  // setShowAddress(numericValue >= 100 && donationCategory === "individual");

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

  // Helcim Payment Initializer
  // const INITIALIZE_PAYMENT = gql`
  //   mutation InitializePayment($payment: PaymentInput!) {
  //     initializePayment(payment: $payment) {
  //       checkoutToken
  //     }
  //   }
  // `;

  //form submission handler
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const donationAmount = formData.selectedAmount || formData.customAmount;
  //   const parsedAmount = parseAmount(donationAmount);
  //   setCurrentAmount((prevAmount) => prevAmount + parsedAmount);

  //   // Add your form submission logic here
  //   console.log("Form submitted:", formData);

  //   const payment = {
  //     paymentType: "purchase",
  //     amount: "0.01",
  //     currency: "USD",
  //     // account: {
  //     //   firstName: formData.firstName,
  //     //   lastName: formData.lastName,
  //     //   email: formData.email,
  //     // },

  //     firstName: formData.firstName,
  //     lastName: formData.lastName,
  //     email: formData.email,
  //   };

  //   console.log(payment);

  //   client
  //     .mutate({
  //       mutation: INITIALIZE_PAYMENT,
  //       variables: { payment },
  //     })
  //     .then(({ data }) => {
  //       console.log("success");
  //       // @ts-ignore // this function is added by an external script
  //       appendHelcimPayIframe(data.initializePayment.checkoutToken);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };

  //payment integration message
  // useEffect(() => {
  //   // @ts-ignore
  //   const handleMessage = (event) => {
  //     console.log(JSON.stringify(event));
  //     // if (event.origin === 'https://secure.helcim.com') {
  //     if (event.origin.includes("helcim")) {
  //       const { paymentStatus, transactionId } = event.data;
  //       if (paymentStatus === "success") {
  //         // Handle successful payment
  //         console.log("payment success");
  //       } else if (paymentStatus === "failed") {
  //         // Handle failed payment
  //         console.log("payment failed");
  //       }
  //     }
  //   };

  //   window.addEventListener("message", handleMessage);
  //   return () => window.removeEventListener("message", handleMessage);
  // }, []);

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
            onSubmit={
              donationCategory === "individual"
                ? handleSubmitIndividual(onIndividualDonation)
                : handleSubmitBusiness(onBusinessDonation)
            }
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
                isSelected={donationCategory === "individual"}
                onClick={() => setDonationCategory("individual")}
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
                isSelected={donationCategory === "business"}
                onClick={() => setDonationCategory("business")}
              >
                business
              </SiteButton>
            </div>

            {/* donation amount options */}
            <div className="AmountOptions mt-8 flex max-w-sm flex-wrap items-center justify-center gap-4">
              {Object.entries(
                rewards[donationCategory as DonationCategory],
              ).map(([amount]) => (
                <SiteButton
                  key={amount}
                  aria={amount}
                  variant="hollow"
                  colorScheme={getRandomColorScheme("a1")}
                  isSelected={selectedAmount === amount}
                  onClick={() => handleAmountChange(amount)}
                >
                  {amount}
                </SiteButton>
              ))}
              <input
                type="text"
                name="customAmount"
                inputMode="decimal"
                placeholder="custom amount"
                // value={customAmount}
                // onChange={handleCustomAmountChange}
                className="rounded-full border-2 border-jade bg-cream p-2 px-4 text-center text-xs placeholder-jade drop-shadow-smJade"
                aria-label="custom amount"
              />
            </div>

            {/* reward information */}
            {donationCategory === "individual" &&
              printRewardsArray(individualRewardsArray)}

            {donationCategory === "business" &&
              printRewardsArray(businessRewardsArray)}

            <p className="SupportUsComment mt-10 max-w-60 text-sm font-normal italic text-olive">
              every donation is helpful & sincerely appreciated!{" "}
            </p>

            {/* donor information */}
            <div className="DonorInfo mb-4 mt-10 flex w-full max-w-sm flex-col gap-4">
              {donationCategory === "individual" && (
                <>
                  <input
                    type="name"
                    placeholder="Your First Name*"
                    className="rounded-full border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
                    aria-label="firstName"
                    {...registerIndividual("firstName")}
                  />
                  {errorsIndividual.firstName?.message && (
                    <p className="text-left text-xs font-medium text-orange">
                      {errorsIndividual.firstName.message.toString()}
                    </p>
                  )}
                  <input
                    type="name"
                    placeholder="Your Last Name*"
                    className="rounded-full border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
                    aria-label="lastName"
                    {...registerIndividual("lastName")}
                  />
                  {errorsIndividual.lastName?.message && (
                    <p className="text-left text-xs font-medium text-orange">
                      {errorsIndividual.lastName.message.toString()}
                    </p>
                  )}
                  <input
                    type="email"
                    placeholder="Your Email*"
                    className="rounded-full border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
                    aria-label="email"
                    {...registerIndividual("email")}
                  />
                  {errorsIndividual.email?.message && (
                    <p className="text-left text-xs font-medium text-orange">
                      {errorsIndividual.email.message.toString()}
                    </p>
                  )}
                  {showAddress && (
                    <input
                      type="text"
                      placeholder="Your Address*"
                      className="rounded-full border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
                      aria-label="address"
                      {...registerIndividual("address")}
                    />
                  )}
                  {errorsIndividual.address?.message && (
                    <p className="text-left text-xs font-medium text-orange">
                      {errorsIndividual.address.message.toString()}
                    </p>
                  )}
                </>
              )}
              {donationCategory === "business" && (
                <>
                  <input
                    type="name"
                    placeholder="Business Name*"
                    className="rounded-full border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
                    aria-label="business name"
                    {...registerBusiness("businessName")}
                  />
                  {errorsBusiness.businessName?.message && (
                    <p className="text-left text-xs font-medium text-orange">
                      {errorsBusiness.businessName.message.toString()}
                    </p>
                  )}
                  <input
                    type="name"
                    placeholder="Contact Name*"
                    className="rounded-full border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
                    aria-label="contact name"
                    {...registerBusiness("contactName")}
                  />
                  {errorsBusiness.contactName?.message && (
                    <p className="text-left text-xs font-medium text-orange">
                      {errorsBusiness.contactName.message.toString()}
                    </p>
                  )}
                  <input
                    type="email"
                    placeholder="Email Address*"
                    className="rounded-full border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
                    aria-label="email"
                    {...registerBusiness("email")}
                  />
                  {errorsBusiness.email?.message && (
                    <p className="text-left text-xs font-medium text-orange">
                      {errorsBusiness.email.message.toString()}
                    </p>
                  )}
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
                onClick={
                  donationCategory === "individual"
                    ? handleSubmitIndividual(onIndividualDonation)
                    : handleSubmitBusiness(onBusinessDonation)
                }
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
