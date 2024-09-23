import { useModal } from "@/contexts/ModalContext";
import * as Dialog from "@radix-ui/react-dialog";

export default function InfoModal({
  title,
  children,
  colorScheme,
  variant,
}: {
  title: string;
  children: React.ReactNode;
  colorScheme?: string;
  variant?: string;
}) {
  return (
    <div className="FeaturesInfoModal flex flex-col items-center gap-4 px-4">
      <Dialog.Title className="Title w-full text-center text-xl font-bold">
        {title}
      </Dialog.Title>
      <p className="Subtitle w-full text-center">{children}</p>
    </div>
  );
}
