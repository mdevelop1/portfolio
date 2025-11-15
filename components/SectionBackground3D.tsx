import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment } from '@react-three/drei'
import dynamic from 'next/dynamic'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

// Small lightweight 3D background for sections. Different variants render different shapes.
export type SectionBGVariant = 'rings' | 'sphere' | 'boxes'

function Rings() {
  const group = useRef<THREE.Group>(null)
  useFrame((_, dt) => {
    if (!group.current) return
    group.current.rotation.z += dt * 0.05
  })
  const mat = useMemo(() => new THREE.MeshStandardMaterial({ color: '#0a2342', metalness: 0.4, roughness: 0.7, opacity: 0.18, transparent: true }), [])
  return (
    <group ref={group}>
      <mesh material={mat}><torusGeometry args={[2.2, 0.02, 16, 140]} /></mesh>
      <mesh rotation={[0.4, 0.2, 0]} material={mat}><torusGeometry args={[1.6, 0.02, 16, 140]} /></mesh>
    </group>
  )
}

function SphereGlass() {
  const mat = useMemo(() => new THREE.MeshPhysicalMaterial({ color: '#0a2342', metalness: 0.2, roughness: 0.05, transmission: 0.7, thickness: 0.6, clearcoat: 1, clearcoatRoughness: 0.2 }), [])
  return (
    <Float speed={1} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh position={[0, 0, 0]} material={mat}>
        <icosahedronGeometry args={[1.2, 1]} />
      </mesh>
    </Float>
  )
}

function Boxes() {
  const mat = useMemo(() => new THREE.MeshStandardMaterial({ color: '#0a2342', metalness: 0.5, roughness: 0.6, opacity: 0.2, transparent: true }), [])
  return (
    <group>
      <mesh position={[-0.8, 0.3, 0]} material={mat}><boxGeometry args={[0.6, 0.6, 0.6]} /></mesh>
      <mesh position={[0.9, -0.4, 0]} rotation={[0.2, 0.4, 0]} material={mat}><boxGeometry args={[0.4, 0.7, 0.5]} /></mesh>
      <mesh position={[0, 0.9, -0.2]} rotation={[0.1, -0.2, 0.3]} material={mat}><boxGeometry args={[0.3, 0.3, 0.9]} /></mesh>
    </group>
  )
}

function Variant({ variant }: { variant: SectionBGVariant }) {
  if (variant === 'rings') return <Rings />
  if (variant === 'sphere') return <SphereGlass />
  return <Boxes />
}

export default function SectionBackground3D({ variant = 'rings', className, cameraZ = 6 }: { variant?: SectionBGVariant; className?: string; cameraZ?: number }) {
  return (
    <div className={`absolute inset-0 -z-10 pointer-events-none ${className ?? ''}`}>
      <Canvas camera={{ position: [0, 0, cameraZ], fov: 50 }}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[3, 4, 6]} intensity={0.6} />
        <Environment preset="studio" />
        <Variant variant={variant} />
      </Canvas>
    </div>
  )
}
