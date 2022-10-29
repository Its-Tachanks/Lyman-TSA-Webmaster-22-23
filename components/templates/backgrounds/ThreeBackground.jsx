// Imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Stars,
  SpotLight,
} from "@react-three/drei";

// CSS imports
import styles from "../../../styles/templates/backgrounds/ThreeBackground.module.css";

// Component imports

// Page
export default function ThreeBackground(props) {
  return (
    <div
      className="position-relative w-100 z-1"
      style={{ height: props.height }}
    >
      <Canvas className="position-relative w-100">
        <PerspectiveCamera
          makeDefault
          position={[1.5, -0.1, 2]}
          fov={70}
          rotation={[1.5, 0, 0]}
          //ref={camRef}
        />
        <OrbitControls />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <gridHelper />
        <ambientLight intensity={0.5} />
      </Canvas>
      <div className="position-absolute d-flex align-items-center justify-content-center h-100 w-100 z-2 flex-column flex-wrap top-0 left-0">
        {props.children}
      </div>
    </div>
  );
}
