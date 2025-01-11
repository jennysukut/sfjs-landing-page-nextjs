import { useModal } from "@/contexts/ModalContext";

import Link from "next/link";
import SiteButton from "@/components/siteButton";
import ButtonContainer from "@/components/buttonContainer";
import SignupOptionsModal from "@/components/modals/signupModals/signupOptionsModal";
import HelpUsModal from "@/components/modals/helpUsModal";
import Image from "next/image";
import { useState, useEffect } from "react";

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
    <section className="HeaderSection flex w-full flex-col gap-0 border-b-2 border-olive/20 pb-24">
      <div className="TitleJobBoardImage flex items-start justify-center gap-8">
        <div className="HeaderTitle -mt-8 flex flex-col gap-6"></div>

        <h1 className="Title text-[2.5rem]">
          where hiring is{" "}
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
      </div>
    </section>
  );
}

export default OtherHeaderSection;
