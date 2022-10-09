// Next js imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

import { useRef } from "react";

// CSS imports
import styles from "../../styles/Components/HomeStyles/TitleSection.module.css";

// Component imports

// Page
export default function TitleSection() {
  const titleSectionRef = useRef();

  return (
    <section
      id={`${styles.titleSection}`}
      className="fadeIn"
      ref={titleSectionRef}
    >
      {/* Component content */}
      <div>
        <h1 id={`${styles.homeTitle}`}>Company Name</h1>
        <h2 id={`${styles.homeSubtitle}`}>Inspirational motto</h2>
        <Image src="/img/a.png" alt="L" width="100px" height="150px" />
      </div>
    </section>
  );
}
