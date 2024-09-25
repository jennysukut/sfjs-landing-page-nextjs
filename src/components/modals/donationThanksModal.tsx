import * as Dialog from "@radix-ui/react-dialog";

export default function DonationThanksModal() {
  return (
    <div className="SignupOptionsModal flex max-w-[35rem] flex-col items-center gap-4">
      <Dialog.Title className="Title w-full pb-4 text-center text-xl font-bold">
        thank you so much!
      </Dialog.Title>
      <p className="Subtitle w-full text-center">
        your support is deeply appreciated
      </p>
      <p className="Subtitle w-full text-center italic text-olive">
        {`we'll be sending you any necessary details about your rewards + updates
        to you via email`}
      </p>
    </div>
  );
}
