import { useModal } from "@/contexts/ModalContext";
import * as Dialog from "@radix-ui/react-dialog";
import ModalWrapper from "./modalWrapper";
import { color } from "framer-motion";
import { LargeShadowColorOption } from "@/lib/stylingData/largeShadowColors";

export default function InfoModal({
  title,
  children,
  colorScheme = "a1",
  variant,
}: {
  title: string;
  children: React.ReactNode;
  colorScheme?: LargeShadowColorOption;
  variant?: string;
}) {
  return (
    <ModalWrapper modalKey={1} variant="filled" colorScheme={colorScheme}>
      <div className="FeaturesInfoModal flex flex-col items-center gap-4 px-4">
        <Dialog.Title className="Title w-full text-center text-xl font-bold text-eggshell">
          {title}
        </Dialog.Title>
        <p className="Subtitle w-full text-center">{children}</p>
      </div>
    </ModalWrapper>
  );
}
