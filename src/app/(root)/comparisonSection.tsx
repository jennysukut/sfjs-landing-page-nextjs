import InfoBox from "@/components/infoBox";
import MotionContainer from "@/components/motionContainer";

import { motion } from "framer-motion";
import { landingPageText } from "@/lib/siteCopy/landingPageText";
import { ButtonColorOption } from "@/lib/stylingData/buttonColors";

function ComparisonSection() {
  const motionItem = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        x: {
          type: "spring",
          duration: 0.8,
        },
        opacity: {
          duration: 0.5,
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <div className="comparisonSection flex flex-col items-center gap-8">
      <div className="comparisonSectionPainPointContainer flex flex-col items-center gap-8 pb-14">
        <h1 className="ComparisonSectionText max-w-[700px] pb-4 pl-4 text-[1.25rem] font-bold leading-8 text-midnight sm:text-[1.7rem]">
          {`the job market is broken.`}
        </h1>
        <h1 className="ComparisonSectionText -mt-8 max-w-[700px] pl-4 text-[1.25rem] font-bold leading-8 text-midnight sm:text-2xl">
          {`it's causing unnecessary:`}
        </h1>
        <MotionContainer addClasses="PainPoints flex flex-wrap justify-center">
          {landingPageText.comparisonDetails.painPoints.map((point) => {
            return (
              <InfoBox
                key={point}
                variant="hollow"
                aria="comparison point"
                size="small"
                addClasses="text-md text-center border-olive drop-shadow-olive text-olive"
              >
                {point}
              </InfoBox>
            );
          })}
        </MotionContainer>
        <p className="PainPointDetail self-end pt-8 text-end">{`...the list goes on`}</p>
      </div>
      <div className="comparisonSectionComparisonContainer flex flex-col items-center gap-12 pb-14">
        <h1 className="ComparisonSectionText max-w-[700px] pb-4 pl-4 text-[1.25rem] font-bold leading-8 text-midnight sm:text-[1.7rem]">
          {`enough is enough.`}
        </h1>
        <h1 className="ComparisonSectionText -mt-8 max-w-[700px] pl-4 text-center text-[1.25rem] font-bold leading-8 text-midnight sm:text-2xl">
          {`we’ve decided to put our collective foot down and fix it ourselves.`}
        </h1>
        <motion.div variants={motionItem}>
          <InfoBox
            variant="filled"
            aria="change"
            colorScheme="b1"
            addClasses="text-center leading-8 text-xl"
          >
            {`it’s time to change the status quo and make things better for job-seekers and hiring staff alike!`}
          </InfoBox>
        </motion.div>
        <h1 className="ComparisonSectionText mt-14 pb-4 pl-4 text-center text-[1.25rem] font-bold leading-8 text-midnight sm:text-2xl">
          {`that's why we’re building a job platform & cultural movement, focused on people + promoting:`}
        </h1>
        <MotionContainer addClasses="ComparisonPoints flex flex-wrap justify-center">
          {landingPageText.comparisonDetails.promoting.map(
            ({ details, colorScheme }) => {
              return (
                <InfoBox
                  key={details}
                  variant="filled"
                  colorScheme={colorScheme as ButtonColorOption}
                  aria="comparison point"
                  size="small"
                  addClasses="text-md"
                >
                  {details}
                </InfoBox>
              );
            },
          )}
        </MotionContainer>
      </div>
    </div>
  );
}

export default ComparisonSection;