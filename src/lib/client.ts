import { HttpLink } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

if (process.env.NODE_ENV !== "production") {
  loadDevMessages();
  loadErrorMessages();
}

export const { getClient } = registerApolloClient(
  () =>
    new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri: "https://straightforward-job-site-backend-obsy.onrender.com/graphql",
      }),
    }),
);
