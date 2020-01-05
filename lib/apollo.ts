import withApollo from 'next-with-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'isomorphic-unfetch';
import { ApolloClient } from 'apollo-client';

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      link: createHttpLink({
        fetch,
        uri: process.env.GRAPHQL_URL
      }),
      cache: new InMemoryCache().restore(initialState || {})
    })
);
