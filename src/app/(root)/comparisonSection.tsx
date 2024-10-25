import SiteButton from "@/components/siteButton";
import SiteLabel from "@/components/siteLabel";
import InfoBox from "@/components/infoBox";

import { landingPageText } from "@/lib/siteCopy/landingPageText";
import { ButtonColorOption } from "@/lib/stylingData/buttonColors";
import getRandomColorScheme from "@/utils/getRandomColorScheme";

function ComparisonSection() {
  return (
    <div className="comparisonSection flex flex-col items-center gap-8">
      <div className="comparisonSectionPainPointContainer flex flex-col items-center gap-8 pb-14">
        <h1 className="ComparisonSectionText max-w-[700px] pb-4 pl-4 text-[1.25rem] font-bold leading-8 text-midnight sm:text-3xl">
          {`the job market is broken.`}
        </h1>
        <h1 className="ComparisonSectionText -mt-8 max-w-[700px] pl-4 text-[1.25rem] font-bold leading-8 text-midnight sm:text-2xl">
          {`it's causing unnecessary:`}
        </h1>
        <div className="PainPoints flex flex-wrap justify-center gap-4">
          {landingPageText.comparisonDetails.painPoints.map((point) => {
            return (
              <InfoBox
                key={point}
                variant="hollow"
                aria="comparison point"
                size="small"
                addClasses="text-lg text-center border-olive drop-shadow-olive text-olive"
              >
                {point}
              </InfoBox>
            );
          })}
        </div>
        <p className="PainPointDetail self-end pt-8 text-end">{`...the list goes on`}</p>
      </div>
      <div className="comparisonSectionComparisonContainer flex flex-col items-center gap-12 pb-14">
        <h1 className="ComparisonSectionText max-w-[700px] pb-4 pl-4 text-[1.25rem] font-bold leading-8 text-midnight sm:text-3xl">
          {`enough is enough.`}
        </h1>
        <h1 className="ComparisonSectionText -mt-8 max-w-[700px] pl-4 text-center text-[1.25rem] font-bold leading-8 text-midnight sm:text-2xl">
          {`we’ve decided to put our collective foot down and fix it ourselves.`}
        </h1>

        <InfoBox
          variant="filled"
          aria="change"
          colorScheme="b1"
          addClasses="text-center leading-8 text-xl"
        >
          {`we think it’s time to change this sad status quo and demand better.`}
        </InfoBox>
        <h1 className="ComparisonSectionText mt-14 pb-4 pl-4 text-center text-[1.25rem] font-bold leading-8 text-midnight sm:text-2xl">
          {`that's why we’re building a job platform & cultural movement, focused on people + promoting:`}
        </h1>
        <div className="ComparisonPoints flex flex-wrap justify-center gap-4">
          {landingPageText.comparisonDetails.promoting.map(
            ({ details, colorScheme }) => {
              return (
                <InfoBox
                  key={details}
                  variant="filled"
                  colorScheme={colorScheme as ButtonColorOption}
                  aria="comparison point"
                  size="small"
                  addClasses="text-lg"
                >
                  {details}
                </InfoBox>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
}

export default ComparisonSection;
