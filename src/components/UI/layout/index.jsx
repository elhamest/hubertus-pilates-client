import Breadcrumbs from "./Breadcrumbs";

const Layout = ({ children }) => {
  return (
    <div>
      <Breadcrumbs />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

// import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

// export default MyApp;
