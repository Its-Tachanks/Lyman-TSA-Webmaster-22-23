// Next js imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

import { useRef, useEffect } from "react";

// CSS imports
import styles from "../styles/Components/Navbar.module.css";

// Component imports

// Page
export default function Navbar() {
  const navbarRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(document.body.getBoundingClientRect().top);
      document.body.getBoundingClientRect().top <= -100
        ? navbarRef.current.classList.add(`${styles.navBg}`)
        : navbarRef.current.classList.remove(`${styles.navBg}`);
    });
  }, []);

  return (
    <nav
      className="navbar navbar-dark position-fixed"
      aria-label="First navbar example"
      id={`${styles.navbar}`}
      ref={navbarRef}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          This doesnt work no touvchy
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample01"
          aria-controls="navbarsExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample01">
          <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
}
