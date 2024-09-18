import SiteButton from "../../siteButton";
import * as Dialog from "@radix-ui/react-dialog";
import { useModal } from "@/contexts/ModalContext";
import Link from "next/link";

export default function SignupModalBusiness2() {
  const { hideModal } = useModal();

  return (
    <div className="SignupModalBusiness2 flex max-w-[450px] flex-col gap-4 text-jade">
      <Dialog.Title className="Title w-full text-center text-xl font-bold">
        {`you're on the list!`}
      </Dialog.Title>
      <Dialog.Description className="Text w-full text-center">
        {`we’re so glad to have you join us in this intentional group of businesses`}
      </Dialog.Description>
      <Dialog.Description className="Text w-full text-center font-medium italic text-midnight">
        {`if you’re interested in supporting us + getting some great deals for job posts with us, check out our crowdfunding rewards`}
      </Dialog.Description>
      <div className="ButtonContainer flex flex-col items-center">
        <Link href={"/support"}>
          <SiteButton
            variant="filled"
            colorScheme="b4"
            aria="help us"
            size="large"
            addClasses="mt-6"
            onClick={() => hideModal()}
          >
            see our business rewards
          </SiteButton>
        </Link>
      </div>
    </div>
  );
}
