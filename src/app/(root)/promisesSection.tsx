import SiteButton from "@/components/siteButton";
import { landingPageText } from "@/lib/siteCopy/landingPageText";
import Image from "next/image";
import Link from "next/link";
import InfoBox from "@/components/infoBox";
import { useModal } from "@/contexts/ModalContext";
import SignupOptionsModal from "@/components/modals/signupModals/signupOptionsModal";
import { motion, AnimatePresence } from "framer-motion";

function PromisesSection() {
  const { showModal } = useModal();
  return (
    <section className="PromisesSection flex w-full flex-col flex-wrap items-end justify-end self-end border-b-2 border-t-2 border-olive/20 pb-20 pt-16 text-right">
      <AnimatePresence>
        <motion.div
          className="ModalInnerContents"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
            duration: 0.8,
          }}
        >
          <h1 className="PromisesTitle">our promises:</h1>
          <p className="PromisesSubtitle mb-5 font-semibold italic">
            to businesses and job-seekers
          </p>
          <div className="PromisesGuarantees mb-8 flex flex-col items-end">
            {landingPageText.guarantees.map((guarantee: string) => {
              return (
                <motion.div
                  className="ModalInnerContents"
                  initial={{ x: -100, scale: 0.9, opacity: 0 }}
                  whileInView={{ x: 0, scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    damping: 25,
                    stiffness: 100,
                    duration: 2,
                  }}
                  key={guarantee}
                >
                  <InfoBox
                    aria={guarantee}
                    variant="hollow"
                    key={guarantee}
                    addClasses="mb-6 w-fit"
                  >
                    {guarantee}
                  </InfoBox>
                </motion.div>
              );
            })}
          </div>
          <div className="ButtonContainer flex justify-end gap-4 border-t-2 border-olive/20 pt-8">
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
          </div>
          <div className="PromisePrompt flex justify-end gap-2 pr-8 pt-8">
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
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default PromisesSection;
