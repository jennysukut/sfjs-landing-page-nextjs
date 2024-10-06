import { motion } from "framer-motion";
import { useModal } from "@/contexts/ModalContext";

import Image from "next/image";
import Link from "next/link";
import SiteButton from "@/components/siteButton";
import InfoBox from "@/components/infoBox";
import ButtonContainer from "@/components/buttonContainer";
import SignupOptionsModal from "@/components/modals/signupModals/signupOptionsModal";

import { landingPageText } from "@/lib/siteCopy/landingPageText";

function PromisesSection() {
  const { showModal } = useModal();
  const motionContainer = {
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const motionTitle = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        opacity: {
          duration: 0.5,
          ease: "easeInOut",
        },
      },
    },
  };

  const motionItem = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        x: {
          type: "spring",
          duration: 0.8,
        },
        opacity: {
          duration: 0.5,
          ease: "easeInOut",
        },
      },
    },
  };

  const fadeInItem = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        opacity: {
          delay: 1,
          duration: 0.8,
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <section className="PromisesSection flex w-full flex-col flex-wrap items-end justify-end self-end border-b-2 border-t-2 border-olive/20 pb-20 pt-16 text-right">
      <motion.div
        className="ModalInnerContents"
        initial="hidden"
        whileInView={"show"}
        variants={motionContainer}
        viewport={{ once: true }}
      >
        <motion.div className="MotionContainer" variants={motionTitle}>
          <h1 className="PromisesTitle text-[1.25rem] sm:text-2xl">
            our promises:
          </h1>
          <p className="PromisesSubtitle mb-5 font-semibold italic">
            to businesses and job-seekers
          </p>
        </motion.div>
        <ul className="PromisesGuarantees mb-3 flex flex-col items-center text-center sm:mb-8 sm:items-end sm:text-right">
          {landingPageText.guarantees.map((guarantee: string) => {
            return (
              <motion.li
                className="ModalInnerContents"
                variants={motionItem}
                key={guarantee}
              >
                <InfoBox
                  aria={guarantee}
                  variant="hollow"
                  key={guarantee}
                  addClasses="mb-6 w-fit"
                  textSize="large"
                  size="small"
                >
                  {guarantee}
                </InfoBox>
              </motion.li>
            );
          })}
        </ul>
        <ButtonContainer addClasses="flex flex-col-reverse items-start sm:items-end sm:flex-row justify-center sm:justify-end">
          <Link href={"/support"}>
            <SiteButton
              aria="support us"
              size="large"
              variant="filled"
              colorScheme="c4"
              addClasses="px-14"
            >
              support us
            </SiteButton>
          </Link>
          <SiteButton
            aria="sign up"
            size="large"
            variant="filled"
            colorScheme="b4"
            addClasses="px-10"
            onClick={() => showModal(<SignupOptionsModal />)}
          >
            sign me up!
          </SiteButton>
        </ButtonContainer>

        {/* //animate this to fade in after a bit of time */}
        <motion.div
          className="PromisePrompt flex justify-end gap-2 pt-8 sm:pr-8"
          initial="hidden"
          whileInView={"show"}
          variants={fadeInItem}
        >
          <Image
            src="/PurpleArrow.svg"
            alt="arrow"
            width={112}
            height={174}
            className="w-[75px]"
          ></Image>
          <p className="PromisesPrompt max-w-44 pt-12 text-center text-xs text-lilac">
            {landingPageText.arrowprompts.guarantee}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default PromisesSection;
