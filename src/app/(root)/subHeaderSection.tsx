import { useModal } from "@/contexts/ModalContext";

import Link from "next/link";
import SiteButton from "@/components/siteButton";
import ButtonContainer from "@/components/buttonContainer";
import SignupOptionsModal from "@/components/modals/signupModals/signupOptionsModal";
import HelpUsModal from "@/components/modals/helpUsModal";

function SubHeaderSection() {
  const { showModal } = useModal();
  return (
    <section className="HeaderSection items-left flex w-full flex-grow flex-col gap-4 border-b-2 border-olive/20 pb-24 text-center">
      {/* <h2 className="LandingPageText max-w-[1000px] text-center text-[1.5rem] font-bold leading-8 text-jade">
        we are a<span className="italic"> transparent</span>
        <span className="text-emerald"> job board </span>
        and
      </h2>
      <h2 className="LandingPageText max-w-[1000px] text-center text-[1.5rem] font-bold leading-8 text-jade">
        <span className="italic"> revolutionary </span>
        two-way
        <span className="text-emerald"> application management system.</span>
      </h2>
      <p className="Details mt-14 max-w-[550px] self-end text-right italic text-olive">
        {`{ that treats you like a human being, whether you're looking for a job or
        trying to find your next hire }`}
      </p> */}

      <h2 className="SubHeader text-[2.25rem] text-jade">
        transparent job board +
      </h2>
      <h2 className="SubHeader text-[2.25rem] text-jade">
        two-way application management
      </h2>

      {/* <ButtonContainer addClasses="justify-center flex items-end pr-6 sm:pr-0 flex-col sm:flex-row sm:justify-start">
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
          support our mission
        </SiteButton>
      </ButtonContainer> */}
    </section>
  );
}

export default SubHeaderSection;
