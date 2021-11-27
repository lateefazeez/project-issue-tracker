
import { Routes, Route } from "react-router-dom";
import SelectProject from "./components/SelectProject"
import Signup from "./components/Signup"
import PersistentDrawerLeft from "./components/Navigation2.0"
import TicketPage from "./components/TicketPage";
import useApplication from "./components/hooks/useApplicationData";


import "./App.scss"

function App() {

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

    chartData
  } = useApplication()

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SelectProject />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/navigation"
          element={
            <PersistentDrawerLeft
              projects={projects}
              tickets={tickets}
              users={users} 
              user={users} 
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
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;




