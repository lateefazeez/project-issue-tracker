import "./ListItem.scss";
import classNames from "classnames";
import Switch from '@mui/material/Switch';
import { useState } from "react";
import { getListItemSecondaryActionClassesUtilityClass } from "@mui/material";
import Box from '@mui/material/Box';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const TeamListItem = (props) => {

   const { first_name, last_name } = props;

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
      <MoreVertIcon className="teamtiny" />
      </div>
    </li>
  );
}
 
export default TeamListItem;