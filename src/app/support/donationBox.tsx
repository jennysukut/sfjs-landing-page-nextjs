"use client";

import * as z from "zod";
import { useState, useEffect } from "react";
import { useSignals } from "@preact/signals-react/runtime";
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
import { parseAmount, calculatePercentage } from "@/utils/numberUtils";
import {
  sendBusinessDonationEmail,
  sendFellowDonationEmail,
} from "@/utils/emailUtils";
import DonationThanksModal from "@/components/modals/donationThanksModal";
import ErrorModal from "@/components/modals/errorModal";
import {
  ACCEPT_FELLOW_DONATION,
  ACCEPT_BUSINESS_DONATION,
  COMPLETE_PAYMENT,
  GET_CURRENT_AMOUNT,
} from "@/graphql/mutations";

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
  const [checkoutToken, setCheckoutToken] = useState("");
  const [checkoutId, setCheckoutId] = useState(0);
  const [donationData, setDonationData] = useState({
    name: "",
    businessName: "",
    email: "",
    amount: "",
  });

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

  // options for form submission
  const onIndividualDonation: SubmitHandler<FellowFormData> = (data) => {
    submitForm(data);
  };

  const onBusinessDonation: SubmitHandler<BusinessFormData> = (data) => {
    submitForm(data);
  };

  // form submission function
  const submitForm = (data: any) => {
    setDonationData(data);
    setIsSubmitting(true);
    if (donationCategory === "individual") {
      const { name, email, amount } = data;
      initiateFellowDonation({ name, email, amount }, ACCEPT_FELLOW_DONATION);
    } else {
      const { businessName, contactName, email, amount, referral} = data;
      initiateBusinessDonation({ businessName, contactName, email, amount, referral }, ACCEPT_BUSINESS_DONATION);
    }
  };

  // initiate donation function
  const initiateFellowDonation = ({ name, email, amount }: any, mutation: any) => {
    const donation = {
      name: name,
      amount: String(parseFloat(amount.replace(/^\$/, "")).toFixed(2)),
      email: email,
    };

    client
      .mutate({
        mutation: mutation,
        variables: { donation },
        fetchPolicy: "no-cache",
      })
      //get the checkout token and open Helcim for payment
      .then(({ data }) => {
        setCheckoutToken(data.acceptFellowDonation.checkoutToken);
        setCheckoutId(data.acceptFellowDonation.id);
        // @ts-ignore // this function is added by an external script
        appendHelcimPayIframe(data.acceptFellowDonation.checkoutToken);
      })
      .catch((error) => {
        console.log(error.message);
        setIsSubmitting(false);
        showModal(<ErrorModal />);
      });
  };

  // initiate donation function
  const initiateBusinessDonation = ({ businessName, contactName, email, amount, referral }: any, mutation: any) => {
    const donation = {
      businessName: businessName,
      contactName: contactName,
      amount: String(parseFloat(amount.replace(/^\$/, "")).toFixed(2)),
      email: email,
      referral: referral,
    };

    client
      .mutate({
        mutation: mutation,
        variables: { donation },
        fetchPolicy: "no-cache",
      })
      //get the checkout token and open Helcim for payment
      .then(({ data }) => {
        setCheckoutToken(data.acceptBusinessDonation.checkoutToken);
        setCheckoutId(data.acceptBusinessDonation.id);
        // @ts-ignore // this function is added by an external script
        appendHelcimPayIframe(data.acceptBusinessDonation.checkoutToken);
      })
      .catch((error) => {
        console.log(error.message);
        setIsSubmitting(false);
        showModal(<ErrorModal />);
      });
  };

  //checking for payment success
  useEffect(() => {
    if (checkoutToken !== "") {
      const handleEvent = (event: MessageEvent) => {
        const helcimPayJsIdentifierKey = "helcim-pay-js-" + checkoutToken;
        if (event.data.eventName === helcimPayJsIdentifierKey) {
          if (event.data.eventStatus === "ABORTED") {
            // Handle aborted transaction
            setIsSubmitting(false);
          }
          if (event.data.eventStatus === "SUCCESS") {
            // if it's a success, we'll need to update the successful transaction field in the donation mutation to true
            const transactionData = JSON.parse(event.data.eventMessage);
            const input = {
              paymentId: checkoutId,
              hash: transactionData.data.hash,
              data: transactionData.data.data,
            };
            confirmPayment(input);
            return;
          }
        }
      };

      window.addEventListener("message", handleEvent);

      // Cleanup function to remove the event listener
      return () => {
        window.removeEventListener("message", handleEvent);
      };
    }
  }, [checkoutToken]);

  // confirming donation
  const confirmPayment = (input: any) => {
    client
      .mutate({
        mutation: COMPLETE_PAYMENT,
        variables: { input },
        fetchPolicy: "no-cache",
      })
      // .then(({ data }) => {
      //   console.log("Success:", data.completePayment);
      // })
      .catch((error) => {
        console.log("Error:", error.message);
        console.log("GraphQL Errors:", error.graphQLErrors);
        console.log("Network Error:", error.networkError);
      });

    setIsSubmitting(false);

    if (donationCategory === "individual") {
      const { name, email, amount } = donationData;
      sendFellowDonationEmail(email, name, amount);
    } else {
      const { businessName: name, email, amount } = donationData;
      sendBusinessDonationEmail(email, name, amount);
    }
    clearForms();
    removeHelcimPayIframe();
    showModal(<DonationThanksModal />);
  };

  // form-clearing function
  const clearForms = () => {
    setBusinessValue("businessName", "");
    setBusinessValue("contactName", "");
    setBusinessValue("email", "");
    setBusinessValue("referral", "");
    setIndividualValue("name", "");
    setIndividualValue("email", "");
    setIndividualValue("address", "");
    setSelectedAmount("");
    setIsSubmitting(false);
    setCustomAmount("");
  };

  function watchForExit(event: MessageEvent) {
    //not sure why this exists, but the window.removeEventListener needed this to exist?
  }

  function removeHelcimPayIframe() {
    const frame: HTMLElement | null =
      document.getElementById("helcimPayIframe");

    if (frame instanceof HTMLIFrameElement) {
      frame.remove();
      window.removeEventListener("message", watchForExit, false);
    }
  }

  // log errors
  const logErrors = (errors: typeof errorsIndividual) => {
    console.log("Form Errors:", errors);
  };
  const logBusinessErrors = (errors: typeof errorsBusiness) => {
    console.log("Form Errors:", errors);
  };

  //setting donation amounts
  function setDollarAmount(amount: any) {
    if (donationCategory === "individual") {
      setIndividualValue("amount", amount);
    } else {
      setBusinessValue("amount", amount);
    }
  }

  const handleAmountChange = (amount: any) => {
    setCustomAmount("");
    if (String(amount) === selectedAmount) {
      setDollarAmount("0");
      setSelectedAmount("");
      handleAddressOption(0);
      return;
    }

    setDollarAmount(amount);
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

    //do we set each of the amounts with a dollar at the beginning, or remove the dollar sign on everything?
    setCustomAmount("$" + value);
    setSelectedAmount("$" + value);
    setDollarAmount("$" + value);
  };

  // handler responsible to assessing if the Address option should be displayed
  const handleAddressOption = (amount: any) => {
    const numericValue = parseAmount(amount);
    setShowAddress(numericValue >= 100.0 && donationCategory === "individual");
  };

  // display rewards relevant to selectedAmount
  function printRewardsArray(
    rewardsArray: [string, string[]][],
  ): React.ReactNode {
    if (selectedAmount === "0" || selectedAmount === "") return null;

    // convert selectedAmount to a number
    const selectedAmountNum = parseFloat(
      selectedAmount.replace(/[^0-9.]/g, ""),
    );

    //check for business donations under $250
    if (donationCategory === "business" && selectedAmountNum < 250) {
      return null; // return nothing for business donations under $250
    }

    // check for individual donations over $1,000
    if (donationCategory === "individual" && selectedAmountNum >= 1001) {
      const thousandPlusReward = rewardsArray.find(
        ([amount]) => amount === "$1000+",
      );
      if (thousandPlusReward) {
        const [amount, description] = thousandPlusReward;
        return renderRewardBox(amount, description);
      }
    }

    // find the closest reward amount that's less than or equal to the selected amount
    const closestReward = rewardsArray.reduce((closest, current) => {
      const currentAmount = parseFloat(current[0].replace(/[^0-9.]/g, ""));
      if (
        currentAmount <= selectedAmountNum &&
        currentAmount > parseFloat(closest[0].replace(/[^0-9.]/g, "")) &&
        current[0] !== "$1000+"
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
              <li key={index} className="relative mb-2 list-disc pl-2 sm:pl-6">
                {item}
              </li>
            ))}
          </ul>
        </InfoBox>
      </div>
    );
  }

  //get the current amount of donations
  const getCurrentAmount = () => {
    client
      .mutate({
        mutation: GET_CURRENT_AMOUNT,
      })
      .then(({ data }) => {
        setCurrentAmount(data.currentDonations);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //get the current amount of donations on re-render
  useEffect(() => {
    getCurrentAmount();
  }, [isSubmitting]);

  return (
    <>
      <Script
        type="text/javascript"
        src="https://secure.helcim.app/helcim-pay/services/start.js"
      />
      <div
        className={`DonationStation flex max-w-[95vw] flex-col items-center gap-6 self-center px-8 pb-8 lg:w-5/12 lg:self-auto ${dropDown.value === true ? "mt-20" : "mt-8"}`}
      >
        <div className="ProgressBarContainer mb-4 mt-10 sm:mt-0">
          <p className="ProgressBarStatus">
            current amount raised: ${currentAmount} /{" "}
            {calculatePercentage({ currentAmount, targetAmount })}%
          </p>
          <ProgressBar
            current={currentAmount}
            total={targetAmount}
            fillColor="bg-watermelon"
          />
        </div>

        {/* Donation Box */}
        <InfoBox
          className="DonateHere"
          aria="support us"
          variant="hollow"
          addClasses="flex flex-col text-center items-center max-w-[85vw]"
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
            <div className="DonationOptions mt-8 flex flex-col items-center gap-6 xs:flex-row">
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
                .filter(([amount]) => amount !== "$1000+")
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
