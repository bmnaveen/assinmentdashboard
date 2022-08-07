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

 const LineChart = () => {
   const options = {
    responsive: true,
    maintainAspectRatio: false,
  
    tension:0.1,
    scales:{
      y:{
        beginAtZero:true,
        grid: {
          display: false
        },
        ticks:{
          stepSize:2
        }
      }
    },
    x:{
      grid: {
        display: false
      }
    }
  };
  
  const labels = [" ",'2014', '2016', '2018', '2020', '2022'];
  
   const data = {
    
    labels,
    datasets: [
      {
        fill: true,
        label: " ",
        data: [0,1.9,2.8,4.5,6.7,8.5,10],
        borderColor: 'rgb(152,226,231)',
        backgroundColor: 'rgba(227,242,243, 0.5)',
     
      },
    ],
  };
  return (
    
    <Line   options={options} data={data} />
  )
}

export default LineChart







