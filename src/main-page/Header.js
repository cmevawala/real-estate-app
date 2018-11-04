import React from 'react';
import logo from './global-logo.png';

const Header = () => (
    <header className="row">
        <div className="col-md-5">
            <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="col-md-7 mt-5 subtitle">
            Provide Houses for
        </div>
    </header>
)

export default Header;