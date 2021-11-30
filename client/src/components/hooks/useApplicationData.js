import { useState, useEffect } from "react";
import axios from "axios";
import {
  getTicketByCategories,
  getTicketByPriority,
  getTicketByStatus,
} from "../../helpers/getAllTicketCategories";
import {
  getTicketById,
  getTasksByTicketId,
  getDevsByTicketId,
  getCommentsByTicketId,
  updateStatus,
} from "../../helpers/ticketPageHelpers";
import {
  TaskProgressCalulator,
  TicketProgressCalulator,
} from "../../helpers/barChartHelpers"




export default function Application () {
  const [data, setData] = useState({
    projects: [],
    tickets: [],
    users: [],
    tasks: [],
    comments: [],
    userTickets: [],
    userProjects: [],
    isLoading: true
  });
  const [loggedUser, setLoggedUser] = useState(null)

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
        setData((prev) => ({
          ...prev,
          projects: response[0].data.reverse(),
          tickets: response[1].data,
          users: response[2].data,
          tasks: response[3].data,
          comments: response[4].data,
          userTickets: response[5].data,
          userProjects: response[6].data,
          isLoading: false
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const chartData = {
    Issues: getTicketByCategories(data, "issue"),
    Feature: getTicketByCategories(data, "feature"),
    Bugs: getTicketByCategories(data, "bug"),
    Immediate: getTicketByPriority(data, "immediate"),
    High: getTicketByPriority(data, "high"),
    Medium: getTicketByPriority(data, "medium"),
    Low: getTicketByPriority(data, "low"),
    AtRisk: getTicketByStatus(data, "at risk"),
    OnTrack: getTicketByStatus(data, "on track"),
    New: getTicketByStatus(data, "new"),
    ProjectStatus: getTicketByStatus(data, "at risk"),
  };


  const createProject = (project) => {
    return axios.post("http://localhost:3000/projects", { project, team: project.team })
    .then(response => {
      console.log("RESPONSE: ", response.data)
      setData(prev => ({...prev, projects: [...prev.projects, response.data.project], userProjects: [...prev.userProjects, ...response.data.user_projects]}))
      return response.data.project
      
    })
  }
  
  const updateProject = (project, id) => {
    return axios
      .put(`http://localhost:3000/projects/${id}`, { project, team: project.team })
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
        setData((prev) => ({ ...prev, projects: [...filteredProjects] }))
      });
  };

  const [LoneTicket, setLoneTicket] = useState([]);
  const [TicketTasks, setTicketTasks] = useState([]);
  const [TicketDevs, setTicketDevs] = useState([]);
  const [TicketComments, setTicketComments] = useState([]);
  const [TimeBar, setTimeBar] = useState(0);
  const [TaskBar, setTaskBar] = useState(0);
  

  const getTicketId = (id) => {

    setLoneTicket(getTicketById(data, id));
    setTicketTasks(getTasksByTicketId(data, id));
    setTicketDevs(getDevsByTicketId(data, id));
    setTicketComments(getCommentsByTicketId(data, id));
    setTimeBar(TicketProgressCalulator(getTicketById(data, id)));
    setTaskBar(TaskProgressCalulator(getTasksByTicketId(data, id)));

  };

  const userTicketCreate = (userId) => {


    if (!LoneTicket[0]) {
      return
    }
    const ticketId = LoneTicket[0].id
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

    return axios.post("http://localhost:3000/tickets", { title: ticket.title, description: ticket.description, category: ticket.category, priority: ticket.priority, status: ticket.status, plan_duration: ticket.duration, start_date: ticket.start_date, end_date: ticket.end_date, projects_id: ticket.projects_id, users_id: ticket.users_id })
    .then(response => {
      console.log("MATT'S DATA: ", response)
      setData(prev=> ({...prev, tickets: [...prev.tickets, response.data.ticket], users: [...prev.users, response.data.users], userTickets: [...prev.userTickets, response.data.userProjects]}))
    })
  }




  const updateTicket = (ticket, id) => {

    return axios.put(`http://localhost:3000/tickets/${id}`, { ticket })
    .then(response => {

      setData(prev => {

      const filteredTickets = data.tickets.filter((ticket) => {
        return ticket.id !== response.data.id
      });

     const newData = {...prev,
       tickets: [...filteredTickets, response.data]};

       const ticketId = LoneTicket[0].id
          setLoneTicket(getTicketById(newData, ticketId));
          setTimeBar(TicketProgressCalulator(getTicketById(newData, ticketId)));
           return newData
    });
  });
  };

  const deleteTicket = (ticketId) => {

    return axios.delete(`http://localhost:3000/tickets/${ticketId}`)
    .then(response => {

      setData(prev => {
        const filteredTickets = prev.tickets.filter((ticket) => {
          return ticket.id !== ticketId
          });

          const newData ={...prev, 
            tickets: [...filteredTickets]}

            getTicketId(null)
            return newData
    });
  });
  };

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

  const statusUpdate = (id, stat) => {

    return axios.put(`http://localhost:3000/tickets/${id}`, { status: stat })
    .then(response => {

      setData(prev => {

      const filteredTickets = data.tickets.filter((ticket) => {
        return ticket.id !== response.data.id
      });

     const newData = {...prev,
       tickets: [...filteredTickets, response.data]};
           return newData
    });
  });

  }

  const commentCreate = (commentText) => {

    return axios
      .post("http://localhost:3000/comments", {
        users_id: commentText.users_id,
        tickets_id: commentText.tickets_id,
        message: commentText.message

      })
      .then((response) => {
        setData((prev) => {

          const filteredCommentss = prev.comments.filter((comment) => {
            return Comment.id !== response.data.id;
          });
         
          const newData = {...prev,
            comments: [...filteredCommentss, response.data]}
            setTicketComments(getCommentsByTicketId(newData, commentText.tickets_id));
           return newData
      });
    });
  };

  const commentDelete = (id) => {
    return axios
      .delete(`http://localhost:3000/comments/${id}`)
      .then((response) => {
        
        setData((prev) => {

          const filteredComments = data.comments.filter((comment) => {
            return comment.id !== id;
          });

         const newData = { ...prev, 
          comments: [...filteredComments]};
           
           const ticketId = LoneTicket[0].id
           setTicketComments(getCommentsByTicketId(newData, ticketId));
           return newData
      });
    });
  };

  const userProjectCreate = (userId, projId) => {

    return axios
      .post("http://localhost:3000/user_projects", {
        users_id: userId,
        projects_id: projId
      })
      .then((response) => {
        setData((prev) => {

          const filteredUserProjects = prev.userProjects.filter((userProject) => {
            return userProject.id !== response.data.id;
          });
         
          const newData = {...prev,
            userProjects: [...filteredUserProjects, response.data]}
           return newData
      });
    });
  };

  const createUser = (user) => {
    return axios.post("http://localhost:3000/registrations", { first_name: user.first_name, last_name: user.last_name, email: user.email, password: user.password })
    .then(response => {
      setData(prev => ({...prev, users: [...prev.users, response.data]}))
      return response.data
    })
  }

  

  const loginUser = (user) => {
    return axios.post("http://localhost:3000/sessions", { user })
    .then(result => {
      setData(prev => ({...prev, users: [...prev.users, result.data]}))
      return { feedback: result.statusText, user }
    })
  }

  
  const logoutUser = () => {
    return axios.delete("http://localhost:3000/logout")
    .then(result => {
      setData(prev => ({...prev, users: [...prev.users, result.data]}
      ))
    })
  }

  const userProjectDelete = (id) => {

    return axios
      .delete(`http://localhost:3000/user_projects/${id}`)
      .then((response) => {
        
        setData((prev) => {

          const filteredUserProjects = data.userProjects.filter((userProject) => {
            return userProject.id !== id;
          });

         const newData = { ...prev, 
          userProjects: [...filteredUserProjects]};
           return newData
      });
    });
  };


  return { 
    data: data,
    projects: data.projects,
    tickets: data.tickets,
    users: data.users,
    tasks: data.tasks,
    comments: data.comments,
    userTickets: data.userTickets,
    userProjects: data.userProjects,
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
    chartData,
    createProject,
    updateProject,
    deleteProject,
    updateStatus,
    statusUpdate,
    commentCreate,
    isLoading:data.isLoading,
    createUser,
    loginUser,
    commentDelete,
    userProjectCreate,
    userProjectDelete,
    logoutUser,

  }
}
 
