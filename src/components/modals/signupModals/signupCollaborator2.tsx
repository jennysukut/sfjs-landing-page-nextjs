import * as Dialog from "@radix-ui/react-dialog";
import * as z from "zod";

import { useModal } from "@/contexts/ModalContext";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FELLOW_SIGNUP_MUTATION } from "@/graphql/mutations";
import { useMutation } from "@apollo/client";

import SiteButton from "../../siteButton";
import { makeReferralCode } from "@/utils/makeReferralCode";
import {
  sendCollaboratorSignupEmail,
  sendReferralEmail,
  sendReferralManagementEmail,
} from "@/utils/emailUtils";
import SignupModalCollaborator3 from "./signupCollaborator3";
import ErrorModal from "../errorModal";

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
  const [referralCode, setReferralCode] = useState("");
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
      referralCode: referralCode,
      name: name,
      email: email,
    },
  });

  const [signUp, { loading, error }] = useMutation(FELLOW_SIGNUP_MUTATION);

  // Submission Function
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setDisabledButton(true);
    try {
      const result = await signUp({
        variables: {
          requestBody: {
            name: data.name,
            email: data.email,
            betaTester: data.betaTester,
            collaborator: true,
            message: data.message,
            referralPartner: data.referralPartner,
            referralCode: referralCode,
          },
        },
      })
        .then((result) => {
          sendCollaboratorSignupEmail(
            data.email,
            data.name,
            betaTester,
            referralPartner,
            referralCode,
          );
          if (referralPartner) {
            sendReferralManagementEmail(
              data.email,
              data.name,
              referralCode,
              data.message,
            );
            //timeout so we don't exceed 2 emails in 1 second
            setTimeout(() => {
              sendReferralEmail(data.email, data.name, referralCode);
            }, 5000);
          }
          showModal(
            <SignupModalCollaborator3
              referralPartner={referralPartner}
              referralCode={referralCode}
              data={data}
            />,
          );
        })

        .catch((error) => {
          showModal(<ErrorModal />);
        });
    } catch (err) {
      console.error("Signup error:", err);
      showModal(<ErrorModal />);
    }
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
              makeReferralCode(name, setReferralCode);
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
