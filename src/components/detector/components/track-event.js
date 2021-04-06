import React, {useRef} from 'react';
import event from '../../../utils/events/event35_run226466.json';
import {useFrame} from "react-three-fiber";
import {Track} from "./track";


const TrackEvent = () => {
    const mesh = useRef();

    const tracksData = event.fTracks;
    const tracksIds = Array.from(Array(tracksData.length).keys()).map(element => element.toString());


    const x = event.fTracks[0].fPolyX;
    const y = event.fTracks[0].fPolyY;
    const z = event.fTracks[0].fPolyZ;

    let i = 0;

    useFrame(() => {
        if (i < x.length) {
            mesh.current.position.set(x[i] / 20, y[i] / 20, z[i] / 20);
            i++;
        }
    });

    return (
        <React.Fragment>
            {/*{this.tracks.map()}*/}

            <mesh ref={mesh}>
                <Track/>
            </mesh>
        </React.Fragment>
    )
}

export default TrackEvent;
