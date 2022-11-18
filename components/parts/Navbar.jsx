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
			<div className="col-3 h-100 d-flex align-items-center justify-content-center position-relative p-3">
				{/* <Tooltip title="Home"> */}
				<div className="d-flex flex-row align-items-center justify-content-center px-3 w-100">
					{/* <IconButton sx={{ color: "var(--nav-color)" }}> */}
					<Image src={"/img/star.png"} alt="Logo" height="50px" width="50px" />
					{/* </IconButton> */}
					<p className="px-2">Galatech Systems</p>
				</div>
				{/* </Tooltip> */}
			</div>

			<div className="col-6 h-100 d-flex align-items-center justify-content-center position-relative p-3">
				<Button variant="text" size="large" className={`${styles.navButton}`}>
					ds
				</Button>
			</div>

			<div className="col-3 h-100 d-flex align-items-center justify-content-center position-relative p-3"></div>
		</nav>
	);
}
