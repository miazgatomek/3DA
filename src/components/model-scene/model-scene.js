import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React, { Suspense } from "react";
import './model-scene.scss'

const Model = () => {
    console.time('Model Load');
    const gltf = useLoader(GLTFLoader, "models/Poimandres.gltf");
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