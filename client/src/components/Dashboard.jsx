import { Pagination } from "@mui/material";
import ProjectListTable from "./ProjectListTable";
import TablePaginations from "./slider/TablePaginations";
import CreateButton from "./CreateButton";
import './Dashboard.scss';

const Dashboard = (props) => {
  const {projects} = props;
  return (
    <div className="dash">
      <div className='topdash'>
        <h1 style={{color: "white" }}>Projects</h1>
        <CreateButton />
      </div>
      {/* <div className="history">
          <h3 style={{color: "white" }}>Active</h3>
      </div> */}
      <div className="middledash">
        <ProjectListTable projects={projects} />
      </div>
      <div className="bottomdash">
        <TablePaginations />
      </div>
    </div>
  );
}

export default Dashboard;