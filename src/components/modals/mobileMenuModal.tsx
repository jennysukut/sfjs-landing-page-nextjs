import * as Dialog from "@radix-ui/react-dialog";

import { useModal } from "@/contexts/ModalContext";

import Link from "next/link";
import SiteButton from "../siteButton";
import SignupOptionsModal from "./signupModals/signupOptionsModal";
import ShareOptionsModal from "./shareModals/shareOptionsModal";

export default function MobileMenuModal() {
  const { showModal, hideModal } = useModal();

  return (
    <div className="SignupOptionsModal flex w-[250px] flex-col items-center gap-4">
      <Dialog.Title className="Title w-full pb-4 text-center text-xl font-bold">
        our menu:
      </Dialog.Title>
      <div className="SignupButtons flex flex-col items-start gap-y-6">
        <SiteButton
          variant="filled"
          colorScheme="b4"
          aria="job-seeker"
          addClasses="w-[200px]"
          size="large"
          onClick={() => showModal(<SignupOptionsModal />)}
        >
          signup
        </SiteButton>
        <Link href={"/faq"}>
          <SiteButton
            variant="filled"
            colorScheme="c4"
            aria="faq"
            value="faq"
            size="large"
            addClasses="w-[200px]"
            onClick={hideModal}
          >
            our faq
          </SiteButton>
        </Link>
        <Link href="/crowdfunding">
          <SiteButton
            variant="filled"
            colorScheme="e5"
            aria="crowdfunding"
            addClasses="w-[200px]"
            size="large"
            onClick={hideModal}
          >
            crowdfunding
          </SiteButton>
        </Link>
        <Link href="/pricing">
          <SiteButton
            variant="filled"
            colorScheme="d4"
            aria="collaborator"
            addClasses="w-[200px]"
            size="large"
            onClick={hideModal}
          >
            pricing
          </SiteButton>
        </Link>
        <SiteButton
          variant="filled"
          colorScheme="f3"
          aria="job-seeker"
          addClasses="w-[200px]"
          size="large"
          onClick={() => showModal(<ShareOptionsModal />)}
        >
          share
        </SiteButton>
        <Link href={"/our-supporters"}>
          <SiteButton
            variant="filled"
            colorScheme="c4"
            aria="faq"
            value="faq"
            size="large"
            addClasses="w-[200px]"
            onClick={hideModal}
          >
            supporters
          </SiteButton>
        </Link>
      </div>
    </div>
  );
}
