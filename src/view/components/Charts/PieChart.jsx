import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: false,
  datasets: [
    {
      data: [12, 19, 3],
      backgroundColor: [
        '#4e73df',
        '#1cc88a',
        '#36b9cc',
      ],
      borderColor: [
        '#4e73df',
        '#1cc88a',
        '#36b9cc',
      ],
      borderWidth: 1,
    },
  ],
};

export function PieChart() {
  return <Pie data={data} />;
}
