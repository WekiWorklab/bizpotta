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

  export const options = {
    responsive: true,
    plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: false,
          text: 'Chart.js Line Chart',
        },
      },
  };

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', "Aug", 'Sep', 'Oct', 'Nov', 'Dec'];

  export const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: '',
        data: [4,6,2,8,14,10,6,8,18,4,20,14],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: '#DCE6F3',
      },
    ],
  };

  const AreaChart = () => {
    return <Line options={options} data={data} />
  }

  export default AreaChart