import React from "react";
import {ABOUT_TEXT} from "../../utils/about-text";

export function AboutAlice() {
    return (
        <div className="about__container">
            <div className="-container">
                <span className="canvas__about-text">{ABOUT_TEXT}</span>
            </div>
        </div>
    )
}