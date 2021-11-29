
import { Routes, Route } from "react-router-dom";
import SelectProject from "./components/SelectProject"
import Signup from "./components/Signup"
import PersistentDrawerLeft from "./components/Navigation2.0"
import TicketPage from "./components/TicketPage";
import useApplication from "./components/hooks/useApplicationData";


import "./App.scss"
import PersistentDrawerTicket from "./components/NavigationTickets";
import ProjectDashboard from "./components/ProjectDashboard";

function App() {

  // const [isLoading, setIsLoading] = useState("true")

  const {
    data,
    projects,
    createProject,
    updateProject,
    deleteProject,
    tickets,
    users,
    tasks,
    comments,
    userTickets,
    userProjects,
    taskCreate,
    taskUpdate,
    taskDelete,
    getTicketId,
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
    getLoggedInUser
  } = useApplication()

  const reload = () => window.location.reload()

  const loggedInUser = window.sessionStorage.getItem("userName")
  

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
            />
            } />
        <Route
          path="/navigation"
          element={
            <ProjectDashboard
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
            /> } />
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
            />
          }
        />
      </Routes>

    </div>
    
    
  );
}

export default App;




