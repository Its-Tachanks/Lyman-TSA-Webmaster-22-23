// Imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

import { useProgress } from "@react-three/drei";

import { useRef, useEffect, Suspense } from "react";

import ReactTypingEffect from "react-typing-effect";

// CSS imports
import styles from "../styles/pages/Home.module.css";

// Component imports
import TwoColumnHero from "../components/templates/TwoColumnHero";
import HeroImg from "../components/templates/heroParts/HeroImg";
import HeroText from "../components/templates/heroParts/HeroText";
import ImageBackground from "../components/templates/backgrounds/ImageBackground";
import ThreeBackground from "../components/templates/backgrounds/ThreeBackground";
import TitleTextWrapper from "../components/templates/TitleTextWrapper";

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
        <ImageBackground image="/img/stars.gif" imageAlt="hi" height="100vh">
          <TitleTextWrapper className="p-4 d-flex flex-column">
            <h1>Ass or tits? Balls... {"->"}</h1>
            <ReactTypingEffect
              text={["Testys", "Testy's", "Testy's Test"]}
              eraseSpeed="100"
              typingDelay="1000"
              cursor="_"
            />
            <embed src="https://lanyard.cnrad.dev/api/484343723426054150"></embed>
          </TitleTextWrapper>
        </ImageBackground>

        <TwoColumnHero loadAnim="">
          <HeroText header="Header 1" text="Text 1" loadAnim="fadeIn" />
          <HeroImg
            image="https://picsum.photos/200/200"
            imageAlt="Image 1"
            loadAnim="swipeFromRight"
          />
        </TwoColumnHero>

        <TwoColumnHero flipped loadAnim="">
          <HeroText header="Header 1" text="Text 1" loadAnim="fadeIn" />
          <HeroImg
            image="https://picsum.photos/200/200"
            imageAlt="Image 1"
            loadAnim="swipeFromLeft"
          />
        </TwoColumnHero>
      </main>
    </>
  );
}
