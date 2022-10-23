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
import Navbar from "../components/parts/Navbar";
import Footer from "../components/parts/Footer";
import HeroImg from "../components/templates/HeroImg";
import CenterHero from "../components/templates/CenterHero";

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
        <Script src="/scripts/FadeIn.js" />

        <Navbar />
        <HeroImg txtSide="left"></HeroImg>
        <Footer />
      </main>
    </>
  );
}
