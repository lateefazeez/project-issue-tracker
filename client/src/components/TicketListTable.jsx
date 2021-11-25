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
import { Tasks, Teams, Tickets, Comments} from "./testdata";
import axios from 'axios';
import {useState, useEffect} from 'react';

export default function TicketListTable(props) {

  const { ticketsInfo, selectedId, data, projectId, getTicketId } = props;

  const [selectedTicket, setSelectedTicket] = useState("");
  const [selectedProject, setSelectedProject] = useState("")

  console.log("AMAN DATA", data)
  console.log("AMAN projectID", projectId)

  const getTicketsByProjectID = function(projectId, tickets) {
    const projectTickets = [];
    for (const ticket of tickets) {
      if (ticket.projects_id === projectId) {
        projectTickets.push(ticket);
      }
    }
    return projectTickets;
  }

  const projectUsersRevised = function(projectTickets, users) {
    const revisedTickets = projectTickets.map((ticket) => {
      let resultingData = {...ticket};

      const foundUser = users.find((user) => {
        if (user.id === ticket.users_id) {
          return user.first_name + " " + user.last_name;
        }
      });
      resultingData.author = foundUser || null;
      return resultingData;
    });
    return revisedTickets;
  }


  //   const getTicketAuthor = function(ticket, users) {
  //   for (const user of users) {
  //     if (ticket.users_id === user.id) {
  //       return user.first_name + " " + user.last_name;
  //     }
  //   }
  // }

  const projectTickets =  getTicketsByProjectID(projectId, data.tickets);

  const tickets = projectUsersRevised(projectTickets, data.users);

  return (
    <TableContainer style={{ overflow: "hidden" }} >
      <Table className="projecttable" sx={{ height: 0}} aria-label="simple table">
    
        <TableHead>
          <TableRow className="tabletit">
       
            <TableCell className="tabletitle">Title</TableCell>
            <TableCell className="tabletitle">Description</TableCell>
            <TableCell className="tabletitle">Author</TableCell>
            <TableCell className="tabletitle"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell onClick={() => getTicketId(row.id)} component="th" scope="row">
                {row.title}
              </TableCell>
 
              <TableCell onClick={() => getTicketId(row.id)}>{row.description}</TableCell>
              <TableCell onClick={() => getTicketId(row.id)}>{row.author.first_name + " " + row.author.last_name}</TableCell>
              <TableCell onClick={() => console.log('Clicked Vert')}><MoreVertIcon /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// e.preventDefault();
// e.stopPropagation();
