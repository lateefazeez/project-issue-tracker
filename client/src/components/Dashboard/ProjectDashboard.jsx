import { useState } from "react";
import ProjectTable from "../Projects/ProjectTable";
import "./ProjectDashboard.scss";
import Chart from "../Charts/Chart";
import PersistentDrawerLeft from "../Navigations/Navigation2.0";

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
    loggedInUser,
    setLoggedInUser,
    projectUsers,
    logoutUser,
    userIdFromSession,
    userNameFromSession,
    data,
  } = props;

  return (
    <PersistentDrawerLeft
      logoutUser={logoutUser}
      loggedInUser={loggedInUser}
      setLoggedInUser={setLoggedInUser}
      userNameFromSession={userNameFromSession}
    >
      <div className="project--dashboard">
        {projects && (
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
            projectUsers={projectUsers}
            userIdFromSession={userIdFromSession}
            userNameFromSession={userNameFromSession}
            data={data}
          />
        )}
        {projects && (
          <div className="chart--group">
            <Chart
              className="chart"
              title={"Type"}
              colors={["#4D45B5", "#EF3C3C", "#D6A850"]}
              hoverColors={["#322C7C", "#982929", "#9A7B41"]}
              chartLabels={["Issue", "Bug", "Feature"]}
              chartData={[chartData.Issues, chartData.Bugs, chartData.Feature]}
            />
            <Chart
              className="chart"
              title={"Priority"}
              colors={["#EF3C3C", "#D6A850", "#6AD650"]}
              hoverColors={["#982929", "#866930", "#438433"]}
              chartLabels={["High", "Medium", "Low"]}
              chartData={[chartData.High, chartData.Medium, chartData.Low]}
            />
            <Chart
              className="chart"
              title={"Status"}
              colors={["#EF3C3C", "#4D45B5", "#D6A850"]}
              hoverColors={["#982929", "#322C7C", "#438433"]}
              chartLabels={["At Risk", "On Track"]}
              chartData={[chartData.AtRisk, chartData.OnTrack, chartData.New]}
            />
          </div>
        )}
      </div>
    </PersistentDrawerLeft>
  );
};

export default ProjectDashboard;
