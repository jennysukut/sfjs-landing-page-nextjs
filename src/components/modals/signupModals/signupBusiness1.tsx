import SiteButton from "../../siteButton";
import * as Dialog from "@radix-ui/react-dialog";
import { useModal } from "@/contexts/ModalContext";
import SignupModalBusiness2 from "./signupBusiness2";

export default function SignupModalBusiness1() {
  const { showModal } = useModal();
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
        <div className="GetInEarlyOption -mb-4 mt-6 flex items-center gap-2">
          <input
            type="checkbox"
            id="inEarly"
            className="h-6 w-6 cursor-pointer appearance-none rounded-full border-2 border-jade bg-cream drop-shadow-smJade checked:border-none checked:bg-peach checked:drop-shadow-smLime"
          />
          <label htmlFor="betaTester" className="cursor-pointer pl-2 text-sm">
            get in early{" "}
          </label>
        </div>
        <div className="BetaTesterOption -mb-8 mt-6 flex items-center gap-2">
          <input
            type="checkbox"
            id="betaTester"
            className="h-6 w-6 cursor-pointer appearance-none rounded-full border-2 border-jade bg-cream drop-shadow-smJade checked:border-none checked:bg-jade checked:drop-shadow-smWatermelon"
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
            sign up!
          </SiteButton>
        </div>
      </form>
    </div>
  );
}
