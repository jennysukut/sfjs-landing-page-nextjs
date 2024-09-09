import SiteButton from "@/components/siteButton";
import { landingPageText } from "@/lib/siteCopy/landingPageText";
import Image from "next/image";
import Link from "next/link";
import InfoBox from "@/components/infoBox";

function PromisesSection() {
  return (
    <section className="PromisesSection flex w-full flex-col flex-wrap items-end justify-end self-end border-t pt-16 text-right">
      <h1 className="PromisesTitle">our promises:</h1>
      <p className="PromisesSubtitle mb-5 font-semibold italic">
        to businesses and job-seekers
      </p>
      <div className="PromisesGuarantees flex flex-col items-end">
        {landingPageText.guarantees.map((guarantee: string) => {
          return (
            <InfoBox
              aria={guarantee}
              variant="hollow"
              key={guarantee}
              addClasses="mb-6 w-fit"
            >
              {guarantee}
            </InfoBox>
          );
        })}
      </div>
      <div className="ButtonContainer mt-2 flex justify-end gap-4 border-t border-midnight/20 pt-5">
        <SiteButton
          aria="sign up"
          size="large"
          variant="filled"
          colorScheme="b4"
          addClasses="px-10"
        >
          sign me up!
        </SiteButton>
        <Link href={"/support"}>
          <SiteButton
            aria="support us"
            size="large"
            variant="filled"
            colorScheme="c4"
            addClasses="px-14"
          >
            support us
          </SiteButton>
        </Link>
      </div>
      <div className="PromisePrompt flex items-end pt-5">
        <Image
          src="/PurpleArrow.svg"
          alt="arrow"
          width={100}
          height={89}
        ></Image>
        <p className="PromisesPrompt max-w-44 text-center text-xs text-lilac">
          {landingPageText.arrowprompts.guarantee}
        </p>
      </div>
    </section>
  );
}

export default PromisesSection;
