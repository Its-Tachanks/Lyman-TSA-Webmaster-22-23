// Imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

// CSS imports
import styles from "../../styles/templates/TitleTextWrapper.module.css";

// Component imports

// Page
export default function TitleTextWrapper(props) {
  return (
    <>
      <div className={`${props.className}`} id={`${styles.text}`}>
        {props.children}
      </div>
    </>
  );
}
