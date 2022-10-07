// Next js imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// CSS imports
import styles from "../styles/Navbar.module.css";

// Component imports

// Page
export default function Navbar() {
  return (
    <div className={`${styles.link} ${styles.container}`}>
      {/* Component content */}
      <main className={styles.main}>
        <p>This is the Navbar component</p>
      </main>
    </div>
  );
}
