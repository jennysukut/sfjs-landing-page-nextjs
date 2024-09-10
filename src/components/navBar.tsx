"use client";

import Image from "next/image";
import SiteButton from "./siteButton";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [clickedButton, setClickedButton] = useState("");

  function handleNavButtonClick(e: any) {
    if (clickedButton === e.target.value) {
      setClickedButton("");
    } else {
      setClickedButton(e.target.value);
    }
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
        >
          share
        </SiteButton>
      </div>
      {clickedButton === "signup" ? (
        <div className="SignupButtons absolute right-64 top-24 flex flex-col items-start space-y-4">
          <SiteButton
            variant="filled"
            colorScheme="b3"
            aria="business"
            value="business"
            onClick={handleNavButtonClick}
          >
            business
          </SiteButton>
          <SiteButton
            variant="filled"
            colorScheme="f1"
            aria="collaborator"
            value="collaborator"
            onClick={handleNavButtonClick}
          >
            collaborator
          </SiteButton>
          <SiteButton
            variant="filled"
            colorScheme="c1"
            aria="individual"
            value="individual"
            onClick={handleNavButtonClick}
          >
            human
          </SiteButton>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
