import Header from './header';
import { NextPage } from 'next';

const layoutStyle = {
  margin: 20,
  padding: 20
};

const Layout: NextPage = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;
