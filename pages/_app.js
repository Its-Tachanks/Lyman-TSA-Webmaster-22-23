import "../styles/global.css";
import Layout from "../components/layout.jsx";

function MyApp({ Component, pageProps }) {
  return (
    // Inside the layout is the corresponding page
    // Layout applies any components that are common to all pages
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
