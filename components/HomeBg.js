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
} from "@react-three/drei";

// Model imports
import Planet from "./Models/Planet";
import Gun from "./Models/Gun";

// CSS imports
import styles from "../styles/Components/HomeBg.module.css";

// Page
export default function ThreeHomeBg() {
  return (
    <section id={`${styles.HomeBg}`}>
      {/* Component content */}
      <Canvas>
        <color attach="background" args={["#1f1f1f"]} />
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={90} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Gun />
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
        <SpotLight
          distance={9}
          angle={0.4}
          attenuation={5}
          penumbra={0}
          anglePower={5} // Diffuse-cone anglePower (default: 5)
          position={[5, 2, -0.5]}
        />
        <SpotLight
          distance={9}
          angle={0.4}
          attenuation={5}
          penumbra={0}
          anglePower={5} // Diffuse-cone anglePower (default: 5)
          position={[-5, 2, -0.5]}
        />
      </Canvas>
    </section>
  );
}
