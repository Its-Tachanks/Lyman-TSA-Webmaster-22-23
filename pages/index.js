import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <body>
        <h1>HI</h1>
        <Link href="/about" className={styles.link}>
          link to about
        </Link>
      </body>
    </div>
  );
}
