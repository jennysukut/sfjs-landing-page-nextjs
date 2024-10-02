"use client";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://straightforward-job-site-backend-obsy.onrender.com/graphql",
  // uri: "http://localhost:8082/graphql",
  cache: new InMemoryCache(),
});

export default function ApolloWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
