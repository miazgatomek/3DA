import './App.scss';
import Header from "./components/header/header";
import Detector from "./components/detector/detector";
import {Canvas} from "react-three-fiber";
import {OrbitControls} from "@react-three/drei";
import * as THREE from "three";
import TrackEvent from "./components/track-event/track-event";
import LineEvent from "./components/line-event/line-event";
import React, {useState} from "react";


const NUM_OF_EVENTS = 12;


function App() {
    const [eventIndex, setEventIndex] = useState(1);
    const _setEventIndex = (index) => {
        if (index >= 1 && index <= NUM_OF_EVENTS) {
            setEventIndex(index);
        } else {
            setEventIndex(index === NUM_OF_EVENTS + 1 ? 1 : NUM_OF_EVENTS);
        }
    };

    const [showPoints, setShowPoints] = useState(true);
    const _setShowPoints = () => {
        setShowPoints(!showPoints);
    }

  return (
    <div className="App">
        <Header/>

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
                    <span>{showPoints ? 'Points' : 'Lines'}</span>
                </div>

                <button
                    className="canvas__button"
                    onClick={() => _setShowPoints()}
                >
                    Switch between lines/points
                </button>
            </div>
        </div>

        <div className="canvas__container">
            <Canvas camera={{position: [10, 6, 10]}}>
                <OrbitControls/>
                <ambientLight intensity={0.1}/>
                <spotLight position={[100, 100, 100]} angle={0.15} penumbra={1}/>
                {/*<primitive object={new THREE.AxesHelper(1000)} />*/}
                {showPoints && <TrackEvent eventIndex={eventIndex}/>}
                {!showPoints && <LineEvent eventIndex={eventIndex}/>}
                <Detector/>
            </Canvas>
        </div>
    </div>
  );
}

export default App;
