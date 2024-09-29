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
      <div className="FooterButtonContainer flex flex-col-reverse items-end justify-end gap-4 self-end sm:items-start md:flex-row md:gap-4">
        <SiteButton
          variant="filled"
          colorScheme="b2"
          aria="contact us"
          onClick={() => showModal(<SignupOptionsModal />)}
        >
          signup
        </SiteButton>
        <Link href={"/support"}>
          <SiteButton variant="filled" colorScheme="d4" aria="our makers">
            support us
          </SiteButton>
        </Link>
        <Link href={"/pricing"}>
          <SiteButton variant="filled" colorScheme="f3" aria="our sponsors">
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
      </div>
      <div className="FooterInfo">
        <p className="Copywrite text-[0.6rem] text-olive sm:text-xs">
          ©2024, Straightforward Job Site
        </p>
      </div>
    </div>
  );
}
