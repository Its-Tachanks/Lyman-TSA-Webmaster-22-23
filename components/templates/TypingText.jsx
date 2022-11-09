// Imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

import { useEffect, useRef } from "react";

// CSS imports
// import styles from "../../styles/templates/PageTitle.module.css";

// Component imports

// Page
export default function TypingText(props) {
  const textRef = useRef(null);

  function yourFunction() {
    if (textRef.current) {
      textRef.current.innerHTML += "j";
    }
    setTimeout(yourFunction, 1000);
  }
  yourFunction();

  return (
    <>
      <h1 ref={textRef} className="text-white">
        {props.text[0]}
      </h1>
    </>
  );
}
