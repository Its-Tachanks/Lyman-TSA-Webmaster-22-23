// Next js imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// CSS imports
import styles from "../styles/Components/Navbar.module.css";

// Component imports

// Page
export default function Navbar() {
  return (
    <div className="flex alignCenter" id={`${styles.navbar}`}>
      {/* Component content */}
      <h2>This is the Navbar component</h2>
    </div>
  );
}
