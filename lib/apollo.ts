import { withData } from 'next-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const createCache = () => {
  return new InMemoryCache();
};

const config = {
  link: new HttpLink({
    uri: process.env.GRAPHQL_URL
  }),
  createCache
};

export default withData(config);
