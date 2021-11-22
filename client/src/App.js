import {useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
import TicketListItem from './components/TicketListItem';
import Navigation from './components/Navigation';
import PrimaryButton from './components/PrimaryButton';
import CreateButton from './components/CreateButton';
import TopNavigation from './components/TopNavigation';
import TicketPage from './components/TicketPage';
import Chart from './components/Chart';
import ProgressBar from './components/ProgressBar';
import TablePaginations from './components/slider/TablePaginations';
import HealthPriority from './components/HealthStats/HealthPriority';
import HealthStatus from './components/HealthStats/HealthStatus';
import HealthType from './components/HealthStats/HealthType';
import Dashboard from './components/Dashboard';




function App() {
  const projectsTest = [{
    title: "Wikimap app",
    description: "hahahahahahahahahahahahahah",
    start_date: "Jul 14, 2021",
    end_date: "Oct 20, 2021",
    percentage_complete: 75,
    status: "on track",
    users_id: 1
  },
  {
    title: "Scheduler app",
    description: "hahahahahahahahahahahahahah",
    start_date: "Jul 20, 2021",
    end_date: "Sept 20, 2021",
    percentage_complete: 75,
    status: "on track",
    users_id: 2
  }, 
  {
    title: "Project tracking app",
    description: "hahahahahahahahahahahahahah",
    start_date: "Aug 19, 2021",
    end_date: "Nov 25, 2021",
    percentage_complete: 50,
    status: "on track",
    users_id: 1
  },
  {
    title: "Project tracking app",
    description: "hahahahahahahahahahahahahah",
    start_date: "Aug 19, 2021",
    end_date: "Nov 25, 2021",
    percentage_complete: 50,
    status: "on track",
    users_id: 1
  },
  {
    title: "Project tracking app",
    description: "hahahahahahahahahahahahahah",
    start_date: "Aug 19, 2021",
    end_date: "Nov 25, 2021",
    percentage_complete: 50,
    status: "on track",
    users_id: 1
  },
  ];
  const [projects, setProjects] = useState([])
  const [tickets, setTickets] = useState([])
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  useEffect(() => {

    const allProjectsUrl = "http://localhost:3000/projects"
    const allTicketsUrl = "http://localhost:3000/tickets"

    const getAllProjects = axios.get(allProjectsUrl)
    const getAllTickets = axios.get(allTicketsUrl)

    Promise.all([getAllProjects, getAllTickets])
      .then((response) => {
        console.log(response[0].data)
        console.log(response[1].data)
        setProjects(prevProjects => ({...prevProjects, projects: response[0].data}))
      })
  }, [])
  
  return (
    <div className="App">
      <Dashboard projects={projectsTest} />
      <Navigation isOpen={isMenuOpen} setMenu={setIsMenuOpen} />
      <TopNavigation isOpen={isMenuOpen} setMenu={setIsMenuOpen} />
      <Chart />
    </div>
  );
}

export default App;
