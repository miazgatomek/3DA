import React from 'react';
import './detector.scss'
import {Canvas} from "react-three-fiber";
import {OrbitControls} from "@react-three/drei";
import * as THREE from "three";

const Box = (props) => {
    return (
        <mesh position={[props.x, props.y, props.z]}>
            <boxBufferGeometry args={[8, 1, 1]}/>
            <meshLambertMaterial attach="material" color="red"/>
        </mesh>
    );
}

const InnerDonut = () => {
    return (
        <React.Fragment>
            <mesh>
                <Box x={0} y={3} z={0}/>
                <Box x={0} y={-3} z={0}/>
                <Box x={0} y={0} z={-3}/>
                <Box x={0} y={0} z={3}/>
            </mesh>
        </React.Fragment>
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
                    <primitive object={new THREE.AxesHelper(1000)} />
                    <InnerDonut/>
                </Canvas>
            </div>
        </React.Fragment>
    );
}

export default Detector;
