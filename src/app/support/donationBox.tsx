"use client";

import * as z from "zod";
import { useState } from "react";
import { useSignals } from "@preact/signals-react/runtime";
import { gql } from "@apollo/client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useModal } from "@/contexts/ModalContext";

import Script from "next/script";
import client from "../../lib/apollo-client";

import ProgressBar from "@/components/progressBar";
import InfoBox from "@/components/infoBox";
import SiteButton from "@/components/siteButton";

import { supportPageInfo } from "@/lib/siteCopy/supportPageInfo";
import { dropDown } from "@/components/navBar";

import getRandomColorScheme from "@/utils/getRandomColorScheme";
import DonationThanksModal from "@/components/modals/donationThanksModal";

type DonationCategory = "business" | "individual";

// zod schemas
const fellowDonationSchema = z.object({
  name: z.string().min(2, { message: "Your name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  amount: z.string().min(1, { message: "Amount is required" }),
  address: z.string().optional(),
});

const businessDonationSchema = z.object({
  businessName: z
    .string()
    .min(2, { message: "Your Business Name is required" }),
  contactName: z.string().min(2, { message: "Please provide a contact name" }),
  email: z.string().email({ message: "Invalid email address" }),
  amount: z.string().min(1, { message: "Amount is required" }),
  referral: z.string().optional(),
});

// form types
type FellowFormData = z.infer<typeof fellowDonationSchema>;
type BusinessFormData = z.infer<typeof businessDonationSchema>;

function DonationBox() {
  useSignals();
  const { showModal } = useModal();
  const rewards = supportPageInfo.rewards;
  const targetAmount = 15000;
  const [currentAmount, setCurrentAmount] = useState(0);
  const [donationCategory, setDonationCategory] = useState("individual");
  const [showAddress, setShowAddress] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [referral, setReferral] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // rewards arrays
  const individualRewardsArray = Object.entries(
    supportPageInfo.rewards.individual,
  );
  const businessRewardsArray = Object.entries(supportPageInfo.rewards.business);

  // setting up individual form
  const {
    register: registerIndividual,
    handleSubmit: handleSubmitIndividual,
    formState: { errors: errorsIndividual },
    setValue: setIndividualValue,
  } = useForm<FellowFormData>({
    resolver: zodResolver(fellowDonationSchema),
    defaultValues: {
      amount: "",
    },
  });

  // setting up business form
  const {
    register: registerBusiness,
    handleSubmit: handleSubmitBusiness,
    formState: { errors: errorsBusiness },
    setValue: setBusinessValue,
  } = useForm<BusinessFormData>({
    resolver: zodResolver(businessDonationSchema),
    defaultValues: {
      amount: "",
    },
  });

  //FRONT END NEEDED INFO FOR PAYMENT: Carl's Helpful Notes
  // 1) add a script: <script type="text/javascript" src="https://secure.helcim.app/helcim-pay/services/start.js"></script> -- got this in the return statement / code body
  // 2) call the backend api initializeCheckout to obtain the "checkoutToken" --
  // 3) call the function "appendHelcimPayIframe" like this:
  // // Link HTML example
  // <a href="javascript: appendHelcimPayIframe(checkoutToken)">
  //   Pay Now
  // </a>
  // // Onclick HTML example
  // // Requires JavaScript onclick event handler
  // <a href="#" id="pay-now">Pay Now</a>

  // payment initializer
  const INITIALIZE_PAYMENT = gql`
    mutation InitializePayment($payment: PaymentInput!) {
      initializePayment(payment: $payment) {
        checkoutToken
      }
    }
  `;

  //payment function
  const testPayment = ({ name, email, amount }: any) => {
    console.log("trying testPayment");

    // we'd set up the "payment" with the
    const payment = {
      paymentType: "purchase",
      amount: amount,
      currency: "USD",
      email: email,
      accountName: name,
    };

    console.log(payment);

    client
      .mutate({
        mutation: INITIALIZE_PAYMENT, // this isn't working right now, I'm getting errors when trying the Graphiql request also
        variables: { payment },
      })
      .then(({ data }) => {
        console.log("success");
        // @ts-ignore // this function is added by an external script
        appendHelcimPayIframe(data.initializePayment.checkoutToken);
      }) // we'll need to write something that grabs the information sent back by the Helcim Iframe and uses it to set the amount and send a confirmation email
      .catch((error) => {
        console.log(error.message);
      });
  };

  // options for form submission
  const onIndividualDonation: SubmitHandler<FellowFormData> = (data) => {
    setIsSubmitting(true);
    console.log("Individual donation:", data);
    const { name, email, amount } = data;
    testPayment({ name, email, amount });

    // open Helcim payment processor. If the processing is successful
    // and the data.amount === selectedAmount,
    // show the new percentage and reroute the fellow to a successful modal and send a fellow receipt email

    //set the amount after successful donation
    const parsedAmount = parseAmount(selectedAmount);
    setCurrentAmount((prevAmount) => prevAmount + parsedAmount);

    //send a confirmation / thank you email + show thanks modal after successful donation
    sendFellowDonationEmail(email, name, amount)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    showModal(<DonationThanksModal />);
    //CLEAR FORMS
    clearIndividualForm();
  };

  const onBusinessDonation: SubmitHandler<BusinessFormData> = (data) => {
    setIsSubmitting(true);
    console.log("Business donation:", data);
    const { email, businessName: name, amount } = data; //we need to change the "businessName" to "name" for the payment processor
    testPayment({ name, email, amount });

    // open Helcim payment processor. If the processing is successful and the amount matches the data.amount
    // and the data.amount === selectedAmount,
    // show the new percentage and reroute the business to a successful modal and send a business receipt email

    //set the amount after successful donation
    const parsedAmount = parseAmount(selectedAmount);
    setCurrentAmount((prevAmount) => prevAmount + parsedAmount);

    //send a confirmation / thank you email + show thanks modal after successful donation
    // const { email, businessName, amount } = data;
    // sendBusinessDonationEmail(email, businessName, amount) //should I keep this as businessName or make it simple "name"?
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    showModal(<DonationThanksModal />);

    //CLEAR FORMS - hmm, perhaps we should actually put some kind of blur on the donationBox after a submission?
    clearBusinessForm();
  };

  // form-clearing functions
  const clearBusinessForm = () => {
    setBusinessValue("businessName", "");
    setBusinessValue("contactName", "");
    setBusinessValue("email", "");
    setBusinessValue("referral", "");
    setSelectedAmount("");
    setIsSubmitting(false);
  };
  const clearIndividualForm = () => {
    setIndividualValue("name", "");
    setIndividualValue("email", "");
    setIndividualValue("address", "");
    setSelectedAmount("");
    setIsSubmitting(false);
  };

  // log errors
  const logErrors = (errors: typeof errorsIndividual) => {
    console.log("Form Errors:", errors);
  };
  const logBusinessErrors = (errors: typeof errorsBusiness) => {
    console.log("Form Errors:", errors);
  };

  // donation emails
  const sendFellowDonationEmail = async (
    email: string,
    name: string,
    amount: string,
  ) => {
    const firstName = name.split(" ")[0];
    console.log(firstName);
    await fetch("/api/emails/donationEmails/fellowDonationEmail", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        firstName: firstName,
        amount: amount,
      }),
    });
  };

  const sendBusinessDonationEmail = async (
    email: string,
    businessName: string,
    amount: string,
  ) => {
    await fetch("/api/emails/donationEmails/businessDonationEmail", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        businessName: businessName,
        amount: amount,
      }),
    });
  };

  //setting chosen amount for donation via buttons
  const handleAmountChange = (amount: any) => {
    setCustomAmount("");

    //remove amounts if a button is already selected then gets clicked again
    if (String(amount) === selectedAmount) {
      if (donationCategory === "individual") {
        setIndividualValue("amount", "0");
      } else {
        setBusinessValue("amount", "0");
      }
      setSelectedAmount("");
      handleAddressOption(0);
      return;
    }

    // if an individual amount gets selected, update the IndividualDonation information, if not, set it as business
    if (donationCategory === "individual") {
      setIndividualValue("amount", amount);
    } else {
      setBusinessValue("amount", amount);
    }
    setSelectedAmount(String(amount));
    handleAddressOption(amount);
  };

  // handler for custom amounts
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

    setCustomAmount("$" + value);
    setSelectedAmount(value);
    if (donationCategory === "individual") {
      setIndividualValue("amount", value);
    } else {
      setBusinessValue("amount", value);
    }
  };

  // handler responsible to assessing if the Address option should be displayed
  const handleAddressOption = (amount: any) => {
    const numericValue = parseAmount(amount);
    setShowAddress(numericValue >= 100.0 && donationCategory === "individual");
  };

  // number parsing for handling
  const parseAmount = (amount: string | number): number => {
    if (typeof amount === "number") return amount;
    return parseFloat(amount.replace(/[^0-9.]/g, "")) || 0;
  };

  // calculating the percentage of funds raised
  const calculatePercentage = () => {
    const percentage = (currentAmount / targetAmount) * 100;
    return percentage.toFixed(1);
  };

  // display rewards relevant to selectedAmount
  function printRewardsArray(
    rewardsArray: [string, string[]][],
  ): React.ReactNode {
    if (selectedAmount === "0" || selectedAmount === "") return null;

    // Convert selectedAmount to a number
    const selectedAmountNum = parseFloat(
      selectedAmount.replace(/[^0-9.]/g, ""),
    );

    // Check for individual donations over $1,000
    if (donationCategory === "individual" && selectedAmountNum >= 1001) {
      const thousandPlusReward = rewardsArray.find(
        ([amount]) => amount === "$1000+",
      );
      if (thousandPlusReward) {
        const [amount, description] = thousandPlusReward;
        return renderRewardBox(amount, description);
      }
    }

    // Find the closest reward amount that's less than or equal to the selected amount
    const closestReward = rewardsArray.reduce((closest, current) => {
      const currentAmount = parseFloat(current[0].replace(/[^0-9.]/g, ""));
      if (
        currentAmount <= selectedAmountNum &&
        currentAmount > parseFloat(closest[0].replace(/[^0-9.]/g, "")) &&
        current[0] !== "$1000+" // Exclude the $1000+ option from normal comparison
      ) {
        return current;
      }
      return closest;
    });

    if (!closestReward) return null;
    const [amount, description] = closestReward;

    return renderRewardBox(amount, description);
  }

  // render the rewards information
  function renderRewardBox(
    amount: string,
    description: string[],
  ): React.ReactNode {
    return (
      <div key={amount} className="RewardBox">
        <InfoBox
          variant="hollow"
          aria={amount}
          addClasses=" text-xs mt-8 text-left"
          size="small"
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
    <>
      <Script
        type="text/javascript"
        src="https://secure.helcim.app/helcim-pay/services/start.js"
      />
      <div
        className={`DonationStation flex flex-col items-center gap-6 px-8 pb-8 lg:w-5/12 ${dropDown.value === true ? "mt-20" : "mt-8"}`}
      >
        <div className="ProgressBarContainer mb-4 mt-10 sm:mt-0">
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
          {/* form submission: individual and business options */}
          <form
            key={donationCategory === "individual" ? 1 : 2}
            onSubmit={
              donationCategory === "individual"
                ? handleSubmitIndividual(onIndividualDonation, logErrors)
                : handleSubmitBusiness(onBusinessDonation, logBusinessErrors)
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
              {Object.entries(rewards[donationCategory as DonationCategory])
                .filter(([amount]) => amount !== "$1000+") // filter the 1000+ option from the buttonlist
                .map(([amount]) => (
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
                inputMode="decimal"
                placeholder="custom amount"
                className="rounded-full border-2 border-jade bg-cream p-2 px-4 text-center text-xs placeholder-jade drop-shadow-smJade"
                aria-label="custom amount"
                value={customAmount}
                onChange={handleCustomAmountChange}
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
                    placeholder="First & Last Name*"
                    className="rounded-full border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
                    aria-label="name"
                    {...registerIndividual("name")}
                  />
                  {errorsIndividual.name?.message && (
                    <p className="text-left text-xs font-medium text-orange">
                      {errorsIndividual.name.message.toString()}
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
                  {/* referral option */}
                  <div className="ReferralOption mt-6 flex items-center gap-2">
                    <SiteButton
                      variant="hollow"
                      colorScheme="f1"
                      aria="referral"
                      size="smallCircle"
                      isSelected={referral}
                      onClick={() => setReferral(!referral)}
                    />
                    {!referral ? (
                      <label
                        htmlFor="referral"
                        className="cursor-pointer pl-2 text-sm"
                      >
                        have a referral code?{" "}
                      </label>
                    ) : (
                      <input
                        type="text"
                        placeholder="Referral Code"
                        className="ml-2 rounded-full border-2 border-jade bg-cream p-2 px-4 text-left text-sm placeholder-jade placeholder-opacity-50 drop-shadow-jade"
                        aria-label="referral"
                        {...registerBusiness("referral")}
                      />
                    )}
                  </div>
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
                disabled={isSubmitting}
              >
                {isSubmitting ? "redirecting..." : "continue"}
              </SiteButton>
            </div>
          </form>
        </InfoBox>
      </div>
    </>
  );
}

export default DonationBox;
