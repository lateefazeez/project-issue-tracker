import { useState } from 'react'
import FormModal from "./Form/FormModal";
import CreateTask from "./Form/CreateTask";
import axios from 'axios';

import Table from "./Table";
import './TicketPage.scss';
import './TicketListTable';
import './HealthStats/HealthStats.scss';

import HealthPriority from "./HealthStats/HealthPriority";
import HealthStatus from "./HealthStats/HealthStatus";
import HealthType from "./HealthStats/HealthType";
import Duration from "./HealthStats/Duration";
import PrimaryButton from "./PrimaryButton";
import ProgressBar from "./ProgressBar";



import { TaskProgressCalulator, TicketProgressCalulator } from "../helpers/barChartHelpers";
import { getTicketById, getTasksByTicketId, getDevsByTicketId, getCommentsByTicketId } from "../helpers/ticketPageHelpers";
import { useLocation } from 'react-router';


const TicketPage = (props) => {
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);
  const toggleNewTask = () => setIsNewTaskOpen(!isNewTaskOpen);
  const { data, createTicket, updateTicket, deleteTicket } = props;
  const { state } = useLocation()
  const { id } = state;
  


  const [LoneTicket, setLoneTicket] = useState([]);
  const [TicketTasks, setTicketTasks] = useState([]);
  const [TicketDevs, setTicketDevs] = useState([]);
  const [TicketComments, setTicketComments] = useState([]);
  const [TimeBar, setTimeBar] = useState(0);
  const [TaskBar, setTaskBar] = useState(0);

  const getTicketId = (id) => {

    setLoneTicket(getTicketById(data, id))
    setTicketTasks(getTasksByTicketId(data, id))
    setTicketDevs(getDevsByTicketId(data, id))
    setTicketComments(getCommentsByTicketId(data, id))
    setTimeBar(TicketProgressCalulator(getTicketById(data, id)))
    setTaskBar((TaskProgressCalulator(getTasksByTicketId(data, id))))

  };
  

  return ( 
    <div>
      
      <div className="tickets-upper">
      <div className="Team-box">
      <Table projectId={id} createTicket={createTicket} updateTicket={updateTicket} deleteTicket={deleteTicket}  data={data} decider ="Team"/>
      </div>

       <div className="Tickets-box">
      <Table decider ="Ticket" createTicket={createTicket} updateTicket={updateTicket} deleteTicket={deleteTicket} getTicketId={getTicketId} projectId={id} data={data}/>
      </div>
      </div>

      <div className="tickets-lower">
        
        <div className="top-tick">
          <h4 id="mini" className="mindiv"> <strong>Ticket Information</strong></h4>
          <div className="new-task"><PrimaryButton onPress={toggleNewTask} style={{backgroundColor: "#4D45B5"}} children = "+ New Task"/></div>
        </div>
        <FormModal handleOpen={isNewTaskOpen} onClose={toggleNewTask}>
          <CreateTask />
        </FormModal>

        <div className="bottom-tick">
            <div className="right-side">
              <div className="Health-box">
                <HealthStatus data={LoneTicket}/>
                <HealthPriority data={LoneTicket}/>
                <HealthType data={LoneTicket}/>
                <Duration data={LoneTicket}/>

              </div>
              <div className="Tasks-box"><Table decider="Task" data={TicketTasks} height='130px' width='90%' mWidth='90%'/></div>
              <div className="Assignees-box"><Table decider="Devs" data={TicketDevs} height='130px' width='90%' mWidth='90%'/></div>
            </div>      

            <div className="left-side">
                <div className ="Progress-Bars_box">
                  <ProgressBar className="Plan-bar" height="30px" color="RGB(106, 214, 80)" percent={TimeBar}/>
                  <ProgressBar className="Actual-bar" height="30px"color="RGB(214, 168, 80)" percent={TaskBar}/>
                </div>
              <div className="Comments-box"><Table decider="Comment" data={TicketComments} height='250px' width='90%' mWidth='95%'/></div>
            </div>
        </div>

      </div>
      
    </div>
   );
}
 
export default TicketPage;