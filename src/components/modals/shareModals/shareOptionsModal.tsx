"use client";

import SiteButton from "../../siteButton";
import { useModal } from "@/contexts/ModalContext";
import * as Dialog from "@radix-ui/react-dialog";
import {
  LinkedinShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "next-share";
import Link from "next/link";

export default function ShareOptionsModal() {
  const { hideModal } = useModal();

  return (
    <div className="ShareOptionsModal flex flex-col items-center gap-4 px-4">
      <Dialog.Title className="Title w-full text-center text-xl font-bold">
        spread the word
      </Dialog.Title>
      <p className="Subtitle w-full text-center">
        how would you like to share?
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
        <Link href="/referral-program">
          <SiteButton
            variant="filled"
            colorScheme="f1"
            aria="referral"
            addClasses="w-[150px] py-3"
            onClick={() => hideModal()}
          >
            referral program
          </SiteButton>
        </Link>
        <FacebookShareButton url="straightforwardjobsite.com">
          <SiteButton
            variant="filled"
            colorScheme="c1"
            aria="facebook"
            addClasses="w-[150px] py-3"
          >
            facebook
          </SiteButton>
        </FacebookShareButton>
      </div>
    </div>
  );
}
