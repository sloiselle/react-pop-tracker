import React from 'react';
import classnames from 'classnames/bind';

import Login from './Login/Login.js';
import PopCounter from './PopCounter/PopCounter.js';


import styles from './Header.scss';
const cx = classnames.bind(styles);

const Header = () => {
    return (
        <header>
            <Login />
            <PopCounter />
        </header>
    );
};

export default Header;
