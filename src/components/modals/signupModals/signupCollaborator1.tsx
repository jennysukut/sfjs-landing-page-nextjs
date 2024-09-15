import SiteButton from "../../siteButton";
import * as Dialog from "@radix-ui/react-dialog";
import { useModal } from "@/contexts/ModalContext";
import SignupModalCollaborator2 from "./signupCollaborator2";

export default function SignupModalCollaborator1() {
  const { showModal } = useModal();
  return (
    <div className="SignupCollaboratorModal flex max-w-[450px] flex-col gap-4 text-jade">
      <Dialog.Title className="Title w-full text-center text-xl font-bold">
        hello there!
      </Dialog.Title>
      <Dialog.Description className="Subtitle w-full text-center">
        {`you’d like to collaborate with us here at straightforward job site - how exciting!`}
      </Dialog.Description>
      <Dialog.Description className="Text w-full text-center font-medium italic text-olive">
        {`tell us a little bit about you and we’ll see if there’s a way we can work together.`}
      </Dialog.Description>
      <form className="flex flex-col gap-2">
        <label htmlFor="name">name</label>
        <input
          type="name"
          placeholder="Delightful Human"
          className="text-md mb-4 border-b-2 border-jade/50 bg-transparent pb-3 pt-2 text-jade placeholder:text-jade/50 focus:border-jade focus:outline-none"
        />
        <label htmlFor="email">email</label>
        <input
          type="email"
          placeholder="fantasticemail@emailexample.com"
          className="text-md border-b-2 border-jade/50 bg-transparent pb-3 pt-2 text-jade placeholder:text-jade/50 focus:border-jade focus:outline-none"
        />
        <div className="ButtonContainer -mb-3 mt-8 flex justify-end">
          <SiteButton
            variant="hollow"
            colorScheme="f4"
            aria="submit"
            onClick={() => showModal(<SignupModalCollaborator2 />)}
          >
            tell us about you
          </SiteButton>
        </div>
      </form>
    </div>
  );
}
