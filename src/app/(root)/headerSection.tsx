import SiteButton from "@/components/siteButton";
import Link from "next/link";

function HeaderSection() {
  return (
    <section className="HeaderSection flex w-full flex-grow flex-col justify-center gap-4">
      <h1 className="LandingPageText max-w-[700px] text-2xl font-bold text-midnight">
        our mission: to bring simplicity, honesty, and transparency to the job
        market.
      </h1>
      <div className="ButtonContainer flex gap-8 pt-5">
        <SiteButton
          aria="sign up"
          size="large"
          variant="filled"
          colorScheme="b1"
        >
          sign me up!
        </SiteButton>
        <Link href={"/support"}>
          <SiteButton
            aria="support us"
            size="large"
            variant="filled"
            colorScheme="e5"
          >
            how can i help?
          </SiteButton>
        </Link>
      </div>
    </section>
  );
}

export default HeaderSection;
