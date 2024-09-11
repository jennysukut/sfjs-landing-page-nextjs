"use client";

import DonationBox from "./donationBox";
import CrowdfundingRewardsSection from "./crowdfundingRewardsSection";
import StatusTimelineGoalsSection from "./statusTimelineGoals";
import EstTimelineSection from "./estTimeline";

export default function SupportPage() {
  return (
    <div className="SupportPage flex max-w-[1600px] flex-col self-center p-14 pb-0">
      <div className="DetailsAndDonation flex justify-between gap-10">
        <StatusTimelineGoalsSection />
        <DonationBox />
      </div>
      <EstTimelineSection />
      <CrowdfundingRewardsSection />
    </div>
  );
}
