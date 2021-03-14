import React, {Component} from 'react';
import './header.scss'

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="header__container">
                    <span>Detector</span>
                    <span>About</span>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;
