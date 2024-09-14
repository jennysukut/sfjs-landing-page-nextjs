"use client";

import SiteButton from "@/components/siteButton";
import { useState } from "react";

export default function TestPage() {
  const [testEmailSent, setTestEmailSent] = useState(false);

  //we need to be able to differentiate between what kind of email needs to be sent as a response to which action.
  //I wonder if we need another folder in the routes section to divide the different API endpoints for the different types of emails?

  const handleClick = async () => {
    //turning off the button so you can only send an email once
    setTestEmailSent(true);

    //sending the request to the API endpoint and attaching the Body information: email and firstname
    //we can add more information depending on the type of email
    await fetch("/api/emails", {
      method: "POST",
      body: JSON.stringify({
        email: "jennysukut@gmail.com",
        firstName: "Jacob",
      }),
    });
  };

  return (
    <div className="TestPage flex flex-col items-center align-middle">
      <SiteButton
        variant="filled"
        colorScheme="b6"
        aria="email test button"
        onClick={handleClick}
        disabled={testEmailSent}
      >
        test button for email
      </SiteButton>
    </div>
  );
}
