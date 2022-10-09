// Next js imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

import { useRef } from "react";

// CSS imports
import styles from "../styles/Components/Navbar.module.css";

// Component imports

// Page
export default function Navbar() {
  const navbarRef = useRef();
  return (
    <nav className="flex alignCenter" id={`${styles.navbar}`} ref={navbarRef}>
      {/* Component content */}
      <h2>(╯°□°）╯︵ ┻━┻</h2>
    </nav>
  );
}
