import { gql } from "@apollo/client";

export const SIGNUP_MUTATION = gql`
  mutation SignUp($name: String!, $email: String!, $betaTester: Boolean!) {
    signUp(name: $name, email: $email, betaTester: $betaTester) {
      success
      message
    }
  }
`;
