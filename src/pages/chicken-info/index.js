import Container from 'react-bootstrap/Container';
import React from 'react';
import styles from './index.module.scss';

const ChickenInfo = () => {
    const data = [
        {
            label: 'Flock Name',
            value: '2020/2',
        },
        {
            label: 'Chicken In Date',
            value: '30/02/2020',
        },
        {
            label: 'Chicken Out Date',
            value: '01/05/2020',
        },
        {
            label: 'House',
            value: '1',
        },
        {
            label: 'Amount of Chickens',
            value: '500',
        },
        {
            label: 'Gender',
            value: 'Male',
        },
        {
            label: 'Chicken Type',
            value: 'Nugget',
        },
    ];

    return (
        <Container className={`${styles.bgLightBlue} pt-4 vh-100`}>
            {data.map(data => (
                <div className="my-3">
                    <div className={`${styles.textLabel} my-2`}>
                        {data.label}
                    </div>
                    <div className={styles.textValue}>{data.value}</div>
                </div>
            ))}
        </Container>
    );
};

export default ChickenInfo;
