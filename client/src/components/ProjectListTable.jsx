import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './ProjectList.scss';
import ProgressBar from './ProgressBar';
import MoreOptions from './MoreOptions';
import { IconButton } from '@mui/material';


export default function ProjectListTable(props) {
   const { projects, value} = props
   console.log(projects);
  return (
    <TableContainer style={{ overflow: "hidden", borderTop: "1px solid rgb(179, 174, 174)", borderLeft: "1px solid rgb(179, 174, 174)", borderRight: "1px solid rgb(179, 174, 174)", borderTopLeftRadius: 10, borderTopRightRadius: 10  }} >
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
          {projects.map((row) => (
            <TableRow className="tabledata">
              <TableCell className="projectitle"  onClick={() => console.log('Clicked Project')} component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell onClick={() => console.log('Clicked Project')}>{row.description}</TableCell>
              <TableCell onClick={() => console.log('Clicked Project')}><ProgressBar className="Actual-bar" height="20px"color="RGB(106, 214, 80)" percent="25"/></TableCell>
              <TableCell onClick={() => console.log('Clicked Project')}>{row.status}</TableCell>
              <TableCell onClick={() => console.log('Clicked Project')}>{"aman, matt, lateef"}</TableCell>
              <TableCell onClick={() => console.log('Edit and Adjust Triggered')}><MoreOptions /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
