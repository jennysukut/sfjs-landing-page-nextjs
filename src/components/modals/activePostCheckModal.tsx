import * as Dialog from "@radix-ui/react-dialog";
import SiteButton from "../siteButton";
import { useModal } from "@/contexts/ModalContext";

export default function ActivePostCheckModal() {
  const { hideModal } = useModal();

  const activeChecks = [
    "Every job listing *must* be active.",
    "If applications aren't being reviewed or if the hiring process isn't progressing, the job post is renewed at double, then triple the price, and finally removed from our system.",
    "Businesses' character history {from quick response times and kind reviews to their history of posting non-active jobs} will be publicly visible on their profile.",
    "We believe this transparency will disincentivize evergreen listings and put ghost jobs back in the grave.",
  ];
  return (
    <div className="SignupOptionsModal flex max-w-[35rem] flex-col items-center gap-4">
      <Dialog.Title className="Title w-full text-center text-xl font-bold">
        how do we make sure all posts are active?
      </Dialog.Title>

      <p className="Subtitle -mt-2 w-full text-center italic text-olive lg:max-w-[35vw]">
        {`{it's actually pretty simple}`}
      </p>
      <ul className="ActiveJobCheckList mt-4 flex list-disc flex-col gap-4">
        {activeChecks.map((detail, index) => {
          return <li key={index}>{detail}</li>;
        })}
      </ul>
    </div>
  );
}
