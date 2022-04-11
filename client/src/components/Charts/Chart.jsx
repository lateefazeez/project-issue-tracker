import { Doughnut } from 'react-chartjs-2'
import { Box } from '@mui/material';
import './Chart.scss'

const Chart = (props) => {
  const { title, colors, chartLabels, chartData, hoverColors } = props

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  const state = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: colors,
        hoverBackgroundColor: hoverColors,
        data: chartData
      }
    ]
  }
  return (
      <div className="chart_card">
        <div className="chart_header">
          <h4>Issues by {title}</h4>
        </div>
        <div className="chart-container">
        <Doughnut
          data={state}
          options={{
          maintainAspectRatio: false,
          plugins: {
            legend:{
              display:true,
              position:'right',
              fontSize:20,
              font: {
                size: 10
              }
            }
          },
        }}
        />
        </div> 
      </div>
   );
}
 
export default Chart;