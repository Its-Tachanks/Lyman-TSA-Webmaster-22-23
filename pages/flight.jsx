// Imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

import { Tooltip, IconButton, Button } from "@mui/material";

// CSS imports
import styles from "../styles/pages/Flight.module.css";

// Component imports
import TwoColumnHero from "../components/templates/TwoColumnHero";
import HeroImg from "../components/templates/heroParts/HeroImg";
import HeroText from "../components/templates/heroParts/HeroText";
import FlightStep from "../components/parts/FlightStep";
import PageTitle from "../components/templates/PageTitle";
import ImageBackground from "../components/templates/ImageBackground";

// Page

export default function flight() {
  return (
    <>
      <ImageBackground image="/img/b.gif" imageAlt="Stars" height="400px">
        <PageTitle title="Flight" />
        <p>hi</p>
      </ImageBackground>

      <TwoColumnHero loadAnim="fadeIn">
        <HeroText
          header="Step 1"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa atque
        aliquid dicta quos est doloremque consequatur qui totam. Quo aliquid
        voluptates enim esse hic porro accusantium laudantium neque! Voluptatum,
        molestiae!"
          loadAnim=""
        />
        <HeroImg
          image="https://picsum.photos/200/200"
          imageAlt="Image 1"
          loadAnim=""
        />
      </TwoColumnHero>
      <TwoColumnHero flipped loadAnim="fadeIn">
        <HeroText
          header="Step 2"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa atque
        aliquid dicta quos est doloremque consequatur qui totam. Quo aliquid
        voluptates enim esse hic porro accusantium laudantium neque! Voluptatum,
        molestiae!"
          loadAnim=""
        />
        <HeroImg
          image="https://picsum.photos/300/400"
          imageAlt="Image 1"
          loadAnim=""
        />
      </TwoColumnHero>
      <TwoColumnHero loadAnim="fadeIn">
        <HeroText
          header="Step 3"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa atque
        aliquid dicta quos est doloremque consequatur qui totam. Quo aliquid
        voluptates enim esse hic porro accusantium laudantium neque! Voluptatum,
        molestiae!"
          loadAnim=""
        />
        <HeroImg
          image="https://picsum.photos/200/200"
          imageAlt="Image 1"
          loadAnim=""
        />
      </TwoColumnHero>
      <TwoColumnHero flipped loadAnim="fadeIn">
        <HeroText
          header="Step 4"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa atque
        aliquid dicta quos est doloremque consequatur qui totam. Quo aliquid
        voluptates enim esse hic porro accusantium laudantium neque! Voluptatum,
        molestiae!"
          loadAnim=""
        />
        <HeroImg
          image="https://picsum.photos/300/400"
          imageAlt="Image 1"
          loadAnim=""
        />
      </TwoColumnHero>

      {/* TODO Make cool lookin rocket thingy that goes down as you scroll w/ sticky positioning
      OR scrolls to the right with snapping to make it unique */}

      <div className={styles.stepsContainer}></div>
    </>
  );
}
