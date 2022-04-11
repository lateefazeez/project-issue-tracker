/* eslint-disable no-undef */
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SelectProject from "./components/Projects/SelectProject";
import Signup from "./components/Signup/Signup";
import useApplication from "./components/hooks/useApplicationData";

import "./App.scss";
import PersistentDrawerTicket from "./components/Navigations/NavigationTickets";
import ProjectDashboard from "./components/Dashboard/ProjectDashboard";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const {
    data,
    projects,
    createProject,
    updateProject,
    deleteProject,
    tickets,
    users,
    userProjects,
    taskCreate,
    taskUpdate,
    taskDelete,
    getTicketId,
    getProjectId,
    userTicketCreate,
    userTicketDelete,
    TaskBar,
    TimeBar,
    TicketComments,
    TicketDevs,
    TicketTasks,
    LoneTicket,
    createTicket,
    updateTicket,
    deleteTicket,
    updateStatus,
    statusUpdate,
    isLoading,
    chartData,
    createUser,
    loginUser,
    commentCreate,
    commentDelete,
    userProjectCreate,
    userProjectDelete,
    logoutUser,
    RegisteredUser,
    getLoggedInUser,
    projectUsers,
  } = useApplication();

  const reload = () => window.location.reload();

  const userIdFromSession = window.sessionStorage.getItem("userId");
  const userNameFromSession = window.sessionStorage.getItem("userName");

  console.log("LoggedIn: ", loggedInUser);
  return (
    //  isLoading ? "Loading..." :
    <div className="App">
      <Routes>
        <Route path="/" element={<SelectProject />} />
        <Route
          path="/signup"
          element={
            <Signup
              createUser={createUser}
              loginUser={loginUser}
              logoutUser={logoutUser}
              RegisteredUser={RegisteredUser}
              getLoggedInUser={getLoggedInUser}
              reload={reload}
              users={users}
              loggedInUser={loggedInUser}
              setLoggedInUser={setLoggedInUser}
            />
          }
        />
        <Route
          path="/navigation"
          element={
            <ProjectDashboard
              getProjectId={getProjectId}
              projects={projects}
              tickets={tickets}
              users={users}
              user={users}
              chartData={chartData}
              createProject={createProject}
              updateProject={updateProject}
              deleteProject={deleteProject}
              userProjects={userProjects}
              reload={reload}
              isLoading={isLoading}
              logoutUser={logoutUser}
              loggedInUser={loggedInUser}
              projectUsers={projectUsers}
              setLoggedInUser={setLoggedInUser}
              userIdFromSession={userIdFromSession}
              userNameFromSession={userNameFromSession}
              data={data}
            />
          }
        />
        <Route
          path="/tickets"
          element={
            <PersistentDrawerTicket
              data={data}
              taskCreate={taskCreate}
              taskUpdate={taskUpdate}
              taskDelete={taskDelete}
              getTicketId={getTicketId}
              userTicketCreate={userTicketCreate}
              userTicketDelete={userTicketDelete}
              TaskBar={TaskBar}
              TimeBar={TimeBar}
              TicketComments={TicketComments}
              TicketDevs={TicketDevs}
              TicketTasks={TicketTasks}
              LoneTicket={LoneTicket}
              createTicket={createTicket}
              updateTicket={updateTicket}
              deleteTicket={deleteTicket}
              updateStatus={updateStatus}
              statusUpdate={statusUpdate}
              commentCreate={commentCreate}
              commentDelete={commentDelete}
              userProjectCreate={userProjectCreate}
              userProjectDelete={userProjectDelete}
              loggedInUser={loggedInUser}
              setLoggedInUser={setLoggedInUser}
              logoutUser={logoutUser}
              userIdFromSession={userIdFromSession}
              userNameFromSession={userNameFromSession}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
