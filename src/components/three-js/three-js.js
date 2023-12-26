import { Canvas } from "react-three-fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React, { Suspense } from "react";
import './three-js.scss'

const Model = () => {
    const gltf = useLoader(GLTFLoader, "Alice-CERN/models/Poimandres.gltf");
    console.log(gltf)
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
                <Canvas>
                    <Suspense fallback={null}>
                        <OrbitControls/>
                        <Environment preset="sunset" background />
                        <Model/>
                    </Suspense>
                </Canvas>
            </div>
        </div>
    )
}