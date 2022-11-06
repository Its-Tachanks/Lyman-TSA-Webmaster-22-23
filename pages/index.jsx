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
import TwoColumnHero from "../components/templates/TwoColumnHero";
import HeroImg from "../components/templates/heroParts/HeroImg";
import HeroText from "../components/templates/heroParts/HeroText";
import ImageBackground from "../components/templates/backgrounds/ImageBackground";
import ThreeBackground from "../components/templates/backgrounds/ThreeBackground";
import PageTitle from "../components/templates/PageTitle";
import HomeTitle from "../components/parts/home/HomeTitle";

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
        <HomeTitle
          title="Home"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae a
        nisi consequatur quidem fugit! Blanditiis, velit. Quibusdam, quo
        accusantium minus saepe, debitis, quisquam quas autem facilis velit
        cupiditate tenetur in?"
        />
        {/* <ThreeBackground height="50vh">
          <PageTitle title="🙈🙊" />
          <p>😘😍😍😎😎😋😋😊😎😎😎😎🙂🙂🙄😶😎😘🤔🙂🤗🤨😥😏😏😣😥😣😣</p>
        </ThreeBackground> */}
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
