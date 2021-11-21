import { Doughnut } from 'react-chartjs-2'
import { Card, CardHeader, CardActions, CardContent, Button, Typography, Box } from '@mui/material';
import './Chart.scss'
import { Fragment } from 'react';

const Chart = () => {

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  const state = {
    labels: ['Issue', 'Bug', 'Feature Request'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#4D45B5',
          '#EF3C3C',
          '#D6A850'
        ],
        hoverBackgroundColor: [
        '#4D45B5',
        '#B42D2D',
        '#A5813D'
        ],
        data: [65, 59, 80]
      }
    ]
  }
  return (
    <Fragment>
      <div className="chart_card">
        <div className="chart_header">
          <h4>Issues by Type</h4>
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
      <div className="chart_card">
        <div className="chart_header">
          <h4>Issues by Type</h4>
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
    
    </Fragment>
   );
}
 
export default Chart;