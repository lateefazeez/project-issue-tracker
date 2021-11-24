import ProjectTable from "./ProjectTable";
import {useEffect, useState} from 'react';
import axios from 'axios';

import './ProjectDashboard.scss'
import Chart from "./Chart";

const ProjectDashboard = () => {
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
    <div className="project--dashboard">
        <ProjectTable data={data} />
        <div className="chart--group">
          <Chart
            title={"Type"}
            colors={[
              '#4D45B5',
              '#EF3C3C',
              '#D6A850'
            ]}
            chartLabels={['Issue', 'Bug', 'Feature Request']}
            chartData={[65, 59, 80]}
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
            chartData={[65, 59, 40, 40]}
          />
          <Chart 
            title={"Status"}
            colors={[
              '#4D45B5',
              '#EF3C3C',
              '#D6A850'
            ]}
            chartLabels={['At Risk', 'On Track', 'New']}
            chartData={[65, 59, 80]}
          />
        </div>
        
    </div>
   );
}
 
export default ProjectDashboard;