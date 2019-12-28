import Layout from '../components/layout';

const About = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>This is the about page</p>
      <style jsx>{`
        h1,
        p {
          font-family: 'Arial';
        }
      `}</style>
    </Layout>
  );
};

export default About;
