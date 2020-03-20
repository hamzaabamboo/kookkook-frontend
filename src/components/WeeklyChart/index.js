import React, { useState } from 'react';
// import Chart from 'chart.js';
import './index.scss';
import { Bar } from 'react-chartjs-2';
import LeftArr from '../../static/icon/left_arr.svg';
import RightArr from '../../static/icon/right_arr.svg';

const chartData = {
    labels: ['S', 'M', 'T', 'W', 'TH', 'F', 'S'],
    datasets: [
        {
            data: [50, 30, 40, 25, 35, 45, 0],
            backgroundColor: 'rgba(254, 206, 71, 1)',
            barThickness: 19,
        },
    ],
};

const WeeklyChart = () => {
    const month = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];

    // const date = ['1-7', '8-14', '15-21', '22-28'];
    const year = '2020';
    const [startDate, setStartDate] = useState(1);
    const [endDate, setEndDate] = useState(7);

    // const incrementStartDate = () => {
    //     setStartDate(startDate + 1);
    // };

    // const incrementEndDate = () => {
    //     setEndDate(endDate + 1);
    // };
    // const [chartData, setData] = useState({
    //   labels: ["S", "M", "T", "W", "TH", "F", "S"],
    //   datasets: [
    //     {
    //       label: "temperature",
    //       data: [50, 30, 40, 25, 35, 45, 0],
    //       backgroundColor: "rgba(254, 206, 71, 1)"
    //     }
    //   ]
    // });
    // const Chart = require('chart.js');
    // const ctx = document.getElementById('barChart');
    // const barChart = new Chart(ctx, {
    //     type: 'bar',
    //     data: {
    //         labels: ['S', 'M', 'T', 'W', 'TH', 'F', 'S'],
    //         datasets: [
    //             {
    //                 data: [50, 30, 40, 25, 35, 45, 0],
    //                 backgroundColor: 'rgba(254, 206, 71, 1)',
    //                 barThickness: 19,
    //             },
    //         ],
    //     },
    //     options: {
    //         scales: {
    //             xAxes: [
    //                 {
    //                     display: false,
    //                     gridLines: {
    //                         display: false,
    //                         drawOnChartArea: false,
    //                         color: 'rgba(0, 0, 0, 0)',
    //                     },
    //                 },
    //             ],
    //             yAxes: [
    //                 {
    //                     display: false,
    //                     gridLines: {
    //                         display: false,
    //                         drawOnChartArea: false,
    //                         color: 'rgba(0, 0, 0, 0)',
    //                     },
    //                 },
    //             ],
    //         },
    //     },
    // });

    return (
        <div>
            <div>
                <Bar
                    data={chartData}
                    width={124}
                    height={264}
                    options={{
                        maintainAspectRatio: false,
                        cornerRadius: 8,
                        label: {
                            display: false,
                        },
                        scales: {
                            xAxes: [
                                {
                                    display: false,
                                    gridLines: {
                                        display: false,
                                        drawOnChartArea: false,
                                        color: 'rgba(0, 0, 0, 0)',
                                    },
                                },
                            ],
                            yAxes: [
                                {
                                    display: false,
                                    gridLines: {
                                        display: false,
                                        drawOnChartArea: false,
                                        color: 'rgba(0, 0, 0, 0)',
                                    },
                                },
                            ],
                        },
                    }}
                />
            </div>
            {/* <canvas id="barChart" width="400" height="400"></canvas> */}

            <div className="pagination-week d-flex justify-content-center align-items-center">
                <img
                    src={LeftArr}
                    alt="left_arr"
                    onClick={() => {
                        setStartDate(startDate - 7);
                        setEndDate(endDate - 7);
                    }}
                />
                <div className="text-date ml-1">{startDate}</div>
                <div className="text-date mx-1">-</div>
                <div className="text-date">{endDate}</div>
                <div className="text-date mx-1">{month[0]}</div>
                <div className="text-date mr-1">{year}</div>
                <img
                    src={RightArr}
                    alt="right_arr"
                    onClick={() => {
                        setStartDate(startDate + 7);
                        setEndDate(endDate + 7);
                    }}
                />
            </div>
        </div>
    );
};

export default WeeklyChart;
