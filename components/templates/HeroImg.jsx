// Next js imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

// CSS imports
import styles from "../../styles/templates/HeroImg.module.css";

// Component imports

// Page
export default function HeroImg(props) {
  return (
    <section>
      <div className="row vh-100">
        <div className="col d-flex align-items-center justify-content-center">
          <Link href="/attributions">
            <a underline="false">balls</a>
          </Link>
        </div>
        <div className="col d-flex align-items-center justify-content-center">
          <Link href="/attributions">
            <a underline="false">balls</a>
          </Link>
        </div>
      </div>
    </section>
  );
}
