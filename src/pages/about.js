import Loader from "../core/components/loader/loader";
import React, { Suspense } from "react";
const About = React.lazy(() => import("../components/about/about"));

export function AboutPage() {
    return (
        <Suspense fallback={<Loader />}>
            <About />
        </Suspense>
    );
}