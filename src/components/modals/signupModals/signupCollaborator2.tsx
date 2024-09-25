import * as Dialog from "@radix-ui/react-dialog";
import * as z from "zod";

import { useModal } from "@/contexts/ModalContext";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import SiteButton from "../../siteButton";
import SignupModalCollaborator3 from "./signupCollaborator3";

const collaboratorSchema2 = z.object({
  message: z.string().min(10, { message: "Please provide more details" }),
  betaTester: z.boolean().optional(),
  referralPartner: z.boolean().optional(),
  name: z.string().min(2, { message: "Required" }),
  email: z.string().email(),
});

type FormData = z.infer<typeof collaboratorSchema2>;

export default function SignupModalCollaborator2({ data }: any) {
  const { showModal } = useModal();

  const { name, email } = data;

  const [betaTester, setBetaTester] = useState(false);
  const [referralPartner, setReferralPartner] = useState(false);
  const [fellowReferralCode, setFellowReferralCode] = useState("");
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
      referralPartner: false,
      name: name,
      email: email,
    },
  });

  const makeReferralCode = (name: string) => {
    const nameParts = name.trim().split(" ");
    const firstPart = nameParts[0].slice(0, 3);
    const lastPart = nameParts[nameParts.length - 1].slice(0, 3);
    const randomNumbers = Math.floor(100 + Math.random() * 900);
    const referralCode =
      `${firstPart}${lastPart}${randomNumbers}`.toUpperCase();
    console.log(referralCode);
    setFellowReferralCode(referralCode);
  };

  const sendCollaboratorSignupEmail = async (email: string, name: string) => {
    const firstName = name.split(" ")[0];
    await fetch("/api/emails/signupEmails/collaboratorSignupEmail", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        firstName: firstName,
      }),
    });
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    showModal(<SignupModalCollaborator3 />);
    //on submit, I want to be able to add the referralCode to our database. Is there any way I can simply grab it if it exists and pass it to the database?

    //if referralPartner is true, take their name and
    //run it through a function to make their code and
    //send it to them in their confirmation email?
    if (data.referralPartner === true) {
      makeReferralCode(name);
    }

    sendCollaboratorSignupEmail(email, name)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="SignupModal flex w-[400px] max-w-[450px] flex-col gap-4 text-jade">
      <Dialog.Title className="Title w-full text-center text-xl font-bold">
        more about you
      </Dialog.Title>
      <Dialog.Description className="Subtitle w-full pb-8 text-center">
        share your skills + ideas
      </Dialog.Description>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
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
        <div className="ReferralPartnerButton mt-0 flex items-center gap-2">
          <SiteButton
            variant="hollow"
            colorScheme="b4"
            aria="referralPartner"
            size="smallCircle"
            isSelected={watch("referralPartner")}
            onClick={() => {
              const newValue = !watch("referralPartner");
              setValue("referralPartner", newValue);
              setBetaTester(newValue);
            }}
          />
          <label
            htmlFor="referralPartner"
            className="cursor-pointer pl-2 text-sm"
          >
            interested in being a referralPartner?
          </label>
        </div>

        {/* submit button */}
        <div className="ButtonContainer mt-8 flex justify-end">
          <SiteButton
            variant="hollow"
            colorScheme="c1"
            aria="submit"
            addClasses="px-8"
            onClick={handleSubmit(onSubmit)}
          >
            get on our list!
          </SiteButton>
        </div>
      </form>
    </div>
  );
}
