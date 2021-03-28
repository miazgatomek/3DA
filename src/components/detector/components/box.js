import React, {Component, createRef} from "react";
import {INNER_BOX_LENGTH, INNER_BOX_WIDTH} from "../detector";


export class Box extends Component {
    constructor() {
        super();
        this.meshRef = createRef();
    }

    componentDidMount() {
        this.meshRef.current.rotation.x = this.props.rotation;
    }

    render() {
        return (
            <mesh ref={this.meshRef} position={[this.props.x, this.props.y, this.props.z]}>
                <boxBufferGeometry args={[INNER_BOX_LENGTH, INNER_BOX_WIDTH, INNER_BOX_WIDTH]}/>
                <meshLambertMaterial attach="material" color="lightgreen" transparent={true} opacity={0.5}/>
            </mesh>
        );
    }
}
