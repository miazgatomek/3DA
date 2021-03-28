import {Donut} from "./donut";
import React, {useRef} from "react";
import {useFrame} from "react-three-fiber";


export const INNER_DONUT_COLOR = '#4DED30'
export const INNER_DONUT_RADIUS = 2;
export const INNER_BOX_WIDTH = 0.4;
export const INNER_BOX_HEIGHT = 1.5;
export const INNER_BOX_LENGTH = 8;

export const MIDDLE_DONUT_COLOR = '#949494'
export const MIDDLE_DONUT_RADIUS = 3.2;
export const MIDDLE_BOX_WIDTH = 0.95;
export const MIDDLE_BOX_HEIGHT = 0.55;
export const MIDDLE_BOX_LENGTH = 8;

export const OUTER_DONUT_COLOR = '#EE2400'
export const OUTER_DONUT_RADIUS = 3.6;
export const OUTER_BOX_WIDTH = 1.29;
export const OUTER_BOX_HEIGHT = 0.1;
export const OUTER_BOX_LENGTH = 8;


const CombinedDonuts = () => {
    const mesh = useRef();
    useFrame(() => mesh.current.rotation.y += 0.01);

    return (
        <mesh ref={mesh}>
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
        </mesh>
    );
}

export default CombinedDonuts;
