import List from "./List";
// import { Tasks, Teams, Tickets, Comments, Projects } from "./testdata";

const Header = (props) => {
  const { decider } = props;

  if (props.decider == "Task") {
    return (
      <thead>
        <tr>
          <th>Title</th>
          <th>% Complete</th>
        </tr>
      </thead>
    );
  } else if (props.decider == "Team") {
    return (
      <thead>
        <tr>
          <th>First Name</th>
        </tr>
      </thead>
    );
  } else if (props.decider == "Ticket") {
    return (
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Author</th>
        </tr>
      </thead>
    );
  } else if (props.decider == "Comment") {
    return (
      <thead>
        <tr>
          <th>Author</th>
          <th>Message</th>
        </tr>
      </thead>
    );
  } else if (props.decider == "Project") {
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
};

const Table = (props) => {
  const { decider } = props;

  return (
    <div>
      <div className="projects-box-header">
        <Header decider={decider}/>
      </div>
      <List decider={decider} />
      <div className="projects-box-footer">{/* buttons go here   */}</div>
    </div>
  );
};

export default Table;
