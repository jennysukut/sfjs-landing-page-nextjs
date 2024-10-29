import InfoBox from "@/components/infoBox";
import MotionContainer from "@/components/motionContainer";

import { supportPageInfo } from "@/lib/siteCopy/supportPageInfo";

const individualRewardsArray = Object.entries(
  supportPageInfo.rewards.individual,
);
const businessRewardsArray = Object.entries(supportPageInfo.rewards.business);
const finePrintArray = supportPageInfo.businessFinePrint;

export default function CrowdfundingRewardsSection() {
  function printRewardsArray(
    rewardsArray: [string, string[]][],
  ): React.ReactNode {
    return (
      <>
        {rewardsArray.map(([amount, description]) => (
          <MotionContainer key={amount}>
            <div key={amount} className="RewardBox">
              <h1 className="Amount mb-3">{amount}</h1>
              <InfoBox
                variant="hollow"
                aria={amount}
                addClasses="mb-8"
                size="small"
              >
                <ul className="w-full">
                  {description.map((item, index) => (
                    <li key={index} className="relative mb-2 list-disc pl-6">
                      {item}
                    </li>
                  ))}
                </ul>
              </InfoBox>
            </div>
          </MotionContainer>
        ))}
      </>
    );
  }

  return (
    <section className="CrowdfundingRewardsSection mx-8 flex max-w-[98%] flex-col items-center border-t-2 border-olive/20 pt-12 sm:mt-20 lg:w-full">
      <MotionContainer
        direction="x"
        addClasses="IntroContainer mb-12 self-center flex flex-col"
      >
        <h1 className="RewardIncentivesTitle pb-4 sm:pb-8 sm:pl-12">
          our incentives & rewards:
        </h1>
        <InfoBox
          variant="hollow"
          aria="our incentives & rewards"
          addClasses="min-w-screen-lg leading-relaxed py-14 px-12"
          width="extraWide"
          size="large"
        >
          {supportPageInfo.incentivesAndRewards.map((reward, index) => (
            <p key={index} className="mb-6 last:mb-0">
              {reward}
            </p>
          ))}
        </InfoBox>
      </MotionContainer>
      <h1 className="RewardsSectionTitle pb-12 pt-12">
        our rewards breakdown:
      </h1>
      <div className="RewardsSections flex w-full flex-col justify-between gap-10 sm:flex-row">
        <div className="IndividualRewards flex flex-col items-start py-0 sm:gap-6">
          <InfoBox
            aria="for individuals"
            variant="filled"
            colorScheme="c4"
            size="small"
            addClasses="rounded-2xl self-center"
          >
            for individuals:
          </InfoBox>

          <div className="IndividualRewardsContainer flex flex-col items-start gap-4 sm:gap-6">
            {printRewardsArray(individualRewardsArray)}
          </div>
        </div>

        <div className="BusinessRewards mt-12 flex flex-col items-start gap-4 border-olive/20 sm:mt-0 sm:gap-6 sm:border-l-2 sm:pl-10">
          <InfoBox
            aria="for businesses"
            variant="filled"
            colorScheme="b3"
            size="small"
            addClasses="rounded-2xl self-center"
          >
            for businesses:
          </InfoBox>
          <div className="BusinessRewardsContainer">
            {printRewardsArray(businessRewardsArray)}
          </div>
        </div>
      </div>
      <div className="FinePrint mt-12 w-[100%] text-xs font-medium italic text-olive/80">
        {finePrintArray.map((line, index) => (
          <p className="Asterisk mb-4" key={index}>
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}
