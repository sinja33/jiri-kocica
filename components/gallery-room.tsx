"use client"

import { useEffect, useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { PointerLockControls, useGLTF, Text, Html } from "@react-three/drei"
import * as THREE from "three"

// First-person movement controls with WASD
function FirstPersonMovement() {
  const { camera } = useThree()
  const moveSpeed = 0.15
  const keys = useRef({
    w: false,
    a: false,
    s: false,
    d: false,
  })
  const direction = useRef(new THREE.Vector3())
  const frontVector = useRef(new THREE.Vector3())
  const sideVector = useRef(new THREE.Vector3())
  const controlsRef = useRef(null)

  // Room boundaries
  const roomSize = 20
  const halfSize = roomSize / 2
  const minX = -halfSize + 1
  const maxX = halfSize - 1
  const minZ = -halfSize + 1
  const maxZ = halfSize - 1

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === "w") keys.current.w = true
      if (e.key.toLowerCase() === "a") keys.current.a = true
      if (e.key.toLowerCase() === "s") keys.current.s = true
      if (e.key.toLowerCase() === "d") keys.current.d = true
    }

    const handleKeyUp = (e) => {
      if (e.key.toLowerCase() === "w") keys.current.w = false
      if (e.key.toLowerCase() === "a") keys.current.a = false
      if (e.key.toLowerCase() === "s") keys.current.s = false
      if (e.key.toLowerCase() === "d") keys.current.d = false
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keyup", handleKeyUp)
    }
  }, [])

  useFrame(() => {
    if (!controlsRef.current?.isLocked) return

    frontVector.current.set(0, 0, Number(keys.current.s) - Number(keys.current.w))
    sideVector.current.set(Number(keys.current.a) - Number(keys.current.d), 0, 0)
    direction.current
      .subVectors(frontVector.current, sideVector.current)
      .normalize()
      .multiplyScalar(moveSpeed)
      .applyEuler(camera.rotation)

    // Calculate new position with collision detection
    const newX = camera.position.x + direction.current.x
    const newZ = camera.position.z + direction.current.z

    // Apply movement with boundary checks
    if (newX > minX && newX < maxX) camera.position.x = newX
    if (newZ > minZ && newZ < maxZ) camera.position.z = newZ
  })

  return <PointerLockControls ref={controlsRef} />
}

// Sculpture display with info
function SculptureDisplay({ position, rotation = [0, 0, 0], title, description, scale = 1.5 }) {
  const gltf = useGLTF("/landing-kip.glb")
  const spotLightRef = useRef()

  // Uncomment to see light helpers during development
  // useHelper(spotLightRef, SpotLightHelper, "yellow")

  return (
    <group position={position} rotation={rotation}>
      {/* Pedestal */}
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[1.5, 2, 1.5]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>

      {/* Sculpture */}
      <primitive object={gltf.scene.clone()} position={[0, 0.5, 0]} scale={scale} />

      {/* Spotlight */}
      <spotLight
        ref={spotLightRef}
        position={[0, 5, 0]}
        angle={0.3}
        penumbra={0.5}
        intensity={3}
        castShadow
        color="#ffffff"
      />

      {/* Info text */}
      <group position={[0, -2.2, 0]} rotation={[0, Math.PI / 2, 0]}>
        <Text
          position={[0, 0.6, 0.8]}
          fontSize={0.2}
          color="black"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter_Bold.json"
        >
          {title}
        </Text>
        <Text
          position={[0, 0.3, 0.8]}
          fontSize={0.12}
          color="#444"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.5}
          font="/fonts/Inter_Regular.json"
        >
          {description}
        </Text>
      </group>
    </group>
  )
}

// Gallery room environment
function GalleryEnvironment() {
  const roomSize = 20
  const wallHeight = 5
  const directionalLightRef = useRef()

  // Uncomment to see light helpers during development
  // useHelper(directionalLightRef, DirectionalLightHelper, 1, "red")

  return (
    <>
      {/* Room */}
      <group>
        {/* Floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[roomSize, roomSize]} />
          <meshStandardMaterial color="#e0e0e0" />
        </mesh>

        {/* Ceiling */}
        <mesh position={[0, wallHeight, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[roomSize, roomSize]} />
          <meshStandardMaterial color="#f5f5f5" />
        </mesh>

        {/* Walls */}
        {/* Back wall */}
        <mesh position={[0, wallHeight / 2, -roomSize / 2]} receiveShadow>
          <planeGeometry args={[roomSize, wallHeight]} />
          <meshStandardMaterial color="#f0f0f0" />
        </mesh>

        {/* Front wall */}
        <mesh position={[0, wallHeight / 2, roomSize / 2]} rotation={[0, Math.PI, 0]} receiveShadow>
          <planeGeometry args={[roomSize, wallHeight]} />
          <meshStandardMaterial color="#f0f0f0" />
        </mesh>

        {/* Left wall */}
        <mesh position={[-roomSize / 2, wallHeight / 2, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
          <planeGeometry args={[roomSize, wallHeight]} />
          <meshStandardMaterial color="#e8e8e8" />
        </mesh>

        {/* Right wall */}
        <mesh position={[roomSize / 2, wallHeight / 2, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
          <planeGeometry args={[roomSize, wallHeight]} />
          <meshStandardMaterial color="#e8e8e8" />
        </mesh>
      </group>

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight ref={directionalLightRef} position={[5, 8, 5]} intensity={0.8} castShadow />

      {/* Sculptures */}
      <SculptureDisplay
        position={[-6, 0, -6]}
        rotation={[0, Math.PI / 4, 0]}
        title="Organic Formation I"
        description="Bronze and wood, 2023"
      />

      <SculptureDisplay
        position={[6, 0, -6]}
        rotation={[0, -Math.PI / 4, 0]}
        title="Spatial Dialogue II"
        description="Marble and steel, 2022"
        scale={1.8}
      />

      <SculptureDisplay
        position={[0, 0, 0]}
        rotation={[0, Math.PI, 0]}
        title="Material Tension III"
        description="Ceramic and brass, 2021"
        scale={2}
      />

      <SculptureDisplay
        position={[-6, 0, 6]}
        rotation={[0, Math.PI / 2 + Math.PI / 4, 0]}
        title="Conceptual Form IV"
        description="Aluminum and glass, 2023"
        scale={1.3}
      />

      <SculptureDisplay
        position={[6, 0, 6]}
        rotation={[0, -Math.PI / 2 - Math.PI / 4, 0]}
        title="Abstract Structure V"
        description="Stone and metal, 2022"
        scale={1.7}
      />

      {/* Gallery title */}
      <Text
        position={[0, 4, -9.5]}
        fontSize={0.8}
        color="black"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter_Bold.json"
      >
        JIRI KOCICA GALLERY
      </Text>

      {/* Instructions for first-time visitors */}
      <Html position={[0, 1.7, -9]} center>
        <div className="bg-white p-3 rounded-lg shadow-lg text-center" style={{ width: "300px" }}>
          <p className="font-bold">Welcome to the Virtual Gallery</p>
          <p className="text-sm mt-1">Click anywhere to begin exploring</p>
        </div>
      </Html>
    </>
  )
}

export default function GalleryRoom() {
  return (
    <Canvas shadows camera={{ position: [0, 1.7, 8], fov: 70 }}>
      <GalleryEnvironment />
      <FirstPersonMovement />
    </Canvas>
  )
}
