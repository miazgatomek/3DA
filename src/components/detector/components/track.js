import React, {Component} from "react";


export class Track extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <mesh>
                    <sphereBufferGeometry args={[0.1, 10, 10]}/>
                    <meshLambertMaterial attach="material" color="red"/>
                </mesh>
            </React.Fragment>
        )
    }
}
