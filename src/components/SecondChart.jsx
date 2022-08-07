import React from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

 const SecondChart = () => {
   const options = {
    responsive: true,
    maintainAspectRatio: false,
    tension:1,
    legend: {
        display: false
    },
    scales:{
        y:{
          beginAtZero:true,
          ticks:{
            stepSize:20
          },
          grid: {
            display: false
          }
        },
        x:{
            grid: {
              display: false
            }
          }
      }
    
  };
  
  const labels = [" ",'2017', '2018', '2019', '2020', '2022'];
  
   const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: " ",
        data: [0,20,19.2,21],
        borderColor: 'rgb(152,226,231)',
        backgroundColor: 'rgba(227,242,243, 0.5)',
     
      },
    ],
  };
  return (
    
    <Line   options={options} data={data} />
  )
}

export default SecondChart







