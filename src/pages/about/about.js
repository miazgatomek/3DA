import React from "react";
import {ABOUT_TEXT} from "../../utils/about-text";

export function About() {
    return (
        <div className="canvas__container">
            <div className="canvas__header-container">
                <span className="canvas__about-text">{ABOUT_TEXT}</span>
            </div>
        </div>
    )
}