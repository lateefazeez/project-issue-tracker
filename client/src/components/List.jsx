
import React, { useState } from "react";
import TaskListItem from "./TaskListItem";
import TeamListItem from "./TeamListItem";
import CommentListItem from "./CommentListItem";
import TicketListTable from "./TicketListTable";
import TeamListTable from "./TeamListTable";

import { Tasks, Comments, Teams} from "./testdata"


const ListMaker = (props) => {

  let listo = "";

  if (props.decider == "Task") {
     listo = Tasks.map((task) => {
      return (
        <TaskListItem
        key={task.id}
        title={task.title}
        percentage_complete={task.percentage_complete}
        />
      );
    });
  } else if (props.decider == "Team"){

      return (<TeamListTable/>);

  } else if (props.decider == "Ticket"){

     return (<TicketListTable/>);

 } else if (props.decider == "Comment"){
  listo = Comments.map((comment) => {
   return (
     <CommentListItem
     key={comment.id}
     author={comment.author}
     message={comment.message}
     />
   );
 });
} else if (props.decider == "Devs"){
  listo = Teams.map((team) => {
   return (
     <TeamListItem
     key={team.id}
     first_name={team.first_name}
     last_name={team.last_name}
     />
   );
 });
}
  return <ul>{listo}</ul>;
}
 
export default ListMaker;


