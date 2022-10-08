// Next js imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// CSS imports
import styles from "../styles/Components/Preloader.module.css";

// Component imports

// Page
export default function Preloader() {
  return (
    <section id={`${styles.preloader}`}>
      {/* Component content */}
      <main className="flex alignCenter" id={`${styles.preloaderContainer}`}>
        <div>
          <h2 id={`${styles.loadingText}`}>Loading</h2>
          <div className={`${styles.line}`}></div>
        </div>
      </main>
    </section>
  );
}
