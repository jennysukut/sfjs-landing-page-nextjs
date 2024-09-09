import { supportPageInfo } from "@/lib/siteCopy/supportPageInfo";
import SiteButton from "@/components/siteButton";
import InfoBox from "@/components/infoBox";

const individualRewardsArray = Object.entries(
  supportPageInfo.rewards.individuals,
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
    <section className="CrowdfundingRewardsSection mt-20 flex w-full flex-col items-center">
      <div className="IntroContainer mb-12 self-start">
        <h1 className="RewardIncentivesTitle self-start pl-12">
          our incentives & rewards:
        </h1>
        <InfoBox
          variant="hollow"
          aria="our incentives & rewards"
          addClasses="min-w-full"
        >
          {supportPageInfo.incentivesAndRewards.map((reward, index) => (
            <p key={index} className="mb-4 text-sm last:mb-0">
              {reward}
            </p>
          ))}
        </InfoBox>
      </div>
      <h1 className="RewardsSectionTitle mb-12">our rewards breakdown:</h1>
      <div className="RewardsSections flex w-full justify-between gap-10">
        <div className="IndividualRewards flex flex-col items-start gap-6">
          {/* Why are these buttons? */}
          <SiteButton
            aria="for humans"
            size="large"
            variant="filled"
            colorScheme="c4"
          >
            for humans:
          </SiteButton>

          <div className="IndividualRewardsContainer flex flex-col items-start gap-6">
            {printRewardsArray(individualRewardsArray)}
          </div>
        </div>

        <div className="BusinessRewards flex flex-col items-start gap-6 border-l border-midnight/20 pl-10">
          {/* Why are these buttons? */}
          <SiteButton
            aria="for businesses"
            size="large"
            variant="filled"
            colorScheme="b3"
          >
            for businesses:
          </SiteButton>
          <div className="BusinessRewardsContainer">
            {printRewardsArray(businessRewardsArray)}
          </div>
        </div>
      </div>
      <div className="FinePrint mt-8 w-[80%] text-xs font-medium italic text-olive/80">
        {finePrintArray.map((line, index) => (
          <p className="Asterisk mb-4" key={index}>
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}
