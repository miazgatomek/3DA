import { OrbitControls } from "@react-three/drei";
import Detector from "components/three-js/components/detector/detector";
import LineEvent from "components/three-js/components/line-event/line-event";
import TrackEvent from "components/three-js/components/track-event/track-event";
import React, { useState } from "react";
import { Canvas } from "react-three-fiber";
import './three-js.scss'

const NUM_OF_EVENTS = 12;

export default function ThreeJS() {
    const [eventIndex, setEventIndex] = useState(1);
    const _setEventIndex = (index) => {
        if (index >= 1 && index <= NUM_OF_EVENTS) {
            setEventIndex(index);
        } else {
            setEventIndex(index === NUM_OF_EVENTS + 1 ? 1 : NUM_OF_EVENTS);
        }
    };

    const [showTracks, setShowTracks] = useState(true);
    const _setShowTracks = () => {
        setShowTracks(!showTracks);
    }

    // const [currentScreen, setCurrentScreen] = useState('detector');

    return (
        <div className="canvas__container">
            <div className="canvas__buttons-row">
                <div className="canvas__button-group">
                    <button
                        className="canvas__button"
                        onClick={() => _setEventIndex(eventIndex - 1)}
                    >
                        Previous Event
                    </button>

                    <button
                        className="canvas__button"
                        onClick={() => _setEventIndex(eventIndex + 1)}
                    >
                        Next Event
                    </button>

                    <div className="canvas__event-index">
                        <span>{eventIndex} / {NUM_OF_EVENTS}</span>
                    </div>
                </div>

                <div className="canvas__button-group">
                    <div className="canvas__event-index">
                        <span>{showTracks ? 'Tracks' : 'Lines'}</span>
                    </div>

                    <button
                        className="canvas__button"
                        onClick={() => _setShowTracks()}
                    >
                        Switch between lines/tracks
                    </button>
                </div>
            </div>
            <div className="canvas__detector-container">
                <Canvas camera={{position: [10, 6, 10]}}>
                    <OrbitControls/>
                    <ambientLight intensity={0.1}/>
                    <spotLight position={[100, 100, 100]} angle={0.15} penumbra={1}/>
                    {/*<primitive object={new THREE.AxesHelper(1000)} />*/}
                    {showTracks && <TrackEvent eventIndex={eventIndex}/>}
                    {!showTracks && <LineEvent eventIndex={eventIndex}/>}
                    <Detector/>
                </Canvas>
            </div>
        </div>
    )
}