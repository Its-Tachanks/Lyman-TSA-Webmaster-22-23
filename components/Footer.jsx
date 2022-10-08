// Next js imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// CSS imports
import styles from "../styles/Components/Footer.module.css";

// Component imports

// Page
export default function Footer() {
  return (
    <section id={`${styles.footer}`}>
      {/* Component content */}
      <main className={styles.main}>
        <p>This is the Footer component</p>
      </main>
    </section>
  );
}
