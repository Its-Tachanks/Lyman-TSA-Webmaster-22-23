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

      <TwoColumnHero flipped loadAnim="fadeIn">
        <HeroImg
          image="https://picsum.photos/200/200"
          imageAlt="Image 1"
          loadAnim=""
        />
        <HeroText header="Header 1" text="Text 1" loadAnim="" />
      </TwoColumnHero>

      <div className={styles.stepsContainer}></div>
    </>
  );
}
