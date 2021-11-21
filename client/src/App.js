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
import FormModal from './components/Form/FormModal';
import { Button } from 'reactstrap'
import CreateProject from './components/Form/CreateProject';

function App() {
  const [projects, setProjects] = useState([])
  const [tickets, setTickets] = useState([])
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNewProjectOpen, setIsNewProjectOpen] = useState(false);

  const toggleNewProject = () => setIsNewProjectOpen(!isNewProjectOpen);

  
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
      <Navigation isOpen={isMenuOpen} setMenu={setIsMenuOpen} />
      <TopNavigation isOpen={isMenuOpen} setMenu={setIsMenuOpen} />
      <TicketPage />
      <Chart />
      <ProgressBar />
      <TablePaginations />
      <FormModal />
      <Button color="primary" onClick={toggleNewProject} size="sm">
        New Project
      </Button>
      <FormModal handleOpen={isNewProjectOpen} onClose={toggleNewProject}>
        <CreateProject />
      </FormModal>
    </div>
  );
}

export default App;
