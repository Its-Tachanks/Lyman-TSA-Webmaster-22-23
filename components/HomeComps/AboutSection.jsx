// Next js imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

// CSS imports
import styles from "../../styles/Components/HomeStyles/AboutSection.module.css";

// Component imports

// Page
export default function AboutSection() {
  return (
    <section id={`${styles.aboutSection}`}>
      {/* Component content */}
      <p>This is the AboutSection component</p>
    </section>
  );
}
