import "./ListItem.scss";
import classNames from "classnames";

const TeamListItem = (props) => {

    const { first_name, last_name, Email } = props;

  const teamClass = classNames("list__item", {
    "list__item--selected": props.selected,
  });

  // const first_name = "Barney"
  // const last_name= "Rubble"
  // const email= "Brub@gmail.com"

  return (
    <li
      className={teamClass}
      selected={props.selected}
      onClick={() => console.log('Yo')}
    >
      <div>{props.first_name}</div>
      <div>{props.last_name}</div>
      <div>{props.email}</div>
 
    </li>
  );
}
 
export default TeamListItem;
