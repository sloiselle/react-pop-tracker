import React from 'react';
import classnames from 'classnames/bind';

import styles from './PopCounter.scss';

const cx = classnames.bind(styles);

const PopCounter = () => {
    return (
        <div>
            <p>100 Pops Owned</p>
        </div>
    );
};

export default PopCounter;