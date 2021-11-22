import "./ListItem.scss";
import classNames from "classnames";
import { Fragment } from "react";
import ProgressBar from "./ProgressBar";

const ProjectListItem = (props) => {
  //const { title, description, status, percentage_complete } = props;

  const projectClass = classNames("list__item", {
    "list__item--selected": props.selected,
  });
 
  // const title= "Project Issue Tracker"
  // const description= "Finals Project for LHL"
  // const status= "AT RISK"
  // const percentage_complete= "99%"

  return (
    <li
      className={projectClass}
      selected={props.selected}
      onClick={() => console.log('Yo')}
    >
      <div>{props.title}</div>
      <div>{props.description}</div>
      <div className ="Progress-Bar_box">
        <ProgressBar className="Plan-bar" height="5px" color="RGB(106, 214, 80)" percent="45"/>
      </div>
      <div>{props.status}</div>
      <div>{props.percentage_complete}</div>
    </li>
  
  );
}
 
export default ProjectListItem;