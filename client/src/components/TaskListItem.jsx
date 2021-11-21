import "./ListItem.scss";
import classNames from "classnames";

const TaskListItem = (props) => {

    const { title, percentage_complete } = props;

   const taskClass = classNames("list__item", {
    "list__item--selected": props.selected,
  });

  // const title = "do work"
  // const percentage_complete= "2%"

  return (
    <li
      className={taskClass}
      selected={props.selected}
      onClick={() => console.log('Yo')}
    >
      <div>{props.title}</div>
      <div>{props.percentage_complete}</div>
 
    </li>
  );
}
 
export default TaskListItem;