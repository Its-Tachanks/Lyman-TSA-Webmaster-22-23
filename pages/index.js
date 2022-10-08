// Next js imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

// CSS imports
import styles from "../styles/Home.module.css";

// Component imports
import ThreeHomeBg from "../components/HomeBg";
import Footer from "../components/Footer";

// Page
export default function Home() {
  return (
    <div>
      {/* Meta tags */}
      <Head>
        <title>test</title>
      </Head>

      {/* Main web content excluding navbar and footer */}
      <ThreeHomeBg />

      <main className="mainContent">
        <div id={`${styles.homeTitleDiv}`} className="flex alignCenter">
          <div>
            <h1 id={`${styles.homeTitle}`}>Company Name</h1>
            <h2 id={`${styles.homeSubtitle}`}>Inspirational motto</h2>
            <Image src="/img/a.png" alt="L" width="100px" height="150px" />
          </div>
        </div>
        <Link href="/about">Landing page content</Link>
        <Footer />
      </main>
    </div>
  );
}
