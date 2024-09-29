import InfoBox from "@/components/infoBox";
import MotionContainer from "@/components/motionContainer";

import { supportPageInfo } from "@/lib/siteCopy/supportPageInfo";

export default function EstTimelineSection() {
  return (
    <MotionContainer
      direction="y"
      addClasses="EstimatedTimelineContainer max-w-[100%] flex w-full flex-col items-end px-8 py-8 sm:pb-10 sm:pt-12 sm:mr-14"
    >
      {/* <div className="EstimatedTimelineContainer mx-auto flex w-full flex-col self-end pb-10 pt-12"> */}
      <h1 className="EstimatedTimelineTitle self-end">our est. timeline:</h1>
      <InfoBox
        aria="our est. timeline"
        variant="hollow"
        addClasses="leading-relaxed sm:py-14 px-12 self-end"
        size="large"
      >
        {supportPageInfo.estTimeline.map((status, index) => (
          <p key={index} className="mb-6 text-right last:mb-0">
            {status}
          </p>
        ))}
      </InfoBox>
      <p className="TimelineNote mt-8 max-w-md self-end text-right text-xs font-medium italic text-olive">
        {supportPageInfo.timelineAst}
      </p>
      {/* </div> */}
    </MotionContainer>
  );
}
