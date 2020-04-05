import React, { useEffect, useState } from 'react';

import Chart from '../WeeklyChart';
import Container from 'react-bootstrap/Container';
import Dashboard from '../Dashboard';
import styles from './index.module.scss';
import { useHistory } from 'react-router-dom';

const ZoneBlock = ({ isCurrent, zone, onClick }) => {
    return (
        <div
            className={`mr-2 mb-2 d-flex justify-content-center ${
                styles.bgBlock
            } ${
                isCurrent
                    ? `${styles.bgSelect}`
                    : zone.irregular
                    ? `${styles.bgIrregular}`
                    : ``
            }`}
            onClick={() => onClick()}
        >
            <p
                className={`m-0 align-items-center d-flex ${styles.textZoneNum}`}
            >
                {zone.id}
            </p>
        </div>
    );
};

const Zone = () => {
    const history = useHistory();
    const renderSwitch = (param) => {
        switch (param) {
            case '/chart':
                return <Chart />;
            default:
                return <Dashboard />;
        }
    };

    const zones = [
        { id: 1, irregular: false },
        { id: 2, irregular: false },
        { id: 3, irregular: false },
        { id: 4, irregular: true },
        { id: 5, irregular: false },
        { id: 6, irregular: true },
    ];
    const [currentZone, setCurrentZone] = useState(1);

    return (
        <Container>
            <div className="mt-3 d-flex">
                <div>
                    <p className={`${styles.textZone} mb-1 m-0`}>Zone 1</p>
                    <div
                        className={`${styles.bgHouse} d-flex p-1 justify-content-center`}
                    >
                        <div className={`${styles.textHouse}`}>HOUSE A</div>
                    </div>
                </div>

                <p className={`${styles.textDoor} m-0`}>DOOR</p>
                <div className={`${styles.borderDoor}`}></div>

                <div className="ml-auto d-flex">
                    <div className="d-flex flex-column">
                        <p className={`m-0 ${styles.textSelectZone}`}>
                            Select the zone
                        </p>
                        <div className={`${styles.rowZone}`}>
                            {zones.map((zone) => (
                                <ZoneBlock
                                    key={zone.id}
                                    isCurrent={zone.id === currentZone}
                                    zone={zone}
                                    onClick={() => setCurrentZone(zone.id)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div>{renderSwitch(history.location.pathname)}</div>
        </Container>
    );
};

export default Zone;
