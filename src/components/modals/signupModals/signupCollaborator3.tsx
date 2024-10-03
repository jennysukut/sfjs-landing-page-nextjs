import * as Dialog from "@radix-ui/react-dialog";

import { useModal } from "@/contexts/ModalContext";
import { useEffect } from "react";

import SiteButton from "../../siteButton";
import SignupModalIndividual3 from "./signupIndividual3";

export default function SignupModalCollaborator3({ referralPartner }: any) {
  const { showModal } = useModal();

  return (
    <div className="SignupModalCollaborator3 flex max-w-[450px] flex-col gap-4 text-jade">
      <Dialog.Title className="Title w-full text-center text-xl font-bold">
        all set!
      </Dialog.Title>
      <Dialog.Description className="Text w-full text-center">
        {`we’re so glad you’re part of our straightforward group.`}
      </Dialog.Description>
      <Dialog.Description className="Text w-full text-center text-midnight">
        {`let's change this job market together!`}
      </Dialog.Description>
      {referralPartner && (
        <Dialog.Description className="Text w-full text-center italic text-olive">
          {`It looks like you're interested in being a referral partner, we'll send you an email with more information soon!`}
        </Dialog.Description>
      )}
      <div className="ButtonContainer flex flex-col items-center">
        <SiteButton
          variant="filled"
          colorScheme="b4"
          aria="help us"
          size="large"
          addClasses="mt-6"
          onClick={() => showModal(<SignupModalIndividual3 />)}
        >
          {`but I'd like to help now!`}
        </SiteButton>
      </div>
    </div>
  );
}
