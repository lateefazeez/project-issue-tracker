import {useEffect, useState } from 'react'
import axios from 'axios'
import './App.scss';
import TicketPage from './components/TicketPage';

function App() {
  
  useEffect(() => {
    axios.get('http://localhost:3000/projects')
    .then((data) => {
      console.log(data)
    })
  }, [])
  
  return (
    <div className="App">
      <TicketPage/>
    </div>
  );
}

export default App;
