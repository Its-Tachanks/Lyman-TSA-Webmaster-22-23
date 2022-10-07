// Next js imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

// CSS imports
import styles from "../styles/Home.module.css";

// Component imports
import Navbar from "../components/Navbar";

// Page
export default function Home() {
  return (
    <div className={`${styles.link} ${styles.container}`}>
      {/* Meta tags */}
      <Head>
        <title>test</title>
      </Head>

      {/* Main web content */}
      <main className={styles.main}>
        <Navbar />
        <Link href="/about">Hi aaaaaaaaaaaaaaaaaaaa</Link>
        <Image src="/img/a.png" alt="L" width="100px" height="150px" />
        <Script
          src="https://coolors.co/palette-widget/widget.js"
          data-id="06933927006541499"
          onReady={() => {
            new CoolorsPaletteWidget("06933927006541499", [
              "0466c8",
              "0353a4",
              "023e7d",
              "002855",
              "001845",
              "001233",
              "33415c",
              "5c677d",
              "7d8597",
              "979dac",
            ]);
          }}
        ></Script>
      </main>
    </div>
  );
}
