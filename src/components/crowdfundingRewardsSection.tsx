import { supportPageInfo } from "@/lib/supportPageInfo";
import SiteButton from "./siteButton";
import InfoBox from "./infoBox";

export default function CrowdfundingRewardsSection() {
  return (
    <div className="CrowdfundingRewardsSection mt-20">
      <h1 className="RewardsSectionTitle mb-12">our rewards breakdown:</h1>
      <div className="RewardsSections flex justify-evenly">
        <div className="IndividualRewards flex flex-col items-center">
          <SiteButton
            aria="for humans"
            size="large"
            variant="filled"
            colorScheme="c4"
          >
            for humans:
          </SiteButton>

          {Object.entries(supportPageInfo.rewards.individuals).map(
            ([amount, description]) => (
              <div key={amount} className="RewardBox">
                <h1 className="Amount">{amount}</h1>
                <InfoBox variant="hollow" aria={amount} addClasses="mb-8">
                  <div className="w-full max-w-[300px]">
                    {Array.isArray(description) ? (
                      description.map((item, index) => (
                        <p
                          key={index}
                          className="relative mb-2 pl-6 before:absolute before:left-0 before:content-['•']"
                        >
                          {item}
                        </p>
                      ))
                    ) : (
                      <p className="relative mb-2 pl-6 before:absolute before:left-0 before:content-['•']">
                        {description}
                      </p>
                    )}
                  </div>
                </InfoBox>
              </div>
            ),
          )}
        </div>
        <div className="BusinessRewards flex flex-col items-center">
          <SiteButton
            aria="for businesses"
            size="large"
            variant="filled"
            colorScheme="b3"
          >
            for businesses:
          </SiteButton>

          {Object.entries(supportPageInfo.rewards.business).map(
            ([amount, description]) => (
              <div key={amount} className="RewardBox">
                <h1 className="Amount">{amount}</h1>
                <InfoBox
                  variant="hollow"
                  aria={amount}
                  addClasses="mb-8 w-full"
                >
                  <div className="w-full max-w-[35vw]">
                    {Array.isArray(description) ? (
                      description.map((item, index) => (
                        <p
                          key={index}
                          className="relative mb-2 pl-6 before:absolute before:left-0 before:content-['•']"
                        >
                          {item}
                        </p>
                      ))
                    ) : (
                      <p className="relative mb-2 pl-6 before:absolute before:left-0 before:content-['•']">
                        {description}
                      </p>
                    )}
                  </div>
                </InfoBox>
              </div>
            ),
          )}
          <div className="BusinessRewardsNot mt-8 max-w-md self-end text-right text-xs font-medium italic text-olive">
            {supportPageInfo.businessFinePrint.map((line, index) => (
              <p className="Asterisk mb-4" key={index}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
