import gql from 'graphql-tag';

const PRODUCTS_QUERY = gql`
  query {
    products {
      nodes {
        id
        name
        slug
        image {
          sourceUrl
        }
        ... on SimpleProduct {
          price
        }
      }
    }
  }
`;

export default PRODUCTS_QUERY;
