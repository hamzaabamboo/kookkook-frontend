import * as ChartAnnotation from 'chartjs-plugin-annotation';

import React, { useState } from 'react';

import { Bar } from 'react-chartjs-2';
import Container from 'react-bootstrap/Container';
import LeftArr from '../../static/icon/left_arr.svg';
import RightArr from '../../static/icon/right_arr.svg';
import moment from 'moment';
// import Chart from 'chart.js';
import styles from './index.module.scss';

const WeeklyChart = () => {
    const [day, setDay] = useState(moment());

    const chartData = {
        labels: ['S', 'M', 'T', 'W', 'TH', 'F', 'S'],
        datasets: [
            {
                label: 'max',
                data: [50, 30, 40, 25, 35, 45, 0].map(
                    number => Math.random() * 50,
                ),
                backgroundColor: 'rgba(254, 206, 71, 1)',
                barThickness: 19,
            },
            {
                label: 'min',
                data: [50, 30, 40, 25, 35, 45, 0].map(
                    number => Math.random() * 50,
                ),
                backgroundColor: 'rgba(46, 134, 171, 1)',
                barThickness: 19,
            },
        ],
    };

    const findAvg = () => {
        const findSum = chartData.datasets.map(data => {
            return data.data.reduce((accumulator, currentValue) => {
                return accumulator + currentValue;
            }, 0);
        });
        const arrLength = chartData.datasets.map(data => {
            return data.data.length;
        });
        return findSum / arrLength;
    };

    return (
        <Container>
            <Bar
                data={chartData}
                width={124}
                height={150}
                options={{
                    maintainAspectRatio: false,
                    cornerRadius: 8,
                    label: {
                        display: false,
                    },
                    legend: {
                        display: true,
                        labels: {
                            fontColor: '#2E86AB',
                            fontFamily: 'Airbnb Cereal App',
                        },
                    },
                    scales: {
                        xAxes: [
                            {
                                type: 'category',
                                gridLines: {
                                    display: false,
                                    drawBorder: false,
                                },
                            },
                        ],
                        yAxes: [
                            {
                                ticks: {
                                    display: false,
                                },
                                gridLines: {
                                    display: false,
                                    drawOnChartArea: false,
                                    color: 'rgba(0, 0, 0, 0)',
                                },
                            },
                        ],
                    },
                    annotation: {
                        annotations: [
                            {
                                type: 'line',
                                mode: 'horizontal',
                                scaleID: 'y-axis-0',
                                value: findAvg(),
                                borderColor: 'rgb(58, 175, 174)',
                                borderWidth: 2,
                                borderDash: [2, 2],
                                label: {
                                    enabled: true,
                                    backgroundColor: 'rgba(0,0,0,0)',
                                    fontFamily: 'Airbnb Cereal App',
                                    fontSize: 8,
                                    fontColor: '#3AAFAE',
                                    position: 'right',
                                    yAdjust: -8,
                                    content: 'avg',
                                },
                            },
                        ],
                    },
                }}
            />

            <div className="pagination-week d-flex justify-content-center align-items-center">
                <img
                    src={LeftArr}
                    alt="left_arr"
                    onClick={() => {
                        setDay(day => day.clone().subtract(7, 'days'));
                    }}
                />
                <div className={`${styles.textDate} mx-2`}>
                    {day.startOf('week').format('DD MMM YYYY')} {` - `}
                    {day.endOf('week').format('DD MMM YYYY')}
                </div>
                <img
                    src={RightArr}
                    alt="right_arr"
                    onClick={() => {
                        setDay(day => day.clone().add(7, 'days'));
                    }}
                />
            </div>
        </Container>
    );
};

export default WeeklyChart;
