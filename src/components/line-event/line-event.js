import React from 'react';
import {Line} from "@react-three/drei";
import event0 from '../../utils/events/event35_run226466.json';
import event1 from '../../utils/events/event41_run226466.json';
import event2 from '../../utils/events/event91_run226466.json';
import event3 from '../../utils/events/event254_run226466.json';
import event4 from '../../utils/events/event769_run122374.json';
import event5 from '../../utils/events/event786_run122374.json';
import event6 from '../../utils/events/event1153_run122374.json';
import event7 from '../../utils/events/event2162_run226466.json';
import event8 from '../../utils/events/event3055_run226466.json';
import event9 from '../../utils/events/event3205_run122374.json';
import event10 from '../../utils/events/event3490_run226466.json';
import event11 from '../../utils/events/event4047_run226466.json';
import {useFrame} from "react-three-fiber";
import useDynamicRefs from "use-dynamic-refs";

const EVENTS = [event0, event1, event2, event3, event4, event5, event6, event7, event8, event9, event10, event11];

const LineEvent = (props) => {
    const [getRef, setRef] = useDynamicRefs();

    const tracksData = EVENTS[props.eventIndex - 1].fTracks;
    const tracksIds = Array.from(Array(tracksData.length).keys()).map(element => element.toString());

    const points = new Array(tracksData.length).map(i => []);

    tracksData.forEach((track, i) => {
       points[i] = [];

       track.fPolyX.forEach((x, j) => {
           points[i].push([x / 40, track.fPolyY[j] / 40, track.fPolyZ[j] / 40]);
       })
    });

    let position = 0;

    useFrame(() => {
        if (position < tracksData[0].fPolyX.length) {
            if (position > 0) {
                // console.log(position)
                // tracksIds.forEach((id, i) => {
                //     const ref = getRef(id);
                //     ref.current.geometry.setDrawRange(0, position);
                // })
            }
            // let ref = getRef(tracksIds[0]);
            // console.log(ref.current.geometry);
            position++;
        }
    });

    return (
        <React.Fragment>
            <mesh>
                {
                    tracksIds.map((id, i) => (
                        <Line
                            ref={setRef(id)}
                            points={points[i]}
                            key={i}
                            color={'yellow'}
                            lineWidth={0.5}
                        />
                    ))
                }
            </mesh>
        </React.Fragment>
    )
}

export default LineEvent;
