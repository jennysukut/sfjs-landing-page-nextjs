export const sendFellowSignupEmail = async (email: string, name: string) => {
  const firstName = name.split(" ")[0];
  await fetch("/api/emails/signupEmails/fellowSignupEmail", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      firstName: firstName,
    }),
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const sendBusinessSignupEmail = async (
  email: string,
  business: string,
  betaTester?: boolean,
) => {
  await fetch("/api/emails/signupEmails/collaboratorSignupEmail", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      businessName: business,
      betaTester: betaTester,
    }),
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const sendCollaboratorSignupEmail = async (
  email: string,
  name: string,
) => {
  const firstName = name.split(" ")[0];
  await fetch("/api/emails/signupEmails/collaboratorSignupEmail", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      firstName: firstName,
    }),
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

// donation emails
export const sendFellowDonationEmail = async (
  email: string,
  name: string,
  amount: string,
) => {
  const firstName = name.split(" ")[0];
  console.log(firstName);
  await fetch("/api/emails/donationEmails/fellowDonationEmail", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      firstName: firstName,
      amount: amount,
    }),
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const sendBusinessDonationEmail = async (
  email: string,
  businessName: string,
  amount: string,
) => {
  await fetch("/api/emails/donationEmails/businessDonationEmail", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      businessName: businessName,
      amount: amount,
    }),
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
