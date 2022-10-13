// Imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Sparkles,
  Stars,
  Cloud,
  Sky,
  SpotLight,
  CameraShake,
} from "@react-three/drei";

// Other imports
import MainCamera from "../ThreeJS/MainCamera";

// Model imports
import Planet from "../ThreeJS/Planet";
import Gun from "../ThreeJS/Gun";
import Astronaut from "../ThreeJS/Astronaut";

// CSS imports
import styles from "../../styles/Components/HomeStyles/HomeBg.module.css";

// Page
export default function ThreeHomeBg() {
  return (
    <section id={`${styles.HomeBg}`}>
      {/* Component content */}
      <Canvas
        onPointerOver={(e) => {
          console.log("over");
        }}
      >
        <color attach="background" args={["#1f1f1f"]} />
        <MainCamera />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Astronaut />
        <OrbitControls />
        <gridHelper />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
      </Canvas>
    </section>
  );
}
