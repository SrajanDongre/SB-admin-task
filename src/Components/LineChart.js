import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);


export function LineChart(){
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',"Aug","Sep","Oct","Nov","Dec"];
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [0,10000,5000,15000,10000,20000,15000,25000,20000,30000,25000,40000],
        borderColor: 'rgb(57, 142, 240)',
        backgroundColor: 'rgb(67, 202, 240)' ,
        // yAxisID: 'y',
      },
    ],
  };
    return(
        <Line
        data={data} />
    )
}