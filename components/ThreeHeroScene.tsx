import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, OrbitControls, Environment, Stars } from '@react-three/drei'
import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'

function TorusKnot() {
  const mat = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: '#0a2342',
    metalness: 0.2,
    roughness: 0.2,
    transmission: 0.6,
    thickness: 0.6,
    clearcoat: 1,
    clearcoatRoughness: 0.2,
  }), [])

  return (
    <Float speed={1} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh castShadow position={[0, 0, 0]} material={mat}>
        <torusKnotGeometry args={[1.1, 0.35, 220, 32]} />
      </mesh>
    </Float>
  )
}

function WireframeDisc() {
  const geo = useMemo(() => new THREE.IcosahedronGeometry(3.4, 2), [])
  const mat = useMemo(() => new THREE.MeshBasicMaterial({ color: '#0a2342', wireframe: true, opacity: 0.15, transparent: true }), [])
  return <mesh geometry={geo} material={mat} />
}

function Rings() {
  const group = useRef<THREE.Group>(null)
  useFrame((_, dt) => {
    if (!group.current) return
    group.current.rotation.z += dt * 0.1
  })
  const ringMat = useMemo(() => new THREE.MeshStandardMaterial({ color: '#0a2342', metalness: 0.5, roughness: 0.6, opacity: 0.25, transparent: true }), [])
  return (
    <group ref={group}>
      <mesh material={ringMat}>
        <torusGeometry args={[2.2, 0.02, 16, 200]} />
      </mesh>
      <mesh rotation={[0, 0.4, 0]} material={ringMat}>
        <torusGeometry args={[2.6, 0.02, 16, 200]} />
      </mesh>
    </group>
  )
}

function CameraRig() {
  const { camera, size } = useThree()
  useEffect(() => {
    const w = size.width
    const dist = w < 640 ? 10.5 : w < 1024 ? 9.2 : 8.2
    camera.position.set(0, 0, dist)
    ;(camera as THREE.PerspectiveCamera).fov = 55
    camera.updateProjectionMatrix()
  }, [camera, size.width, size.height])
  return null
}

export default function ThreeHeroScene() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8.2], fov: 55 }} shadows>
        {/* Ambient / key lights */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[4, 6, 6]} intensity={0.8} castShadow />
        <directionalLight position={[-6, -3, -4]} intensity={0.3} />

        {/* Elements */}
        <WireframeDisc />
        <TorusKnot />
        <Rings />
        <Stars radius={50} depth={20} count={1200} factor={2} saturation={0} fade speed={0.6} />
        <Environment preset="studio" />

        {/* Disable interactions, keep camera fixed */}
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        <CameraRig />
      </Canvas>
    </div>
  )
}
