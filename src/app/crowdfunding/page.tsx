"use client";

import DonationBox from "./donationBox";
import CrowdfundingRewardsSection from "./crowdfundingRewardsSection";
import StatusTimelineGoalsSection from "./statusTimelineGoals";
import EstTimelineSection from "./estTimeline";

export default function SupportPage() {
  return (
    <div className="SupportPage flex max-w-[100%] flex-col self-center py-8 pb-0 lg:max-w-[1600px] lg:p-14">
      <div className="DetailsAndDonation flex flex-col justify-between gap-10 lg:flex-row">
        <StatusTimelineGoalsSection />
        <DonationBox />
      </div>
      <EstTimelineSection />
      <CrowdfundingRewardsSection />
    </div>
  );
}
