"use client"

import { useRef } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls, Sphere } from "@react-three/drei"
import * as THREE from "three"

function Earth() {
  const earthRef = useRef<THREE.Mesh>(null)
  const texture = useLoader(THREE.TextureLoader, "https://media.istockphoto.com/id/182058785/photo/world-topographic-map.jpg?s=612x612&w=0&k=20&c=eWrcGjNB9o-KrzW4TC2yxUII7k5E26QIqlN3JEJu1e4=")



  useFrame((state) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
    }
  })

  return (
    <Sphere ref={earthRef} args={[1, 64, 64]}>
      <meshStandardMaterial map={texture} />
    </Sphere>
  )
}

export default function Canvas3D() {
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} />
      <Earth />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  )
}

