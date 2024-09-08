"use client";

import InfoBox from "@/components/infoBox";
import SiteButton from "@/components/siteButton";

export default function Support() {
  return (
    <div className="SupportPage mt-14 flex flex-grow justify-evenly p-14">
      <div className="DetailsAndDonation">
        <div className="CurrentStatusAndTimeline flex flex-col">
          <h1 className="CurrentStatusTitle">our current status:</h1>
        </div>
        <div className="DonationStation flex flex-col">
          <h1 className="CurrentStatusTitle">donate here</h1>
          {/* current donation amount tracker */}
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
                addClasses="px-8"
              >
                human
              </SiteButton>
              <SiteButton
                aria="business"
                variant="filled"
                colorScheme="f3"
                addClasses="px-8"
              >
                business
              </SiteButton>
            </div>
          </InfoBox>
        </div>
      </div>
    </div>
  );
}
