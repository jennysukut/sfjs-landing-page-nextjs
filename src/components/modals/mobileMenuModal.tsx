import SiteButton from "../siteButton";
import { useModal } from "@/contexts/ModalContext";
import * as Dialog from "@radix-ui/react-dialog";
import SignupOptionsModal from "./signupModals/signupOptionsModal";
import Link from "next/link";
import ShareOptionsModal from "./shareModals/shareOptionsModal";
import ModalWrapper from "./modalWrapper";

export default function MobileMenuModal() {
  const { showModal } = useModal();

  return (
    <ModalWrapper modalKey={10} variant="hollow">
      <div className="SignupOptionsModal flex w-[250px] flex-col items-center gap-4">
        <Dialog.Title className="Title w-full pb-4 text-center text-xl font-bold">
          our menu:
        </Dialog.Title>
        <div className="SignupButtons flex flex-col items-start gap-y-6">
          <SiteButton
            variant="filled"
            colorScheme="c1"
            aria="job-seeker"
            addClasses="w-[200px]"
            size="large"
            onClick={() => showModal(<SignupOptionsModal />)}
          >
            signup
          </SiteButton>
          <Link href="/support">
            <SiteButton
              variant="filled"
              colorScheme="b3"
              aria="business"
              addClasses="w-[200px]"
              size="large"
            >
              support us
            </SiteButton>
          </Link>
          <Link href="/pricing">
            <SiteButton
              variant="filled"
              colorScheme="f1"
              aria="collaborator"
              addClasses="w-[200px]"
              size="large"
            >
              pricing
            </SiteButton>
          </Link>
          <SiteButton
            variant="filled"
            colorScheme="c1"
            aria="job-seeker"
            addClasses="w-[200px]"
            size="large"
            onClick={() => showModal(<ShareOptionsModal />)}
          >
            share
          </SiteButton>
        </div>
      </div>
    </ModalWrapper>
  );
}
