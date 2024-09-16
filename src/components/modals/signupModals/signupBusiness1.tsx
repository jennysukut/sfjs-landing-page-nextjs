import SiteButton from "../../siteButton";
import * as Dialog from "@radix-ui/react-dialog";
import { useModal } from "@/contexts/ModalContext";
import SignupModalBusiness2 from "./signupBusiness2";
import { useState } from "react";

export default function SignupModalBusiness1() {
  const { showModal } = useModal();
  const [earlySignup, setEarlySignup] = useState(false);
  const [betaTester, setBetaTester] = useState(false);

  return (
    <div className="SignupModal flex max-w-[450px] flex-col gap-4 text-jade">
      <Dialog.Title className="Title w-full text-center text-xl font-bold">
        sign up
      </Dialog.Title>
      <Dialog.Description className="Subtitle w-full text-center">
        to be notified when we launch this Straightforward Job Site
      </Dialog.Description>
      <form className="flex flex-col gap-2">
        <label htmlFor="name">business name</label>
        <input
          type="name"
          placeholder="Your Business"
          className="text-md mb-4 border-b-2 border-jade/50 bg-transparent pb-3 pt-2 text-jade placeholder:text-jade/50 focus:border-jade focus:outline-none"
        />
        <label htmlFor="email">business email</label>
        <input
          type="email"
          placeholder="fantasticemail@mybusiness.org"
          className="text-md border-b-2 border-jade/50 bg-transparent pb-3 pt-2 text-jade placeholder:text-jade/50 focus:border-jade focus:outline-none"
        />
        <div className="BetaTesterButton -mb-4 mt-6 flex items-center gap-2">
          <SiteButton
            variant="hollow"
            colorScheme="f1"
            aria="betaTester"
            size="smallCircle"
            isSelected={earlySignup}
            onClick={() => setEarlySignup(!earlySignup)}
          />
          <label htmlFor="betaTester" className="cursor-pointer pl-2 text-sm">
            get in early
          </label>
        </div>
        <div className="BetaTesterButton -mb-4 mt-6 flex items-center gap-2">
          <SiteButton
            variant="hollow"
            colorScheme="c1"
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
            colorScheme="c1"
            aria="submit"
            onClick={() => showModal(<SignupModalBusiness2 />)}
          >
            sign us up!
          </SiteButton>
        </div>
      </form>
    </div>
  );
}
