import Table from "./Table";
import './TicketPage.scss';
import './TicketListTable';
import './HealthStats/HealthStats.scss';

import HealthPriority from "./HealthStats/HealthPriority";
import HealthStatus from "./HealthStats/HealthStatus";
import HealthType from "./HealthStats/HealthType";
import Duration from "./HealthStats/Duration";

import ProgressBar from "./ProgressBar";

const TicketPage = (props) => {

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
        </div>

        <div className="bottom-tick">
            <div className="right-side">
              <div className="Health-box">
                <HealthStatus/>
                <HealthPriority/>
                <HealthType/>
                <Duration/>

              </div>
              <div className="Tasks-box"><Table decider ="Task" height='150px'/></div>
              <div className="Assignees-box"><Table decider ="Devs" height='150px'/></div>
            </div>      

            <div className="left-side">
                <div className ="Progress-Bars_box">
                  <ProgressBar className="Plan-bar" height="30px" color="RGB(106, 214, 80)" percent="70"/>
                  <ProgressBar className="Actual-bar" height="30px"color="RGB(214, 168, 80)" percent="25"/>
                </div>
              <div className="Comments-box"><Table decider ="Comment" height='260px'/></div>
            </div>
        </div>

      </div>
      
    </div>
   );
}
 
export default TicketPage;