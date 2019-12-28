import gql from 'graphql-tag';

const POSTS_QUERY = gql`
  query {
    posts {
      edges {
        node {
          id
          title
          date
          uri
        }
      }
    }
  }
`;

export default POSTS_QUERY;
