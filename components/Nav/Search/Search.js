import React from 'react';

import classnames from 'classnames/bind';
import styles from './Search.scss';
const cx = classnames.bind(styles);

const Search = () => {
    return (
        <div className={cx('search')}>
        	<span>Search</span>
        </div>
    );
};

export default Search;