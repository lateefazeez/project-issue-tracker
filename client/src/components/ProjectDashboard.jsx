import { useState } from "react"
import ProjectTable from "./ProjectTable";
import './ProjectDashboard.scss'
import Chart from "./Chart";


const ProjectDashboard = (props) => {
  
  const { 
    chartData, 
    projects,
    tickets,
    users, 
    createProject, 
    updateProject,
    deleteProject,
    addTeamMember,
    userProjects,
    reload,
    loggedInUser
  } = props

  return ( 
 
      <div className="project--dashboard">
          { projects && 
            <ProjectTable 
              projects={projects}
              tickets={tickets}
              users={users} 
              projectStatus={chartData.ProjectStatus} 
              createProject={createProject} 
              updateProject={updateProject} 
              deleteProject={deleteProject}
              addTeamMember={addTeamMember}
              userProjects={userProjects}
              reload={reload}
              loggedInUser={loggedInUser}
            />
            }

          { projects && <div className="chart--group">
                <Chart className="chart"
                  title={"Type"}
                  colors={[
                    '#4D45B5',
                    '#EF3C3C',
                    '#D6A850'
                  ]}
                  chartLabels={['Issue', 'Bug', 'Feature Request']}
                  chartData={[chartData.Issues, chartData.Bugs, chartData.FeatureRequests]}
                />
                <Chart className="chart"
                  title={"Priority"}
                  colors={[
                    '#4D45B5',
                    '#EF3C3C',
                    '#D6A850',
                    '#6AD650'
                  ]}
                  chartLabels={['High', 'Medium', 'Low']}
                  chartData={[chartData.Immediate, chartData.High, chartData.Medium, chartData.Low]}
                />
                <Chart className="chart"
                  title={"Status"}
                  colors={[
                    '#EF3C3C',
                    '#4D45B5',
                    '#D6A850'
                  ]}
                  chartLabels={['At Risk', 'On Track']}
                  chartData={[chartData.AtRisk, chartData.OnTrack, chartData.New]}
                />
              </div>}
          </div>
 
   );
}
 
export default ProjectDashboard;