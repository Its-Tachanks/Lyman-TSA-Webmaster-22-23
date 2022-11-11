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
import ImageBackground from "../components/templates/backgrounds/ImageBackground";
import VideoBackground from "../components/templates/backgrounds/VideoBackground";
import TitleTextWrapper from "../components/templates/TitleTextWrapper";

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
				<VideoBackground
					video="/img/Earth.mp4"
					imageAlt="hi"
					height="100vh"
					speed="0.8"
					loadAnim="fadeIn"
				>
					<div className="row justify-content-between align-items-center w-75">
						<div className="col-md-7 position-relative d-flex justify-content-center align-items-center">
							<TitleTextWrapper className="p-4 d-flex flex-column">
								<h1>Ass or Tits? Cock...</h1>
								<div className="d-inline-block">
									<p>👼🏿</p>
									<ReactTypingEffect
										text={[
											"Cock Crushers",
											"Dick Dingers",
											"Nut Nullifiers",
											"Penis Pummelers",
										]}
										eraseSpeed="100"
										typingDelay="1000"
										cursor="_"
									/>
								</div>
							</TitleTextWrapper>
						</div>
						<div className="col-md-5 position-relative d-flex justify-content-center align-items-center"></div>
					</div>
				</VideoBackground>

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
