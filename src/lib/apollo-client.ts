// lib/apollo-client.js
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:8082/graphql",
  }),
  cache: new InMemoryCache(),
});

export default client;