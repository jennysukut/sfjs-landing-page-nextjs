"use client";

import Image from "next/image";
import SiteButton from "./siteButton";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [signupClicked, setSignupClicked] = useState(false);

  function handleSignupClick() {
    if (signupClicked === true) {
      setSignupClicked(false);
    } else {
      setSignupClicked(true);
    }
  }

  return (
    <div className="NavBar flex h-fit w-full justify-between px-16 pt-[50px]">
      <Link href={"/"}>
        <Image
          className="Logo max-w-48 cursor-pointer transition-transform duration-300 hover:scale-105"
          src="/sfjs-logo.svg"
          width={229}
          height={75}
          alt="Straightforward Job Site logo"
        />
      </Link>

      <div className="NavButtonContainer flex gap-6">
        <SiteButton
          variant="filled"
          colorScheme="b4"
          aria="sign up"
          onClick={handleSignupClick}
        >
          sign up
        </SiteButton>
        <Link href={"/support"}>
          <SiteButton variant="filled" colorScheme="e5" aria="donate">
            support us
          </SiteButton>
        </Link>
        <SiteButton variant="filled" colorScheme="f3" aria="share on socials">
          share
        </SiteButton>
      </div>
      {signupClicked === true ? (
        <div className="SignupButtons absolute right-64 top-24 flex flex-col items-start space-y-4">
          <SiteButton variant="filled" colorScheme="b3" aria="business">
            business
          </SiteButton>
          <SiteButton variant="filled" colorScheme="f1" aria="collaborator">
            collaborator
          </SiteButton>
          <SiteButton variant="filled" colorScheme="c1" aria="individual">
            human
          </SiteButton>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
