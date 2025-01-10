import { useModal } from "@/contexts/ModalContext";

import Link from "next/link";
import SiteButton from "@/components/siteButton";
import ButtonContainer from "@/components/buttonContainer";
import SignupOptionsModal from "@/components/modals/signupModals/signupOptionsModal";
import HelpUsModal from "@/components/modals/helpUsModal";
import Image from "next/image";

function HeaderSection() {
  const { showModal } = useModal();
  return (
    <section className="HeaderSection flex w-full flex-col gap-0 border-b-2 border-olive/20 pb-24">
      <div className="TitleJobBoardImage flex items-start justify-center gap-8">
        <div className="HeaderTitle -mt-8 flex flex-col gap-6">
          <h1 className="LandingPageText max-w-[350px] text-right text-[1.5rem] font-semibold leading-[4.5rem] text-jade sm:text-[3.5rem]">
            where hiring is
            <span className="italic text-emerald"> human</span>
          </h1>
        </div>

        <div className="Images -mt-10 flex flex-col">
          <Image
            width={600}
            height={300}
            alt="dumb"
            src="/jobBoardSS.png"
            className={`-mt-4 rounded-2xl border-[3px] border-jade drop-shadow-jade`}
          ></Image>
        </div>
      </div>
      <div className="SecondaryImage self-center">
        <Image
          width={600}
          height={300}
          alt="dumb"
          src="/profileSS.png"
          className={`z-40 -mt-6 mr-[25vw] self-start rounded-2xl border-[3px] border-jade drop-shadow-jade`}
        ></Image>
      </div>
      <div className="ThirdImage self-end">
        <Image
          width={600}
          height={300}
          alt="dumb"
          src="/profileCreationSS.png"
          className={`relative -z-10 -mt-44 mr-8 self-start rounded-2xl border-[3px] border-jade drop-shadow-jade`}
        ></Image>
      </div>
      {/* <ButtonContainer addClasses="justify-center flex items-end pr-6 sm:pr-0 flex-col sm:flex-row sm:justify-start pl-4">
        <SiteButton
          aria="sign up"
          // size="large"
          variant="filled"
          colorScheme="b1"
          addClasses="px-8 py-3"
          onClick={() => showModal(<SignupOptionsModal />)}
        >
          sign me up!
        </SiteButton>
        <SiteButton
          aria="support us"
          // size="large"
          variant="filled"
          colorScheme="e5"
          addClasses="px-8 py-3"
          onClick={() => showModal(<HelpUsModal />)}
        >
          learn more about us
        </SiteButton>
      </ButtonContainer> */}
    </section>
  );
}

export default HeaderSection;
