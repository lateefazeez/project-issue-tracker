import { useState, useEffect } from "react";
import axios from 'axios';
import ProjectTable from "./ProjectTable";

import './ProjectDashboard.scss'
import Chart from "./Chart";
import { getTicketByCategories, getTicketByPriority, getTicketByStatus } from './helpers/getAllTicketCategories'

const ProjectDashboard = () => {
  const [state, setState] = useState({
    projects: [],
    tickets: []
  })
  
  useEffect(() => {

    const allProjectsUrl = "http://localhost:3000/projects"
    const allTicketsUrl = "http://localhost:3000/tickets"

    const getAllProjects = axios.get(allProjectsUrl)
    const getAllTickets = axios.get(allTicketsUrl)

    Promise.all([getAllProjects, getAllTickets])
      .then((response) => {
        setState(prevProjects => ({...prevProjects, projects: response[0].data.reverse(), tickets: response[1].data.reverse()}))
      })
  }, [])

  const createProject = (project) => {

    return axios.post("http://localhost:3000/projects", { title: project.title, description: project.description })
    .then(response => {
      // const returnedProjects = [...state.projects, response.data]
      console.log(response.data)
      setState(prevProjects => ({...prevProjects, projects: [response.data, ...prevProjects.projects]}))
    })
  }

  const Issues = getTicketByCategories(state, "issue")
  const FeatureRequests = getTicketByCategories(state, "feature request")
  const Bugs = getTicketByCategories(state, "bug")
  const Immediate = getTicketByPriority(state, "immediate")
  const High = getTicketByPriority(state, "high")
  const Medium = getTicketByPriority(state, "medium")
  const Low = getTicketByPriority(state, "low")
  const AtRisk = getTicketByStatus(state, "at risk")
  const OnTrack = getTicketByStatus(state, "ontrack")
  const New = getTicketByStatus(state, "new")

  return ( 
    <div className="project--dashboard">
     { state.projects && <ProjectTable projects={state.projects} createProject={ createProject} />}
     { state.projects && <div className="chart--group">
          <Chart
            title={"Type"}
            colors={[
              '#4D45B5',
              '#EF3C3C',
              '#D6A850'
            ]}
            chartLabels={['Issue', 'Bug', 'Feature Request']}
            chartData={[Issues, Bugs, FeatureRequests]}
          />
          <Chart 
            title={"Priority"}
            colors={[
              '#4D45B5',
              '#EF3C3C',
              '#D6A850',
              '#6AD650'
            ]}
            chartLabels={['Immediate', 'High', 'Medium', 'Low']}
            chartData={[Immediate, High, Medium, Low]}
          />
          <Chart 
            title={"Status"}
            colors={[
              '#EF3C3C',
              '#4D45B5',
              '#D6A850'
            ]}
            chartLabels={['At Risk', 'On Track', 'New']}
            chartData={[AtRisk, OnTrack, New]}
          />
        </div>}
        
        
        
    </div>
   );
}
 
export default ProjectDashboard;