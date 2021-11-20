import "./TicketListItem.scss";
import classNames from "classnames";

const TicketListItem = (props) => {

  // const { title, status, start_date, end_date, duration, percentage_complete } = props;

  const ticketClass = classNames("ticket-list__item", {
    "ticket-list__item--selected": props.selected,
  });

  const title = "Setup ticket list item"
  const status= "At Risk"
  const percentage_complete="65%"

  return (
    <li
      className={ticketClass}
      selected={props.selected}
      //onClick={() => props.setTicket(props.name)}
    >
      <p>{title}</p>
      <p>{status}</p>
      <p>{percentage_complete}</p>
    </li>
  );
}
 
export default TicketListItem;


// Ticket = {
//   start_date: "May 4, 2020",
//   end_date: "September 18, 2020",
//   duration: 137,
//   title: "Setup ticket list item",
//   description: "Setup ticket list item",
//   status: "At Risk",
//   percentage_complete: "65%",
//   //author: "Barney Rubble",
//   project_id: 1,
//   user_id: 1
// }



