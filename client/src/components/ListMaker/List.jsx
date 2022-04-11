import React from "react";
import TaskListItem from "../Tasks/TaskListItem";
import TeamListItem from "../Teams/TeamListItem";
import CommentListItem from "../Comment/CommentListItem";
import TicketListTable from "../Tickets/TicketListTable";
import TeamListTable from "../Teams/TeamListTable";

const ListMaker = (props) => {
  let listo = "";

  if (props.decider === "Task") {
    listo =
      props.data &&
      props.data.map((task) => {
        return (
          <TaskListItem
            key={task.id}
            id={task.id}
            title={task.title}
            percentage_complete={task["complete?"]}
            taskUpdate={props.taskUpdate}
            taskDelete={props.taskDelete}
          />
        );
      });
  } else if (props.decider === "Team") {
    return (
      <TeamListTable
        projectId={props.projectId}
        data={props.data}
        userTicketCreate={props.userTicketCreate}
        userProjectDelete={props.userProjectDelete}
      />
    );
  } else if (props.decider === "Ticket") {
    return (
      <TicketListTable
        updateTicket={props.updateTicket}
        deleteTicket={props.deleteTicket}
        projectId={props.projectId}
        getTicketId={props.getTicketId}
        data={props.data}
        LoneTicket={props.LoneTicket}
      />
    );
  } else if (props.decider === "Comment") {
    listo = props.data.map((comment) => {
      return (
        <CommentListItem
          key={comment.id}
          id={comment.id}
          author={comment.author.first_name + " " + comment.author.last_name}
          message={comment.message}
          commentDelete={props.commentDelete}
        />
      );
    });
  } else if (props.decider === "Devs") {
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
};

export default ListMaker;
