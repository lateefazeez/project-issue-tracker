
import React, { useState } from "react";
import TaskListItem from "./TaskListItem";
import TeamListItem from "./TeamListItem";
import TicketListItem from "./TicketListItem";
import CommentListItem from "./CommentListItem";
import ProjectListItem from "./ProjectListItem";
import { Tasks, Teams, Tickets, Comments, Projects} from "./testdata"

const ListMaker = (props) => {

  let list = "";

  if (props.decider == "Task") {
     list = Tasks.map((task) => {
      return (
        <TaskListItem
        key={task.id}
        title={task.title}
        percentage_complete={task.percentage_complete}
        />
      );
    });
  } else if (props.decider == "Team"){
     list = Teams.map((team) => {
      return (
        <TeamListItem
        key={team.id}
        first_name={team.first_name}
        last_name={team.last_name}
        />
      );
    });
  } else if (props.decider == "Ticket"){
    list = Tickets.map((ticket) => {
     return (
       <TicketListItem
       key={ticket.id}
       title={ticket.title}
       description={ticket.description}
       author={ticket.author}
       />
     );
   });
 } else if (props.decider == "Comment"){
  list = Comments.map((comment) => {
   return (
     <CommentListItem
     key={comment.id}
     author={comment.author}
     message={comment.message}
     />
   );
 });
} else if (props.decider == "Project"){

  list = Projects.map((project) => {
   return (
     <ProjectListItem
     key={project.id}
     title={project.title}
     description={project.description}
     status={project.status}
     percentage_complete={project.percentage_complete}
     />
   );
 });
}

  return <ul>{list}</ul>;
}
 
export default ListMaker;


