import React from 'react';
import './detector.scss'
import {Canvas} from "react-three-fiber";
import {OrbitControls} from "@react-three/drei";
import * as THREE from "three";
import {Donut} from "./components/donut";


export const INNER_DONUT_COLOR = '#4DED30'
export const INNER_DONUT_RADIUS = 2;
export const INNER_BOX_WIDTH = 0.4;
export const INNER_BOX_HEIGHT = 1.5;
export const INNER_BOX_LENGTH = 8;

export const MIDDLE_DONUT_COLOR = '#949494'
export const MIDDLE_DONUT_RADIUS = 3.1;
export const MIDDLE_BOX_WIDTH = 0.95;
export const MIDDLE_BOX_HEIGHT = 0.55;
export const MIDDLE_BOX_LENGTH = 8;

export const OUTER_DONUT_COLOR = '#EE2400'
export const OUTER_DONUT_RADIUS = 4;
export const OUTER_BOX_WIDTH = 1.43;
export const OUTER_BOX_HEIGHT = 0.1;
export const OUTER_BOX_LENGTH = 8;

const Detector = () => {
    return (
        <React.Fragment>
            <div className="detector__container">
                <Canvas>
                    <OrbitControls/>
                    <ambientLight intensity={0.1}/>
                    <spotLight position={[100, 100, 100]} angle={0.15} penumbra={1}/>
                    <primitive object={new THREE.AxesHelper(1000)} />
                    <Donut
                        color={INNER_DONUT_COLOR}
                        radius={INNER_DONUT_RADIUS}
                        width={INNER_BOX_WIDTH}
                        height={INNER_BOX_HEIGHT}
                        length={INNER_BOX_LENGTH}
                    />
                    <Donut
                        color={MIDDLE_DONUT_COLOR}
                        radius={MIDDLE_DONUT_RADIUS}
                        width={MIDDLE_BOX_WIDTH}
                        height={MIDDLE_BOX_HEIGHT}
                        length={MIDDLE_BOX_LENGTH}
                    />
                    <Donut
                        color={OUTER_DONUT_COLOR}
                        radius={OUTER_DONUT_RADIUS}
                        width={OUTER_BOX_WIDTH}
                        height={OUTER_BOX_HEIGHT}
                        length={OUTER_BOX_LENGTH}
                    />
                </Canvas>
            </div>
        </React.Fragment>
    );
}

export default Detector;
