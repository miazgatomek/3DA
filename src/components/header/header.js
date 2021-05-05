import React, {Component} from 'react';
import './header.scss'


class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="header__container">
                    <h2 className="header__title">ALICE</h2>
                    <span className="header__element">Detector</span>
                    <span className="header__element">About</span>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;
