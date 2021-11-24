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
  
  const [data ,setData] = useState({
    projects: [],
    tickets: [],
    users: [],
    tasks: [],
    comments: [],
    userTickets: []
  })

  console.log(data)

  useEffect(() => {

    const allProjectsUrl = "http://localhost:3000/projects"
    const allTicketsUrl = "http://localhost:3000/tickets"
    const allUsersUrl = "http://localhost:3000/users"
    const allTasksUrl = "http://localhost:3000/tasks"
    const allCommentsUrl = "http://localhost:3000/comments"
    const allUserTicketsUrl = "http://localhost:3000/users_tickets"

    const getAllProjects = axios.get(allProjectsUrl)
    const getAllTickets = axios.get(allTicketsUrl)
    const getAllUsers = axios.get(allUsersUrl)
    const getAllTasks = axios.get(allTasksUrl)
    const getAllComments = axios.get(allCommentsUrl)
    const getAllUserTickets = axios.get(allUserTicketsUrl)

    Promise.all([getAllProjects, getAllTickets, getAllUsers, getAllTasks, getAllComments, getAllUserTickets])
      .then((response) => {
        setData(prev => ({...prev, projects: response[0].data, tickets: response[1].data, users: response[2].data, tasks: response[3].data, comments: response[4].data, userTickets: response[5].data}))
      })
      .catch((error) => {
        console.error(error)
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
