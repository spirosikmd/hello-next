import Layout from '../../components/layout';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import withData from '../../lib/apollo';
import POST_QUERY from '../../graphql/post.query';

const Post = () => {
  const router = useRouter();
  const { data, loading, error } = useQuery<{
    postBy: {
      id: string;
      title: string;
      date: string;
      uri: string;
      content: string;
    };
  }>(POST_QUERY, { variables: { uri: router.query.uri } });
  return (
    <Layout>
      <h1>{data?.postBy.title}</h1>
      <p>{data?.postBy.content.replace(/<[/]?[pb]>/g, '')}</p>
      <style jsx>{`
        h1,
        p {
          font-family: 'Arial';
        }
      `}</style>
    </Layout>
  );
};

export default withData(Post);
