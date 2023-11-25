import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { Suspense } from "react";
import { AboutAlicePage } from 'pages/about-alice';
import { ThreeJSPage } from 'pages/three-js';
import Loader from 'core/components/loader/loader';
const Layout = React.lazy(() => import("core/components/layout/layout"));


function App() {
    return (
        <Suspense fallback={<Loader />}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="about-alice" element={<AboutAlicePage />} />
                        <Route path="three-js" element={<ThreeJSPage />} />
                    </Route>
                    <Route index element={<Navigate to="three-js" />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}

export default App;
