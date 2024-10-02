import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://straightforward-job-site-backend-obsy.onrender.com/graphql",
  }),
  cache: new InMemoryCache(),
});

export default client;
