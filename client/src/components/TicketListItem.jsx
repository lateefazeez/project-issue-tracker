import "./ListItem.scss";
import classNames from "classnames";

const TicketListItem = (props) => {

  // const { title, status, start_date, end_date, duration, percentage_complete, author } = props;

  const ticketClass = classNames("list__item", {
    "list__item--selected": props.selected 
  });

  // const title = "Setup ticket list item"
  // const description= "Setup ticket list item in storybook and front end"
  // const author= "Barney Rubble"

  return (
    <li
      className={ticketClass}
      selected={props.selected}
      onClick={() => console.log('Yo')}
    >
      <div>{props.title}</div>
      <div>{props.description}</div>
      <div>{props.author}</div>
 
    </li>
  );
}
 
export default TicketListItem;






