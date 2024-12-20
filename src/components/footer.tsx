"use client";

import SiteButton from "./siteButton";
import Link from "next/link";
import { useModal } from "@/contexts/ModalContext";
import SignupOptionsModal from "./modals/signupModals/signupOptionsModal";
import ShareOptionsModal from "./modals/shareModals/shareOptionsModal";

export default function Footer() {
  const { showModal } = useModal();

  return (
    <div className="Footer flex flex-col items-end justify-between gap-6 px-8 py-8 sm:h-24 sm:w-full sm:flex-row">
      <div className="FooterButtonContainer flex flex-row flex-wrap gap-4">
        <SiteButton
          variant="filled"
          colorScheme="b2"
          aria="contact us"
          onClick={() => showModal(<SignupOptionsModal />)}
        >
          signup
        </SiteButton>
        <Link href={"/faq"}>
          <SiteButton variant="filled" colorScheme="c4" aria="faq" value="faq">
            faq
          </SiteButton>
        </Link>
        <Link href={"/crowdfunding"}>
          <SiteButton variant="filled" colorScheme="d4" aria="our makers">
            crowdfunding
          </SiteButton>
        </Link>
        <Link href={"/pricing"}>
          <SiteButton variant="filled" colorScheme="f3" aria="pricing">
            pricing
          </SiteButton>
        </Link>
        <SiteButton
          variant="filled"
          colorScheme="e6"
          aria="about"
          onClick={() => showModal(<ShareOptionsModal />)}
        >
          share
        </SiteButton>
        <Link href="/referral-program">
          <SiteButton
            variant="filled"
            colorScheme="b4"
            aria="referral"
            value="referral"
          >
            referrals
          </SiteButton>
        </Link>
        <Link href="/beta-testing">
          <SiteButton
            variant="filled"
            colorScheme="e5"
            aria="betatesting"
            value="betatesting"
          >
            beta testing
          </SiteButton>
        </Link>
      </div>
      <div className="FooterInfo">
        <p className="Copywrite text-[0.6rem] text-olive sm:text-xs">
          ©2024, Straightforward Job Site
        </p>
      </div>
    </div>
  );
}
