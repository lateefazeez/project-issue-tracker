import {useEffect, useState } from 'react'
import axios from 'axios'
import './App.scss';
import TicketListItem from './components/TicketListItem';
import Chart from './components/Chart';
import ProgressBar from './components/ProgressBar';

function App() {
  
  useEffect(() => {
    axios.get('http://localhost:3000/projects')
    .then((data) => {
      console.log(data)
    })
  }, [])
  
  return (
    <div className="App">
    {/* <TicketListItem/> */}
    <Chart />
    <ProgressBar />
    </div>
  );
}

export default App;
