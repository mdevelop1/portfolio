import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Float, OrbitControls, Stars } from '@react-three/drei'
import dynamic from 'next/dynamic'
import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

export type HeavyVariant = 'knot' | 'sphere' | 'twisted' | 'capsule'

function CameraRig({ baseZ = 8.2, fov = 55, parallax = false, intensity = 0.4 }: { baseZ?: number; fov?: number; parallax?: boolean; intensity?: number }) {
  const { camera, size, pointer } = useThree()
  useEffect(() => {
    const w = size.width
    const dist = w < 640 ? baseZ + 2.0 : w < 1024 ? baseZ + 1.0 : baseZ
    camera.position.set(0, 0, dist)
    ;(camera as THREE.PerspectiveCamera).fov = fov
    camera.updateProjectionMatrix()
  }, [camera, size.width, size.height, baseZ, fov])

  useFrame(() => {
    if (!parallax) return
    // pointer ranges from -1..1 on both axes
    const targetX = pointer.x * intensity
    const targetY = pointer.y * intensity * -1
    camera.position.x += (targetX - camera.position.x) * 0.05
    camera.position.y += (targetY - camera.position.y) * 0.05
  })
  return null
}

function Knot() {
  const mat = useMemo(() => new THREE.MeshPhysicalMaterial({ color: '#0a2342', metalness: 0.2, roughness: 0.2, transmission: 0.6, thickness: 0.7, clearcoat: 1, clearcoatRoughness: 0.2 }), [])
  return (
    <Float speed={1} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh castShadow material={mat}>
        <torusKnotGeometry args={[1.1, 0.35, 220, 32]} />
      </mesh>
    </Float>
  )
}

function SphereGlass() {
  const mat = useMemo(() => new THREE.MeshPhysicalMaterial({ color: '#0a2342', metalness: 0.2, roughness: 0.05, transmission: 0.75, thickness: 0.8, clearcoat: 1, clearcoatRoughness: 0.15 }), [])
  return (
    <Float speed={0.9} rotationIntensity={0.4} floatIntensity={0.9}>
      <mesh castShadow material={mat}>
        <icosahedronGeometry args={[1.4, 2]} />
      </mesh>
    </Float>
  )
}

function TwistedTorus() {
  const mat = useMemo(() => new THREE.MeshStandardMaterial({ color: '#0a2342', metalness: 0.6, roughness: 0.35 }), [])
  const group = useRef<THREE.Group>(null)
  useFrame((_, dt) => { if (group.current) group.current.rotation.y += dt * 0.2 })
  return (
    <group ref={group}>
      <mesh castShadow material={mat} rotation={[Math.PI/4, 0, 0]}>
        <torusGeometry args={[1.6, 0.22, 48, 320]} />
      </mesh>
    </group>
  )
}

function Capsule() {
  const mat = useMemo(() => new THREE.MeshPhysicalMaterial({ color: '#0a2342', metalness: 0.5, roughness: 0.2, transmission: 0.5, thickness: 0.6 }), [])
  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
      <mesh castShadow material={mat}>
        <capsuleGeometry args={[0.8, 1.4, 16, 32]} />
      </mesh>
    </Float>
  )
}

function Frame() {
  const geo = useMemo(() => new THREE.IcosahedronGeometry(3.6, 2), [])
  const mat = useMemo(() => new THREE.MeshBasicMaterial({ color: '#0a2342', wireframe: true, opacity: 0.14, transparent: true }), [])
  return <mesh geometry={geo} material={mat} />
}

function Rings() {
  const group = useRef<THREE.Group>(null)
  useFrame((_, dt) => { if (group.current) group.current.rotation.z += dt * 0.08 })
  const ringMat = useMemo(() => new THREE.MeshStandardMaterial({ color: '#0a2342', metalness: 0.5, roughness: 0.6, opacity: 0.25, transparent: true }), [])
  return (
    <group ref={group}>
      <mesh material={ringMat}><torusGeometry args={[2.4, 0.02, 16, 200]} /></mesh>
      <mesh rotation={[0, 0.4, 0]} material={ringMat}><torusGeometry args={[2.8, 0.02, 16, 200]} /></mesh>
    </group>
  )
}

function Variant({ v }: { v: HeavyVariant }) {
  if (v === 'knot') return <Knot />
  if (v === 'sphere') return <SphereGlass />
  if (v === 'twisted') return <TwistedTorus />
  return <Capsule />
}

export default function HeavySectionScene({ variant = 'knot', baseZ = 8.2, stars = true, className, offsetX = 0, parallax = false, intensity = 0.4, placeholderSrc, forceImage = false, imageSrc }: { variant?: HeavyVariant; baseZ?: number; stars?: boolean; className?: string; offsetX?: number; parallax?: boolean; intensity?: number; placeholderSrc?: string; forceImage?: boolean; imageSrc?: string }) {
  const [enabled, setEnabled] = useState(true)
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const check = () => setEnabled(window.innerWidth >= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  if (!enabled && !forceImage) return null

  function FirstFrame({ onReady }: { onReady: () => void }) {
    const called = useRef(false)
    useFrame(() => {
      if (!called.current) {
        called.current = true
        // signal after first rendered frame
        onReady()
      }
    })
    return null
  }

  // IMAGE/GIF MODE
  if (forceImage && imageSrc) {
    return (
      <div className={`absolute inset-0 -z-10 pointer-events-none ${className ?? ''}`}>
        <img src={imageSrc} alt="background" className="absolute inset-0 w-full h-full object-cover" style={{ pointerEvents: 'none' }} />
      </div>
    )
  }

  return (
    <div className={`absolute inset-0 -z-10 pointer-events-none ${className ?? ''}`}>
      {/* Placeholder overlay (e.g., GIF) shown until first frame renders */}
      {placeholderSrc && (
        <img
          src={placeholderSrc}
          alt="loading"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${ready ? 'opacity-0' : 'opacity-100'}`}
          style={{ pointerEvents: 'none' }}
        />
      )}
      <Canvas camera={{ position: [0, 0, baseZ], fov: 55 }} shadows onCreated={() => { /* ensure mount */ }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[4, 6, 6]} intensity={0.8} castShadow />
        <directionalLight position={[-6, -3, -4]} intensity={0.3} />
        <group position={[offsetX, 0, 0]}>
          <Frame />
          <Variant v={variant} />
          <Rings />
        </group>
        {stars && <Stars radius={50} depth={20} count={1200} factor={2} saturation={0} fade speed={0.6} />}
        <Environment preset="studio" />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        <CameraRig baseZ={baseZ} fov={55} parallax={parallax} intensity={intensity} />
        <FirstFrame onReady={() => setReady(true)} />
      </Canvas>
    </div>
  )
}
