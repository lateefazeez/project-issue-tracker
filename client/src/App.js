import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import './App.scss';
import SelectProject from './components/SelectProject';
import Signup from './components/Signup';
import TicketPage from './components/TicketPage'
import PersistentDrawerLeft from './components/Navigation2.0'
import { getTicketByCategories, getTicketByPriority, getTicketByStatus } from './helpers/getAllTicketCategories'

function App() {

  const [data, setData] = useState({
    projects: [],
    tickets: [],
    users: [],
    tasks: [],
    comments: [],
    userTickets: [],
    userProjects: [],
  })



  useEffect(() => {

    const allProjectsUrl = "http://localhost:3000/projects"
    const allTicketsUrl = "http://localhost:3000/tickets"
    const allUsersUrl = "http://localhost:3000/users"
    const allTasksUrl = "http://localhost:3000/tasks"
    const allCommentsUrl = "http://localhost:3000/comments"
    const allUserTicketsUrl = "http://localhost:3000/users_tickets"
    const allUserProjectsUrl = "http://localhost:3000/user_projects"

    const getAllProjects = axios.get(allProjectsUrl)
    const getAllTickets = axios.get(allTicketsUrl)
    const getAllUsers = axios.get(allUsersUrl)
    const getAllTasks = axios.get(allTasksUrl)
    const getAllComments = axios.get(allCommentsUrl)
    const getAllUserTickets = axios.get(allUserTicketsUrl)
    const getAllUserProjects = axios.get(allUserProjectsUrl)

    Promise.all([getAllProjects, getAllTickets, getAllUsers, getAllTasks, getAllComments, getAllUserTickets, getAllUserProjects])
      .then((response) => {
        console.log(response[2].data)
        setData(prev => ({...prev, projects: response[0].data.reverse(), tickets: response[1].data, users: response[2].data, tasks: response[3].data, comments: response[4].data, userTickets: response[5].data, userProjects: response[6].data}))
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const chartData = {
    Issues : getTicketByCategories(data, "issue"),
    FeatureRequests : getTicketByCategories(data, "feature request"),
    Bugs : getTicketByCategories(data, "bug"),
    Immediate : getTicketByPriority(data, "immediate"),
    High : getTicketByPriority(data, "high"),
    Medium : getTicketByPriority(data, "medium"),
    Low : getTicketByPriority(data, "low"),
    AtRisk : getTicketByStatus(data, "at risk"),
    OnTrack : getTicketByStatus(data, "ontrack"),
    New : getTicketByStatus(data, "new"),
    ProjectStatus : getTicketByStatus(data, "at risk")

  }
  
  const createProject = (project) => {

    return axios.post("http://localhost:3000/projects", { title: project.title, description: project.description })
    .then(response => {
      setData(prevProjects => ({...prevProjects, projects: [...prevProjects.projects, response.data]}))
    })
  }

  const updateProject = (project, id) => {

    return axios.put(`http://localhost:3000/projects/${id}`, { project })
    .then(response => {
      const filteredProjects = data.projects.filter((project) => {
        return project.id !== response.data.id
      })
      setData(prev => ({...prev, projects: [...filteredProjects, response.data]}))
    })
  }

  const deleteProject = (projectId) => {

    return axios.delete(`http://localhost:3000/projects/${projectId}`)
    .then(response => {
      const filteredProjects = data.projects.filter((project) => {
        return project.id !== projectId
      })
      setData(prev => ({...prev, projects: [...filteredProjects]}))
    })
  }


  return (
    <div className="App">
      <Routes>
        <Route 
          path="/" 
          element={
            <SelectProject/>
            } 
        />
        <Route path="/signup" element={<Signup/>} />
        <Route 
          path="/navigation" 
          element={
            <PersistentDrawerLeft 
              projects={data.projects}
              tickets={data.tickets} 
              user={data.users} 
              chartData={chartData} 
              createProject={createProject} 
              updateProject={updateProject} 
              deleteProject={deleteProject}
            />} />
        <Route 
          path="/tickets" 
          element={
            <TicketPage 
              data={data}
              />
              } />
      </Routes>
      
    </div>
  );
}

export default App;
