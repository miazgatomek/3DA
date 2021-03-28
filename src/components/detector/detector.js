import React from 'react';
import './detector.scss'
import {Canvas} from "react-three-fiber";
import {OrbitControls} from "@react-three/drei";
import * as THREE from "three";
import {Donut} from "./components/donut";


export const INNER_DONUT_RADIUS = 2;
export const INNER_BOX_WIDTH = 0.55;
export const INNER_BOX_LENGTH = 8;

export const OUTER_DONUT_RADIUS = 5;


const Detector = () => {
    return (
        <React.Fragment>
            <div className="detector__container">
                <Canvas>
                    <OrbitControls/>
                    <ambientLight intensity={0.1}/>
                    <spotLight position={[100, 100, 100]} angle={0.15} penumbra={1}/>
                    <primitive object={new THREE.AxesHelper(1000)} />
                    <Donut radius={INNER_DONUT_RADIUS}/>
                </Canvas>
            </div>
        </React.Fragment>
    );
}

export default Detector;
