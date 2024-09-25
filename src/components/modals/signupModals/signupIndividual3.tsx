import * as Dialog from "@radix-ui/react-dialog";

import { useState } from "react";
import { useModal } from "@/contexts/ModalContext";

import Link from "next/link";
import SiteButton from "../../siteButton";
import ShareOptionsModal from "../shareModals/shareOptionsModal";

export default function SignupModalIndividual3() {
  const { showModal, hideModal } = useModal();

  const handleShareOptionsModal = () => showModal(<ShareOptionsModal />);

  return (
    <div className="SignupModalIndividual2 flex max-w-[450px] flex-col gap-4 text-jade">
      <Dialog.Title className="Title w-full text-center text-xl font-bold">
        how you can help
      </Dialog.Title>
      <Dialog.Description className="SmallText w-full text-center font-normal italic">
        {`watch this quick video to learn more:`}
      </Dialog.Description>
      <video src="" className="aspect-video w-full rounded-3xl bg-peach" />
      <div className="ButtonContainer mt-4 flex justify-end gap-4">
        <Link href={"/support"}>
          <SiteButton
            variant="filled"
            colorScheme="e5"
            aria="submit"
            onClick={hideModal}
            addClasses="px-6"
          >
            support our development
          </SiteButton>
        </Link>
        <SiteButton
          variant="filled"
          colorScheme="f1"
          aria="submit"
          onClick={handleShareOptionsModal}
          addClasses="px-6"
        >
          tell your friends
        </SiteButton>
      </div>
    </div>
  );
}
