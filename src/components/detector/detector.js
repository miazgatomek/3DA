import React, { useState } from 'react';
import './detector.scss'
import {Canvas} from "react-three-fiber";
import {OrbitControls} from "@react-three/drei";
import * as THREE from "three";
import CombinedDonuts from "./components/combined-donuts";
import TrackEvent from "./components/track-event";

const NUM_OF_EVENTS = 12;

const Detector = () => {
    const [eventIndex, setEventIndex] = useState(1);
    const _setEventIndex = (index) => {
        if (index >= 1 && index <= NUM_OF_EVENTS) {
            setEventIndex(index);
        }
    };

    return (
        <React.Fragment>
            <div className="detector__container">
                <div className="detector__buttons-row">
                    <button
                        className="detector__button"
                        onClick={() => _setEventIndex(eventIndex - 1)}
                    >
                        Previous Event
                    </button>

                    <button
                        className="detector__button"
                        onClick={() => _setEventIndex(eventIndex + 1)}
                    >
                        Next Event
                    </button>

                    <div className="detector__event-index">
                        <span>{eventIndex} / {NUM_OF_EVENTS}</span>
                    </div>
                </div>

                <Canvas camera={{position: [10, 6, 10]}}>
                    <OrbitControls/>
                    <ambientLight intensity={0.1}/>
                    <spotLight position={[100, 100, 100]} angle={0.15} penumbra={1}/>
                    <primitive object={new THREE.AxesHelper(1000)} />
                    <CombinedDonuts/>
                    <TrackEvent eventIndex={eventIndex}/>
                </Canvas>
            </div>
        </React.Fragment>
    );
}

export default Detector;
