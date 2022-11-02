// Imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

import { useRef, useEffect } from "react";

// CSS imports
import styles from "../../styles/parts/Navbar.module.css";

// Component imports
import { Tooltip, IconButton, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Flight, RocketLaunch } from "@mui/icons-material";

// Page
export default function Navbar(props) {
  const navbarRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      //console.log(document.body.getBoundingClientRect().top);
      document.body.getBoundingClientRect().top <= -1
        ? navbarRef.current.classList.add(`${styles.scrolledNavbar}`)
        : navbarRef.current.classList.remove(`${styles.scrolledNavbar}`);
    });
  }, []);

  return (
    <nav
      className="d-flex flex-row justify-content-around align-items-center"
      id={`${styles.navbar}`}
      ref={navbarRef}
    >
      <div
        className={`container-fluid d-flex justify-content-center align-items-center ${styles.navbarContainer}`}
      >
        <Link href="/">
          <Tooltip title="Home" leaveDelay={250}>
            <IconButton sx={{ color: "var(--nav-color)" }}>
              <RocketLaunch className="icon" fontSize="medium" />
            </IconButton>
          </Tooltip>
        </Link>
      </div>
      <div
        className={`container-fluid d-flex justify-content-center align-items-center ${styles.navbarContainer} z-5 position-relative`}
      >
        <Link href="/flight">
          <Tooltip
            title="Flight Steps"
            leaveDelay={250}
            sx={{ color: "var(--nav-color)" }}
          >
            <Button>Flight</Button>
          </Tooltip>
        </Link>
      </div>
      <div
        className={`container-fluid d-flex justify-content-center align-items-center ${styles.navbarContainer}`}
      >
        <Link href="/attributions">
          <Tooltip
            title="Idk yet"
            leaveDelay={250}
            sx={{ color: "var(--nav-color)" }}
          >
            <Button>IDk</Button>
          </Tooltip>
        </Link>
      </div>
    </nav>
  );
}
