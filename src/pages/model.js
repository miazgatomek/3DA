import Loader from "../core/components/loader/loader";
import React, { Suspense } from "react";
const ModelScene = React.lazy(() => import("../components/model-scene/model-scene"));

export function ModelPage() {
    return (
        <Suspense fallback={<Loader />}>
            <ModelScene />
        </Suspense>
    );
}