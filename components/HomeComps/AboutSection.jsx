// Next js imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

import { useEffect, useRef } from "react";

// CSS imports
import styles from "../../styles/Components/HomeStyles/AboutSection.module.css";

// Component imports

// Page
export default function AboutSection() {
  const aboutSectionRef = useRef();

  return (
    <section id={`${styles.aboutSection}`} ref={aboutSectionRef}>
      {/* Component content */}
      <p>This is the AboutSection component</p>
    </section>
  );
}
