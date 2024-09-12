import InfoBox from "@/components/infoBox";
import { supportPageInfo } from "@/lib/siteCopy/supportPageInfo";

export default function EstTimelineSection() {
  return (
    <div className="EstimatedTimelineContainer mx-auto flex w-full flex-col self-end pb-10 pt-12">
      <h1 className="EstimatedTimelineTitle self-end pb-8">
        our est. timeline:
      </h1>
      <InfoBox
        aria="our est. timeline"
        variant="hollow"
        addClasses="leading-relaxed py-12 px-14 self-end"
      >
        {supportPageInfo.estTimeline.map((status, index) => (
          <p key={index} className="mb-6 last:mb-0">
            {status}
          </p>
        ))}
      </InfoBox>
      <p className="TimelineNote mt-8 max-w-md self-end text-right text-xs font-medium italic text-olive">
        {supportPageInfo.timelineAst}
      </p>
    </div>
  );
}
