import InfoBox from "@/components/infoBox";
import ProgressBar from "@/components/progressBar";
import { calculatePercentage } from "@/utils/numberUtils";
import SiteButton from "@/components/siteButton";

export default function FantasticStatistics() {
  const fellows = 250;
  const businesses = 40;
  const donations = 50;
  const currentDonationAmount = 265;

  const targetFellows = 10000;
  const targetBusinesses = 200;
  const targetDonationAmount = 15000;

  return (
    <div className="FantasticStatisticsPage flex justify-evenly pt-8">
      <div className="StatisticsBoxes flex flex-col">
        <h1 className="FantStatsTitle mb-4 text-end">our stats:</h1>
        <InfoBox variant="hollow" aria="fellow_statistics" size="standard">
          <div className="DataStats">
            <div className="FellowStats flex flex-col items-center gap-6">
              <h2 className="ForFellows mb-4 pl-4 text-left text-jade">
                pertaining to fellows:
              </h2>
              <div className="FellowsSignedUp flex items-center gap-8">
                <SiteButton
                  variant="filled"
                  colorScheme="b4"
                  aria="fellows"
                  addClasses="px-8"
                >
                  150 people signed up
                </SiteButton>
              </div>
              <div className="Collaborators flex items-center gap-8">
                <SiteButton
                  variant="filled"
                  colorScheme="b1"
                  aria="collaborators"
                  addClasses="px-8"
                >
                  15 collaboration requests
                </SiteButton>
              </div>
              <div className="BetaTesters flex items-center gap-8">
                <SiteButton
                  variant="filled"
                  colorScheme="e5"
                  aria="beta testers"
                  addClasses="px-8"
                >
                  150 beta testers
                </SiteButton>
              </div>
              <div className="ReferralPartners flex items-center gap-8">
                <SiteButton
                  variant="filled"
                  colorScheme="f1"
                  aria="refferal partners"
                  addClasses="px-8"
                >
                  15 referral partner inquiries
                </SiteButton>
              </div>
            </div>
          </div>
        </InfoBox>
        <InfoBox
          variant="hollow"
          aria="fellow_statistics"
          size="standard"
          addClasses="my-8"
        >
          <div className="DataStats">
            <div className="BusinessStats flex flex-col items-center gap-6">
              <h2 className="ForBusinesses mb-4 pl-4 text-left text-jade">
                about businesses:
              </h2>
              <div className="FellowsSignedUp flex items-center gap-8">
                <SiteButton
                  variant="filled"
                  colorScheme="f3"
                  aria="fellows"
                  addClasses="px-8"
                >
                  200 businesses signed up
                </SiteButton>
              </div>
              <div className="Collaborators flex items-center gap-8">
                <SiteButton
                  variant="filled"
                  colorScheme="d4"
                  aria="collaborators"
                  addClasses="px-8"
                >
                  20 beta test requests
                </SiteButton>
              </div>
              <div className="BetaTesters flex items-center gap-8">
                <SiteButton
                  variant="filled"
                  colorScheme="e6"
                  aria="beta testers"
                  addClasses="px-8"
                >
                  10 pre-purchased job posts
                </SiteButton>
              </div>
            </div>
          </div>
        </InfoBox>
      </div>
      <div className="ProgressBars flex w-[45vw] flex-col gap-12">
        <h2 className="FantStatsTitle -mb-16 pr-8 text-end">our progress:</h2>
        <div className="ProgressBarContainer mb-4 mt-10 sm:mt-0">
          <p className="ProgressBarStatus w-[35vw] pb-2">
            fellows signed up: {fellows} /{" "}
            {calculatePercentage({ fellows, targetFellows })}%
          </p>
          <ProgressBar
            current={fellows}
            total={targetFellows}
            fillColor="bg-watermelon"
          />
        </div>
        <div className="ProgressBarContainer mb-4 mt-10 sm:mt-0">
          <p className="ProgressBarStatus w-[35vw] pb-2">
            businesses signed up: {businesses} /{" "}
            {calculatePercentage({ businesses, targetBusinesses })}%
          </p>
          <ProgressBar
            current={businesses}
            total={targetBusinesses}
            fillColor="bg-lime"
          />
        </div>
        <div className="ProgressBarContainer mb-4 mt-10 sm:mt-0">
          <p className="ProgressBarStatus w-[35vw] pb-2">
            total donations: {donations}
          </p>
          <ProgressBar current={donations} total={100} fillColor="bg-sky" />
        </div>
        <div className="ProgressBarContainer mb-4 mt-10 sm:mt-0">
          <p className="ProgressBarStatus w-[35vw] pb-2">
            fellow donations: {30}
          </p>
          <ProgressBar current={30} total={100} fillColor="bg-orange" />
        </div>
        <div className="ProgressBarContainer mb-4 mt-10 sm:mt-0">
          <p className="ProgressBarStatus w-[35vw] pb-2">
            business donations: {20}
          </p>
          <ProgressBar current={20} total={100} fillColor="bg-lilac" />
        </div>
        <div className="ProgressBarContainer mb-4 mt-10 sm:mt-0">
          <p className="ProgressBarStatus w-[35vw] pb-2">
            current donation amount: {currentDonationAmount} /{" "}
            {calculatePercentage({
              currentDonationAmount,
              targetDonationAmount,
            })}
            %
          </p>
          <ProgressBar
            current={currentDonationAmount}
            total={targetDonationAmount}
            fillColor="bg-magenta"
          />
        </div>
      </div>
    </div>
  );
}
