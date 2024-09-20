import SiteButton from "./siteButton";
import { useModal } from "@/contexts/ModalContext";
import SignupModalBusiness1 from "./modals/signupModals/signupBusiness1";
import SignupModalIndividual1 from "./modals/signupModals/signupIndividual1";
import SignupModalCollaborator1 from "./modals/signupModals/signupCollaborator1";

export default function SignupOptions({ setClickedButton }: any) {
  const { showModal } = useModal();

  return (
    <div className="SignupButtons absolute right-[23rem] top-24 flex flex-col items-start space-y-4">
      <SiteButton
        variant="filled"
        colorScheme="b3"
        aria="business"
        onClick={() => {
          showModal(<SignupModalBusiness1 />);
          setClickedButton("");
        }}
      >
        business
      </SiteButton>
      <SiteButton
        variant="filled"
        colorScheme="f1"
        aria="collaborator"
        onClick={() => {
          showModal(<SignupModalCollaborator1 />);
          setClickedButton("");
        }}
      >
        collaborator
      </SiteButton>

      <SiteButton
        variant="filled"
        colorScheme="c1"
        aria="individual"
        onClick={() => {
          showModal(<SignupModalIndividual1 />);
          setClickedButton("");
        }}
      >
        job-seeker
      </SiteButton>
    </div>
  );
}
