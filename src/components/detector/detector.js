import React, {Component} from 'react';
import './detector.scss'
import {Canvas} from "react-three-fiber";
import {OrbitControls} from "@react-three/drei";
import * as THREE from "three";

class Detector extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="detector__container">
                    <Canvas>
                        <OrbitControls/>
                        <ambientLight/>
                        <primitive object={new THREE.AxesHelper(10)} />
                        <mesh>
                            <boxBufferGeometry attach="geometry"/>
                            <meshLambertMaterial attach="material" color="red"/>
                        </mesh>
                    </Canvas>
                </div>
            </React.Fragment>
        );
    }
}

export default Detector;
