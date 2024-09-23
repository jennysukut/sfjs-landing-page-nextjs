import SiteButton from "@/components/siteButton";
import Link from "next/link";
import { useModal } from "@/contexts/ModalContext";
import SignupOptionsModal from "@/components/modals/signupModals/signupOptionsModal";
import { motion, AnimatePresence } from "framer-motion";
import ButtonContainer from "@/components/buttonContainer";

function HeaderSection() {
  const { showModal } = useModal();
  return (
    <section className="HeaderSection items-left flex w-full flex-grow flex-col gap-4">
      <AnimatePresence>
        <motion.div
          className="ModalInnerContents"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
            duration: 0.8,
          }}
        >
          <h1 className="LandingPageText max-w-[700px] pl-4 text-[1.25rem] font-bold leading-8 text-midnight sm:text-2xl">
            our mission: to bring simplicity, honesty, and transparency to the
            job market.
          </h1>
        </motion.div>
        <motion.div
          className="Header Buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
            duration: 1,
          }}
        >
          <ButtonContainer addClasses="justify-center sm:justify-start">
            <SiteButton
              aria="sign up"
              size="large"
              variant="filled"
              colorScheme="b1"
              onClick={() => showModal(<SignupOptionsModal />)}
            >
              sign me up!
            </SiteButton>
            <Link href={"/support"}>
              <SiteButton
                aria="support us"
                size="large"
                variant="filled"
                colorScheme="e5"
              >
                how can i help?
              </SiteButton>
            </Link>
          </ButtonContainer>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default HeaderSection;
