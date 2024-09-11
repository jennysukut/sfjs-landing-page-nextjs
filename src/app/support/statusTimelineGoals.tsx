import InfoBox from "@/components/infoBox";
import SiteLabel from "@/components/siteLabel";
import { supportPageInfo } from "@/lib/siteCopy/supportPageInfo";

export default function StatusTimelineGoalsSection() {
  return (
    <div className="CurrentStatusAndTimeline flex flex-col gap-6 px-8">
      <h1 className="CurrentStatusTitle pl-4">our current status:</h1>
      <InfoBox
        aria="our current status"
        variant="hollow"
        addClasses="max-w-md leading-relaxed py-12 px-14"
      >
        {supportPageInfo.currentStatus.map((status, index) => (
          <p key={index} className="mb-6 last:mb-0">
            {status}
          </p>
        ))}
      </InfoBox>

      <InfoBox
        aria="our crowdfunding needs"
        variant="filled"
        colorScheme="c4"
        addClasses="max-w-md leading-relaxed py-12 px-14"
      >
        {supportPageInfo.crowdfundingNeed.map((status, index) => (
          <p key={index} className="mb-6 mt-4 last:mb-0">
            {status}
          </p>
        ))}
      </InfoBox>
      <InfoBox
        aria="our current status"
        variant="hollow"
        addClasses="max-w-md text-center flex flex-col items-center leading-relaxed py-12 px-14"
      >
        our goal is to raise between:
        <SiteLabel
          aria="goal"
          variant="display"
          addClasses="px-8 m-5"
          textSize="medium"
        >
          $15.490 - $216.738
        </SiteLabel>
        {supportPageInfo.goalDetail}
      </InfoBox>
    </div>
  );
}
