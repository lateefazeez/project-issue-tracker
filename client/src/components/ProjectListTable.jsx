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
import { useNavigate } from "react-router-dom";
import MoreOptions from './MoreOptions';
import { IconButton } from '@mui/material';



export default function ProjectListTable(props) {
  

  const { projects, value} = props
  let navigate = useNavigate()
  return (
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
          {projects.map((row) => (
            <TableRow key={row.id} className="tabledata">
              <TableCell className="projectitle"  onClick={() => navigate("/tickets")} component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell onClick={() => navigate("/tickets")}>{row.description}</TableCell>
              <TableCell onClick={() => navigate("/tickets")}><ProgressBar className="Actual-bar" height="20px"color="RGB(106, 214, 80)" percent={row.percentage_complete}/></TableCell>
              <TableCell onClick={() => navigate("/tickets")}>{row.status}</TableCell>
              <TableCell onClick={() => navigate("/tickets")}>{"aman, matt, lateef"}</TableCell>
              <TableCell onClick={() => console.log("icon clicked")}><MoreVertIcon /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
