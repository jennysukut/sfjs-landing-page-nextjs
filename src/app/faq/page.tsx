"use client";
import { useState } from "react";

import Link from "next/link";
import InfoBox from "@/components/infoBox";
import SiteButton from "@/components/siteButton";
import getRandomColorScheme from "@/utils/getRandomColorScheme";

import { FAQ } from "@/lib/siteCopy/frequentlyAskedQuestions";

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
    <div className="FaqPage flex w-[95vw] max-w-[1600px] flex-col self-center p-10 pb-4 sm:w-[75vw] sm:p-14">
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
      <div className="faqPageTitleAndButtonsContainer mb-8 flex flex-col items-center justify-center gap-x-8 sm:flex-row">
        <h1 className="faqTitle mt-8 pb-8">{`other details:`}</h1>
        <div className="ButtonContainer sm:items-left ml-8 flex flex-col items-center gap-6 xl:flex-row">
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
