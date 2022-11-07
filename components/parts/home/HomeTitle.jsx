// Imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

// CSS imports
import styles from "../../../styles/parts/home/HomeTitle.module.css";

// Component imports
import ImageBackground from "../../templates/backgrounds/ImageBackground";

// Page
export default function HomeTitle(props) {
  // TODO Ideas for animations
  // * Circle follows mouse revaling hidden text
  // * Mouse moves line revealing hidden text
  // * Fade in text with space-like background
  // * Fade in text with typing animation changing one word to another

  return (
    <>
      <ImageBackground
        image="https://assets.hongkiat.com/uploads/fantastic-website-space-theme/spaceadvisor.jpg"
        imageAlt="Stars"
        height="100vh"
        id={`${styles.homeTitle}`}
      >
        <div id={`${styles.homeTitle}`} className={``}>
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
        </div>
      </ImageBackground>
    </>
  );
}
