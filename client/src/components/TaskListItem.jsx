import "./ListItem.scss";
import classNames from "classnames";
import Switch from '@mui/material/Switch';
import { useState, useEffect, useCallback } from "react";
import { getListItemSecondaryActionClassesUtilityClass } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle } from "reactstrap";

const TaskListItem = (props) => {

   const { id, title, percentage_complete, taskUpdate, taskDelete } = props;

   const taskClass = classNames("list__item", {
    "list__item--selected": props.selected,
  });

  const [swtch, setSwtch] = useState(percentage_complete)

  useEffect( () => console.log(swtch))

  const handleChange = useCallback(async () => {
    
    setSwtch(swtch=>!swtch)
    const response = await taskUpdate(id, !swtch)

  }, [swtch]) 


  return (
    <li
      id="tasktile"
      className={taskClass}
      selected={props.selected}
      onClick={() => handleChange()}
    >
      <div className="TkPost">
      <div>{title}</div>
      <div>{percentage_complete}</div>
        <div className="TkPre">
          <div>
          <Switch 
          sx={{margin: '-12px'}}checked={swtch} color="primary"/>
          </div>
          <UncontrolledDropdown onClick={(e) => e.stopPropagation()}>
                  <DropdownToggle
                    className="btn-icon-only text-light"
                    role=""
                    size="sm"
                    color="#585858"
                    backgroundColor="#585858"
                    id={"hi"}
                  >
                    <MoreVertIcon className="tktiny" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-arrow">
                    <DropdownItem onClick={() => {taskDelete(id)}}>
                      Delete Task
                    </DropdownItem>
                  </DropdownMenu>     
                </UncontrolledDropdown>
          </div>
        </div>
    </li>
  );
}
 
export default TaskListItem;