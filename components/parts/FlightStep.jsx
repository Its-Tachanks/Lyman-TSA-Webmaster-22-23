// Library imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

// CSS imports
import styles from "../../styles/parts/FlightStep.module.css";

// Component imports
import TwoColumnHero from "../templates/TwoColumnHero";
import HeroText from "../templates/heroParts/HeroText";
import HeroImg from "../templates/heroParts/HeroImg";

// Page
export default function FlightStep(props) {
  return (
    // <div
    //   className={`${styles.stepContainer} ${
    //     props.reversed ? `${styles.reverse} swipeFromRight` : "swipeFromLeft"
    //   } fadeIn`}
    // >
    //   <div className={styles.stepText}>
    //     <h3>{props.title}</h3>
    //     <p>{props.description}</p>
    //   </div>
    //   <div className={styles.stepImg}>
    //     <Image src={props.image} alt="Image" layout="fill" />
    //   </div>
    // </div>
    <>
      <TwoColumnHero flipped="true" loadAnim="">
        <HeroImg
          image="https://picsum.photos/200/200"
          imageAlt="Image 1"
          loadAnim="swipeFromRight"
        />
        <HeroText header="Header 1" text="Text 1" loadAnim="fadeIn" />
      </TwoColumnHero>
    </>
  );
}
