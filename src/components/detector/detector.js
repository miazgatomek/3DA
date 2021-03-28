import React, {useMemo, useRef, createRef, componentDidMount, Component} from 'react';
import './detector.scss'
import {Canvas, useFrame} from "react-three-fiber";
import {OrbitControls} from "@react-three/drei";
import * as THREE from "three";


export const INNER_RADIUS = 2;


export class Box extends Component {
    constructor() {
        super();
        this.meshRef = createRef();
    }

    componentDidMount() {
        console.log(this.props);
        this.meshRef.current.rotation.x = this.props.rotation;
    }

    render() {
        return (
            <mesh ref={this.meshRef} position={[this.props.x, this.props.y, this.props.z]}>
                <boxBufferGeometry args={[8, 0.55, 0.55]}/>
                <meshLambertMaterial attach="material" color="lightgreen" transparent={true} opacity={0.5}/>
            </mesh>
        );
    }
}

const InnerDonut = () => {
    const mesh = useRef();
    useFrame(() => (mesh.current.rotation.y += 0.01))

    const degreesToRadians = (degrees) => (Math.PI / 180) * degrees;
    const getY = (i) => Math.sin(degreesToRadians(i * 20)) * INNER_RADIUS
    const getZ = (i) => Math.cos(degreesToRadians(i * 20)) * INNER_RADIUS

    const props = Array.from(Array(19), (_, i) => ({x: 0, y: getY(i), z: getZ(i), rotation: degreesToRadians(360 - i * 20)}));

    return (
        <React.Fragment>
            <mesh ref={mesh}>
                {props.map((prop, i) => <Box {...prop} key={i}/>)}
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
