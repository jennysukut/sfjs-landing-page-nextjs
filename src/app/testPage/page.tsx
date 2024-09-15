"use client";

import SiteButton from "@/components/siteButton";
import { useState } from "react";
import { signupFellow } from "@/utils/actions/signup";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
};

export default function TestPage() {
  //Email Sending Information
  const [testEmailSent, setTestEmailSent] = useState(false);
  //we need to be able to differentiate between what kind of email needs to be sent as a response to which action.
  //I wonder if we need another folder in the routes section to divide the different API endpoints for the different types of emails?

  //Email Sending Handler
  const sendTestEmail = async () => {
    setTestEmailSent(true);

    //sending the request to the API endpoint and attaching the Body information: email and firstname
    //we can add more information depending on the type of email
    await fetch("/api/emails", {
      method: "POST",
      body: JSON.stringify({
        email: "jennysukut@gmail.com",
        firstName: "Jacob",
      }),
    });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("lastName")); // watch input value by passing the name of it

  return (
    <div className="TestPage flex flex-col items-center align-middle">
      <SiteButton
        variant="filled"
        colorScheme="b6"
        aria="email test button"
        onClick={sendTestEmail}
        disabled={testEmailSent}
      >
        test button for email
      </SiteButton>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-20">
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="firstName" {...register("firstName")} />
        {/* include validation with required or other standard HTML validation rules */}
        <input
          defaultValue="lastName"
          {...register("lastName", { required: true, min: 5 })}
        />
        {/* errors will return when field validation fails  */}
        {errors.lastName && (
          <span className="text-black">This field is required</span>
        )}
        <input
          defaultValue="email"
          {...register("email", { required: true })}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
