// Imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

import { useProgress } from "@react-three/drei";

// CSS imports
import styles from "../styles/Home.module.css";

// Component imports
import ThreeHomeBg from "../components/HomeBg";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import Navbar from "../components/Navbar";

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

      {/* Main web content excluding navbar and footer */}
      <ThreeHomeBg />
      {progress === 100 ? (
        <>
          <Navbar />
          <Script
            src="/scripts/FadeIn.js"
            onLoad={function () {
              checkElements();
              console.log("FadeIn.js loaded");
            }}
          />
          <main className="mainContent">
            <div
              id={`${styles.homeTitleDiv}`}
              className="flex alignCenter fadeIn"
            >
              <div>
                <h1 id={`${styles.homeTitle}`}>Company Name</h1>
                <h2 id={`${styles.homeSubtitle}`}>Inspirational motto</h2>
                <Image src="/img/a.png" alt="L" width="100px" height="150px" />
              </div>
            </div>
            <Footer />
          </main>
        </>
      ) : (
        <Preloader />
      )}
    </div>
  );
}
