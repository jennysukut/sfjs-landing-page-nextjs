import SiteButton from "../../siteButton";
import * as Dialog from "@radix-ui/react-dialog";
import SignupModalIndividual2 from "./signupIndividual2";
import { useModal } from "@/contexts/ModalContext";
import { useState } from "react";

export default function SignupModalIndividual1() {
  const { showModal } = useModal();
  const [betaTester, setBetaTester] = useState(false);

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
          className="text-md mb-4 border-b-2 border-jade/50 bg-transparent pb-3 pt-2 text-jade placeholder:text-jade/50 focus:border-jade focus:outline-none"
        />
        <label htmlFor="email">email</label>
        <input
          type="email"
          placeholder="fantasticemail@emailexample.com"
          className="text-md border-b-2 border-jade/50 bg-transparent pb-3 pt-2 text-jade placeholder:text-jade/50 focus:border-jade focus:outline-none"
        />
        <div className="BetaTesterButton -mb-4 mt-6 flex items-center gap-2">
          <input
            type="checkbox"
            id="betaTester"
            className="h-6 w-6 cursor-pointer appearance-none rounded-full border-2 border-jade bg-cream drop-shadow-smJade checked:border-none checked:bg-peach checked:drop-shadow-smLime"
          />
          <label htmlFor="betaTester" className="cursor-pointer pl-2 text-sm">
            sign up to be a beta tester
          </label>
        </div>
        <div className="BetaTesterButton -mb-4 mt-6 flex items-center gap-2">
          <SiteButton
            variant="hollow"
            colorScheme="f1"
            aria="betaTester"
            size="smallCircle"
            isSelected={betaTester}
            onClick={() => setBetaTester(!betaTester)}
          />
          <label htmlFor="betaTester" className="cursor-pointer pl-2 text-sm">
            sign up to be a beta tester
          </label>
        </div>
        <div className="ButtonContainer mt-8 flex justify-end">
          <SiteButton
            variant="hollow"
            colorScheme="f1"
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
