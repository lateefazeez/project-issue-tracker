import {useEffect, useState } from 'react'
import axios from 'axios'
import './App.scss';
import TicketListItem from './components/TicketListItem';

function App() {
  
  useEffect(() => {
    axios.get('http://localhost:3000/projects')
    .then((data) => {
      console.log(data)
    })
  }, [])
  
  return (
    <div className="App">
    <TicketListItem/>
    

    </div>
  );
}

export default App;
