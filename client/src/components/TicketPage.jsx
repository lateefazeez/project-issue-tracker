import Table from "./Table";
import './TicketPage.scss';
import { Fragment } from "react";
import ProgressBar from "./ProgressBar";
import PrimaryButton from "./PrimaryButton";

const TicketPage = (props) => {

  return ( 
    <div>
      <div className="top-button"><PrimaryButton label = "+ New Ticket"/></div>

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
          <div className="mindiv"> <strong>Ticket Information</strong></div>
        </div>

        <div className="bottom-tick">
            <div className="right-side">
              <div className="Health-box"></div>
              <div className="Tasks-box"><Table decider ="Task"/></div>
              <div className="Assignees-box"></div>
            </div>      

            <div className="left-side">
                <div className ="Progress-Bars_box">
                  <ProgressBar className="Plan-bar" height="20px" color="RGB(106, 214, 80)" percent="70"/>
                  <ProgressBar className="Actual-bar" height="20px"color="RGB(214, 168, 80)" percent="25"/>
                </div>
              <div className="Comments-box"><Table decider ="Comment"/></div>
            </div>
        </div>

      </div>
      
    </div>
   );
}
 
export default TicketPage;