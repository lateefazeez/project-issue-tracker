import {useEffect, useState } from 'react'
import axios from 'axios'
import './App.scss';

function App() {
  
  useEffect(() => {
    axios.get('http://localhost:3000/projects')
    .then((data) => {
      console.log(data)
    })
  }, [])
  
  return (
    <div className="App">
    <h1>data.data</h1>
    </div>
  );
}

export default App;
