"use client";
import * as Dialog from "@radix-ui/react-dialog";

import Link from "next/link";

import { useModal } from "@/contexts/ModalContext";
import { LinkedinShareButton, FacebookShareButton } from "next-share";

import SiteButton from "../../siteButton";

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
            size="large"
            addClasses="py-3"
          >
            linkedin
          </SiteButton>
        </LinkedinShareButton>
        <Link href="/referral-program">
          <SiteButton
            variant="filled"
            colorScheme="f1"
            aria="referral"
            size="large"
            addClasses="py-3"
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
            size="large"
            addClasses="py-3"
          >
            facebook
          </SiteButton>
        </FacebookShareButton>
      </div>
    </div>
  );
}
