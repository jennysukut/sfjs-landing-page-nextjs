import SiteButton from "./siteButton";
import { useModal } from "@/contexts/ModalContext";
import SignupModalBusiness1 from "./modals/signupModals/signupBusiness1";
import SignupModalIndividual1 from "./modals/signupModals/signupIndividual1";

export default function SignupOptions() {
  const { showModal } = useModal();
  return (
    <div className="SignupButtons absolute right-[23rem] top-24 flex flex-col items-start space-y-4">
      <SiteButton
        variant="filled"
        colorScheme="b3"
        aria="business"
        onClick={() => showModal(<SignupModalBusiness1 />)}
      >
        business
      </SiteButton>
      <SiteButton variant="filled" colorScheme="f1" aria="collaborator">
        collaborator
      </SiteButton>
      <SiteButton
        variant="filled"
        colorScheme="c1"
        aria="individual"
        onClick={() => showModal(<SignupModalIndividual1 />)}
      >
        job-seeker
      </SiteButton>
    </div>
  );
}
