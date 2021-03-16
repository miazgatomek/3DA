import React from 'react';
import './detector.scss'
import {Canvas} from "react-three-fiber";
import {OrbitControls} from "@react-three/drei";
import * as THREE from "three";

const Box = () => {
    return (
        <mesh>
            <boxBufferGeometry attach="geometry"/>
            <meshLambertMaterial attach="material" color="red"/>
        </mesh>
    );
}


const Detector = () => {
    return (
        <React.Fragment>
            <div className="detector__container">
                <Canvas>
                    <OrbitControls/>
                    <ambientLight intensity={0.1}/>
                    <spotLight position={[100, 100, 100]} angle={0.15} penumbra={1}/>
                    <primitive object={new THREE.AxesHelper(10)} />
                    <Box/>
                </Canvas>
            </div>
        </React.Fragment>
    );
}

export default Detector;
