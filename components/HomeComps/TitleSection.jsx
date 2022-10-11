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
      className="container-sm d-flex align-items-center w-100 fadeIn"
      ref={titleSectionRef}
    >
      <div className="row d-flex w-100">
        <div className="col-sm">
          <h1 id={`${styles.homeTitle}`}>Company Name</h1>
          <h2 id={`${styles.homeSubtitle}`}>Inspirational motto</h2>
          <Image src="/img/logo.png" alt="L" width="150px" height="150px" />
        </div>
        <div className="col-sm">
          <></>
        </div>
      </div>
    </section>
  );
}
