"use client";

import SiteButton from "@/components/siteButton";
import { useState } from "react";

export default function TestPage() {
  const [testEmailsSent, setTestEmailsSent] = useState(0);

  const handleClick = async () => {
    await fetch("/api/emails", { method: "POST" });
    setTestEmailsSent((prevCount) => prevCount + 1);
    console.log(testEmailsSent + "emails sent");
  };

  const isDisabled = testEmailsSent === 1;

  return (
    <div className="TestPage flex flex-col items-center align-middle">
      <SiteButton
        variant="filled"
        colorScheme="c4"
        aria="email test button"
        onClick={handleClick}
        disabled={isDisabled}
      >
        test button for email
      </SiteButton>
    </div>
  );
}
