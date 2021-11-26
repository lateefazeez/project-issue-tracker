import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import SelectProject from "./components/SelectProject";
import Signup from "./components/Signup";
import TicketPage from "./components/TicketPage";
import PersistentDrawerLeft from "./components/Navigation2.0";
import {
  getTicketByCategories,
  getTicketByPriority,
  getTicketByStatus,
} from "./helpers/getAllTicketCategories";
import {
  getTicketById,
  getTasksByTicketId,
  getDevsByTicketId,
  getCommentsByTicketId,
} from "./helpers/ticketPageHelpers";
import {
  TaskProgressCalulator,
  TicketProgressCalulator,
} from "./helpers/barChartHelpers";

function App() {
  const [data, setData] = useState({
    projects: [],
    tickets: [],
    users: [],
    tasks: [],
    comments: [],
    userTickets: [],
    userProjects: [],
  });

  useEffect(() => {
    const allProjectsUrl = "http://localhost:3000/projects";
    const allTicketsUrl = "http://localhost:3000/tickets";
    const allUsersUrl = "http://localhost:3000/users";
    const allTasksUrl = "http://localhost:3000/tasks";
    const allCommentsUrl = "http://localhost:3000/comments";
    const allUserTicketsUrl = "http://localhost:3000/users_tickets";
    const allUserProjectsUrl = "http://localhost:3000/user_projects";

    const getAllProjects = axios.get(allProjectsUrl);
    const getAllTickets = axios.get(allTicketsUrl);
    const getAllUsers = axios.get(allUsersUrl);
    const getAllTasks = axios.get(allTasksUrl);
    const getAllComments = axios.get(allCommentsUrl);
    const getAllUserTickets = axios.get(allUserTicketsUrl);
    const getAllUserProjects = axios.get(allUserProjectsUrl);

    Promise.all([
      getAllProjects,
      getAllTickets,
      getAllUsers,
      getAllTasks,
      getAllComments,
      getAllUserTickets,
      getAllUserProjects,
    ])
      .then((response) => {
        console.log(response[2].data);
        setData((prev) => ({
          ...prev,
          projects: response[0].data.reverse(),
          tickets: response[1].data,
          users: response[2].data,
          tasks: response[3].data,
          comments: response[4].data,
          userTickets: response[5].data,
          userProjects: response[6].data,
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const chartData = {
    Issues : getTicketByCategories(data, "issue"),
    FeatureRequests : getTicketByCategories(data, "feature request"),
    Bugs : getTicketByCategories(data, "bug"),
    Immediate : getTicketByPriority(data, "immediate"),
    High : getTicketByPriority(data, "high"),
    Medium : getTicketByPriority(data, "medium"),
    Low : getTicketByPriority(data, "low"),
    AtRisk : getTicketByStatus(data, "at risk"),
    OnTrack : getTicketByStatus(data, "on track"),
    New : getTicketByStatus(data, "new"),
    ProjectStatus : getTicketByStatus(data, "at risk")
  };
  

  const [LoneTicket, setLoneTicket] = useState([]);
  const [TicketTasks, setTicketTasks] = useState([]);
  const [TicketDevs, setTicketDevs] = useState([]);
  const [TicketComments, setTicketComments] = useState([]);
  const [TimeBar, setTimeBar] = useState(0);
  const [TaskBar, setTaskBar] = useState(0);

  const userTicketCreate = (userId) => {

    const ticketId = LoneTicket[0].id

    if (ticketId) {
    return axios
      .post("http://localhost:3000/users_tickets", {
        users_id: userId,
        tickets_id: ticketId
      })
      .then((response) => {
        setData((prev) => {

          const filteredTasks = prev.userTickets.filter((userTicket) => {
            return userTicket.id !== response.data.id;
          });
         
          const newData = {...prev,
            userTickets: [...filteredTasks, response.data]}

           setTicketDevs(getDevsByTicketId(newData, ticketId));
           return newData
      });
    });
  }
  };

  const userTicketDelete = (id) => {
    return axios
      .delete(`http://localhost:3000/users_tickets/${id}`)
      .then((response) => {
        
        setData((prev) => {

          const filteredTasks = data.userTickets.filter((userTicket) => {
            return userTicket.id !== id;
          });

         const newData = { ...prev, 
          userTickets: [...filteredTasks]};
           
           const ticketId = LoneTicket[0].id
           setTicketDevs(getDevsByTicketId(newData, ticketId));
           return newData
      });
    });
  };

  const createTicket = (ticket) => {

    return axios.post("http://localhost:3000/tickets", { title: ticket.title, description: ticket.description, category: ticket.category, priority: ticket.priority, status: ticket.status, plan_duration: ticket.time, start_date: ticket.start, end_date: ticket.end_date, projects_id: ticket.projects_id, users_id: ticket.users_id })
    .then(response => {
      setData(prevTickets=> ({...prevTickets, tickets: [...prevTickets.tickets, response.data]}))
    })
  }

  const updateTicket = (ticket, id) => {

    return axios.put(`http://localhost:3000/tickets/${id}`, { ticket })
    .then(response => {
      const filteredTickets = data.tickets.filter((ticket) => {
        return ticket.id !== response.data.id
      })
      setData(prev => ({...prev, tickets: [...filteredTickets, response.data]}))
    })
  }

  const deleteTicket = (ticketId) => {

    return axios.delete(`http://localhost:3000/tickets/${ticketId}`)
    .then(response => {
      const filteredTickets = data.projects.filter((ticket) => {
        return ticket.id !== ticketId
      })
      setData(prev => ({...prev, tickets: [...filteredTickets]}))
    })
  }

  const taskCreate = (task, ticketId) => {
    return axios
      .post("http://localhost:3000/tasks", {
        title: task.title,
        'complete?': false,
        tickets_id: ticketId
      })
      .then((response) => {
        setData((prev) => {

          const filteredTasks = prev.tasks.filter((task) => {
            return task.id !== response.data.id;
          });
         
          const newData = {...prev,
          tasks: [...filteredTasks, response.data]}

        const ticketId = LoneTicket[0].id
           setTicketTasks(getTasksByTicketId(newData, ticketId));
           setTaskBar(TaskProgressCalulator(getTasksByTicketId(newData, ticketId)));
           return newData
      });
    });
  };

  const taskUpdate = (props, props2) => {

    return axios
      .put(`http://localhost:3000/tasks/${props}}`, { "complete?": props2 })
      .then((response) => {

        setData((prev) => {

          const filteredTasks = prev.tasks.filter((task) => {
            return task.id !== response.data.id;
          });

         const newData = {...prev,
          tasks: [...filteredTasks, response.data]}

          const ticketId = LoneTicket[0].id
          setTaskBar(TaskProgressCalulator(getTasksByTicketId(newData, ticketId)));
          return newData

        });

      });
  };

  const taskDelete = (id) => {
    return axios
      .delete(`http://localhost:3000/tasks/${id}`)
      .then((response) => {
        
        setData((prev) => {

          const filteredTasks = data.tasks.filter((task) => {
            return task.id !== id;
          });

         const newData = { ...prev, 
          tasks: [...filteredTasks]};
           
           const ticketId = LoneTicket[0].id
           setTicketTasks(getTasksByTicketId(newData, ticketId));
           setTaskBar(TaskProgressCalulator(getTasksByTicketId(newData, ticketId)));
           return newData
      });
    });
  };

  const getTicketId = (id) => {

    setLoneTicket(getTicketById(data, id));
    setTicketTasks(getTasksByTicketId(data, id));
    setTicketDevs(getDevsByTicketId(data, id));
    setTicketComments(getCommentsByTicketId(data, id));
    setTimeBar(TicketProgressCalulator(getTicketById(data, id)));
    setTaskBar(TaskProgressCalulator(getTasksByTicketId(data, id)));

  };

  const createProject = (project) => {
    return axios.post("http://localhost:3000/projects", { project })
    .then(response => {
      setData(prevProjects => ({...prevProjects, projects: [...prevProjects.projects, response.data]}))
      return response.data
    })

  }

  const addTeamMember = (team, projectId) => {
    const headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
    }

    team.forEach(team => {
      return axios.post("http://localhost:3000/user_projects", { users_id: team, projects_id: projectId, headers: headers })
      .then(response => {
        console.log("RESPONSE", response.data)
      })

    })
  }
    const updateProject = (project, id) => {
      return axios
        .put(`http://localhost:3000/projects/${id}`, { project })
        .then((response) => {
          const filteredProjects = data.projects.filter((project) => {
            return project.id !== response.data.id;
          });
          setData((prev) => ({
            ...prev,
            projects: [...filteredProjects, response.data],
          }));
        });
    };
  
    const deleteProject = (projectId) => {
      return axios
        .delete(`http://localhost:3000/projects/${projectId}`)
        .then((response) => {
          const filteredProjects = data.projects.filter((project) => {
            return project.id !== projectId;
          });
          setData((prev) => ({ ...prev, projects: [...filteredProjects] }));
        });
    };


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SelectProject />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/navigation"
          element={
            <PersistentDrawerLeft
              projects={data.projects}
              tickets={data.tickets}
              users={data.users} 
              user={data.users} 
              chartData={chartData} 
              createProject={createProject} 
              updateProject={updateProject} 
              deleteProject={deleteProject}
              addTeamMember={addTeamMember}
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
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;