"use client";

import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  ContactShadows,
  Html,
  useProgress,
} from "@react-three/drei";
import * as THREE from "three";

// Loading component that shows progress
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center p-4">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
        <div className="text-sm text-gray-600">
          Loading 3D model... {Math.round(progress)}%
        </div>
      </div>
    </Html>
  );
}

// Error boundary component for failed loads
function ErrorFallback() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center p-4 text-center">
        <div className="text-red-500 mb-2">⚠️</div>
        <div className="text-sm text-gray-600">
          Failed to load 3D model
        </div>
      </div>
    </Html>
  );
}

interface ModelProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
  autoRotate?: boolean;
}

function Model({ 
  modelPath, 
  scale = 1, 
  position = [0, -1, 0], 
  autoRotate = true 
}: ModelProps) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [error, setError] = useState(false);

  // Load model with error handling
  let gltf;
  try {
    gltf = useGLTF(modelPath);
  } catch (err) {
    console.error("Failed to load model:", err);
    return <ErrorFallback />;
  }

  useFrame((state) => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  if (error) {
    return <ErrorFallback />;
  }

  return (
    <primitive
      object={gltf.scene}
      ref={meshRef}
      scale={hovered ? scale * 1.05 : scale}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  );
}

interface SculptureViewerProps {
  modelPath?: string;
  className?: string;
  showControls?: boolean;
  autoRotate?: boolean;
  scale?: number;
  position?: [number, number, number];
}

export default function SculptureViewer({
  modelPath = "/kip.glb",
  className = "",
  showControls = true,
  autoRotate = true,
  scale = 1,
  position = [0, -1, 0],
}: SculptureViewerProps) {
  return (
    <div className={`w-full h-full min-h-[400px] ${className}`}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]} // Responsive pixel ratio for performance
      >
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
        
        <Suspense fallback={<Loader />}>
          <Model 
            modelPath={modelPath}
            scale={scale}
            position={position}
            autoRotate={autoRotate}
          />
        </Suspense>
        
        <ContactShadows
          position={[0, -1.5, 0]}
          opacity={0.4}
          scale={5}
          blur={2.5}
          far={4}
        />
        <Environment preset="studio" />
        
        {showControls && (
          <OrbitControls
            enablePan={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.5}
            minDistance={3}
            maxDistance={7}
          />
        )}
      </Canvas>
    </div>
  );
}

// Preload function for better performance
export function preloadModel(modelPath: string) {
  useGLTF.preload(modelPath);
}

// ✅ Preload default model
preloadModel("/kip.glb");
