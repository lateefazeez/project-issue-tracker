import { useState, useEffect, Fragment } from 'react'
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './ProjectList.scss';
import ProgressBar from './ProgressBar';
import { useNavigate } from "react-router-dom";
import { DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle } from "reactstrap";
import FormModal from './Form/FormModal';
import UpdateProject from './Form/UpdateProject'



export default function ProjectListTable(props) {
  const [selectedProjectId, setSelectedProjectId] = useState(false)
  const [isEditProjectOpen, setIsEditProjectOpen] = useState(false);
  const [selectedProjectData, setSelectedProjectData] = useState([]);
  const [selectedProjectTeam, setSelectedProjectTeam] = useState([]);

  useEffect(() => {

    const singleProjectURL = `http://localhost:3000/projects/${selectedProjectId}`
    const getSingleProject = axios.get(singleProjectURL)

    Promise.all([getSingleProject])
      .then((response) => {
        console.log("PROJECT DATA: ", response[0].data)
        setSelectedProjectData(response[0].data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [selectedProjectId])
  

  const { projects, value} = props
  let navigate = useNavigate()

  const setProjectId = (e) => setSelectedProjectId(e.target.id)
  const toggleEditProject = () => setIsEditProjectOpen(!isEditProjectOpen);
  const deleteProject = (id) => console.log(id)
  const resetProjectId = () => setSelectedProjectId(null);




  return (
    <Fragment>
    <TableContainer style={{ overflow: "hidden", borderTop: "0.2px solid rgb(112, 112, 112)", borderLeft: "0.2px solid rgb(112, 112, 112)", borderRight: "0.2px solid rgb(112, 112, 112)", borderTopLeftRadius: 10, borderTopRightRadius: 10  }} >
      <Table className="projecttable" sx={{ height: 250}} aria-label="simple table">
        <TableHead>
          <TableRow className="tabletitle">
            <TableCell><strong>Title</strong></TableCell>
            <TableCell><strong>Description</strong></TableCell>
            <TableCell><strong>Progress</strong></TableCell>
            <TableCell><strong>Status</strong></TableCell>
            <TableCell><strong>Contributors</strong></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id} className="tabledata" id={project.id}>
              <TableCell className="projectitle"  onClick={() => navigate("/tickets", { state: { id: project.id} })} component="th" scope="project">
                {project.title}
              </TableCell>
              <TableCell onClick={() => navigate("/tickets", { state: { id: project.id} })} >{project.description}</TableCell>
              <TableCell onClick={() => navigate("/tickets", { state: { id: project.id} })} ><ProgressBar className="Actual-bar" height="20px"color="RGB(106, 214, 80)" percent={project.percentage_complete}/></TableCell>
              <TableCell onClick={() => navigate("/tickets", { state: { id: project.id} })} >{project.status}</TableCell>
              <TableCell onClick={() => navigate("/tickets", { state: { id: project.id} })} >{"aman, matt, lateef"}</TableCell>
              <TableCell>
                <UncontrolledDropdown onClick={(e) => setProjectId(e)}>
                  <DropdownToggle
                    className="btn-icon-only text-light"
                    role=""
                    size="sm"
                    color="#585858"
                    backgroundColor="#585858"
                    id={project.id}
                  >
                    <MoreVertIcon className="more-options" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-arrow" end>
                    <DropdownItem id={project.id} onClick={toggleEditProject} >
                      Edit Project
                    </DropdownItem>
                    <DropdownItem onClick={() => { deleteProject(project.id)}}>
                      Delete Project
                    </DropdownItem>
                  </DropdownMenu>     
                </UncontrolledDropdown>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <FormModal handleOpen={isEditProjectOpen} onClose={toggleEditProject}>
      { selectedProjectData && <UpdateProject
        onClose={toggleEditProject} 
        projects={projects} 
        resetProjectId={resetProjectId} 
        projectData={selectedProjectData}
        projectTeam={selectedProjectTeam}
        // allUsers={allUsers} 
        />}
    </FormModal>
    </Fragment>
  );
}
