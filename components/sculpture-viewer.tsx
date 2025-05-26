"use client";

import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";

function Model() {
  const gltf = useGLTF("/kip.glb");
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <primitive
      object={gltf.scene}
      ref={meshRef}
      scale={1}
      position={[0, -1, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  );
}

// ✅ Preload model
useGLTF.preload("/kip.glb");

export default function SculptureViewer() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <ContactShadows
        position={[0, -1.5, 0]}
        opacity={0.4}
        scale={5}
        blur={2.5}
        far={4}
      />
      <Environment preset="studio" />
      <OrbitControls
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
        minDistance={3}
        maxDistance={7}
      />
    </Canvas>
  );
}
