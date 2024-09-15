import SiteButton from "../../siteButton";
import * as Dialog from "@radix-ui/react-dialog";
import { useModal } from "@/contexts/ModalContext";
import SignupModalCollaborator3 from "./signupCollaborator3";

export default function SignupModalCollaborator2() {
  const { showModal } = useModal();
  return (
    <div className="SignupModal flex w-[400px] max-w-[450px] flex-col gap-4 text-jade">
      <Dialog.Title className="Title w-full text-center text-xl font-bold">
        more about you
      </Dialog.Title>
      <Dialog.Description className="Subtitle w-full pb-8 text-center">
        share your skills + ideas
      </Dialog.Description>
      <form className="flex flex-col gap-2">
        <label htmlFor="collaborationIdeas">
          how are you wanting to collaborate?
        </label>
        <textarea
          id="collaborationIdeas"
          name="collaborationIdeas"
          placeholder="Your Ideas + Details"
          rows={5}
          className="mb-0 resize-none rounded-lg border-2 border-jade/50 bg-transparent p-3 text-sm text-midnight placeholder:text-jade/50 focus:border-jade focus:outline-none"
        />
        <div className="-mb-4 mt-6 flex items-center gap-2">
          <input
            type="checkbox"
            id="betaTester"
            className="h-6 w-6 cursor-pointer appearance-none rounded-full border-2 border-jade bg-cream drop-shadow-smJade checked:border-none checked:bg-peach checked:drop-shadow-smLime"
          />
          <label htmlFor="betaTester" className="cursor-pointer pl-2 text-sm">
            sign up to be a beta tester
          </label>
        </div>
        <div className="ButtonContainer mt-8 flex justify-end">
          <SiteButton
            variant="hollow"
            colorScheme="c1"
            aria="submit"
            addClasses="px-8"
            onClick={() => showModal(<SignupModalCollaborator3 />)}
          >
            get on our list!
          </SiteButton>
        </div>
      </form>
    </div>
  );
}
