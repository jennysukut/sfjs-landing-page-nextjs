import SiteButton from "../../siteButton";
import * as Dialog from "@radix-ui/react-dialog";
import SignupModalIndividual2 from "./signupIndividual2";
import { useModal } from "@/contexts/ModalContext";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const fellowSchema = z.object({
  name: z.string().min(2, { message: "Required" }),
  email: z.string().email(),
  betaTester: z.boolean().optional(),
});

type FormData = z.infer<typeof fellowSchema>;

export default function SignupModalIndividual1() {
  const { showModal } = useModal();
  const [betaTester, setBetaTester] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(fellowSchema),
    defaultValues: {
      betaTester: false,
    },
  });

  // Submission Handler - send this data to the server.
  // Do we need to check if the email address is already in the server?
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <div className="SignupModal flex max-w-[450px] flex-col gap-4 text-jade">
      <Dialog.Title className="Title w-full text-center text-xl font-bold">
        hello there!
      </Dialog.Title>
      <Dialog.Description className="Subtitle w-full text-center">
        sign up to be notified when we launch this Straightforward Job Site
      </Dialog.Description>
      <form
        className="IndividualSignupForm flex flex-col gap-2"
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

        {/* beta tester option */}
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

        {/* form submission button */}
        <div className="ButtonContainer mt-8 flex justify-end">
          <SiteButton
            variant="hollow"
            colorScheme="f1"
            aria="submit"
            onClick={handleSubmit((data) => {
              console.log(data);
              showModal(<SignupModalIndividual2 />);
            })}
          >
            sign me up!
          </SiteButton>
        </div>
      </form>
    </div>
  );
}
