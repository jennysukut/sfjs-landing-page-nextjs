"use client";

import { useState, useEffect } from "react";
import { signal } from "@preact/signals-react";
import { useModal } from "@/contexts/ModalContext";

import Image from "next/image";
import SiteButton from "./siteButton";
import Link from "next/link";
import ShareOptions from "./shareOptions";
import SignupOptions from "./signupOptions";
import MobileMenuModal from "./modals/mobileMenuModal";

export const dropDown = signal(false);

export default function NavBar() {
  const { showModal } = useModal();
  const [clickedButton, setClickedButton] = useState("");

  function handleNavButtonClick(e: any) {
    setClickedButton(clickedButton === e.target.value ? "" : e.target.value);
  }

  useEffect(() => {
    if (clickedButton === "share" || clickedButton === "signup") {
      dropDown.value = true;
    } else {
      dropDown.value = false;
    }
  }, [clickedButton]);

  return (
    <div className="NavBar mx-auto flex h-fit w-[98%] justify-between px-8 py-6 md:px-16">
      <Link href={"/"}>
        <Image
          className="Logo mt-4 max-w-44 cursor-pointer transition-transform duration-300 hover:scale-105"
          src="/sfjs-logo.svg"
          width={229}
          height={75}
          alt="Straightforward Job Site logo"
        />
      </Link>

      <div className="NavButtonContainer hidden items-end gap-6 sm:flex sm:flex-row sm:items-center">
        <SiteButton
          variant="filled"
          colorScheme="b4"
          aria="sign up"
          value="signup"
          onClick={handleNavButtonClick}
          isSelected={clickedButton === "signup"}
        >
          sign up
        </SiteButton>

        <Link href={"/support"}>
          <SiteButton
            variant="filled"
            colorScheme="e5"
            aria="donate"
            value="support"
            onClick={handleNavButtonClick}
            isSelected={clickedButton === "support"}
          >
            support us
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
          onClick={handleNavButtonClick}
          isSelected={clickedButton === "share"}
        >
          share
        </SiteButton>
      </div>
      {clickedButton === "share" ? (
        <ShareOptions setClickedButton={setClickedButton} />
      ) : (
        ""
      )}

      {clickedButton === "signup" ? (
        <SignupOptions setClickedButton={setClickedButton} />
      ) : (
        ""
      )}
      <div className="MobileMenuButton py-4 sm:hidden">
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
