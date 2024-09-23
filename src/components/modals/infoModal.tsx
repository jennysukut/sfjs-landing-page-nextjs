import { useModal } from "@/contexts/ModalContext";
import * as Dialog from "@radix-ui/react-dialog";

export default function InfoModal({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="ShareOptionsModal flex flex-col items-center gap-4 px-4">
      <Dialog.Title className="Title w-full text-center text-xl font-bold">
        {/* title here */}
        {title}
      </Dialog.Title>
      <p className="Subtitle w-full text-center">
        {/* feature details here */}
        {children}
      </p>
    </div>
  );
}
