import { gql } from "@apollo/client";

export const SIGNUP_MUTATION = gql`
  mutation SignUp($name: String!, $email: String!, $betaTester: Boolean!) {
    signUp(name: $name, email: $email, betaTester: $betaTester) {
      success
      message
    }
  }
`;

export const BUSINESS_SIGNUP_MUTATION = gql`
  mutation BusinessSignUp(
    $betaTester: Boolean!
    $business: String!
    $earlySignup: Boolean!
    $email: String!
  ) {
    signupBusiness(
      betaTester: $betaTester
      business: $business
      earlySignup: $earlySignup
      email: $email
    )
  }
`;

// export const BUSINESS_SIGNUP_MUTATION = gql`
//   mutation BusinessSignUp(
//     $betaTester: Boolean!
//     $business: String!
//     $earlySignup: Boolean!
//     $email: String!
//   ) {
//     signupBusiness(
//       betaTester: $betaTester
//       business: $business
//       earlySignup: $earlySignup
//       email: $email
//     ) {
//       success
//       message
//     }
//   }
// `;
