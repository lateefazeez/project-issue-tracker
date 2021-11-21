import {useEffect, useState } from 'react'
import axios from 'axios'
import './App.scss';
import ListMaker from './components/List';

function App() {
  
  useEffect(() => {
    axios.get('http://localhost:3000/projects')
    .then((data) => {
      console.log(data)
    })
  }, [])
  
  return (
    <div className="App">

      <div className="projects-box">
        <div className="projects-box-header">
          
        </div>
      <ListMaker decider ="Project"/>
      <div className="projects-box-footer">
          
        </div>
      </div>
    
    

    </div>
  );
}

export default App;
