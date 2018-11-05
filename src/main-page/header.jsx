import React from 'react';
import logo from './global-logo.png';

const Header = (props) => (
    <header className="row">
        <div className="col-md-5">
            <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="col-md-7 mt-5 sub-title">
            {props.subtitle}
        </div>
    </header>
)

export default Header;