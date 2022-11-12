// Imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

// CSS imports
import styles from "../../styles/templates/FadeTransition.module.css";

// Component imports

// Page
export default function FadeTransition(props) {
	return (
		<>
			<div className={`position-relative`}>
				{props.children}
				<div
					className={`w-100 position-absolute bottom-0 left-0 z-2`}
					style={{ height: props.height }}
					id={`${styles.fadeTransitionDiv}`}
				></div>
			</div>
		</>
	);
}
