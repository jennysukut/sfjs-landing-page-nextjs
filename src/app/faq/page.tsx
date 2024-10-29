"use client";
import { useState } from "react";
import Link from "next/link";

import InfoBox from "@/components/infoBox";
import SiteButton from "@/components/siteButton";
import DropDownButton from "@/components/dropDownButton";
import { FAQ } from "@/lib/siteCopy/frequentlyAskedQuestions";
import getRandomColorScheme from "@/utils/getRandomColorScheme";

export default function FrequentlyAskedQuestions() {
  const [selectedQuestion, setSelectedQuestion] = useState("");

  function questionClick(name: string) {
    if (selectedQuestion === name) {
      setSelectedQuestion("");
    } else {
      setSelectedQuestion(name);
    }
  }

  return (
    <div className="faqPage self-center">
      <h1 className="faqTitle mt-8 pb-8">{`frequently asked questions:`}</h1>
      <div className="faqs mb-14 flex flex-col items-center gap-4">
        {FAQ.map((faq) => {
          return (
            <div
              className="faqDetails flex flex-col items-center"
              key={faq.question}
            >
              <SiteButton
                variant="hollow"
                aria={faq.question}
                key={faq.question}
                colorScheme={getRandomColorScheme("a1")}
                size="superLarge"
                textColor="dark"
                addClasses="text-left w-[80vw] flex justify-between"
                isExpandable
                isSelected={selectedQuestion === faq.question}
                onClick={() => questionClick(faq.question)}
              >
                {faq.question}
              </SiteButton>
              {selectedQuestion === faq.question ? (
                <InfoBox
                  variant="hollow"
                  aria={faq.question}
                  width="extraWide"
                  canCollapse
                  collapseClick={() => {
                    setSelectedQuestion("");
                  }}
                  addClasses="text-left text-midnight indent-8 leading-7 my-8 ml-14 flex flex-col"
                >
                  {Array.isArray(faq.answer) ? (
                    faq.answer.map((section, index) => (
                      <p key={index} className="pt-4">
                        {section}
                      </p>
                    ))
                  ) : (
                    <p>{faq.answer}</p>
                  )}
                </InfoBox>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
      <div className="faqPageTitleAndButtonsContainer mb-8 flex items-center justify-center">
        <h1 className="faqTitle mt-8 pb-8">{`other details:`}</h1>
        <div className="ButtonContainer ml-8 flex gap-6">
          <Link href="/pricing">
            <SiteButton
              aria="pricing"
              variant="filled"
              colorScheme="b1"
              size="large"
            >
              about pricing
            </SiteButton>
          </Link>
          <Link href="/referral-program">
            <SiteButton
              aria="referral"
              variant="filled"
              colorScheme="b3"
              size="large"
            >
              our referral program
            </SiteButton>
          </Link>
          <Link href="/beta-testing">
            <SiteButton
              aria="betaTesting"
              variant="filled"
              colorScheme="f1"
              size="large"
            >
              beta testing info
            </SiteButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
