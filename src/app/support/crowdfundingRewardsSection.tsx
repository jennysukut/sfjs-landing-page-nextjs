import { supportPageInfo } from "@/lib/siteCopy/supportPageInfo";
import SiteButton from "@/components/siteButton";
import InfoBox from "@/components/infoBox";

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
          <div key={amount} className="RewardBox">
            <h1 className="Amount mb-3">{amount}</h1>
            <InfoBox variant="hollow" aria={amount} addClasses="mb-8">
              <ul className="w-full">
                {description.map((item, index) => (
                  <li key={index} className="relative mb-2 list-disc pl-6">
                    {item}
                  </li>
                ))}
              </ul>
            </InfoBox>
          </div>
        ))}
      </>
    );
  }

  return (
    <section className="CrowdfundingRewardsSection mt-20 flex w-full flex-col items-center border-t-2 border-olive/20 pt-12">
      <div className="IntroContainer mb-12 self-center">
        <h1 className="RewardIncentivesTitle pb-8 pl-12">
          our incentives & rewards:
        </h1>
        <InfoBox
          variant="hollow"
          aria="our incentives & rewards"
          addClasses="min-w-screen-lg leading-relaxed py-12 px-14"
          width="extraWide"
        >
          {supportPageInfo.incentivesAndRewards.map((reward, index) => (
            <p key={index} className="mb-6 last:mb-0">
              {reward}
            </p>
          ))}
        </InfoBox>
      </div>
      <h1 className="RewardsSectionTitle pb-12 pt-12">
        our rewards breakdown:
      </h1>
      <div className="RewardsSections flex w-full justify-between gap-10">
        <div className="IndividualRewards flex flex-col items-start gap-6 py-0">
          <InfoBox
            aria="for individuals"
            variant="filled"
            colorScheme="c4"
            size="small"
            addClasses="rounded-2xl self-center"
          >
            for individuals:
          </InfoBox>

          <div className="IndividualRewardsContainer flex flex-col items-start gap-6">
            {printRewardsArray(individualRewardsArray)}
          </div>
        </div>

        <div className="BusinessRewards flex flex-col items-start gap-6 border-l-2 border-olive/20 pl-10">
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
