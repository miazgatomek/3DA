import React from "react"
import "./loader.scss"

export default function Loader() {
    return (
        <div className="loader">
            <span className="loader__spinner"></span>
            <h2 className="loader__title">ALICE</h2>
        </div>
    )
}