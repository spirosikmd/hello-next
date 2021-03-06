import Layout from '../../components/layout';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import PRODUCT_QUERY from '../../graphql/product.query';

const Product = () => {
  const router = useRouter();
  const { data, loading, error } = useQuery<{
    simpleProduct: {
      id: string;
      name: string;
      date: string;
      description: string;
      price: string;
      image: {
        sourceUrl: string;
      };
    };
  }>(PRODUCT_QUERY, { variables: { slug: router.query.slug } });
  if (loading) {
    return <Layout>Loading...</Layout>;
  }
  if (error) {
    return <Layout>{error}</Layout>;
  }
  return (
    <Layout>
      <h1>{data?.simpleProduct.name}</h1>
      {data?.simpleProduct.image && (
        <img src={data?.simpleProduct.image.sourceUrl} />
      )}
      {data?.simpleProduct.description && (
        <p
          dangerouslySetInnerHTML={{ __html: data?.simpleProduct.description }}
        />
      )}
      <style jsx>{`
        h1,
        p {
          font-family: 'Arial';
        }
      `}</style>
    </Layout>
  );
};

export default Product;
