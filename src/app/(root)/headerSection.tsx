import { useModal } from "@/contexts/ModalContext";

import Link from "next/link";
import SiteButton from "@/components/siteButton";
import ButtonContainer from "@/components/buttonContainer";
import SignupOptionsModal from "@/components/modals/signupModals/signupOptionsModal";
import HelpUsModal from "@/components/modals/helpUsModal";

function HeaderSection() {
  const { showModal } = useModal();
  return (
    <section className="HeaderSection items-left flex w-full flex-grow flex-col gap-4">
      <h1 className="LandingPageText max-w-[700px] pl-4 text-[1.25rem] font-bold leading-8 text-midnight sm:text-2xl">
        our mission: to bring simplicity, honesty, and transparency to the job
        market.
      </h1>
      <ButtonContainer addClasses="justify-center flex items-end pr-6 sm:pr-0 flex-col sm:flex-row sm:justify-start">
        <SiteButton
          aria="sign up"
          size="large"
          variant="filled"
          colorScheme="b1"
          onClick={() => showModal(<SignupOptionsModal />)}
        >
          sign me up!
        </SiteButton>
        <SiteButton
          aria="support us"
          size="large"
          variant="filled"
          colorScheme="e5"
          onClick={() => showModal(<HelpUsModal />)}
        >
          how can i help?
        </SiteButton>
      </ButtonContainer>
    </section>
  );
}

export default HeaderSection;
