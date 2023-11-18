import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { About } from 'pages/about/about';
import { Layout } from 'components/layout/layout';
import { ThreeJS } from 'pages/three-js/three-js';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<div>test</div>} />
                    <Route path="about" element={<About />} />
                    <Route path="three-js" element={<ThreeJS />} />
                    <Route path="*" element={<div>test-no-page</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
