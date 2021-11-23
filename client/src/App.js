import {useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, Link } from "react-router-dom";
import './App.scss';
import SelectProject from './components/SelectProject';
import Signup from './components/Signup';
import ProjectDashboard from './components/ProjectDashboard';
import TicketPage from './components/TicketPage'
import PersistentDrawerLeft from './components/Navigation2.0'





function App() {

  const [projects, setProjects] = useState([])
  const [tickets, setTickets] = useState([])
  
  useEffect(() => {

    const allProjectsUrl = "http://localhost:3000/projects"
    const allTicketsUrl = "http://localhost:3000/tickets"

    const getAllProjects = axios.get(allProjectsUrl)
    const getAllTickets = axios.get(allTicketsUrl)

    Promise.all([getAllProjects, getAllTickets])
      .then((response) => {
        console.log(response[0].data)
        console.log(response[1].data)
        setProjects(prevProjects => ({...prevProjects, projects: response[0].data}))
      })
  }, [])
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SelectProject />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/navigation" element={<PersistentDrawerLeft />} />
        <Route path="/tickets" element={<TicketPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
