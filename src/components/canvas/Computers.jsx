/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import {Suspense, useEffect, useState} from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import CanvasLoader from '../Loader'
// import { WebGLRenderer } from 'three'
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import {motion} from 'framer-motion'


// eslint-disable-next-line react/prop-types
const Model = ({ url, isMobile }) => {
	
	console.log("loading");
  const gltf = useLoader(GLTFLoader, url);
	console.log("loaded");
  return (
    <mesh>
      <hemisphereLight intensity={1.90} groundColor="black" />
      <pointLight intensity={2} />
      <spotLight
        position={[-20,50,10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive object={gltf.scene} scale={isMobile ? 0.8 : 1.5} position={isMobile ? [0,-3,-2.2] : [0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]} />
    </mesh>
  );
};
// eslint-disable-next-line react/prop-types
const Scene = ({ modelUrl, isMobile }) => {
  return (
    <>
      {/* <Suspense fallback={<CanvasLoader />}></Suspense> */}
      {modelUrl && <Model url={modelUrl} isMobile={isMobile} />}
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI /2}
        minPolarAngle={Math.PI /2}
      ></OrbitControls>
    </>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [modelUrl, setModelUrl] = useState(null);

  const handleLoadModel = () => {
		setIsClicked(true)
    setModelUrl("./scifi/scene.gltf");
  };
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
    console.log("ismobile");
    return(
      <div></div>
    )
  } else if (!isMobile && isClicked){
    console.log("click");
    return <Canvas
      frameloop='demand'
      shadows
      camera={{position: [20, 3,5], fov: 25}}
      gl={{preserveDrawingBuffer:true, alpha: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <Scene modelUrl={modelUrl} isMobile={isMobile}></Scene>
      </Suspense>
    </Canvas>
    } else if(!isMobile && !isClicked) {
      console.log("!click");
      return(
        <div className="flex justify-center absolute top-[20rem] left-[100px]">
        <motion.div className='w-[180px] green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div onClick={handleLoadModel} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[28px] flex justify-evenly items-center flex-col' style={{cursor: "pointer"}}>
            <h3 className='text-white text-[14px] font-bold text-center'>Load 3D Model</h3>
          </div>
        </motion.div>
      </div>
      )
  }
}

export default ComputersCanvas