import React from 'react';
import './detector.scss'
import {Canvas} from "react-three-fiber";
import {OrbitControls} from "@react-three/drei";
import * as THREE from "three";
import CombinedDonuts from "./components/combined-donuts";
import TrackEvent from "./components/track-event";


const Detector = () => {
    return (
        <React.Fragment>
            <div className="detector__container">
                <Canvas camera={{position: [10, 6, 10]}}>
                    <OrbitControls/>
                    <ambientLight intensity={0.1}/>
                    <spotLight position={[100, 100, 100]} angle={0.15} penumbra={1}/>
                    <primitive object={new THREE.AxesHelper(1000)} />
                    <CombinedDonuts/>
                    <TrackEvent/>
                </Canvas>
            </div>
        </React.Fragment>
    );
}

export default Detector;
