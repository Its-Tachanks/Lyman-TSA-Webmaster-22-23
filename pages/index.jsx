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
        <ImageBackground image="https://assets.hongkiat.com/uploads/fantastic-website-space-theme/spaceadvisor.jpg" imageAlt="Stars" height="100vh">
          <PageTitle title="Galatech Systems" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            dolore doloribus iste incidunt maxime consequuntur officiis est eos
            qui voluptatibus aperiam, laboriosam praesentium, maiores dolorem
            quas dignissimos porro. Dolores, omnis.
          </p>
        </ImageBackground>
        {/* <ThreeBackground height="50vh">
          <PageTitle title="🙈🙊" />
          <p>😘😍😍😎😎😋😋😊😎😎😎😎🙂🙂🙄😶😎😘🤔🙂🤗🤨😥😏😏😣😥😣😣</p>
        </ThreeBackground> */}
        {/* TODO Fix swipe animations since they arent hidden upon not being showen (causes horizontal scrollable page) */}
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
