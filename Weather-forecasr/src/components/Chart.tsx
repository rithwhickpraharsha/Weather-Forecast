
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';

Chart.register(CategoryScale);

interface ChartProps {
  labels: string[];
  data: number[];
  label: string
}

const MyChart: React.FC<ChartProps> = ({ labels, data, label }) => {
    console.log(labels,data,label);
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: data,
        backgroundColor: "darkviolet",
        borderColor: "darkviolet",
      },
    ],
  };

  
  const options = {
    plugins: {
      title: {
        display: true,
        text: `${label} Chart`,
        fontSize: 30,
      },
    },
    scales: {
        y: {
          ticks: {
            padding: 20, // Increase padding between y-axis and chart area
            beginAtZero: true, // Start y-axis from zero
          },
        },
      },
    maintainAspectRatio: false,
    responsive: true,
  };

  

  return (
   
      <div className='chart-container w-3/4 h-[400px] m-10' >
       
        <Line data={chartData} options={options} />
      </div>
   
    
  );
};

export default MyChart;
