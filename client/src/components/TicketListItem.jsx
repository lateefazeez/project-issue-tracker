import "./ListItem.scss";
import classNames from "classnames";

const TicketListItem = (props) => {

  // const { title, status, start_date, end_date, duration, percentage_complete, author } = props;

  const ticketClass = classNames("list__item", {
    "list__item--selected": props.selected 
  });

  const title = "Setup ticket list item"
  const description= "Setup ticket list item in storybook and front end"
  const author= "Barney Rubble"

  return (
    <li
      className={ticketClass}
      selected={props.selected}
      onClick={() => console.log('Yo')}
    >
      <div>{title}</div>
      <div>{description}</div>
      <div>{author}</div>
 
    </li>
  );
}
 
export default TicketListItem;


// Ticket = {
//   start_date: "May 4, 2020",
//   end_date: "September 18, 2020",
//   duration: 137,
//   title: "Setup ticket list item",
//   description: "Setup ticket list item in storybook and front end",
//   status: "At Risk",
//   percentage_complete: "65%",
//   //author: "Barney Rubble",
//   project_id: 1,
//   user_id: 1
// }



