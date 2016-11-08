import React from 'react';

import classnames from 'classnames/bind';
import styles from './Filter.scss';
const cx = classnames.bind(styles);

const Filter = ({name}) => {
    return (
        <div className={cx('filter')}>
        	<span>{name}</span>
        </div>
    );
};

export default Filter;
