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
      <div
        className={`container-sm px-4 py-5 mw-100 bg-success ${
          props.fade === "true" ? "fadeIn" : ""
        }`}
      >
        <div
          className={`row align-items-center ${
            props.flipped === "true" ? "flex-row-reverse" : ""
          }`}
        >
          {/* Col-7 makes column 7/12 width */}
          {/* Col-sm px >= 768 */}
          {/* Col-xs < 768 */}
          <div className="col-md-7 text-bg-dark">
            <h1 className="">{props.header}</h1>
            <p className="mb-0">{props.text}</p>
          </div>
          <div
            className="col-md-5 text-bg-danger position-relative p-5"
            style={{ height: "450px" }}
          >
            <Image
              alt={props.imageAlt}
              src={props.image}
              width="100%"
              height="100%"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
