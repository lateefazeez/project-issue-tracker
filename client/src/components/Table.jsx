import { Fragment, useState } from "react";
import ListMaker from "./List";
import TablePaginations from "./slider/TablePaginations";
import PrimaryButton from "./PrimaryButton";
import CommentEntry from "./CommentEntry";
import FormModal from "./Form/FormModal";
import CreateTicket from "./Form/CreateTicket";
import AddTeamMember from "./Form/AddTeamMember";

import Box from "@mui/material/Box";
import List from "@mui/material/List";

const Table = (props) => {
  const {
    data,
    projectId,
    decider,
    height,
    width,
    mWidth,
    getTicketId,
    taskUpdate,
    taskDelete,
    userTicketCreate,
    userTicketDelete,
    createTicket,
    updateTicket,
    deleteTicket,
    commentCreate,
    commentDelete,
    LoneTicket,
    availableUsers,
    userProjectCreate,
    userProjectDelete,
  } = props;

  return (
    <div>
      <div className="projects-box-header" id={props.decider + "-top"}>
        <Header
          projectId={projectId}
          createTicket={createTicket}
          decider={decider}
          availableUsers={availableUsers}
          userProjectCreate={userProjectCreate}
        />
      </div>
      <AddList
        userTicketDelete={userTicketDelete}
        userTicketCreate={userTicketCreate}
        taskUpdate={taskUpdate}
        taskDelete={taskDelete}
        projectId={projectId}
        data={data}
        decider={decider}
        getTicketId={getTicketId}
        height={height}
        width={width}
        mWidth={mWidth}
        updateTicket={updateTicket}
        deleteTicket={deleteTicket}
        commentDelete={commentDelete}
        LoneTicket={LoneTicket}
        userProjectDelete={userProjectDelete}
      />
      <div className="projects-box-footer" id={props.decider + "-bottom"}>
        <AddButtons
          decider={decider}
          commentCreate={commentCreate}
          LoneTicket={LoneTicket}
        />
      </div>
    </div>
  );
};

const Header = (props) => {
  const {
    decider,
    projectId,
    createTicket,
    updateTicket,
    deleteTicket,
    availableUsers,
    userProjectCreate,
  } = props;

  const [isNewTicketOpen, setIsNewTicketOpen] = useState(false);
  const [isNewMemberOpen, setIsNewMemberOpen] = useState(false);
  const toggleNewTicket = () => setIsNewTicketOpen(!isNewTicketOpen);
  const toggleNewMember = () => setIsNewMemberOpen(!isNewMemberOpen);

  if (props.decider === "Task") {
    return <h5 class="super-head">Progress</h5>;
  } else if (props.decider === "Team") {
    return (
      <Fragment>
        <div class="tick-div">
          <h4 class="super-head">Team</h4>
          <div className="new-ticket">
            <PrimaryButton
              onPress={toggleNewMember}
              style={{ backgroundColor: "#4D45B5" }}
              children="+ Member"
            />
          </div>
        </div>
        <FormModal handleOpen={isNewMemberOpen} onClose={toggleNewMember}>
          <AddTeamMember
            onClose={toggleNewMember}
            availableUsers={availableUsers}
            userProjectCreate={userProjectCreate}
            projectId={projectId}
          />
        </FormModal>
      </Fragment>
    );
  } else if (props.decider === "Ticket") {
    return (
      <Fragment>
        <div class="tick-div">
          <h4 class="super-head">Tickets</h4>
          <div className="new-ticket">
            <PrimaryButton
              onPress={toggleNewTicket}
              style={{ backgroundColor: "#4D45B5" }}
              children="+ New Ticket"
            />
          </div>
        </div>
        <FormModal handleOpen={isNewTicketOpen} onClose={toggleNewTicket}>
          <CreateTicket
            onClose={toggleNewTicket}
            projectId={projectId}
            createTicket={createTicket}
          />
        </FormModal>
      </Fragment>
    );
  } else if (props.decider === "Comment") {
    return <h4 class="super-head">Comments</h4>;
  } else if (props.decider === "Devs") {
    return <h5 class="super-head">Assigned Devs</h5>;
  }
};

const AddButtons = (props) => {
  const { decider, commentCreate, LoneTicket } = props;

  if (decider === "Ticket" || decider === "Team") {
    return <TablePaginations />;
  } else if (decider === "Comment") {
    return (
      <CommentEntry commentCreate={commentCreate} LoneTicket={LoneTicket} />
    );
  } else {
    return "";
  }
};

const AddList = (props) => {
  const {
    data,
    projectId,
    decider,
    height,
    width,
    mWidth,
    getTicketId,
    taskUpdate,
    taskDelete,
    userTicketCreate,
    userTicketDelete,
    updateTicket,
    deleteTicket,
    commentDelete,
    LoneTicket,
    userProjectDelete,
  } = props;

  if (
    props.decider === "Devs" ||
    props.decider === "Task" ||
    props.decider === "Comment"
  ) {
    return (
      <Box
        sx={{
          width: { width },
          maxWidth: { mWidth },
          bgcolor: "background.paper",
        }}
      >
        <List
          id={props.decider + "superList"}
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            position: "relative",
            overflow: "auto",
            maxHeight: { height },
            "& ul": { padding: 0 },
          }}
          subheader={<li />}
        >
          <ListMaker
            taskUpdate={taskUpdate}
            taskDelete={taskDelete}
            decider={decider}
            getTicketId={getTicketId}
            data={data}
            userTicketDelete={userTicketDelete}
            updateTicket={updateTicket}
            deleteTicket={deleteTicket}
            commentDelete={commentDelete}
            
          />
        </List>
      </Box>
    );
  } else {
    return (
      <ListMaker
        projectId={projectId}
        data={data}
        decider={decider}
        getTicketId={getTicketId}
        userTicketCreate={userTicketCreate}
        updateTicket={updateTicket}
        deleteTicket={deleteTicket}
        LoneTicket={LoneTicket}
        userProjectDelete={userProjectDelete}
      />
    );
  }
};

export default Table;
