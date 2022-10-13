import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";

export default function Planet() {
  const planetModel = useGLTF("/models/Earth.glb");
  const planetRef = useRef();
  useFrame(() => (planetRef.current.rotation.y += 0.001));
  useFrame(() => (planetRef.current.rotation.x += 0.0005));
  return (
    <Suspense fallback={null}>
      <primitive object={planetModel.scene} ref={planetRef} />
    </Suspense>
  );
}
