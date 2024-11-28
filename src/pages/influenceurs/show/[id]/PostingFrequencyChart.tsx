import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface PostingFrequencyChartProps {
  data: number[]
  labels: string[]
}

const PostingFrequencyChart: React.FC<PostingFrequencyChartProps> = ({ data, labels }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Posts per Month',
        data,
        backgroundColor: 'rgba(98, 0, 234, 0.7)', // Purple color
        borderColor: 'rgba(98, 0, 234, 1)',
        borderWidth: 1
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Posting Frequency'
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `Posts: ${context.raw}`
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Posts'
        }
      }
    }
  }

  return <Bar data={chartData} options={options} height={500} />
}

export default PostingFrequencyChart
