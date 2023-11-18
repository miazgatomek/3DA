import { Outlet } from "react-router-dom";
import { Header } from "./components/header/header";
import React from "react";
import './layout.scss'


export function Layout() {
    return (
        <div className="layout">
            <Header/>
            <Outlet/>
        </div>
    );
}