import * as Dialog from "@radix-ui/react-dialog";

import { useModal } from "@/contexts/ModalContext";

import Link from "next/link";
import SiteButton from "../siteButton";
import ShareOptionsModal from "./shareModals/shareOptionsModal";
import SignupOptionsModal from "./signupModals/signupOptionsModal";

export default function HelpUsModal() {
  const { showModal, hideModal } = useModal();

  return (
    <div className="SignupModalIndividual2 flex max-w-[450px] flex-col items-center gap-4 text-jade">
      <Dialog.Title className="Title w-full max-w-[50vw] text-center text-xl font-bold">
        how you can help
      </Dialog.Title>
      <Dialog.Description className="SmallText w-full text-center text-xs italic text-olive sm:text-base">
        {`The biggest help to our startup is getting fellow humans involved!`}
      </Dialog.Description>
      <Dialog.Description className="SmallText w-full text-center text-xs text-jade sm:text-base">
        {`The more people we have using this job site, the more we're able to impact the market. It would be fantastic if you signed up and told others to sign up as well!`}
      </Dialog.Description>
      <Dialog.Description className="SmallText w-full text-center text-xs italic text-midnight sm:text-base">
        {`We also have a crowdfunding campaign active and we never say no to paying our developers`}
      </Dialog.Description>
      <div className="ButtonContainer mt-4 flex flex-col flex-wrap items-center justify-end gap-4 sm:flex-row">
        <SiteButton
          variant="filled"
          colorScheme="b4"
          aria="submit"
          size="large"
          onClick={() => showModal(<SignupOptionsModal />)}
          addClasses="px-6"
        >
          sign up
        </SiteButton>
        <SiteButton
          variant="filled"
          colorScheme="f1"
          aria="submit"
          size="large"
          onClick={() => showModal(<ShareOptionsModal />)}
          addClasses="px-6"
        >
          tell your friends
        </SiteButton>
      </div>
      <Link href={"/support"}>
        <SiteButton
          variant="filled"
          colorScheme="c4"
          aria="submit"
          size="large"
          onClick={hideModal}
          addClasses="px-6 lg:mt-2"
        >
          support us
        </SiteButton>
      </Link>
    </div>
  );
}
