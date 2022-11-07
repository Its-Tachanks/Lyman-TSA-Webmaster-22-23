// Next js imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

// CSS imports
import styles from "../../../styles/templates/backgrounds/ImageBackground.module.css";

// Component imports

// Page
export default function ImageBackground(props) {
  return (
    <section
      className={`position-relative w-100 z-1 top-0 start-0`}
      style={{ height: props.height }}
    >
      <Image
        src={props.image}
        alt={props.imageAlt}
        layout="fill"
        className=""
        unoptimized
        objectFit="cover"
        placeholder="blur"
        blurDataURL={props.image}
      />
      <div className="position-absolute d-flex align-items-center justify-content-center h-100 w-100 z-2 flex-column flex-wrap top-0 start-0">
        {props.children}
      </div>
    </section>
  );
}
