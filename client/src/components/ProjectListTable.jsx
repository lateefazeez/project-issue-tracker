import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './ProjectList.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './ProjectList.scss';
import ProgressBar from './ProgressBar';


export default function ProjectListTable(props) {
   const { projects, value} = props
   console.log(projects);
  return (
    <TableContainer style={{ overflow: "hidden" }} >
      <Table className="projecttable" sx={{ height: 250}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tabletitle">Title</TableCell>
            <TableCell className="tabletitle">Description</TableCell>
            <TableCell className="tabletitle">Progress</TableCell>
            <TableCell className="tabletitle">Status</TableCell>
            <TableCell className="tabletitle">Contributors</TableCell>
            <TableCell className="tabletitle"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className="projectitle"  onClick={() => console.log('Clicked Project')} component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell onClick={() => console.log('Clicked Project')}>{row.description}</TableCell>
              <TableCell onClick={() => console.log('Clicked Project')}><ProgressBar className="Actual-bar" height="20px"color="RGB(106, 214, 80)" percent="25"/></TableCell>
              <TableCell onClick={() => console.log('Clicked Project')}>{row.status}</TableCell>
              <TableCell onClick={() => console.log('Clicked Project')}>{"aman, matt, lateef"}</TableCell>
              <TableCell onClick={() => console.log('Clicked Project')}><MoreVertIcon /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
