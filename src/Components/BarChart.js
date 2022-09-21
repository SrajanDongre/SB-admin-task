import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  export function BarChart(){
    const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
    const data = {
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: [4215,5312,6251,7841,9821,14984],
          backgroundColor: 'rgb(57, 142, 240)' ,
          // yAxisID: 'y',
        },
      ],
    };
      return(
          <Bar
          data={data} />
      )
  }