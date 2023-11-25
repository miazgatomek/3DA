import React, { Suspense } from "react";
const ThreeJS = React.lazy(() => import("components/three-js/three-js"));

export function ThreeJSPage() {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <ThreeJS />
        </Suspense>
    );
}