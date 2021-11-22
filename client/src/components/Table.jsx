import List from "./List";
import TablePaginations from "./slider/TablePaginations";

// import { Tasks, Teams, Tickets, Comments, Projects } from "./testdata";

const Header = (props) => {
  const { decider } = props;

  if (props.decider === "Task") {
    return (
      <thead>
        <tr>
          <th>PROGRESS</th>
        </tr>
      </thead>
    );
  } else if (props.decider === "Team") {
    return (
      <thead>
        <tr>
          <th>Team</th>
        </tr>
      </thead>
    );
  } else if (props.decider === "Ticket") {
    return (
      <thead>
        <tr>
          <th>Tickets</th>
        </tr>
      </thead>
    );
  } else if (props.decider === "Comment") {
    return (
      <thead>
        <tr>
          <th>Comments</th>
        </tr>
      </thead>
    );
  } else if (props.decider === "Project") {
    return (
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
          <th>% Complete</th>
        </tr>
      </thead>
    );
  }
}


const AddButtons = (props) => {

  const { decider } = props;

   console.log("im props " + props.decider)

  if (props.decider === "Ticket" || props.decider === "Team" || props.decider === "Project"){
    return (
    <TablePaginations/>
    );
  } else {
    return "";
  }
}

const Table = (props) => {
  const { decider } = props;

  return (
    <div>
      <div className="projects-box-header" id={props.decider + "-top"}>
        <Header decider={decider}/>
      </div>
      <List decider={decider}/>
      <div className="projects-box-footer"id={props.decider + "-bottom"}>
            <AddButtons decider={decider}/>
        </div>
    </div>
  );
};

export default Table;
