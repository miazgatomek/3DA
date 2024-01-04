import React from "react";
import {ABOUT_TEXT} from "../../utils/about-text";
import "./about.scss"

export default function AboutAlice() {
    return (
        <div className="about-alice__container">
            <span className="about-alice__about-text">{ABOUT_TEXT}</span>
        </div>
    )
}