// Imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

import { useProgress } from "@react-three/drei";

import { useRef, useEffect, Suspense } from "react";

// CSS imports
import styles from "../styles/pages/Home.module.css";

// Component imports
import HeroImg from "../components/templates/HeroImg";

// Page
export default function Home() {
  // Progress on loading for 3d models
  const { progress } = useProgress();

  return (
    <>
      {/* Meta tags */}
      <Head>
        <title>test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ! Main homepage content */}
      <main>
        <HeroImg
          flipped="false"
          header="One"
          text="Lorem stuff 1"
          image="/img/a.gif"
          imageAlt="Image 1"
          loadAnim="swipeFromLeft"
        />
        <HeroImg
          flipped="true"
          header="Two"
          text="Lorem stuff 2"
          image="/img/b.gif"
          imageAlt="Image 2"
          loadAnim="swipeFromRight"
        />
      </main>
    </>
  );
}
