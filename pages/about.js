// Next js imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// CSS imports
import styles from "../styles/About.module.css";

// Component imports
import Navbar from "../components/Navbar";

// Page
export default function About() {
  return (
    <div className={`${styles.link} ${styles.container}`}>
      {/* Meta tags */}
      <Head>
        <title>test</title>
      </Head>

      {/* Main web content */}
      <main className={styles.main}>
        <Navbar />
        <Link href="/">Hi jjjjjjjj</Link>
        <Image src="/img/a.png" alt="L" width="200px" height="350px" />
      </main>
    </div>
  );
}
