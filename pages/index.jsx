// Imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

import { useProgress } from "@react-three/drei";

import { useRef, useEffect } from "react";

// CSS imports
import styles from "../styles/Home.module.css";

// Component imports
import Preloader from "../components/Preloader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ThreeHomeBg from "../components/HomeComps/HomeBg";
import AboutSection from "../components/HomeComps/AboutSection";
import TitleSection from "../components/HomeComps/TitleSection";

// Page
export default function Home() {
  // Progress on loading for 3d models
  const { progress } = useProgress();

  return (
    <div>
      {/* Meta tags */}
      <Head>
        <title>test</title>
      </Head>

      {/* Main homepage content */}
      <ThreeHomeBg />
      {progress === 100 ? (
        <>
          <Navbar />
          <Script src="/scripts/FadeIn.js" />

          {/* Page content you should touch */}
          <main className="mainContent">
            <TitleSection />
            <div id={`${styles.notTitle}`}>
              <AboutSection />
              <Footer />
            </div>
          </main>
        </>
      ) : (
        <Preloader />
      )}
    </div>
  );
}
