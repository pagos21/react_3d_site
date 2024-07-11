/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
import {useEffect, useState, Suspense} from 'react'


// eslint-disable-next-line no-unused-vars
const Earth = () => {
  const earth = useGLTF('./earth2/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={1.90} groundColor="black" />
      <pointLight intensity={2} />
      <directionalLight position={[-40, 50, 100]}></directionalLight>
      <primitive object={earth.scene} scale={1.8} position-y={0} position-x={0} />
    </mesh>
  )
}

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(()=> {
    const mq = window.matchMedia('(max-width: 920px)');
    setIsMobile(mq.matches);
    const handleMqChange = (event)=> {
      setIsMobile(event.matches);
    }
    mq.addEventListener('change', handleMqChange)
    return () => {
      mq.removeEventListener('change', handleMqChange)
    }
  }, [])
  if (isMobile) {
    return (
      <div></div>
    )
  } else {
    return (
      <Canvas 
        shadows
        gl={{preserveDrawingBuffer: false}}
        camera={{
          fov:45,
          near: 0.1,
          far: 200,
          position: [-4,3,6]
      }}>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls autoRotate enableZoom={false} maxPolarAngle={1} minPolarAngle={1} />
          <Earth />
        </Suspense>
        <Preload all />
      </Canvas>
    )
  }
}

export default EarthCanvas