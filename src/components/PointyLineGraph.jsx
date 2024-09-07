import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';
import './PointyLineGraph.css';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

const PointyLineGraph = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
            {
                data: [45, 55, 40, 24, 36, 28, 21, 19],
                borderColor: 'rgba(0, 0, 255, 0.5)',
                backgroundColor: 'rgba(0, 0, 255, 0.5)',
                borderWidth: 4,
                fill: true,
                tension: 0,
                pointRadius: 0,
                pointHitRadius: 0,
                zIndex: 1,
                borderJoinStyle: 'bevel',
            },
            {
                data: [35, 40, 63, 42, 16, 18, 28, 39],
                borderColor: 'rgba(0, 255, 0, 0.5)',
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                borderWidth: 7,
                borderDash: [10, 5],
                fill: true,
                tension: 0,
                pointRadius: 0,
                pointHitRadius: 0,
                zIndex: 2,
                borderJoinStyle: 'bevel',
            },
            {
                data: [90, 58, 72, 100, 64, 38, 62, 45],
                borderColor: 'rgba(255, 255, 0, 0.5)',
                backgroundColor: 'rgba(255, 255, 0, 0.5)',
                borderWidth: 7,
                borderDash: [10, 5],
                fill: true,
                tension: 0,
                pointRadius: 0,
                pointHitRadius: 0,
                zIndex: 2,
                borderJoinStyle: 'bevel',
            }
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    font: {
                        family: 'Helvetica',
                        size: 11,
                        weight: 400,
                        color: '#000000',
                    },
                    padding: 10,
                },
            },
            y: {
                min: 0,
                max: 120,
                ticks: {
                    stepSize: 20,
                    font: {
                        family: 'Helvetica',
                        size: 11,
                        weight: 400,
                        color: '#000000',
                    },
                    padding: 10,
                },
                grid: {
                    drawBorder: false,
                    drawOnChartArea: true,
                    drawTicks: false,
                    color: (context) => {
                        if (context.tick.value % 20 === 0) {
                            return '#DDDDDD';
                        }
                        return 'transparent';
                    },
                },
                border: {
                    display: false,
                },
            },
        },
        elements: {
            line: {
                borderWidth: 4,
            },
        },
        layout: {
            padding: {
                bottom: 60,
            },
        },
    };

    return (
        <div className="graph-container">
            <Line data={data} options={options} />
        </div>
    );
};

export default PointyLineGraph;
