import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { Suspense } from "react";
import { AboutPage } from './pages/about';
import { ModelPage } from './pages/model';
import Loader from './core/components/loader/loader';
const Layout = React.lazy(() => import("./core/components/layout/layout"));


function App() {
    return (
        <Suspense fallback={<Loader />}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="about" element={<AboutPage />} />
                        <Route path="model" element={<ModelPage />} />
                    </Route>
                    <Route index element={<Navigate to="model" replace/>} />
                    <Route path="*" element={<Navigate to="model" replace/>} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}

export default App;
