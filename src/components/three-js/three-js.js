import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React, { Suspense } from "react";
import './three-js.scss'

const Model = () => {
    console.time('Model Load');
    //add file directly in dist
    const gltf = useLoader(GLTFLoader, "Poimandres.gltf");
    console.log(gltf)
    console.timeEnd('Model Load');
    return (
      <>
        <primitive object={gltf.scene} />
      </>
    );
  };

export default function ThreeJS() {
    return (
        <div className="canvas__container">
            <div className="canvas__detector-container">
                <Canvas style={{ background: "lightblue" }}>
                    <Suspense fallback={null}>
                        <OrbitControls/>
                        <Model/>
                    </Suspense>
                </Canvas>
            </div>
        </div>
    )
}