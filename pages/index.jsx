// Imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

import { useProgress } from "@react-three/drei";

import { useRef, useEffect, Suspense } from "react";

import ReactTypingEffect from "react-typing-effect";

// CSS imports
import styles from "../styles/pages/Home.module.css";

// Component imports
import TwoColumnHero from "../components/templates/TwoColumnHero";
import HeroImg from "../components/templates/heroParts/HeroImg";
import HeroText from "../components/templates/heroParts/HeroText";
import VideoBackground from "../components/templates/backgrounds/VideoBackground";
import TitleTextWrapper from "../components/templates/TitleTextWrapper";
import WaveTransition from "../components/templates/WaveTransition";
import FadeTransition from "../components/templates/FadeTransition";

// Page
export default function Home() {
	// Progress on loading for 3d models
	const { progress } = useProgress();

	return (
		<>
			{/* Meta tags */}
			<Head>
				<title>test</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* ! Main homepage content */}
			<main>
				<FadeTransition height="70%">
					<VideoBackground
						video="/img/Earth.mp4"
						imageAlt="hi"
						height="102vh"
						speed="0.8"
						loadAnim="fadeIn visible"
					>
						<div className="row align-items-center w-100 container-md">
							<div className="col-md-7 position-relative d-flex justify-content-center align-items-center h-100">
								<TitleTextWrapper className="p-4 d-flex flex-column">
									<h1>Galatech Systems</h1>
									<ReactTypingEffect
										text={[
											"Some cool text",
											"More cool text",
											"Even more cool text",
										]}
										eraseSpeed="100"
										typingDelay="1000"
										cursor="_"
									/>
								</TitleTextWrapper>
							</div>
							<div className="col-md-5 position-relative d-flex justify-content-center align-items-center h-100"></div>
						</div>
					</VideoBackground>
				</FadeTransition>

				<TwoColumnHero loadAnim="">
					<HeroText header="Header 1" text="Text 1" loadAnim="fadeIn" />
					<HeroImg
						image="https://picsum.photos/200/200"
						imageAlt="Image 1"
						loadAnim="swipeFromRight"
					/>
				</TwoColumnHero>

				<TwoColumnHero flipped loadAnim="">
					<HeroText header="Header 1" text="Text 1" loadAnim="fadeIn" />
					<HeroImg
						image="https://picsum.photos/200/200"
						imageAlt="Image 1"
						loadAnim="swipeFromLeft"
					/>
				</TwoColumnHero>
			</main>
		</>
	);
}
