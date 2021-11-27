import { useState, useEffect } from "react";
import FormModal from "./Form/FormModal";
import CreateTask from "./Form/CreateTask";

import Table from "./Table";
import "./TicketPage.scss";
import "./TicketListTable";
import "./HealthStats/HealthStats.scss";

import HealthPriority from "./HealthStats/HealthPriority";
import HealthStatus from "./HealthStats/HealthStatus";
import HealthType from "./HealthStats/HealthType";
import Duration from "./HealthStats/Duration";
import PrimaryButton from "./PrimaryButton";
import ProgressBar from "./ProgressBar";
import { useLocation } from "react-router";

const TicketPage = (props) => {
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);
  const toggleNewTask = () => setIsNewTaskOpen(!isNewTaskOpen);
  const {
    data,
    taskCreate,
    taskUpdate,
    taskDelete,
    TaskBar,
    TimeBar,
    TicketComments,
    TicketDevs,
    TicketTasks,
    LoneTicket,
    getTicketId,
    userTicketCreate,
    userTicketDelete,
    createTicket, 
    updateTicket, 
    deleteTicket,
    updateStatus,
    statusUpdate,
    commentCreate,
    commentDelete,

  } = props;

  const { state } = useLocation();
  const { id } = state;

  const getProjById = (data, id) => {
    let project = [];
   
    let list = data.projects;
   
    list.forEach((proj) => {
      if (proj.id === id) {
        project.push(proj);
      }
    });
  
    return project[0] && project[0].title
  };

  useEffect(() => {getTicketId(null) }, []);

  return (
    <div>
      <h2 className="project-header">Project Name: {getProjById(data, id)}</h2>
      <div className="tickets-upper">
        <div className="Team-box">
          <Table projectId={id} data={data} decider="Team" userTicketCreate={userTicketCreate} createTicket={createTicket} updateTicket={updateTicket} deleteTicket={deleteTicket} />
        </div>

        <div className="Tickets-box">
          <Table
            decider="Ticket"
            getTicketId={getTicketId}
            projectId={id}
            data={data}
            createTicket={createTicket} 
            updateTicket={updateTicket} 
            deleteTicket={deleteTicket}
          />
        </div>
      </div>

      <div className="tickets-lower">
        <div className="top-tick">
          <h4 id="mini" className="mindiv">
            {" "}
            <strong>Ticket Information: {LoneTicket[0] && LoneTicket[0].title}</strong>
          </h4>
          <div className="new-task">
            <PrimaryButton
              onPress={toggleNewTask}
              style={{ backgroundColor: "#4D45B5" }}
              children="+ New Task"
            />
          </div>
        </div>
        <FormModal handleOpen={isNewTaskOpen} onClose={toggleNewTask}>
          <CreateTask
            projectId={id}
            taskCreate={taskCreate}
            onClose={toggleNewTask}
            ticketId={LoneTicket}
          />
        </FormModal>

        <div className="bottom-tick">
          <div className="right-side">
            <div className="Health-box">
              <HealthStatus data={LoneTicket} timeStat={TimeBar} taskStat={TaskBar} updateStatus={updateStatus} statusUpdate={statusUpdate}/>
              <HealthPriority data={LoneTicket} />
              <HealthType data={LoneTicket} />
              <Duration data={LoneTicket} />
            </div>
            <div className="Tasks-box">
              <Table
                decider="Task"
                taskUpdate={taskUpdate}
                taskDelete={taskDelete}
                data={TicketTasks}
                height="130px"
                width="90%"
                mWidth="90%"
              />
            </div>
            <div className="Assignees-box">
              <Table
                decider="Devs"
                data={TicketDevs}
                userTicketDelete={userTicketDelete}
                height="130px"
                width="90%"
                mWidth="90%"
              />
            </div>
          </div>

          <div className="left-side">
            <div className="Progress-Bars_box">
              <ProgressBar
                className="Plan-bar"
                height="30px"
                color="RGB(106, 214, 80)"
                percent={TimeBar}
              />
              <ProgressBar
                className="Actual-bar"
                height="30px"
                color="RGB(214, 168, 80)"
                percent={TaskBar}
              />
            </div>
            <div className="Comments-box">
              <Table
                decider="Comment"
                data={TicketComments}
                commentCreate={commentCreate}
                LoneTicket={LoneTicket}
                commentDelete={commentDelete}
                height="250px"
                width="90%"
                mWidth="95%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
