import { useState, useEffect, Fragment } from 'react'
import FormModal from './Form/FormModal';
import UpdateProject from './Form/UpdateProject'
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




export default function ProjectListTable(props) {
  const [selectedProjectId, setSelectedProjectId] = useState(null)
  const [isEditProjectOpen, setIsEditProjectOpen] = useState(false);
  const [selectedProjectData, setSelectedProjectData] = useState({});
  const [selectedProjectTeam, setSelectedProjectTeam] = useState([]);

  useEffect(() => {

    if (selectedProjectId) {
      const singleProjectURL = `http://localhost:3000/projects/${selectedProjectId}`
      const getSingleProject = axios.get(singleProjectURL)
  
      Promise.all([getSingleProject])
        .then((response) => {
          setSelectedProjectData(response[0].data) 
        })
        .catch((error) => {})
    }

   
  }, [selectedProjectId])
  

  const { 
    projects, 
    tickets,
    updateProject, 
    deleteProject,
    reload
  } = props

  let navigate = useNavigate()

  const resetProjectId = () => setSelectedProjectId(null);

  const setProjectId = (event) => {
    resetProjectId()
    setSelectedProjectId(event.target.id)
  }

  const toggleEditProject = () => {
    setIsEditProjectOpen(!isEditProjectOpen);
  }
  

  const getProjectStatus = (project) => {
    const totalTickets = tickets.length

    let projectStatus;
    let riskCount = 0
    let barColor;
    for (const eachTicket of tickets) {
      if (eachTicket.projects_id == project.id) {
        if (eachTicket.status.toLowerCase() == "at risk") {
          riskCount += 1
        }
      }
    }

    if ((riskCount / totalTickets) > 0.5) {
      projectStatus = "At Risk"
      barColor = "#EF3C3C"
    } else if ((riskCount / totalTickets) == 0.5) {
      projectStatus = "In Progress"
      barColor = "#DD851E"
    } else {
      projectStatus = "On Track"
      barColor = "#6AD650"
    }
    return { projectStatus, barColor }

  }


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
            <TableRow key={project.id} className="tabledata" id={project.id} >
              <TableCell className="projectitle"  onClick={() => navigate("/tickets", { state: { id: project.id} })} component="th" scope="project">
                {project.title}
              </TableCell>
              <TableCell onClick={() => navigate("/tickets", { state: { id: project.id} })} >{project.description}</TableCell>
              <TableCell onClick={() => navigate("/tickets", { state: { id: project.id} })} ><ProgressBar className="Actual-bar" height="20px"color={ getProjectStatus(project).barColor}percent={project.percentage_complete}/></TableCell>
              <TableCell onClick={() => navigate("/tickets", { state: { id: project.id} })} >{ getProjectStatus(project).projectStatus}</TableCell>
              <TableCell onClick={() => navigate("/tickets", { state: { id: project.id} })} >{"aman, matt, lateef"}</TableCell>
              <TableCell>
                <UncontrolledDropdown  >
                  <DropdownToggle
                    className="btn-icon-only text-light"
                    role=""
                    size="sm"
                    color="#585858"
                    backgroundColor="#585858"
                    id={project.id}
                    onClick={(e) => setProjectId(e)}
                  >
                    <MoreVertIcon className="more-options" id={project.id} />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-arrow" end >
                    <DropdownItem id={project.id} onClick={toggleEditProject}>
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
        id={selectedProjectId}
        onClose={toggleEditProject} 
        projects={projects} 
        resetProjectId={resetProjectId} 
        projectData={selectedProjectData}
        projectTeam={selectedProjectTeam}
        updateProject={updateProject}
        reload={reload}
        />}
    </FormModal>
    </Fragment>
  );
}
