import { useState } from 'react'
import FormModal from "./Form/FormModal";
import CreateTask from "./Form/CreateTask"

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

const TicketPage = (props) => {
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);
  const toggleNewTask = () => setIsNewTaskOpen(!isNewTaskOpen);

  return ( 
    <div>
      
      <div className="tickets-upper">
      <div className="Team-box">
      <Table decider ="Team"/>
      </div>

       <div className="Tickets-box">
      <Table decider ="Ticket"/>
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
                <HealthStatus/>
                <HealthPriority/>
                <HealthType/>
                <Duration/>

              </div>
              <div className="Tasks-box"><Table decider ="Task" height='130px' width='90%' mWidth='90%'/></div>
              <div className="Assignees-box"><Table decider ="Devs" height='130px' width='90%' mWidth='90%'/></div>
            </div>      

            <div className="left-side">
                <div className ="Progress-Bars_box">
                  <ProgressBar className="Plan-bar" height="30px" color="RGB(106, 214, 80)" percent="70"/>
                  <ProgressBar className="Actual-bar" height="30px"color="RGB(214, 168, 80)" percent="25"/>
                </div>
              <div className="Comments-box"><Table decider ="Comment" height='250px' width='90%' mWidth='95%'/></div>
            </div>
        </div>

      </div>
      
    </div>
   );
}
 
export default TicketPage;