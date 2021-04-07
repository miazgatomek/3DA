import React from 'react';
import event from '../../../utils/events/event35_run226466.json';
import {useFrame} from "react-three-fiber";
import {Track} from "./track";
import useDynamicRefs from 'use-dynamic-refs';


const TrackEvent = () => {
    const [getRef, setRef] = useDynamicRefs();

    const tracksData = event.fTracks;
    const tracksIds = Array.from(Array(tracksData.length).keys()).map(element => element.toString());

    let position = 0;

    useFrame(() => {
        if (position < tracksData[0].fPolyX.length) {
            tracksIds.forEach((id, i) => {
               const ref = getRef(id);
               ref.current.position.set(
                   tracksData[i].fPolyX[position] / 40,
                   tracksData[i].fPolyY[position] / 40,
                   tracksData[i].fPolyZ[position] / 40,
               );
            });

            position++;
        } else if (position === tracksData[0].fPolyX.length) {
            position = 0;
        }
    });

    return (
        <React.Fragment>
            {tracksIds.map((id, i) => (
                <mesh ref={setRef(id)} key={i}>
                    <Track/>
                </mesh>
            ))}
        </React.Fragment>
    )
}

export default TrackEvent;
