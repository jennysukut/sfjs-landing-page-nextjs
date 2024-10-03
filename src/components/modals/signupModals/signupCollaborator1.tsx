import * as Dialog from "@radix-ui/react-dialog";
import * as z from "zod";

import { useModal } from "@/contexts/ModalContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import SiteButton from "../../siteButton";
import SignupModalCollaborator2 from "./signupCollaborator2";

// this is the first part of a two-part form, this schema covers this modal, I've got another one on the signupCollaborator2 modal
const collaboratorSchema = z.object({
  name: z.string().min(2, { message: "Required" }),
  email: z.string().email(),
});

type FormData = z.infer<typeof collaboratorSchema>;

export default function SignupModalCollaborator1() {
  const { showModal } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(collaboratorSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    showModal(<SignupModalCollaborator2 data={data} />);
  };

  return (
    <div className="SignupCollaboratorModal flex max-w-[450px] flex-col gap-4 text-jade">
      <Dialog.Title className="Title w-full text-center text-xl font-bold">
        hello there!
      </Dialog.Title>
      <Dialog.Description className="Subtitle w-full text-center text-xs sm:text-sm">
        {`you’d like to collaborate with us here at straightforward job site - how exciting!`}
      </Dialog.Description>
      <Dialog.Description className="Text w-full text-center text-xs font-medium italic text-olive sm:text-sm">
        {`tell us a little bit about you and we’ll see if there’s a way we can work together.`}
      </Dialog.Description>
      <form
        className="flex flex-col gap-2 xs:pt-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* name input */}
        <label htmlFor="name">your name*</label>
        <input
          type="name"
          placeholder="Fantastic Human"
          className="text-md mb-0 border-b-2 border-jade/50 bg-transparent pb-2 pt-2 text-jade placeholder:text-jade/50 focus:border-jade focus:outline-none"
          {...register("name")}
        />
        {errors.name?.message && (
          <p className="text-xs font-medium text-orange">
            {errors.name.message.toString()}
          </p>
        )}

        {/* email input */}
        <label htmlFor="email" className="mt-6">
          your email*
        </label>
        <input
          type="email"
          placeholder="fantasticemail@emailexample.com"
          className="text-md border-b-2 border-jade/50 bg-transparent pb-3 pt-2 text-jade placeholder:text-jade/50 focus:border-jade focus:outline-none"
          {...register("email", { required: "Email Address is required" })}
        />
        {errors.email?.message && (
          <p className="text-xs font-medium text-orange">
            {errors.email.message.toString()}
          </p>
        )}

        {/* continue button */}
        <div className="ButtonContainer -mb-3 mt-8 flex justify-end">
          <SiteButton
            variant="hollow"
            colorScheme="f4"
            aria="submit"
            onClick={handleSubmit(onSubmit)}
          >
            tell us about you
          </SiteButton>
        </div>
      </form>
    </div>
  );
}
