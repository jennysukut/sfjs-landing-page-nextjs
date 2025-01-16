import { useModal } from "@/contexts/ModalContext";

import Link from "next/link";
import SiteButton from "@/components/siteButton";
import ButtonContainer from "@/components/buttonContainer";
import SignupOptionsModal from "@/components/modals/signupModals/signupOptionsModal";
import HelpUsModal from "@/components/modals/helpUsModal";
import Image from "next/image";
import { useState, useEffect } from "react";
import MotionContainer from "@/components/motionContainer";

function OtherHeaderSection() {
  const descriptorList = [
    "simple",
    "unique",
    "honest",
    "personal",
    "colorful",
    "quick",
    "human.",
  ];

  const { showModal } = useModal();

  const [currentDescriptor, setCurrentDescriptor] = useState(descriptorList[0]);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (currentDescriptor !== descriptorList[descriptorList.length - 1]) {
      const transitionInterval = setInterval(() => {
        setIsFlipping(true);

        const changeWordTimeout = setTimeout(() => {
          setCurrentDescriptor((prev) => {
            const currentIndex = descriptorList.indexOf(prev);
            const nextIndex = currentIndex + 1;
            return descriptorList[nextIndex];
          });
          setIsFlipping(false);
        }, 500); // Half a second for flip animation

        return () => clearTimeout(changeWordTimeout);
      }, 2000);

      return () => clearInterval(transitionInterval);
    } else {
      setCurrentDescriptor("human.");
    }
  }, [isFlipping]);

  return (
    <section className="HeaderSection mt-10 flex w-full flex-col gap-2 self-center align-middle">
      <h1 className="Title self-center text-[3.25rem] tracking-widest text-midnight">
        {/* where hiring is{" "} */}
        {/* hiring never felt so{" "} */}
        hiring, but more{" "}
        <span
          className={`inline-block transition-all duration-500 ${
            isFlipping
              ? "-rotate-x-90 -translate-y-2 opacity-0"
              : "rotate-x-0 translate-y-0 opacity-100"
          }`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {currentDescriptor}
        </span>
      </h1>
      <div className="Buttons mb-20 flex gap-6 self-center">
        <MotionContainer>
          <SiteButton
            variant="filled"
            aria="what makes us different?"
            colorScheme="b4"
            // addClasses="px-8 py-3"
            size="large"
          >
            what makes us different?
          </SiteButton>
          <SiteButton
            variant="filled"
            aria="features"
            // addClasses="px-8 py-3"
            size="large"
            colorScheme="c4"
          >
            check out our features
          </SiteButton>
          <SiteButton
            variant="filled"
            aria="signup"
            // addClasses="px-8 py-3"
            size="large"
            colorScheme="b6"
          >
            sign up!
          </SiteButton>
        </MotionContainer>
      </div>
    </section>
  );
}

export default OtherHeaderSection;
