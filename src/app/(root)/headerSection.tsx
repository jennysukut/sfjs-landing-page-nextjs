import SiteButton from "@/components/siteButton";
import Link from "next/link";
import { useModal } from "@/contexts/ModalContext";
import SignupOptionsModal from "@/components/modals/signupModals/signupOptionsModal";
import { motion, AnimatePresence } from "framer-motion";

function HeaderSection() {
  const { showModal } = useModal();
  return (
    <section className="HeaderSection flex w-full flex-grow flex-col justify-center gap-4">
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
          <h1 className="LandingPageText max-w-[700px] text-2xl font-bold text-midnight">
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
          <div className="ButtonContainer flex gap-8 pt-5">
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
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default HeaderSection;
