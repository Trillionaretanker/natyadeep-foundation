import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { Suspense, useRef } from "react"

function NatarajaModel() {
  const ref = useRef()
  const { scene } = useGLTF("/models/nataraja.glb")
  const { mouse } = useThree()

  useFrame(() => {
    if (!ref.current) return

    // BASE SLOW REVOLUTION (auto)
    ref.current.rotation.y += 0.0008

    // CURSOR INFLUENCE (added on top)
    ref.current.rotation.y += mouse.x * 0.002
    ref.current.rotation.x = -mouse.y * 0.15
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={2.2}
      position={[0, -1.5, 0]} // fixed center
    />
  )
}

function NatarajaCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 7], fov: 45 }}
      className="absolute inset-0"
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 6, 5]} intensity={0.8} />
      <spotLight
        position={[-5, 10, 5]}
        angle={0.35}
        penumbra={1}
        intensity={0.6}
      />

      <Suspense fallback={null}>
        <NatarajaModel />
      </Suspense>
    </Canvas>
  )
}

export default NatarajaCanvas
