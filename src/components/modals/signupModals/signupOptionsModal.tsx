import SiteButton from "../../siteButton";
import { useModal } from "@/contexts/ModalContext";
import SignupModalIndividual1 from "./signupIndividual1";
import * as Dialog from "@radix-ui/react-dialog";

export default function SignupOptionsModal() {
  const { showModal } = useModal();

  return (
    <div className="SignupOptionsModal flex w-[250px] flex-col items-center gap-4">
      <Dialog.Title className="Title w-full text-center text-xl font-bold">
        signup
      </Dialog.Title>
      <p className="Subtitle w-full text-center">who are you?</p>
      <div className="SignupButtons flex flex-col items-start gap-y-4">
        <SiteButton
          variant="hollow"
          colorScheme="c1"
          aria="job-seeker"
          addClasses="w-[200px]"
          onClick={() => showModal(<SignupModalIndividual1 />)}
        >
          job-seeker
        </SiteButton>
        <SiteButton
          variant="hollow"
          colorScheme="b3"
          aria="business"
          addClasses="w-[200px]"
        >
          business
        </SiteButton>
        <SiteButton
          variant="hollow"
          colorScheme="f1"
          aria="collaborator"
          addClasses="w-[200px]"
        >
          collaborator
        </SiteButton>
      </div>
    </div>
  );
}