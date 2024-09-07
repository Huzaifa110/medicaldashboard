import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';
import './LineGraph.css';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

const LineGraph = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        data: [30, 40, 30, 52, 22, 65, 80], 
        borderColor: '#c299ff', 
        backgroundColor: 'rgba(194, 153, 255, 0.4)', 
        borderWidth: 4, 
        fill: true, 
        tension: 0.4, 
        pointRadius: 0, 
        pointHitRadius: 0, 
        zIndex: 1, 
      },
      {
        data: [10, 32, 67, 34, 42, 53, 41], 
        borderColor: '#4CC2B0', 
        backgroundColor: 'rgba(76, 194, 176, 0.4)', 
        borderWidth: 4, 
        fill: true, 
        tension: 0.4, 
        pointRadius: 0, 
        pointHitRadius: 0, 
        zIndex: 2, 
      },
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
        max: 100,
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
            if (context.tick.value === 100 || context.tick.value === 80 || context.tick.value === 60 || context.tick.value === 40 || context.tick.value === 20 || context.tick.value === 0) {
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

export default LineGraph;
