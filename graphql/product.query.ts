import gql from 'graphql-tag';

const PRODUCT_QUERY = gql`
  query GET_PRODUCT($slug: String!) {
    simpleProduct(slug: $slug) {
      id
      name
      date
      description
      price
      image {
        sourceUrl
      }
    }
  }
`;

export default PRODUCT_QUERY;
