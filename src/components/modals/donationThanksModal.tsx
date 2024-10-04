import * as Dialog from "@radix-ui/react-dialog";

export default function DonationThanksModal() {
  return (
    <div className="SignupOptionsModal flex max-w-[35rem] flex-col items-center gap-4">
      <Dialog.Title className="Title w-full pb-4 text-center text-xl font-bold">
        thank you so much!
      </Dialog.Title>

      <p className="Subtitle w-full text-center italic lg:max-w-[35vw]">
        your payment was successful & your support is deeply appreciated
      </p>
      <p className="Subtitle mt-4 w-full text-center italic text-olive lg:max-w-[35vw]">
        {`we'll keep you updated about our launch and will be in touch about your rewards!`}
      </p>
    </div>
  );
}
