import Layout from '../components/layout';
import { useQuery } from '@apollo/react-hooks';
import PRODUCTS_QUERY from '../graphql/products.query';
import { Product } from '../components/product';

const Index = () => {
  const { data, loading, error } = useQuery<{
    products: {
      nodes: {
        id: string;
        name: string;
        slug: string;
        price: string;
        image: {
          sourceUrl: string;
        };
      }[];
    };
  }>(PRODUCTS_QUERY);
  if (loading) {
    return <Layout>Loading...</Layout>;
  }
  if (error) {
    return <Layout>{error}</Layout>;
  }
  return (
    <Layout>
      <h1>Products</h1>
      <div className="products">
        {data?.products.nodes.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        .products {
          display: flex;
        }
      `}</style>
    </Layout>
  );
};

export default Index;
