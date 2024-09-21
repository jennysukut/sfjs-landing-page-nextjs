"useclient";

import InfoBox from "@/components/infoBox";
import SiteButton from "@/components/siteButton";
import Link from "next/link";
import { useModal } from "@/contexts/ModalContext";
import SignupOptionsModal from "@/components/modals/signupModals/signupOptionsModal";
import { motion } from "framer-motion";

export default function HopesSection() {
  const { showModal } = useModal();

  const motionContainer = {
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const motionItem = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        y: {
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

  return (
    <section className="HopesSection flex w-full flex-col items-center p-20 pb-8">
      <div className="HopesContainer flex flex-col">
        <div className="HopesTitleContainer w-full">
          <h1 className="HopeTitle text-start">our hopes:</h1>
          <p className="HopeSubtitle mb-12 max-w-xl font-semibold italic">
            we have big ideals and even bigger dreams
          </p>
        </div>
        <motion.div
          className="HopesContainer"
          variants={motionContainer}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
        >
          <motion.div
            className="ChangeContainer flex flex-col"
            variants={motionItem}
          >
            <InfoBox
              aria="change perspectives"
              variant="filled"
              colorScheme="f3"
              addClasses="rounded-full text-sm text-center self-center mb-4"
              size="small"
            >
              to change perspectives in the current work landscape
            </InfoBox>
          </motion.div>
          <div className="HopesDetails flex gap-8">
            <div className="infoBoxesLeft flex max-w-sm flex-col items-end gap-8 py-6">
              <motion.div className="MotionContainer" variants={motionItem}>
                <InfoBox
                  aria="change perspectives"
                  variant="filled"
                  colorScheme="d4"
                  addClasses="text-sm text-center py-8"
                >
                  to show how exciting & successful people-focused, conscious,
                  transparent businesses can be{" "}
                </InfoBox>
              </motion.div>
              <motion.div className="MotionContainer" variants={motionItem}>
                <InfoBox
                  aria="change perspectives"
                  variant="filled"
                  colorScheme="f4"
                  size="small"
                  addClasses="rounded-full text-sm"
                >
                  to do good{" "}
                </InfoBox>
              </motion.div>
            </div>
            <div className="infoBoxesRight flex max-w-sm flex-col items-start gap-8 py-6">
              <motion.div className="MotionContainer" variants={motionItem}>
                <InfoBox
                  aria="change perspectives"
                  variant="filled"
                  colorScheme="c5"
                  size="small"
                  addClasses="text-sm rounded-full"
                >
                  to empower individuals
                </InfoBox>
              </motion.div>
              <motion.div className="MotionContainer" variants={motionItem}>
                <InfoBox
                  aria="change perspectives"
                  variant="filled"
                  colorScheme="e6"
                  addClasses=" text-sm text-center py-8"
                >
                  to make human decency & honest communication a standard
                  business practice
                </InfoBox>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="ButtonContainer mt-24 flex gap-6 self-start pl-20">
        <Link href={"/support"}>
          <SiteButton
            aria="support us"
            size="large"
            variant="filled"
            colorScheme="c4"
            addClasses="px-14"
          >
            how can i help?
          </SiteButton>
        </Link>
        <SiteButton
          aria="sign up"
          size="large"
          variant="filled"
          colorScheme="f1"
          addClasses="px-10"
          onClick={() => showModal(<SignupOptionsModal />)}
        >
          sign me up!
        </SiteButton>
      </div>
    </section>
  );
}
