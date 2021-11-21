
import React, { useState } from "react";
import TaskListItem from "./TaskListItem";
import TeamListItem from "./TeamListItem";
import TicketListItem from "./TicketListItem";
import CommentListItem from "./CommentListItem";
import ProjectListItem from "./ProjectListItem";

const Tasks = [
  {
    id: 1,
    title: "Do work",
    percentage_complete: '20%',
  },
  {
    id: 2,
    title: "Work harder",
    percentage_complete: '50%',
  },
  {
    id: 3,
    title: "die from overwork",
    percentage_complete: '60%',
  },
];

const Teams = [
  {
    id: 1,
    first_name: "Fred",
    flast_name: 'Flintstone',
    email: "fred@gmail.com",
  },
  {
    id: 2,
    first_name: "Barney",
    flast_name: 'Rubble',
    email: "barney@gmail.com",
  },
  {
    id: 3,
    first_name: "Bam-bam",
    flast_name: 'Rubble',
    email: "bam@gmail.com",
  },
];

const Tickets = [
  {
  id: 1,
  title: "Setup ticket list item",
  description: "Setup ticket list item in storybook and front end",
  author: "Barney Rubble",
},
{
  id: 2,
  title: "Setup task list item",
  description: "Setup task list item in storybook and front end",
  author: "Barney Rubble",
},
{
  id: 3,
  title: "Setup project list item",
  description: "Setup project list item in storybook and front end",
  author: "Fred Flinststone",
},
];

const Comments = [
  {
  id: 1,
  author: "Barney Rubble",
  message: "this is a long project",
},
{
  id: 2,
  author: "Barney Rubble",
  message: "this is a hard project",
},
{
  id: 3,
  author: "Fred Flinststone",
  message: "breakin rocks at the quarry",
},
];

const Projects = [
  {
  id: 1,
  title: "Setup ticket list item",
  description: "Setup ticket list item in storybook and front end",
  status: "On Track",
  percentage_complete: "25%",
},
{
  id: 2,
  title: "Setup task list item",
  description: "Setup task list item in storybook and front end",
  status: "At Risk",
  percentage_complete: "50%",
},
{
  id: 3,
  title: "Setup project list item",
  description: "Setup project list item in storybook and front end",
  status: "On Track",
  percentage_complete: "99%",
},
];

const ListMaker = (props) => {

  // const decider = "Project"
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


