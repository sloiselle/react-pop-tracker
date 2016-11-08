import React from 'react';

import Search from './Search/Search.js';
import Filter from './Filter/Filter.js';

import classnames from 'classnames/bind';
import styles from './Nav.scss';
const cx = classnames.bind(styles);

const Nav = () => {
    return (
        <nav>
        	<Filter 
        		name="Series"
        	/>
        	<Filter 
        		name="Size"
        	/>
        	<Filter 
        		name="Exclusive"
        	/>
        	<Filter 
        		name="Variant"
        	/>
        	<Search />
        </nav>
    );
};

export default Nav;
