
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
     listo = props.data && props.data.map((task) => {
      return (
        <TaskListItem
        key={task.id}
        id={task.id}
        title={task.title}
        percentage_complete={task['complete?']}
        taskUpdate={props.taskUpdate}
        taskDelete={props.taskDelete}
        />
      );
    });
  } else if (props.decider === "Team"){

      return (<TeamListTable projectId={props.projectId} data={props.data} userTicketCreate={props.userTicketCreate}/>);

  } else if (props.decider === "Ticket"){

     return (<TicketListTable updateTicket={props.updateTicket} deleteTicket={props.deleteTicket} projectId={props.projectId} getTicketId={props.getTicketId} data={props.data}/>);

 } else if (props.decider == "Comment"){
  listo = props.data.map((comment) => {

   return (
     <CommentListItem
     key={comment.id}
     author={comment.author.first_name + " " + comment.author.last_name}
     message={comment.message}
     />
   );
 });
} else if (props.decider == "Devs"){
  listo = props.data.map((team) => {
   return (
     <TeamListItem
     key={team.id}
     id={team.devId}
     first_name={team.first_name}
     last_name={team.last_name}
     userTicketDelete={props.userTicketDelete}
     />
   );
 });
}
  return <ul>{listo}</ul>;
}
 
export default ListMaker;


