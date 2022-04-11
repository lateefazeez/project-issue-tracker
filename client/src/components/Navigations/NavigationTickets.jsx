import * as React from "react";
import "./Navigation.scss";
import TicketPage from "../Tickets/TicketPage";
import PersistentDrawerLeft from "./Navigation2.0";

export default function PersistentDrawerTicket(props) {
  const {
    data,
    taskCreate,
    taskUpdate,
    taskDelete,
    getTicketId,
    userTicketCreate,
    userTicketDelete,
    TaskBar,
    TimeBar,
    TicketComments,
    TicketDevs,
    TicketTasks,
    LoneTicket,
    createTicket,
    updateTicket,
    deleteTicket,
    updateStatus,
    statusUpdate,
    commentCreate,
    commentDelete,
    userProjectCreate,
    userProjectDelete,
    loggedInUser,
    logoutUser,
    setLoggedInUser,
    userIdFromSession,
    userNameFromSession,
  } = props;

  return (
    <PersistentDrawerLeft
      logoutUser={logoutUser}
      loggedInUser={loggedInUser}
      setLoggedInUser={setLoggedInUser}
      userIdFromSession={userIdFromSession}
      userNameFromSession={userNameFromSession}
    >
      <TicketPage
        data={data}
        taskCreate={taskCreate}
        taskUpdate={taskUpdate}
        taskDelete={taskDelete}
        getTicketId={getTicketId}
        userTicketCreate={userTicketCreate}
        userTicketDelete={userTicketDelete}
        TaskBar={TaskBar}
        TimeBar={TimeBar}
        TicketComments={TicketComments}
        TicketDevs={TicketDevs}
        TicketTasks={TicketTasks}
        LoneTicket={LoneTicket}
        createTicket={createTicket}
        updateTicket={updateTicket}
        deleteTicket={deleteTicket}
        updateStatus={updateStatus}
        statusUpdate={statusUpdate}
        commentCreate={commentCreate}
        commentDelete={commentDelete}
        userProjectCreate={userProjectCreate}
        userProjectDelete={userProjectDelete}
        loggedInUser={loggedInUser}
        userIdFromSession={userIdFromSession}
        userNameFromSession={userNameFromSession}
      />
    </PersistentDrawerLeft>
  );
}
