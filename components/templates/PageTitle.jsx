// Next js imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

// CSS imports
import styles from "../../styles/templates/PageTitle.module.css";

// Component imports

// Page
export default function PageTitle(props) {
  return (
    <>
      <h1>{props.title}</h1>
    </>
  );
}
