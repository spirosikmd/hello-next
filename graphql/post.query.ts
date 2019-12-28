import gql from 'graphql-tag';

const POST_QUERY = gql`
  query GET_POST($uri: String) {
    postBy(uri: $uri) {
      id
      title
      date
      uri
      content
    }
  }
`;

export default POST_QUERY;
