import SiteButton from "../../siteButton";
import * as Dialog from "@radix-ui/react-dialog";
import SignupModalIndividual2 from "./signupIndividual2";
import { useModal } from "@/contexts/ModalContext";

export default function SignupModalIndividual1() {
  const { showModal } = useModal();
  return (
    <div className="SignupModal flex max-w-[450px] flex-col gap-4 text-jade">
      <Dialog.Title className="Title w-full text-center text-xl font-bold">
        hello there!
      </Dialog.Title>
      <Dialog.Description className="Subtitle w-full text-center">
        sign up to be notified when we launch this Straightforward Job Site
      </Dialog.Description>
      <form className="flex flex-col gap-2">
        <label htmlFor="name">name</label>
        <input
          type="name"
          placeholder="Delightful Human"
          className="text-md mb-4 border-b border-jade bg-transparent pb-3 pt-2 text-jade placeholder:text-jade/50 focus:border-jade focus:outline-none"
        />
        <label htmlFor="email">email</label>
        <input
          type="email"
          placeholder="fantasticemail@emailexample.com"
          className="text-md border-b border-jade bg-transparent pb-3 pt-2 text-jade placeholder:text-jade/50 focus:border-jade focus:outline-none"
        />
        <div className="ButtonContainer -mb-4 mt-8 flex justify-end">
          {/* make a checkbox here for "be a beta tester?" */}
          <SiteButton
            variant="hollow"
            colorScheme="c1"
            aria="submit"
            onClick={() => showModal(<SignupModalIndividual2 />)}
          >
            sign me up!
          </SiteButton>
        </div>
      </form>
    </div>
  );
}
