import InfoBox from "@/components/infoBox";
import SiteButton from "@/components/siteButton";
import { FAQ } from "@/lib/siteCopy/frequentlyAskedQuestions";
import getRandomColorScheme from "@/utils/getRandomColorScheme";

export default function FrequentlyAskedQuestions() {
  return (
    <div className="faqPage self-center">
      <h1 className="faqTitle mt-8 pb-4">{`frequently asked questions:`}</h1>
      <div className="faqs flex flex-col gap-4">
        {FAQ.map((faq) => {
          return (
            <SiteButton
              variant="hollow"
              aria={faq.question}
              key={faq.question}
              colorScheme={getRandomColorScheme("b2")}
              size="superLarge"
              addClasses="text-left w-[80vw] text-midnight"
            >
              {faq.question}
            </SiteButton>
          );
        })}
      </div>
    </div>
  );
}
