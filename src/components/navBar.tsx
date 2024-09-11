"use client";

import { useState } from "react";

import Image from "next/image";
import SiteButton from "./siteButton";
import Link from "next/link";
import ShareOptions from "./shareOptions";
import SignupOptions from "./signupOptions";

export default function NavBar() {
  const [clickedButton, setClickedButton] = useState("");

  function handleNavButtonClick(e: any) {
    setClickedButton(clickedButton === e.target.value ? "" : e.target.value);
  }

  return (
    <div className="NavBar mx-auto flex h-fit w-[98%] justify-between px-16 py-6">
      <Link href={"/"}>
        <Image
          className="Logo mt-4 max-w-44 cursor-pointer transition-transform duration-300 hover:scale-105"
          src="/sfjs-logo.svg"
          width={229}
          height={75}
          alt="Straightforward Job Site logo"
        />
      </Link>

      <div className="NavButtonContainer flex items-center gap-6">
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
      {clickedButton === "share" ? <ShareOptions /> : ""}

      {clickedButton === "signup" ? <SignupOptions /> : ""}
    </div>
  );
}
