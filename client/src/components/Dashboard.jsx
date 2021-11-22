import { Fragment } from "react";
import ProjectListTable from "./ProjectListTable";
import TablePaginations from "./slider/TablePaginations";
import CreateButton from "./CreateButton";
import './Dashboard.scss';

const Dashboard = (props) => {
  const {projects} = props;
  return (
    <Fragment className="dash">
      <div className="middledash">
        <ProjectListTable projects={projects} />
      </div>
      <div className="bottomdash">
        <TablePaginations />
      </div>
    </Fragment>
  );
}

export default Dashboard;