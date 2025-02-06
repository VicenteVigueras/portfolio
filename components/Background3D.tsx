import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere } from "@react-three/drei"

export default function Background3D() {
  const sphereRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += delta * 0.1
      sphereRef.current.rotation.y += delta * 0.15
    }
  })

  return (
    <Sphere ref={sphereRef} args={[1, 64, 64]} scale={2.5}>
      <meshStandardMaterial color="#e1d5c9" roughness={0.7} metalness={0.1} wireframe />
    </Sphere>
  )
}

