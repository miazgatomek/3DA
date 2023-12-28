import Loader from "../core/components/loader/loader";
import React, { Suspense } from "react";
const ThreeJS = React.lazy(() => import("../components/three-js/three-js"));

export function ThreeJSPage() {
    return (
        <Suspense fallback={<Loader />}>
            <ThreeJS />
        </Suspense>
    );
}