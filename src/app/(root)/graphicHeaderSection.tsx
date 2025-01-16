import { useModal } from "@/contexts/ModalContext";

import Link from "next/link";
import SiteButton from "@/components/siteButton";
import ButtonContainer from "@/components/buttonContainer";
import SignupOptionsModal from "@/components/modals/signupModals/signupOptionsModal";
import HelpUsModal from "@/components/modals/helpUsModal";
import Image from "next/image";

function GraphicHeaderSection() {
  const { showModal } = useModal();
  return (
    <section
      className="HeaderSection flex h-[100vh] w-full flex-col gap-0 border-b-2 border-olive/20 pb-24"
      // style={{
      //   backgroundImage: 'url("/BackgroundShapes.svg")',
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    ></section>
  );
}

export default GraphicHeaderSection;
