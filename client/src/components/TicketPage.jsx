import Table from "./Table";
import './TicketPage.scss';
import { Fragment } from "react";
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
          <div className="mindiv"> Ticket Information</div>
        </div>

        <div className="bottom-tick">
            <div className="right-side">
              <div className="Health-box"></div>
              <div className="Tasks-box"><Table decider ="Task"/></div>
              <div className="Assignees-box"></div>
            </div>      

            <div className="left-side">
              <div className ="Progress-Bars_box"></div>
              <div className="Comments-box"><Table decider ="Comment"/></div>
            </div>
        </div>

      </div>
      
    </div>
   );
}
 
export default TicketPage;