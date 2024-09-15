import SiteButton from "../../siteButton";
import * as Dialog from "@radix-ui/react-dialog";

export default function SignupModalIndividual2() {
  return (
    <div className="SignupModalIndividual2 flex max-w-[450px] flex-col gap-4 text-jade">
      <Dialog.Title className="Title w-full text-center text-xl font-bold">
        all set!
      </Dialog.Title>
      <Dialog.Description className="Text w-full text-center">
        {`we’re so glad you’re part of our straightforward group!`}
      </Dialog.Description>
      <Dialog.Description className="Text w-full text-center">
        {`if you’re excited about this idea, we would love to have your help!`}
      </Dialog.Description>
      <Dialog.Description className="SmallText w-full text-center font-light italic">
        {`watch this quick video to learn more:`}
      </Dialog.Description>
      <video src="" className="aspect-video w-full rounded-3xl bg-peach" />
      <div className="ButtonContainer mt-4 flex justify-end gap-4">
        <SiteButton variant="hollow" colorScheme="c1" aria="submit">
          maybe later
        </SiteButton>
        <SiteButton variant="hollow" colorScheme="c1" aria="submit">
          share on your socials
        </SiteButton>
      </div>
    </div>
  );
}
