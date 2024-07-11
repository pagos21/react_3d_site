/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
import { useState, useEffect, Suspense} from "react";
import CanvasLoader from '../Loader'
// import { WebGLRenderer } from 'three'
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import {fadeIn} from '../../utils/motion'
import {motion} from 'framer-motion'
// ModelLoader.js

// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line react/prop-types
const Model = ({ url }) => {
  const gltf = useLoader(GLTFLoader, url);
  return (
    <mesh>
      <hemisphereLight intensity={1.9} groundColor="black" />
      <pointLight intensity={2} />
      <directionalLight position={[-40, 50, 100]}></directionalLight>
      <primitive
        object={gltf.scene}
        scale={1.8}
        position-y={0}
        position-x={0}
      />
      ;
    </mesh>
  );
};

// eslint-disable-next-line react/prop-types
const Scene = ({ modelUrl }) => {
  return (
    <>
      <Suspense fallback={<CanvasLoader/>}>
				{modelUrl && <Model url={modelUrl} />}
				<OrbitControls
					autoRotate
					enableZoom={false}
					maxPolarAngle={1}
					minPolarAngle={1}
				/>
			</Suspense>
    </>
  );
};

const EarthCanvasLazy = () => {
  const [modelUrl, setModelUrl] = useState(null);
	const [isMobile, setIsMobile] = useState(false);
	// const [isLoading, setIsLoading] = useState(false);
	const [isClicked, setIsClicked] = useState(false);
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

  const handleLoadModel = () => {
		// setIsLoading(true)
		setIsClicked(true)
    setModelUrl("./earth2/scene.gltf");
  };
	if (isMobile) {
		return(<div></div>)
	}

	if (!isMobile && isClicked) {
		return(
			<div className={"w-full h-[750px]"}>
				<Canvas
        shadows
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Scene modelUrl={modelUrl} />
      </Canvas>
			</div>
		)
	} else {
		return(
			<div className="flex justify-center">
				<motion.div className='w-[180px] green-pink-gradient p-[1px] rounded-[20px] shadow-card' variants={fadeIn("right", "spring", 0.5, 0.75)}>
					<div onClick={handleLoadModel} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[28px] flex justify-evenly items-center flex-col' style={{cursor: "pointer"}}>
						<h3 className='text-white text-[14px] font-bold text-center'>Load 3D Model</h3>
					</div>
        </motion.div>
			</div>
		)
	}
};

export default EarthCanvasLazy;
