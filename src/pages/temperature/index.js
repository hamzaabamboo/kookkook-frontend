import DailyChart from '../../components/WeeklyChart/DailyChart';
import React from 'react';
import WeeklyChart from '../../components/WeeklyChart';
import styles from './index.module.scss';

const Temp = () => {
    return (
        <div className={`${styles.bgLightBlue} pt-4 vh-100`}>
            <WeeklyChart />
            <DailyChart />
        </div>
    );
};

export default Temp;
