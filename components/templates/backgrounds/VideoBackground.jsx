// Next js imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

import { useEffect, useRef } from "react";

// CSS imports
import styles from "../../../styles/templates/backgrounds/ImageBackground.module.css";

// Component imports

// Page
export default function VideoBackground(props) {
	const videoRef = useRef();

	useEffect(() => {
		videoRef.current.playbackRate = props.speed;
	}, [props.speed]);

	return (
		<section
			className={`position-relative w-100 z-1 top-0 start-0 overflow-hidden d-flex align-items-center justify-content-center `}
			style={{ height: props.height }}
		>
			<video
				className={`w-100`}
				autoPlay
				loop
				muted
				style={{ height: props.height, objectFit: "cover" }}
				ref={videoRef}
			>
				<source src={props.video} type="video/mp4" />
			</video>
			<div
				className={`position-absolute d-flex align-items-center justify-content-center h-100 w-100 z-2 flex-column flex-wrap top-0 start-0 ${props.loadAnim}`}
			>
				{props.children}
			</div>
		</section>
	);
}
