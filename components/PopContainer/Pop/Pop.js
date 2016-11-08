import React from 'react';
import classnames from 'classnames/bind';

import styles from './Pop.scss';
const cx = classnames.bind(styles);

const Pop = () => {
    return (
        <div className={cx('pop-tile')}>
        	<p>I am a pop</p>
        </div>
    );
};

export default Pop;
