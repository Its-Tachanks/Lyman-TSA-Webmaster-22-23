// The order of css imports determines the order of css rules
// The last imported css file has the highest priority
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";

import Head from "next/head";

// Layout component defining global components
import Layout from "../components/layout.jsx";

function MyApp({ Component, pageProps }) {
  return (
    // Inside the layout is the corresponding page
    // Layout applies any components that are common to all pages
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
