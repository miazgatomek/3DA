import React, { useState } from 'react';
import './detector.scss'
import {Canvas} from "react-three-fiber";
import {OrbitControls} from "@react-three/drei";
import * as THREE from "three";
import CombinedDonuts from "./components/combined-donuts";
import TrackEvent from "./components/track-event";


const Detector = () => {
    const [eventIndex, setEventIndex] = useState(1);
    const _setEventIndex = (index) => {
        if (index >= 1 && index <= 32) {
            setEventIndex(index);
        }
    };

    return (
        <React.Fragment>
            <div className="detector__container">
                <div className="detector__buttons-row">
                    <button
                        className="detector__button detector__button__previous"
                        onClick={() => _setEventIndex(eventIndex - 1)}
                    >
                        Previous Event
                    </button>
                    <span className="detector__event-index">{eventIndex} / 32</span>
                    <button
                        className="detector__button detector__button__next"
                        onClick={() => _setEventIndex(eventIndex + 1)}
                    >
                        Next Event
                    </button>
                </div>
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
