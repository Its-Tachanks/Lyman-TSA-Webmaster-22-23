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
          image="https://picsum.photos/200/200"
          imageAlt="Image 1"
          loadAnim=""
        />
        <HeroImg
          flipped="true"
          header="Two"
          text="Lorem stuff 2"
          image="https://picsum.photos/200/200"
          imageAlt="Image 2"
          loadAnim=""
        />
        <HeroImg
          flipped="false"
          header="One"
          text="Lorem stuff 1"
          image="https://picsum.photos/200/200"
          imageAlt="Image 1"
          loadAnim="swipeFromRight"
        />
        <HeroImg
          flipped="true"
          header="One"
          text="Lorem stuff 1"
          image="https://picsum.photos/200/200"
          imageAlt="Image 1"
          loadAnim="swipeFromLeft"
        />
      </main>
    </>
  );
}
