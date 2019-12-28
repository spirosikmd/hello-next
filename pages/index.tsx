import Layout from '../components/layout';
import Link from 'next/link';
import withData from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import POSTS_QUERY from '../graphql/posts.query';

const PostLink: React.FunctionComponent<{
  title: string;
  date: string;
  uri: string;
}> = ({ title, date, uri }) => (
  <li>
    <Link href="/p/[uri]" as={`/p/${uri}`}>
      <a>{title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

const Index = () => {
  const { data, loading, error } = useQuery<{
    posts: {
      edges: {
        node: { id: string; title: string; date: string; uri: string };
      }[];
    };
  }>(POSTS_QUERY);
  if (loading) {
    return <Layout>Loading...</Layout>;
  }
  if (error) {
    return <Layout>{error}</Layout>;
  }
  return (
    <Layout>
      <h1>Posts</h1>
      <ul>
        {data?.posts.edges.map(({ node }) => (
          <PostLink
            title={node.title}
            date={node.date}
            uri={node.uri}
            key={node.id}
          />
        ))}
      </ul>
      <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }
      `}</style>
    </Layout>
  );
};

export default withData(Index);
