import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './index.module.scss';
import upArrow from '../../static/icon/up_arrow.svg';
import tempIcon from '../../static/icon/temperature.svg';
import windIcon from '../../static/icon/wind.svg';
import ammoniaIcon from '../../static/icon/fog.svg';
import humidityIcon from '../../static/icon/humidity.svg';
import Container from 'react-bootstrap/Container';
import io from 'socket.io-client';

const socket = io(
    'http://kookkook-backend-dev-ingress.default.202.28.193.100.xip.io/',
);

const Dashboard = () => {
    const [temp, setTemp] = useState();
    const [ammonia, setAmmonia] = useState();
    const [humidity, setHumidity] = useState();
    const [windSpeed, setWindSpeed] = useState();
    const [age, setAge] = useState(0);
    const [tempLowerBound, setTempLowerBound] = useState();
    const [tempUpperBound, setTempUpperBound] = useState();
    const history = useHistory();

    useEffect(() => {
        socket.on('pipeRealtimeData', result => {
            setTemp(Math.round(result.temperature));
            setAmmonia(Math.round(result.ammonia));
            setHumidity(Math.round(result.humidity));
            setWindSpeed(Math.round(result.windSpeed));
            console.log(result);
        });
        socket.emit('getRealtimeData');
    }, []);

    // useEffect(() => {
    //     if (age >= 0 && age <= 3) {
    //         setTempLowerBound(84);
    //         setTempUpperBound(95);
    //     } else if (age >= 4 && age <= 7) {
    //         setTempLowerBound(82);
    //         setTempUpperBound(93);
    //     } else if (age >= 8 && age <= 14) {
    //         setTempLowerBound(80);
    //         setTempUpperBound(91);
    //     } else if (age >= 15 && age <= 21) {
    //         setTempLowerBound(78);
    //         setTempUpperBound(89);
    //     } else if (age >= 22 && age <= 28) {
    //         setTempLowerBound(76);
    //         setTempUpperBound(87);
    //     } else {
    //         setTempLowerBound(74);
    //         setTempUpperBound(85);
    //     }
    // }, []);

    const compareTemp = () => {
        if (temp >= tempLowerBound && temp <= tempUpperBound) {
            return true;
        } else {
            return false;
        }
    };

    const data = [
        {
            result: temp,
            unit: 'CELSIUS',
            percentage: '11.5%',
            measure: 'TEMPERATURE',
            enviIcon: tempIcon,
            alt: 'temp_icon',
            sensor: 'X',
            url: 'temp',
        },
        {
            result: windSpeed,
            unit: 'KM/HR',
            percentage: '11.5%',
            measure: 'WIND',
            enviIcon: windIcon,
            alt: 'wind_icon',
            sensor: 'Y',
            url: 'temp',
        },
        {
            result: ammonia,
            unit: '',
            percentage: '11.5%',
            measure: 'AMMONIA',
            enviIcon: ammoniaIcon,
            alt: 'ammonia_icon',
            sensor: 'Z',
            url: 'temp',
        },
        {
            result: humidity,
            unit: '',
            percentage: '11.5%',
            measure: 'HUMIDITY',
            enviIcon: humidityIcon,
            alt: 'humidity_icon',
            sensor: 'Q',
            url: 'temp',
        },
    ];

    return (
        <div>
            <div
                className={`${styles.bgHouse} mt-4 mb-3 mx-auto d-flex p-2 justify-content-center`}
            >
                <div
                    className={`${styles.textHouse} text-center align-self-center`}
                >
                    HOUSE A
                </div>
            </div>
            <Container>
                <Row>
                    {data.map((data, index) => (
                        <Col
                            xs="6"
                            key={index}
                            className="d-flex flex-column p-2"
                            onClick={() => {
                                history.push(`/${data.url}`);
                            }}
                        >
                            <div
                                className={`${styles.bgCard} d-flex flex-column`}
                            >
                                <div className="d-flex flex-column text-center flex-grow-1 h-100">
                                    <p
                                        className={`m-0 ${
                                            compareTemp
                                                ? 'text-record'
                                                : 'text-irregular'
                                        }`}
                                    >
                                        {data.result}
                                    </p>
                                    <p className={`${styles.textUnit} m-0`}>
                                        {data.unit}
                                    </p>
                                    <div className="d-flex justify-content-center">
                                        <img src={upArrow} alt="upArrow" />
                                        <p
                                            className={`${styles.textPercent} m-0`}
                                        >
                                            {data.percentage}
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex p-2">
                                    <img
                                        src={data.enviIcon}
                                        alt={data.alt}
                                        className={`${styles.textImage} mr-2`}
                                    />
                                    <div className="d-flex flex-column flex-grow-1 w-100">
                                        <p
                                            className={`${styles.textMeasure} m-0`}
                                        >
                                            {data.measure}
                                        </p>
                                        <p
                                            className={`${styles.textSensor} m-0`}
                                        >
                                            From {data.sensor} sensors
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;
