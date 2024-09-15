import SiteButton from "../../siteButton";
import { useModal } from "@/contexts/ModalContext";
import * as Dialog from "@radix-ui/react-dialog";
import {
  LinkedinShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "next-share";

export default function ShareOptionsModal() {
  return (
    <div className="ShareOptionsModal flex flex-col items-center gap-4 px-4">
      <Dialog.Title className="Title w-full text-center text-xl font-bold">
        spread the word
      </Dialog.Title>
      <p className="Subtitle w-full text-center">
        where would you like to share?
      </p>
      <div className="ShareButtons mt-4 flex flex-col items-center gap-y-4">
        <LinkedinShareButton url="straightforwardjobsite.com">
          <SiteButton
            variant="filled"
            colorScheme="b3"
            aria="linkedin"
            addClasses="w-[150px] py-3"
          >
            linkedin
          </SiteButton>
        </LinkedinShareButton>
        <FacebookShareButton url="straightforwardjobsite.com">
          <SiteButton
            variant="filled"
            colorScheme="f1"
            aria="facebook"
            addClasses="w-[150px] py-3"
          >
            facebook
          </SiteButton>
        </FacebookShareButton>
        <TwitterShareButton url="straightforwardjobsite.com">
          <SiteButton
            variant="filled"
            colorScheme="c1"
            aria="twitter"
            addClasses="w-[150px] py-3"
          >
            twitter
          </SiteButton>
        </TwitterShareButton>
      </div>
    </div>
  );
}
