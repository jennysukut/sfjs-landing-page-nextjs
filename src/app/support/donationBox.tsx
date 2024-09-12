"use client";

import { useState, useEffect } from "react";
import ProgressBar from "@/components/progressBar";
import InfoBox from "@/components/infoBox";
import SiteButton from "@/components/siteButton";
import { supportPageInfo } from "@/lib/siteCopy/supportPageInfo";
import { gql } from '@apollo/client';
import client from '../../lib/apollo-client';
import Script from "next/script";

const INITIALIZE_PAYMENT = gql`
  mutation InitializePayment($payment: PaymentInput!) {
    initializePayment(payment: $payment) {
      checkoutToken
    }
  }
`;

type DonationCategory = "business" | "individuals" | "";

function DonationBox() {
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

  useEffect(() => {
    // @ts-ignore
    const handleMessage = (event) => {
      console.log(JSON.stringify(event));
      // if (event.origin === 'https://secure.helcim.com') {
      if (event.origin.includes('helcim')) {
        const { paymentStatus, transactionId } = event.data;
        if (paymentStatus === 'success') {
          // Handle successful payment
          console.log("payment success");
        } else if (paymentStatus === 'failed') {
          // Handle failed payment
          console.log("payment failed");
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

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
      donationAmount,
    });

    const payment = {
      "paymentType": "purchase",
      "amount": "0.01",
      "currency": "USD",
      "account": { name, email }
    };

    client.mutate({
      mutation: INITIALIZE_PAYMENT,
      variables: { payment },
    })
      .then(({ data }) => {
        console.log("success");
        // @ts-ignore // this function is added by an external script
        appendHelcimPayIframe(data.initializePayment.checkoutToken);
      })
      .catch((error) => {
        console.log(error.message);
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
    <>
      <Script type="text/javascript" src="https://secure.helcim.app/helcim-pay/services/start.js"></Script>
      <div className="DonationStation flex w-5/12 flex-col gap-6">
        <div className="ProgressBarContainer mb-4">
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

          {/* donation amount options */}
          <div className="AmountOptions mt-8 flex max-w-sm flex-wrap items-center justify-center gap-4">
            {donationCategory && (
              <>
                {Object.entries(supportPageInfo.rewards[donationCategory]).map(
                  ([amount]) => (
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
                  ),
                )}

                <input
                  type="text"
                  inputMode="decimal"
                  placeholder="$0.00"
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
    </>
  );
}

export default DonationBox;
