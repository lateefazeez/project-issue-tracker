import "./ListItem.scss";
import classNames from "classnames";
import Switch from '@mui/material/Switch';
import { useState } from "react";
import { getListItemSecondaryActionClassesUtilityClass } from "@mui/material";
import Box from '@mui/material/Box';

const TaskListItem = (props) => {

   const { title, percentage_complete } = props;

   const taskClass = classNames("list__item", {
    "list__item--selected": props.selected,
  });

  const [swtch, setSwtch] = useState(percentage_complete)

  const handleChange = () => {
    swtch !== false ? setSwtch(false) : setSwtch(true)
 }

  return (
    <li
      id="tasktile"
      className={taskClass}
      selected={props.selected}
      onClick={() => console.log({swtch})}
    >
      <div>{title}</div>
      <div>{percentage_complete}</div>
      <div>
         <Switch 
         sx={{margin: '-12px'}}{...percentage_complete} onChange={handleChange} checked={swtch} color="primary"/>
        
        </div>
    </li>
  );
}
 
export default TaskListItem;