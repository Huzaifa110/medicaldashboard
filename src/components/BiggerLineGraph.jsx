import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';
import './BiggerLineGraph.css';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

const LineGraph = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [15, 48, 37, 21, 40, 60, 35, 21, 16, 21, 22, 11], 
        borderColor: '#c299ff', 
        backgroundColor: 'rgba(194, 153, 255, 0.4)', 
        borderWidth: 4, 
        fill: true, 
        tension: 0.4, 
        pointRadius: 0, 
        pointHitRadius: 0, 
        zIndex: 2, 
    },
      {
        data: [8, 22, 60, 35, 17, 24, 48, 38, 57, 22, 31, 38], 
        borderColor: '#4CAF5026', 
        borderWidth: 2, 
        borderDash: [10, 5], 
        fill: false, 
        tension: 0.4, 
        pointRadius: 0, 
        pointHitRadius: 0, 
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
        max: 60,
        ticks: {
          stepSize: 10,
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
          drawTicks: true,  
          color: '#DDDDDD', 
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
        bottom: 20,
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
