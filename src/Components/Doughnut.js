import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
    ArcElement, Tooltip,Legend
);


export function DoughnutChart(){
    const labels = ["Direct","Referral","Social"];
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [55,30,15],       
        backgroundColor: [' rgb(67, 202, 240)','yellowgreen','rgb(24,156,156)'],
      },
    ],
  };
    return(
        <Doughnut data={data} />
    )
}
