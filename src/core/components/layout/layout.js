import { Outlet } from "react-router-dom";
import { Header } from "../header/header";
import React from "react";
import './layout.scss'


export default function Layout() {
    return (
        <div className="layout">
            <Header/>
            <div className="layout__outlet-container">
                <Outlet/>
            </div>
        </div>
    );
}