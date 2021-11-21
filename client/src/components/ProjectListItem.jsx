import "./ListItem.scss";
import classNames from "classnames";

const ProjectListItem = (props) => {
  //const { title, description, status, percentage_complete } = props;

  const commentClass = classNames("list__item", {
    "list__item--selected": props.selected,
  });
 
  // const title= "Project Issue Tracker"
  // const description= "Finals Project for LHL"
  // const status= "AT RISK"
  // const percentage_complete= "99%"

  return (
    <li
      className={commentClass}
      selected={props.selected}
      onClick={() => console.log('Yo')}
    >
      <div>{props.title}</div>
      <div>{props.description}</div>
      <div>{props.status}</div>
      <div>{props.percentage_complete}</div>
    </li>
  );
}
 
export default ProjectListItem;