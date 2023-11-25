import React, { Suspense } from "react";
const AboutAlice = React.lazy(() => import("components/about-alice/about-alice"));

export function AboutAlicePage() {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <AboutAlice />
        </Suspense>
    );
}