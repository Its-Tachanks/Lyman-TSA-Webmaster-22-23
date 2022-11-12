// Imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

// CSS imports
// import styles from "../../styles/templates/WaveTransition.module.css";

// Component imports

// Page
export default function WaveTransition(props) {
	return (
		<>
			<div className={`position-relative`}>
				{props.children}
				<div className="w-100 h-100 position-absolute bottom-0 left-0 z-2">
					<Image src="/img/wave.svg" layout="fill" alt=""></Image>
				</div>
			</div>
		</>
	);
}
