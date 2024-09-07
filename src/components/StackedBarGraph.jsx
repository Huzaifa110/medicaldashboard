import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import 'chartjs-plugin-datalabels';
import './StackedBarGraph.css';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const StackedBarGraph = () => {
  const getLabels = () => {
    return ['Jan\' 19', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan'];
  };

  const getData = () => {
    return {
      labels: getLabels(),
      datasets: [
        {
          label: 'blue',
          data: [44, 55, 41, 67, 22, 43],
          backgroundColor: 'rgba(0, 0, 255, 0.5)', 
          stack: 'stack1',
        },
        {
          label: 'green',
          data: [13, 23, 20, 8, 13, 27], 
          backgroundColor: 'rgba(0, 255, 0, 0.5)',
          stack: 'stack1',
        },
        {
          label: 'yellow',
          data: [11, 17, 15, 15, 21, 14], 
          backgroundColor: 'rgba(255, 255, 0, 0.5)', 
          stack: 'stack1',
        }
      ],
    };
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
      datalabels: {
        color: '#000000DE',
        font: {
          family: 'Helvetica',
          size: 12,
          weight: 700,
        },
        formatter: (value) => value,
        anchor: 'end',
        align: 'top',
        offset: 2,
        padding: 4,
        clamp: true,
        display: true, 
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: 'Helvetica',
            size: 11,
            weight: 400,
            color: '#000000DE',
          },
          padding: 10,
        },
      },
      y: {
        stacked: true,
        min: 0,
        max: 100, 
        ticks: {
          stepSize: 10,
          font: {
            family: 'Helvetica',
            size: 11,
            weight: 400,
            color: '#000000DE',
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
    layout: {
      padding: {
        bottom: 50,
      },
    },
  };

  return (
    <div className="graph-container">
      <Bar data={getData()} options={options} />
    </div>
  );
};

export default StackedBarGraph;
