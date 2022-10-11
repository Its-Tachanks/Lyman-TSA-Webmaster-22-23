import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";

export default function Astronaut() {
  const astronautModel = useGLTF("/models/Astronaut.glb");
  const astronautRef = useRef();
  var thing = 0;
  useFrame(
    () => (astronautRef.current.rotation.z += Math.sin((thing += 0.01)))
  );
  astronautModel.scene.scale.set(0.5, 0.5, 0.5);
  return (
    <Suspense fallback={null}>
      <primitive object={astronautModel.scene} ref={astronautRef} />
    </Suspense>
  );
}
