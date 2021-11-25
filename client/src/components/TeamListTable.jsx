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
import ProgressBar from './ProgressBar';
import { Tasks, Teams, Tickets, Comments} from "./testdata"

export default function TeamListTable(props) {
  

  const { projectId, data } = props;
  console.log("AMAN TEAMS", data, projectId)

  const getUsersByProjectID = function(projectId, userProjects, users) {
    const projectUsers =[];
    const userIds = [];

    const filteredUserProjects = userProjects.filter((elm) => {
      return elm.projects_id === projectId;
    });

    for (const obj of filteredUserProjects) {
      userIds.push(obj.users_id);
    }

    for (const user of users) {
      if (userIds.includes(Number(user.id))) {
        projectUsers.push(user);
      }
    }
    
    return projectUsers;
  }

  

  const teams = getUsersByProjectID(projectId, data.userProjects, data.users)
  return (
    <TableContainer style={{ overflow: "hidden" }} >
      <Table className="projecttable" sx={{ height: 0}} aria-label="simple table">
    
        <TableHead>
          <TableRow className="tabletit">
       
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
              <TableCell onClick={() => console.log('Clicked Project')} component="th" scope="row">
                {row.first_name}
              </TableCell>
 
              <TableCell onClick={() => console.log('Clicked Project')}>{row.last_name}</TableCell>
              <TableCell onClick={() => console.log('Clicked Project')}>{row.email}</TableCell>
              <TableCell onClick={() => console.log('Clicked Vert')}><MoreVertIcon /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
