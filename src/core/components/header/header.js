import { Link } from 'react-router-dom'
import './header.scss'
import React from 'react'


export function Header() {
    return (
        <div className="header__container">
            <h2 className="header__title">3DA</h2>
            <Link className="header__element" to="three-js">
                ThreeJS
            </Link>
            <Link
                to="about-alice"
                className="header__element"
            >About</Link>
        </div>
    )
}
