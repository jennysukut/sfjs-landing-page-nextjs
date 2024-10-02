import * as Dialog from "@radix-ui/react-dialog";
import * as z from "zod";

import { useModal } from "@/contexts/ModalContext";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SIGNUP_MUTATION } from "@/graphql/mutations";
import { useMutation } from "@apollo/client";

import SiteButton from "../../siteButton";
import { makeReferralCode } from "@/utils/makeReferralCode";
import { sendCollaboratorSignupEmail } from "@/utils/emailUtils";
import SignupModalCollaborator3 from "./signupCollaborator3";

const collaboratorSchema2 = z.object({
  message: z.string().min(10, { message: "Please provide more details" }),
  betaTester: z.boolean().optional(),
  referralPartner: z.boolean().optional(),
  referralCode: z.string().optional(),
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
  const [disabledButton, setDisabledButton] = useState(false);
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
      referralCode: fellowReferralCode,
      name: name,
      email: email,
    },
  });

  const [signUp, { loading, error }] = useMutation(SIGNUP_MUTATION);

  // Submission Function
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (data.referralPartner === true) {
      makeReferralCode(name, setFellowReferralCode);
      //use the referral code in the email and add to our FormData
      //send Referral Email
    }
    setDisabledButton(true);
    try {
      const result = await signUp({ variables: data })
        .then((result) => {
          sendCollaboratorSignupEmail(email, name);
          showModal(
            <SignupModalCollaborator3 referralPartner={referralPartner} />,
          );
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.error("Signup error:", err);
      //what kind of error do we want to have here?
    }

    // sendCollaboratorSignupEmail(email, name);
    // showModal(<SignupModalCollaborator3 referralPartner={referralPartner} />);
  };

  return (
    <div className="SignupModal flex w-[75vw] max-w-[450px] flex-col items-center gap-4 text-jade sm:w-[400px]">
      <Dialog.Title className="Title w-full max-w-[50vw] text-center text-xl font-bold">
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
              setReferralPartner(newValue);
            }}
          />
          <label
            htmlFor="referralPartner"
            className="cursor-pointer pl-2 text-sm"
          >
            {`interested in being a referral partner?`}
          </label>
        </div>

        {/* submit button */}
        <div className="ButtonContainer mt-8 flex self-center sm:justify-end sm:self-end">
          <SiteButton
            variant="hollow"
            colorScheme="c1"
            aria="submit"
            addClasses="px-8"
            onClick={handleSubmit(onSubmit)}
            disabled={disabledButton}
          >
            {disabledButton ? "adding to list..." : "get on our list!"}
          </SiteButton>
        </div>
      </form>
    </div>
  );
}
