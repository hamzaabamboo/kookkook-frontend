import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './index.scss';

const square = isChickenDead => {
    return <div className={`square ${isChickenDead ? 'red' : ''}`}></div>;
};

const DeadChicken = () => {
    const zoneStatus = [
        [true, false, false, true, false, false, false, false, false, false],
        [true, false, false, false, false, false, false, false, false, false],
        [true, false, false, false, false, false, false, false, false, false],
        [true, false, false, false, false, true, false, false, false, false],
        [true, false, false, false, false, false, false, false, false, false],
        [true, false, false, false, false, true, false, false, false, true],
        [true, false, false, false, false, false, false, false, false, false],
        [true, false, false, false, false, false, false, false, false, false],
        [true, false, true, false, false, false, false, false, false, false],
        [true, false, false, false, false, false, true, false, false, false],
    ];
    return (
        <Container>
            <div className="text-label-ch" style={{ marginTop: '1rem' }}>
                <p>Please select on dead chicken location</p>
            </div>
            <div className="map">
                {zoneStatus.map(row => row.map(element => square(element)))}
            </div>
        </Container>
    );
};

export default DeadChicken;
