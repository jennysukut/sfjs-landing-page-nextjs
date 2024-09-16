import SiteButton from "../../siteButton";
import * as Dialog from "@radix-ui/react-dialog";
import { useModal } from "@/contexts/ModalContext";
import SignupModalCollaborator3 from "./signupCollaborator3";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const collaboratorSchema2 = z.object({
  message: z.string().min(10, { message: "Please provide more details" }),
  betaTester: z.boolean().optional(),
});

type FormData = z.infer<typeof collaboratorSchema2>;

export default function SignupModalCollaborator2() {
  const { showModal } = useModal();
  const [betaTester, setBetaTester] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(collaboratorSchema2),
    defaultValues: {
      betaTester: false,
    },
  });

  // I'd like to grab the data from the first Collaborator Signup modal and plug it into this formData to send to the server
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <div className="SignupModal flex w-[400px] max-w-[450px] flex-col gap-4 text-jade">
      <Dialog.Title className="Title w-full text-center text-xl font-bold">
        more about you
      </Dialog.Title>
      <Dialog.Description className="Subtitle w-full pb-8 text-center">
        share your skills + ideas
      </Dialog.Description>
      <form className="flex flex-col gap-2">
        {/* message section */}
        <label htmlFor="collaborationIdeas">
          how are you wanting to collaborate?
        </label>
        <textarea
          {...register("message")}
          id="collaborationIdeas"
          placeholder="Your Ideas + Details"
          rows={5}
          className="mb-0 resize-none rounded-lg border-2 border-jade/50 bg-transparent p-3 text-sm text-midnight placeholder:text-jade/50 focus:border-jade focus:outline-none"
        />
        {errors.message?.message && (
          <p className="text-xs font-medium text-orange">
            {errors.message.message.toString()}
          </p>
        )}

        {/* beta tester button */}
        <div className="BetaTesterButton mt-6 flex items-center gap-2">
          <SiteButton
            variant="hollow"
            colorScheme="f1"
            aria="betaTester"
            size="smallCircle"
            isSelected={watch("betaTester")}
            onClick={() => {
              const newValue = !watch("betaTester");
              setValue("betaTester", newValue);
              setBetaTester(newValue);
            }}
          />
          <label htmlFor="betaTester" className="cursor-pointer pl-2 text-sm">
            sign up to be a beta tester
          </label>
        </div>

        {/* submit button */}
        <div className="ButtonContainer mt-8 flex justify-end">
          <SiteButton
            variant="hollow"
            colorScheme="c1"
            aria="submit"
            addClasses="px-8"
            onClick={handleSubmit((data) => {
              console.log(data);
              showModal(<SignupModalCollaborator3 />);
            })}
          >
            get on our list!
          </SiteButton>
        </div>
      </form>
    </div>
  );
}
