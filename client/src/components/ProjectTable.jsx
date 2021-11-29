import { useState } from "react";
import ProjectListTable from "./ProjectListTable";
import TablePaginations from "./slider/TablePaginations";
import CreateButton from "./CreateButton";
import './ProjectTable.scss';
import PrimaryButton from "./PrimaryButton";
import FormModal from "./Form/FormModal";
import CreateProject from "./Form/CreateProject";
import { getPercentageComplete } from '../helpers/getAllTicketCategories'

const ProjectTable= (props) => {
  const [isNewProjectOpen, setIsNewProjectOpen] = useState(false);

  const { 
    projects, 
    tickets,
    users,
    createProject, 
    updateProject, 
    deleteProject,
    projectStatus,
    addTeamMember,
    userProjects,
    reload,
    loggedInUser,
    projectUsers,
    userIdFromSession,
    userNameFromSession
  } = props;

  //pagination
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 5))
    setPage(0)
  }

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, projects.length - page * rowsPerPage)

  const percentageComplete = getPercentageComplete(projects)
  const toggleNewProject = () => {
    setIsNewProjectOpen(!isNewProjectOpen);
  }

  const availableUsers = (projectObject) => {
    let usersProject;
    let projectUsers = [];
    if (userProjects) {
      usersProject = userProjects.filter((userProject) => userProject.projects_id === projectObject.id)
    }

    users.forEach(user => {
      usersProject.forEach(avUser => {
        if (user.id === avUser.users_id) {
          projectUsers.push(user.first_name)
        }
      })
    })
    return projectUsers.join(", ")
  }

  
 
  return (
    
    <div className="dash">
      <div className='topdash'>
        <h4 style={{color: "#DEDBDB" }}>Projects</h4>
        {loggedInUser ? <h6 style={{color: "#DEDBDB" }}>Logged In As: {loggedInUser.name}</h6> : <h6 style={{color: "#DEDBDB" }}>Logged In As: {userNameFromSession}</h6>}
      </div>
      <div className="dashbuttons">
          <div className='buttons'>
            <PrimaryButton style={{ backgroundColor: "#393941", border: "0.5px solid #707070", marginRight: "1.2rem"}}>
              Active
            </PrimaryButton>
            <PrimaryButton style={{ backgroundColor: "#393941", border: "0.5px solid #707070"}}>
              Closed
            </PrimaryButton>
          </div>
          <div>
            <CreateButton buttonClick={toggleNewProject}/>
            <FormModal handleOpen={isNewProjectOpen} onClose={toggleNewProject}>
              <CreateProject 
                onClose={toggleNewProject} 
                createProject={createProject} 
                users={users}
                addTeamMember={addTeamMember}
                availableUsers={availableUsers}
                reload={reload}/>
            </FormModal>
          </div>
          
      </div>
      <div className="middledash">
        <ProjectListTable 
          projects={projects}
          tickets={tickets} 
          value={percentageComplete} 
          updateProject={updateProject} 
          deleteProject={deleteProject}
          projectStatus={projectStatus}
          onClose={toggleNewProject}
          users={users} 
          userProjects={userProjects}
          availableUsers={availableUsers}
          reload={reload}
          page={page}
          rowsPerPage={rowsPerPage}
          emptyRows={emptyRows}
          projectUsers={projectUsers}
          loggedInUser={loggedInUser}
          />     
      </div>
      <div className="bottomdash">
      <TablePaginations
      />
      </div>
      
    </div>
  );
}

export default ProjectTable;