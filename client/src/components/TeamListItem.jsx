import "./ListItem.scss";
import classNames from "classnames";
import Switch from '@mui/material/Switch';
import { useState } from "react";
import { getListItemSecondaryActionClassesUtilityClass } from "@mui/material";
import Box from '@mui/material/Box';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle } from "reactstrap";

const TeamListItem = (props) => {

   const { id, first_name, last_name, userTicketDelete } = props;

   const teamClass = classNames("list__item", {
    "list__item--selected": props.selected,
  });

  return (
    <li
      id="teamtile"
      className={teamClass}
      selected={props.selected}
      onClick={() => console.log("yo")}
    >
      <div className="TmPost">
      <div>{first_name} {last_name} </div>
      <UncontrolledDropdown onClick={(e) => e.stopPropagation()}>
                  <DropdownToggle
                    className="btn-icon-only text-light"
                    role=""
                    size="sm"
                    color="#585858"
                    backgroundColor="#585858"
                    id={"hi"}
                  >
                    <MoreVertIcon className="teamtiny" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-arrow" end onClick={(e) => console.log(e)}>
                    <DropdownItem onClick={() => {userTicketDelete(id)}}>
                      Delete Resource
                    </DropdownItem>
                  </DropdownMenu>     
                </UncontrolledDropdown>
      </div>
    </li>
  );
}
 
export default TeamListItem;