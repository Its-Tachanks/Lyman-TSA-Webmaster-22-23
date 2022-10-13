import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";

export default function Gun() {
  const gunModel = useGLTF("/models/Gun.glb");
  const gunRef = useRef();
  useFrame(() => (gunRef.current.rotation.y += 0.0035));
  useFrame(() => (gunRef.current.rotation.x += 0.005));
  gunModel.scene.scale.set(0.5, 0.5, 0.5);
  return (
    <Suspense fallback={null}>
      <primitive object={gunModel.scene} ref={gunRef} />
    </Suspense>
  );
}
