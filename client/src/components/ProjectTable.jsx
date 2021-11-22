import { Pagination } from "@mui/material";
import ProjectListTable from "./ProjectListTable";
import TablePaginations from "./slider/TablePaginations";
import CreateButton from "./CreateButton";
import './ProjectTable.scss';

const ProjectTable= (props) => {
  const {projects} = props;
  return (
    <div className="dash">
      <div className='topdash'>
        <h2 style={{color: "white" }}>Projects</h2>
      </div>
      <div className="dashbuttons">
          <div className='buttons'>
          <h5 style={{color: "white" }}>Active | </h5>
          <h5 style={{color: "white" }}>Closed</h5>
          </div>
          <CreateButton />
      </div>
      <div className="middledash">
        <ProjectListTable projects={projects} />
      </div>
      <div className="bottomdash">
        <TablePaginations />
      </div>
    </div>
  );
}

export default ProjectTable;