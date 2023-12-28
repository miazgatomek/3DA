import Loader from "../core/components/loader/loader";
import React, { Suspense } from "react";
const AboutAlice = React.lazy(() => import("../components/about-alice/about-alice"));

export function AboutAlicePage() {
    return (
        <Suspense fallback={<Loader />}>
            <AboutAlice />
        </Suspense>
    );
}