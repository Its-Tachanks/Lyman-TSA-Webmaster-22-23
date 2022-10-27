// Imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

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
      <ImageBackground image="/img/stars.gif" imageAlt="Stars" height="400px">
        <PageTitle title="Flight" />
      </ImageBackground>

      <div className={styles.stepsContainer}>
        <FlightStep
          title={`Step 1`}
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quae error tempore cum voluptatibus maxime, quis alias, inventore, neque culpa minima dolorem. Asperiores, odio. Odio, repellendus voluptatibus, fugit reprehenderit ducimus debitis pariatur nulla vitae numquam itaque illo magnam harum obcaecati deleniti nemo corrupti consectetur sequi doloremque ipsa tenetur unde consequuntur.`}
          image={`/img/a.gif`}
          reversed={false}
        />

        <FlightStep
          title={`Step 2`}
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quae error tempore cum voluptatibus maxime, quis alias, inventore, neque culpa minima dolorem. Asperiores, odio. Odio, repellendus voluptatibus, fugit reprehenderit ducimus debitis pariatur nulla vitae numquam itaque illo magnam harum obcaecati deleniti nemo corrupti consectetur sequi doloremque ipsa tenetur unde consequuntur.`}
          image={`/img/a.gif`}
          reversed={true}
        />

        <FlightStep
          title={`Step 3`}
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quae error tempore cum voluptatibus maxime, quis alias, inventore, neque culpa minima dolorem. Asperiores, odio. Odio, repellendus voluptatibus, fugit reprehenderit ducimus debitis pariatur nulla vitae numquam itaque illo magnam harum obcaecati deleniti nemo corrupti consectetur sequi doloremque ipsa tenetur unde consequuntur.`}
          image={`/img/a.gif`}
          reversed={false}
        />

        <FlightStep
          title={`Step 4`}
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quae error tempore cum voluptatibus maxime, quis alias, inventore, neque culpa minima dolorem. RHODE ISLAND SHOULD BURN Asperiores, odio. Odio, repellendus voluptatibus, fugit reprehenderit ducimus debitis pariatur nulla vitae numquam itaque illo magnam harum obcaecati deleniti nemo corrupti consectetur sequi doloremque ipsa tenetur unde consequuntur.`}
          image={`/img/a.gif`}
          reversed={true}
        />

        <FlightStep
          title={`Step 5`}
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quae error tempore cum voluptatibus maxime, quis alias, inventore, neque culpa minima dolorem. Asperiores, odio. Odio, repellendus voluptatibus, fugit reprehenderit ducimus debitis pariatur nulla vitae numquam itaque illo magnam harum obcaecati deleniti nemo corrupti consectetur sequi doloremque ipsa tenetur unde consequuntur.`}
          image={`/img/a.gif`}
          reversed={false}
        />
      </div>
    </>
  );
}
