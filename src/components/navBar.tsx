"use client";

import { useState } from "react";
import { signal } from "@preact/signals-react";
import { useModal } from "@/contexts/ModalContext";

import Image from "next/image";
import SiteButton from "./siteButton";
import Link from "next/link";
import MobileMenuModal from "./modals/mobileMenuModal";
import SignupOptionsModal from "./modals/signupModals/signupOptionsModal";
import ShareOptionsModal from "./modals/shareModals/shareOptionsModal";

export const dropDown = signal(false);

export default function NavBar() {
  const { showModal } = useModal();
  const [clickedButton, setClickedButton] = useState("");

  function handleNavButtonClick(e: any) {
    setClickedButton(clickedButton === e.target.value ? "" : e.target.value);
  }

  return (
    <div className="NavBar mx-auto flex h-fit w-[95vw] justify-between px-8 py-12 sm:w-[98vw] sm:px-16">
      <Link href={"/"}>
        <Image
          className="Logo max-w-44 cursor-pointer transition-transform duration-300 hover:scale-105"
          src="/sfjs-logo.svg"
          width={229}
          height={75}
          alt="Straightforward Job Site logo"
          onClick={() => setClickedButton("main")}
        />
      </Link>

      <div className="NavButtonContainer hidden items-end gap-4 lg:flex lg:flex-row lg:items-center lg:max-lg:-mr-8">
        <SiteButton
          variant="filled"
          colorScheme="b4"
          aria="sign up"
          value="signup"
          onClick={() => showModal(<SignupOptionsModal />)}
          isSelected={clickedButton === "signup"}
          className="hidden lg:block"
        >
          sign up
        </SiteButton>
        <Link href={"/faq"}>
          <SiteButton
            variant="filled"
            colorScheme="c4"
            aria="faq"
            value="faq"
            onClick={handleNavButtonClick}
            isSelected={clickedButton === "faq"}
          >
            our faq
          </SiteButton>
        </Link>
        <Link href={"/crowdfunding"}>
          <SiteButton
            variant="filled"
            colorScheme="e5"
            aria="donate"
            value="crowdfunding"
            onClick={handleNavButtonClick}
            isSelected={clickedButton === "crowdfunding"}
          >
            crowdfunding
          </SiteButton>
        </Link>
        <Link href={"/pricing"}>
          <SiteButton
            variant="filled"
            colorScheme="d4"
            aria="pricing"
            value="pricing"
            onClick={handleNavButtonClick}
            isSelected={clickedButton === "pricing"}
          >
            pricing
          </SiteButton>
        </Link>
        <SiteButton
          variant="filled"
          colorScheme="f3"
          aria="share on socials"
          value="share"
          onClick={() => showModal(<ShareOptionsModal />)}
          isSelected={clickedButton === "share"}
        >
          share
        </SiteButton>
        <Link href={"/our-supporters"}>
          <SiteButton
            variant="filled"
            colorScheme="b3"
            aria="supporters"
            value="supporters"
            onClick={handleNavButtonClick}
            isSelected={clickedButton === "supporters"}
          >
            supporters
          </SiteButton>
        </Link>
      </div>
      <div className="MobileMenuButton self-end py-4 align-middle lg:hidden">
        <img
          src="/BurgerMenu.svg"
          alt="mobile menu"
          width={30}
          height={30}
          onClick={() => showModal(<MobileMenuModal />)}
        />
      </div>
    </div>
  );
}
