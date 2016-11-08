import React from 'react';
import classnames from 'classnames/bind';

import styles from './PopContainer.scss';
const cx = classnames.bind(styles);

import Pop from './Pop/Pop.js';

const PopContainer = () => {
    return (
        <div className={cx('pop-container')}>
        	<Pop />
        	<Pop />
        	<Pop />
        	<Pop />
        </div>
    );
};

export default PopContainer;
