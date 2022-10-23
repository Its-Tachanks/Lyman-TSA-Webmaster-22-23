// The order of css imports determines the order of css rules
// The last imported css file has the highest priority
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";

// Layout component defining global components
import Layout from "../components/_layout.jsx";

function MyApp({ Component, pageProps }) {
  return (
    // Inside the layout is the corresponding page
    // Layout applies any components that are common to all pages
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
