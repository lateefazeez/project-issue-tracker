import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './TicketTable.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './TableHeader.scss';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle } from "reactstrap";


export default function TeamListTable(props) {
  

  const { projectId, data, userTicketCreate, userProjectDelete } = props;

  const getUsersByProjectID = (projectId, userProjects, users) => {
    let devs = [];
  
    let list = userProjects;
  
    list.forEach((dev) => {
      if (dev.projects_id === projectId) {
         let userId = dev.users_id
         let userlist = users;
  
         userlist.forEach((person) => {
          if (person.id === userId) {
            const devObj = {devId: dev.id, ...person}
            devs.push(devObj)
          }
    });
  }
  })
  
    return devs
  };

  const [selectedUserProjectId, setSelectedUserProjectId] = useState("");
 
  useEffect(() => {

    const singleUserProjectURL = `http://localhost:3000/user_projects/${setSelectedUserProjectId}`
    const getSingleUserProject = axios.get(singleUserProjectURL)

    Promise.all([getSingleUserProject])
      .then((response) => {
        setSelectedUserProjectId(response[0].data)
        // console.log("UPDATE TICKET RES", response[0].data) 
      })
      .catch((error) => {
        console.error(error)
      })
  }, [selectedUserProjectId])


  const teams = getUsersByProjectID(projectId, data.userProjects, data.users)

  console.log("teams is", teams)
  return (
    <TableContainer style={{ overflow: "hidden" }} >
      <Table className="projecttable" sx={{ height: 0}} aria-label="simple table">
    
        <TableHead>
          <TableRow className="tabletitle">
       
            <TableCell className="tabletitle">Name</TableCell>
            <TableCell className="tabletitle">Surame</TableCell>
            <TableCell className="tabletitle">Email</TableCell>
            <TableCell className="tabletitle"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teams.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell onClick={() => userTicketCreate(row.id)} component="th" scope="row">
                {row.first_name}
              </TableCell>
 
              <TableCell onClick={() => userTicketCreate(row.id)}>{row.last_name}</TableCell>
              <TableCell onClick={() => userTicketCreate(row.id)}>{row.email}</TableCell>
              <TableCell>
              <UncontrolledDropdown >
                  <DropdownToggle
                    className="btn-icon-only text-light"
                    role=""
                    size="sm"
                    color="#585858"
                    backgroundColor="#585858"
                    id={row.devId}
                    onClick={() => setSelectedUserProjectId(row.devId)}
                    
                  >
                    <MoreVertIcon className="more-options" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-arrow" end>
                    <DropdownItem onClick={() => userProjectDelete(row.devId)}>
                      Delete Team Member
                    </DropdownItem>
                  </DropdownMenu>     
                </UncontrolledDropdown>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
