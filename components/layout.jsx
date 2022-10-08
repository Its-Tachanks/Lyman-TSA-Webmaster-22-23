// Imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

// CSS imports

// Component imports
import Navbar from "./Navbar";
import Footer from "./Footer";
import Preloader from "./Preloader";

// Page
export default function Layout({ children }) {
  return (
    <>
      {/* Webpage global layout */}
      {children}
    </>
  );
}
